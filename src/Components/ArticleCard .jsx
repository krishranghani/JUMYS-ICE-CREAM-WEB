import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import assent1 from "../assets/asset1.jpeg";
import assent2 from "../assets/asset2.jpeg";
import assent3 from "../assets/asset3.jpeg";
import assent45 from "../assets/asset45.jpeg";
import assent46 from "../assets/asset46.jpeg";
import assent47 from "../assets/asset47.jpeg";

const ArticleCard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const articles = [
    {
      image: assent1,
      title: "Top Ice Cream Flavors To Sell This Year",
      date: "April 3, 2024",
    },
    {
      image: assent2,
      title: "The Art Of Crafting Gourmet Ice Cream",
      date: "April 2, 2024",
    },
    {
      image: assent3,
      title: "Ice Cream Trends That Drive More Sales",
      date: "March 8, 2024",
    },
    {
      image: assent45,
      title: "Post Format Video Blogs Dessert Recipes ",
      date: "February 8, 2024",
    },
    {
      image: assent46,
      title: "Sustainable Ice Cream Packaging Flavor Trends",
      date: "February 4, 2024",
    },
    {
      image: assent47,
      title: "How To Market Seasonal Ice Cream Flavors",
      date: "December 10, 2023",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + articles.length) % articles.length
    );
  };

  const visibleArticles = articles
    .slice(currentIndex, currentIndex + 3)
    .concat(articles.slice(0, Math.max(0, currentIndex + 3 - articles.length)));

  return (
    <div>
      <div className="text-center mt-5">
        <h2 className="text-[#ff0000] text-3xl font-serif">Our News</h2>
        <h1 className="text-[#000] text-3xl font-serif">Tastiest Updates</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center mt-5">
        <button
          className="bg-[#ffffff] hover:bg-[#ff0000] rounded-full w-10 h-10 ml-2 p-2 shadow text-gray-950 hover:text-gray-100"
          onClick={handlePrev}
        >
          <FaArrowLeft />
        </button>

        <div className="flex flex-col md:flex-row overflow-hidden">
          {visibleArticles.map((article, index) => (
            <div
              key={index}
              className="w-full md:max-w-sm mx-2 bg-[#ffffff] overflow-hidden my-4 md:my-0"
            >
              <div className="overflow-hidden w-[95%] mx-auto">
                <img
                  className="w-full h-60 object-cover"
                  src={article.image}
                  alt={article.title}
                />
              </div>

              <div className="py-4 text-center">
                <div className="text-gray-500 text-sm font-medium">
                  BUSINESS TIPS <span className="text-[#ff0000] mx-2">•</span>
                  <span className="text-[#ff0000] mx-2">{article.date}</span>
                </div>
                <h2 className="text-xl mt-2 font-semibold text-[#000] hover:text-[#ff0000]">
                  {article.title}
                </h2>
              </div>
            </div>
          ))}
        </div>

        <button
          className="bg-[#ffffff] hover:bg-[#ff0000] mr-2 rounded-full w-10 h-10 p-2 shadow text-gray-950 hover:text-gray-100"
          onClick={handleNext}
        >
          <FaArrowRight />
        </button>
      </div>

      <div className="items-center text-center mb-24">
        <button className="ml-10 w-36 h-10 bg-[#ff0000] hover:bg-[#000] text-[#fff] rounded-full duration-700">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ArticleCard;
