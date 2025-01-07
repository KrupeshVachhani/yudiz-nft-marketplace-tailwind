import React from "react";
import { cardsData } from "../../constants";
import TrendingCard from "./cards";

const TrendingCollection = () => {
  return (
    <section className="container mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-6">
      {/* Header Section */}
      <header className="mb-8 md:mb-12 text-center lg:text-left">
        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-3 text-white">
          Trending Collection
        </h3>
        <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
          Checkout our weekly updated trending collection.
        </span>
      </header>

      {/* Simple Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {cardsData.map((card, index) => (
          <div 
            key={index} 
            className="w-full max-w-[400px] mx-auto sm:max-w-none"
          >
            <TrendingCard
              mainImage={card.mainImage}
              secondaryImages={card.secondaryImages}
              extraCount={card.extraCount}
              collectionName={card.collectionName}
              userImage={card.userImage}
              userName={card.userName}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCollection;