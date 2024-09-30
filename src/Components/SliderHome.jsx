import React from 'react';
import slider1_img from "../assets/asset5.png";
import img_plant from "../assets/asset38.png";
import spin from "../assets/asset4.svg";

const SliderHome = () => {
  return (
    <div>
      <div
        className="w-full h-[600px] sm:h-[700px] md:h-[800px] flex flex-col md:flex-row justify-center items-center gap-4 sm:gap-8 md:gap-11"
        id="slider"
      >
        <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[200px] sm:h-[250px] md:h-[300px] text-center md:text-left">
          <h4 className="text-[0.9rem] sm:text-[1rem] md:text-[1.5rem] font-semibold">SUNDAES AND SMILES</h4>
          <h1 id="Nav-text" className="text-[1.1rem] sm:text-[1.1rem] md:text-[2.1rem] leading-tight">Frosty Delights: Treat Yourself To Creamy</h1>
          <br />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <button className="home-bt-shop">Shop Now</button>
            <button className="home-bt2-shop">See more</button>
          </div>
        </div>

        <div className="w-[300px] sm:w-[400px] md:w-[450px] h-[400px] sm:h-[600px] md:h-[720px] flex justify-center items-center relative">
          <div className="w-24 sm:w-28 md:w-32 h-24 sm:h-28 md:h-32 absolute rounded-e-md text-[20px] sm:text-[22px] md:text-[25px] flex justify-center items-center mt-32 sm:mt-48 md:mt-56 -ml-10 sm:-ml-12 md:-ml-14">
            <img className="spin_of" src={spin} alt="" />
            <h1 id="spin-text">
              Get 30% <br />
              off
            </h1>
          </div>
          <img className="w-[700px] h-[500px] object-contain sm:w-[38] lg:h-[48]" src={slider1_img} alt="not found" />
        </div>

        <div className="w-[200px] sm:w-[250px] md:w-[300px] h-[400px] sm:h-[500px] md:h-[620px] overflow-hidden -mr-24 sm:-mr-32 md:-mr-48 relative">
          <div className="flip-vertical-right" id="good-root"></div>
          {/* <img className="absolute bottom-0 right-0 w-[150px] sm:w-[200px] md:w-[250px]" src={img_plant} alt="not found" /> */}
        </div>
      </div>
    </div>
  );
}

export default SliderHome;
