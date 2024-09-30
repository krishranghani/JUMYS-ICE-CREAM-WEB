import React from "react";
import Top from "../Components/Top";
import backgroundImage from "../assets/asset50.jpeg";
import iceCreamImage1 from '../assets/asset64.jpg';
import iceCreamImage2 from '../assets/asset65.jpg';
import { ArrowRight } from 'lucide-react';
import avtar1 from "../assets/avatar1.jpg";
import avtar2 from "../assets/avatar2.jpg";
import avtar3 from "../assets/avatar3.jpg";
import NumberCounter from "../Components/NumberCounter";
import ArticleCard from "../Components/ArticleCard ";
// import Footer2 from "../Components/Footer2";

function AboutUs() {
  return (
    <div>
      {/* Hero Section */}
      <div className="relative w-full h-[320px] md:h-[420px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center mt-24 md:mt-36">
          <div className="text-center text-white container mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-black">About Us</h1>
            <p className="mt-2">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">About Us</span>
            </p>
          </div>
        </div>
      </div>

      {/* Manufacture 1 */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start my-5 py-10 px-4 sm:px-10 md:px-0 gap-x-10 md:gap-x-14">
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-xl md:text-2xl font-semibold mb-2">Sweet Escape</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Manufacture</h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            Once The Ingredients Have Cooled Enough, It’s Time To Pour Them Into Molds And Freeze In A Brine Bath. After That, The Ice Cream Sticks Are Dried And Packaged In The Freezer In Square Boxes. From Here, This Cool Ice Cream Is Ready To Be Delivered To Visitors...
          </p>
          <button className="bg-[#ff0000] hover:bg-[#000] text-white px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center duration-700">
            View More <span className="ml-2"> <ArrowRight /></span>
          </button>
        </div>
        <div className="w-full md:w-1/2 h-72 md:h-96 overflow-hidden">
          <img src={iceCreamImage1} alt="Ice Cream" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Stat Section Data */}
      <NumberCounter />

      {/* Manufacture 2 */}
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start py-10 gap-x-10 md:gap-x-14 my-5 px-4 sm:px-10 md:px-0">
        <div className="w-full md:w-1/2 h-72 md:h-96 overflow-hidden">
          <img src={iceCreamImage2} alt="Ice Cream" className="w-full h-full object-cover" />
        </div>
        <div className="md:w-1/2">
          <h2 className="text-red-500 text-xl md:text-2xl font-semibold mb-2">Frozen Joy</h2>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">History Begin</h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            On hot summer days like today, in addition to a glass of cool beverage, a glass of ice cream can also help relieve some of the heat. Ice cream is popular not only among children but also loved by many people of many different ages…
          </p>
          <button className="bg-[#ff0000] hover:bg-[#000] text-white px-6 md:px-8 py-2 md:py-3 rounded-full flex items-center duration-700">
            View More <span className="ml-2"> <ArrowRight /></span>
          </button>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto text-center my-10">
        <h2 className="text-[#ff0000] text-2xl md:text-3xl font-serif">Testimonial</h2>
        <h1 className="text-[#000] text-4xl md:text-5xl font-serif mt-2">Ice Cream Shop</h1>
      </div>

      <div className="container  flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-6 mx-auto sm:mx-5">
        {/* 1st Card */}
        <div className="flex flex-col text-center justify-center items-center p-6 bg-[#faf2e7] shadow-md max-w-full sm:max-w-96 h-[300px]">
          <div className="flex justify-center items-center gap-x-4 mb-4">
            <img
              className="w-24 h-24 md:w-28 md:h-28 rounded-full outline outline-white"
              src={avtar1}
              alt="Anana"
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Anana</h3>
              <p className="text-gray-600">Photographer</p>
            </div>
          </div>
          <p className="text-gray-700 font-bold">
            “I Absolutely love this place! The variety of flavors is impressive, and each scoop is packed with deliciousness…”
          </p>
        </div>

        {/* 2nd Card */}
        <div className="flex flex-col text-center justify-center items-center p-6 bg-[#faf2e7] shadow-md max-w-full sm:max-w-96 h-[300px]">
          <div className="flex justify-center items-center gap-x-4 mb-4">
            <img
              className="w-24 h-24 md:w-28 md:h-28 rounded-full outline outline-white"
              src={avtar2}
              alt="Ana Smith"
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Ana Smith</h3>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
          </div>
          <p className="text-gray-700 font-bold">
            “A great company to buy from. Excellent quality products at good value. Delivery is efficient and quick.”
          </p>
        </div>

        {/* 3rd Card */}
        <div className="flex flex-col text-center justify-center items-center p-6 bg-[#faf2e7] shadow-md max-w-full sm:max-w-96 h-[300px]">
          <div className="flex justify-center items-center gap-x-4 mb-4">
            <img
              className="w-24 h-24 md:w-28 md:h-28 rounded-full outline outline-white"
              src={avtar3}
              alt="Linda"
            />
            <div>
              <h3 className="text-lg md:text-xl font-bold">Linda</h3>
              <p className="text-gray-600">Designer</p>
            </div>
          </div>
          <p className="text-gray-700 font-bold">
            “I have never been disappointed, either for myself or as gifts, the pieces are lovely, reasonably priced...”
          </p>
        </div>
      </div>

      {/* Article Section */}
      <ArticleCard />

      {/* Top & Footer Section */}
      <Top />
      {/* <Footer2 /> */}
    </div>
  );
}

export default AboutUs;
