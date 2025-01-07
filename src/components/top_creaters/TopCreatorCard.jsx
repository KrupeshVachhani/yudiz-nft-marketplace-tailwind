import React, { useState } from "react";

const TopCreatorCard = ({ id, name, img, totalSales }) => {
  const [imageStatus, setImageStatus] = useState('loading');

  return (
    <div className="font-work relative bg-[#3b3b3b] rounded-xl shadow-lg px-5 py-7 text-center hover:cursor-pointer transform transition-transform duration-300 hover:rotate-2 hover:scale-105">
      {/* ID Badge */}
      <div className="font-mono font-normal absolute top-3 left-3 bg-[#2b2b2b] text-white text-sm rounded-full h-8 w-8 flex items-center justify-center">
        {id}
      </div>

      {/* Avatar Container */}
      <div className="relative w-24 h-24 mx-auto">
        {/* Placeholder */}
        <div
          className={`absolute inset-0 bg-gray-800 rounded-full flex items-center justify-center transition-opacity duration-300 ${
            imageStatus === 'loaded' ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <svg
            className="w-8 h-8 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Main Image */}
        <img
          src={img}
          alt={`${name}'s avatar`}
          className={`absolute inset-0 w-full h-full rounded-full object-cover transition-opacity duration-300 ${
            imageStatus === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageStatus('loaded')}
        />
      </div>

      {/* Name */}
      <h4 className="mt-4 text-lg font-semibold text-white">{name}</h4>

      {/* Total Sales */}
      <p className="mt-2 text-sm text-white/80">
        Total Sales: <span className="font-normal text-white font-mono">{totalSales} ETH</span>
      </p>
    </div>
  );
};

export default TopCreatorCard;