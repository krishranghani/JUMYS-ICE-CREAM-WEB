import React, { useState } from "react";
import Weblogo from "../assets/asset0.svg";
import { NavLink, Outlet } from "react-router-dom";
import IconBar from "./icone";
import "./Navbar.css";
import { FaGripVertical, FaHeart, FaSearch, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <div className="bg-[#fff] w-full h-28 flex justify-around items-center z-50  sticky top-0">
        <div className="container">
          <div className="flex items-center justify-between ml-5">
            <div className="" id="toggelmenuTop">
              <button
                onClick={() => toggleMenu("mobile")}
                className="text-gray-950"
              >
                ☰
              </button>
            </div>
            <NavLink to="/" className="flex items-cenoter rtl:space-x-reverse">
              <img
                id="logo"
                className="size-24"
                src={Weblogo}
                alt="Not Found"
              />
            </NavLink>
            <div className="hidden md:flex space-x-16" id="toggle">
              <div
                className="relative"
                onMouseEnter={() => toggleMenu("home")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Home &#11163;</button>
                {activeMenu === "home" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#ff6822] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home1
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home3
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home4
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home5
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home6
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home7
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/"
                        className="home"
                        onClick={() => toggleMenu(null)}
                      >
                        Home8
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("shop")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Shop &#11163;</button>
                {activeMenu === "shop" && (
                  <ul className="absolute left-0  w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/shopList"
                        className="shop"
                        onClick={() => toggleMenu(null)}
                      >
                        Shop List
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/login"
                        className="shop"
                        onClick={() => toggleMenu(null)}
                      >
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/wishlist"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Wishlist
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("products")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Products</button>
                {activeMenu === "products" && (
                  <ul className="absolute left-0  w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/product"
                        className="product"
                        onClick={() => toggleMenu(null)}
                      >
                        Product
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("blog")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Blog &#11163;</button>
                {activeMenu === "blog" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/blog"
                        className="blog"
                        onClick={() => toggleMenu(null)}
                      >
                        Blog Card
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => toggleMenu("page")}
                onMouseLeave={() => toggleMenu(null)}
              >
                <button className="NavbatTxt">Page &#11163;</button>
                {activeMenu === "page" && (
                  <ul className="absolute left-0 w-48 bg-white text-[#000000] shadow-lg rounded-md overflow-hidden">
                    <li>
                      <NavLink
                        to="/aboutUs"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/contact"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Contact
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/faq2"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Faq 2
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/page404"
                        className="page"
                        onClick={() => toggleMenu(null)}
                      >
                        Page 404
                      </NavLink>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            <div className="flex justify-between items-center">
              <IconBar />
            </div>
          </div>

          {activeMenu === "mobile" && (
            <ul
              id="toggelmenuTop"
              className=" bg-[#ffffff] text-black text-xl font-bold space-y-4 py-4 px-4 w-full"
            >
              <li>
                <NavLink to="/" onClick={() => toggleMenu(null)}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/shop" onClick={() => toggleMenu(null)}>
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink to="/product" onClick={() => toggleMenu(null)}>
                  Products
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => toggleMenu(null)}>
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/page" onClick={() => toggleMenu(null)}>
                  Page
                </NavLink>
              </li>
            </ul>
          )}
        </div>

        <div
          className="w-full justify-evenly flex fixed bg-white h-16 bottom-0"
          id="toggelHiden"
        >
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaGripVertical />
            Shop
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaUser />
            Account
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaSearch />
            Search
          </a>
          <a className="w-24 h-full flex flex-col justify-center items-center">
            <FaHeart />
            Wishlist
          </a>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
