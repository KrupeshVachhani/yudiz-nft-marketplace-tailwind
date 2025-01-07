import { useEffect, useState } from "react";
import CountUp from "react-countup";
import avtImg from "../../assets/Avatar.png";
import nftImg from "../../assets/Image_Placeholder.png";

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: 240, label: "Total sales", suffix: "k+" },
    { number: 100, label: "Auctions", suffix: "k+" },
    { number: 240, label: "Artists", suffix: "k+" },
  ];

  return (
    <section className="container max-w-[1400px] flex flex-col lg:flex-row items-center justify-between font-work gap-3 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-8 bg-[#2B2B2B] text-white mx-auto">
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-lg">
        <div className="text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Discover
            <br /> digital art & <br />
            Collect NFTs
          </h1>
          <p className="text-gray-300 mt-4 text-base sm:text-lg lg:text-xl">
            NFT marketplace UI created with Anima for Figma. Collect, buy and
            sell art from more than 20k NFT artists.
          </p>
        </div>
        <button className="bg-purple-600 hover:bg-purple-700 transition-colors text-white px-6 py-3 rounded-lg w-max mx-auto lg:mx-0">
          Get Started
        </button>
        <div className="flex justify-center lg:justify-start gap-6 mt-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <span className="text-xl font-bold block font-mono">
                {isVisible && (
                  <CountUp
                    start={0}
                    end={stat.number}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </span>
              <span className="text-gray-300">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Right Content */}
      <div className="max-w-sm w-full lg:max-w-md">
        <div className="bg-[#2B2B2B] rounded-lg shadow-lg overflow-hidden">
          <img
            src={nftImg}
            alt="NFT Art"
            className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105 hover:cursor-pointer"
          />
          <div className="p-4 flex flex-col gap-4">
            <h3 className="text-lg font-bold text-white">Space Walking</h3>
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 rounded-full overflow-hidden cursor-pointer">
                <img
                  src={avtImg}
                  alt="User Avatar"
                  className="transition-transform duration-300 hover:scale-105"
                />
              </div>
              <span className="text-gray-300">Animakid</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Index;
