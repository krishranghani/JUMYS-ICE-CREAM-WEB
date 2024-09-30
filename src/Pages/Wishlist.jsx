import React from "react";
import backgroundImage from "../assets/asset50.jpeg";
import { FaFacebookF, FaTwitter, FaShareAlt, FaEnvelope } from "react-icons/fa";
import Footer2 from "../Components/Footer2";

const Wishlist = () => {
  return (
    <div className="">
      <div className="relative w-full h-[300px] md:h-[400px]">
        <img
          src={backgroundImage}
          alt="About Us Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex flex-col text-center items-center justify-center text-white mt-20 md:mt-28">
            <h1 className="text-3xl md:text-4xl font-bold text-black">Wishlist</h1>
            <p className="mt-2 text-sm md:text-base">
              <a href="#" className="text-[#000] hover:text-[#ff0000]">
                Home
              </a>{" "}
              <span className="text-black">/</span>
              <span className="text-red-500">Wishlist</span>
            </p>
          </div>
        </div>
      </div>

      {/* Wishlist Section */}
      <div className="flex flex-col md:flex-row my-10 md:my-20 justify-between px-5 space-y-5 md:space-y-0 md:space-x-5">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-base md:text-lg mb-3">There Are No Products On The Wishlist!</p>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Share On:</span>
            <a href="https://www.facebook.com" className="text-blue-700">
              <FaFacebookF size={20} className="md:size-5" />
            </a>
            <a href="https://www.twitter.com" className="text-blue-500">
              <FaTwitter size={20} className="md:size-5" />
            </a>
            <a href="#" className="text-red-500">
              <FaShareAlt size={20} className="md:size-5" />
            </a>
            <a href="mailto:" className="text-red-600">
              <FaEnvelope size={20} className="md:size-5" />
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-2">
          <span className="text-sm">Wishlist Link:</span>
          <input
            type="text"
            value="https://wpbingosite.com/wordpress/jumystore"
            readOnly
            className="border rounded px-2 py-1 w-full md:w-64"
          />
          <button
            onClick={() =>
              navigator.clipboard.writeText(
                "https://wpbingosite.com/wordpress/jumystore"
              )
            }
            className="bg-black text-white rounded px-4 py-1"
          >
            Copy
          </button>
        </div>
      </div>

      <Footer2 />
    </div>
  );
};

export default Wishlist;
