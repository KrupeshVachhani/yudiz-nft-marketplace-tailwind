import React from 'react';

const TrendingCard = ({ mainImage, secondaryImages, extraCount, collectionName, userImage, userName }) => {
  return (
    <section className="w-full max-w-[400px] mx-auto font-work">
      <div className="w-full flex flex-col gap-2.5">
        {/* Main Image */}
        <img 
          src={mainImage} 
          alt="Main Placeholder" 
          className="w-full rounded-xl object-cover transform transition-all duration-300 ease-in-out hover:-translate-y-[5px] hover:shadow-lg hover:cursor-pointer"
        />
        
        {/* Secondary Images Row */}
        <div className="flex gap-2.5">
          {secondaryImages.slice(0, 2).map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Secondary Placeholder ${index + 1}`}
              className="w-[calc(33.333%-7px)] rounded-xl transform transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:cursor-pointer"
            />
          ))}
          
          {/* Extra Count Placeholder */}
          <div className="w-[calc(33.333%-7px)] font-mono rounded-xl bg-[#A259FF] text-white flex justify-center items-center text-base font-bold transform transition-all duration-300 ease-in-out hover:-translate-y-[3px] hover:cursor-pointer">
            {extraCount}+
          </div>
        </div>
      </div>

      {/* Collection Info */}
      <div className="py-4">
        <h5 className="text-xl font-semibold mb-2 text-white">{collectionName}</h5>
        <div className="flex items-center gap-1.5 text-sm text-white/80">
        <div className="w-6 h-6 rounded-full overflow-hidden cursor-pointer">
          <img 
            src={userImage} 
            alt="User" 
            className="w-6 h-6 rounded-full transform transition-all duration-300 ease-in-out hover:scale-105"
          />
          </div>
          <span>{userName}</span>
        </div>
      </div>
    </section>
  );
};

export default TrendingCard;