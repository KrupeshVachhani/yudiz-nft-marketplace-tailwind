import React from "react";

const TopCreatorCard = ({ id, name, img, totalSales }) => {
  return (
    <div className="font-work relative bg-[#3b3b3b] rounded-xl shadow-lg px-5 py-7 text-center hover:cursor-pointer transform transition-transform duration-300 hover:rotate-2 hover:scale-105">
      {/* ID Badge */}
      <div className="font-mono font-normal absolute top-3 left-3 bg-[#2b2b2b] text-white text-sm rounded-full h-8 w-8 flex items-center justify-center">
        {id}
      </div>

      {/* Avatar */}
      <img
        src={img}
        alt={`${name}'s avatar`}
        className="mx-auto w-24 h-24 rounded-full object-cover"
      />

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
