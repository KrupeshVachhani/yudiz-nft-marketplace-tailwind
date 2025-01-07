import React from "react";
import rocketBtn from "../../assets/RocketLaunch.png";
import { topCreators } from "../../constants";
import TopCreatorCard from "./TopCreatorCard";

const Index = () => {
  return (
    <div className="container font-work mx-auto max-w-[1400px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 mt-10">
      {/* Header */}
      <header className="mb-8 md:mb-12 text-center md:text-left md:flex justify-between items-center">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-2 md:mb-3 text-white">
            Top Creators
          </h3>
          <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
            Checkout Top Rated Creators on the NFT Marketplace
          </span>
        </div>

        <div className="group">
          <button className="mx-auto my-5 md:mx-0 border rounded-2xl border-[#a259ff] group-hover:border-[#7e22ce] flex justify-center items-center px-5 py-4">
            <img src={rocketBtn} alt="Rocket Icon" className="h-6 w-6" />
            <span className="text-white ml-3 font-semibold">
              View Rankings
            </span>
          </button>
        </div>
      </header>

      {/* Top Creators Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
        {topCreators.map((creator) => (
          <TopCreatorCard
            key={creator.id}
            id={creator.id}
            name={creator.name}
            img={creator.img}
            totalSales={creator.totalSales}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
