import React from "react";
import img1 from "../assets/asset36.png";
import img2 from "../assets/asset37.png";
import img3 from "../assets/asset59.svg";
import img4 from "../assets/asset60.svg";
import img5 from "../assets/asset61.svg";
import img6 from "../assets/asset40.png";
import img7 from "../assets/asset38.png";
import img8 from "../assets/asset39.png";
import { FaArrowRight } from "react-icons/fa";

const HomeSecondSlider = () => {
  return (
    <>
      <div
        className="w-full overflow-hidden h-auto md:h-[800px] flex flex-col md:flex-row justify-between items-center p-4 md:p-0"
        id="Home-slider-main-com"
      >
        <div className="h-auto md:h-full w-full md:w-72 flex flex-col items-center md:items-start pt-10 md:pt-52">
          <img src={img1} alt="not found" className="md:-ml-5" />
          <img src={img2} alt="not found" className="mt-4 md:mt-0" />
        </div>

        <div className="h-auto md:h-full w-full md:w-auto pl-0 md:pl-9 flex flex-col items-center md:items-start justify-center mt-8 md:mt-0">
          <h1 className="slider-font text-center md:text-left">Make Every Day a Sweet Day</h1>
          <br />
          <p className="text-gray-500 text-center md:text-left">
            But incorporating liquor into ice cream seems like nothing when you
            consider how inventive…
          </p>{" "}
          <br />
          <div
            className="w-full h-auto flex items-center font-semibold mb-3 "
            id="texed"
          >
            <img src={img3} alt="not found" />{" "}
            <span className="ml-3 md:ml-7">Guaranteed frozen delivery</span>
          </div>
          <div
            className="w-full h-auto flex items-center font-semibold mb-3 "
            id="texed"
          >
            <img src={img4} alt="not found" />{" "}
            <span className="ml-3 md:ml-7">Guaranteed frozen delivery</span>
          </div>
          <div
            className="w-full h-auto flex items-center font-semibold "
            id="texed"
          >
            <img src={img5} alt="not found" />{" "}
            <span className="ml-3 md:ml-7">Guaranteed frozen delivery</span>
          </div>
          <br />
          <button
            className="w-36 h-10 bg-[#fff] hover:bg-[#ff0000] flex items-center justify-center rounded-full mt-4 md:mt-0"
            id="home-slider-button"
          >
            {" "}
            View More <FaArrowRight className="ml-2" />
          </button>
        </div>

        <div className="h-auto md:h-full w-full md:w-1/2 flex items-center justify-center mt-8 md:mt-0">
          <img src={img6} alt="not found" className="w-full h-auto object-contain" />
        </div>

        <div className="h-auto md:h-full w-full md:w-96 flex flex-col items-center md:items-end justify-center mt-8 md:mt-0">
          <img src={img7} alt="not found" className="md:-mr-24 mb-4 md:mb-0" />
          <img src={img8} alt="not found" className="md:-mr-24" />
        </div>
      </div>
    </>
  );
};

export default HomeSecondSlider;
