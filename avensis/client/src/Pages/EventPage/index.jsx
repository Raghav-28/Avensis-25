import React from "react";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";
import { useState, useEffect } from "react";
import image2 from "../../Images/shape2.png";
import image4 from "../../Images/Sphere-Black-Matte1(1).png";
import "./../../style.css";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { Events } from "../../config/events.js";

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id } = useParams();

  let technical = Events.filter((event) => event.id === Number(id));
  console.log("Received ID:", id);
  console.log("Filtered Events:", technical);

  const [currentTab, change] = useState(0);
  const handleCategoryClick = (e) => {
    change(e.target.id);
  };

  function cat(tab, i) {
    if (currentTab === tab.id) {
      return (
        <button
          key={i}
          id={tab.id}
          className="px-4 py-1 mx-1 skew-x-[23deg] text-sm md:text-base bg-[#347080] italic ease-in-out duration-300"
        >
          {tab.name}
        </button>
      );
    }
    return (
      <button
        key={i}
        id={tab.id}
        onClick={handleCategoryClick}
        className="px-4 py-1 text-sm md:text-base  bg-[#4a9fa0] mx-1 skew-x-[23deg] hover:bg-[#347080] ease-in-out duration-100 italic"
      >
        {tab.name}
      </button>
    );
  }

  function display3(tab, i) {
    if (currentTab === 0) {
      return <div className="w-[40px] h-[32px] absolute"></div>;
    }
    return <div className="w-[40px] h-[32px] absolute"></div>;
  }

  return (
    <div>
      <Navbar />
      <img
        src={image2}
        className="shape2 absolute w-36 right-0 top-[150px] z-[-1] "
        alt=""
      />
      {/* <img src={image1} className="shape3 absolute w-20 top-[150px] z-[-1]"/> */}
      {/* <img src={image3} className="absolute w-[35%] top-[200px] left-[200px] z-[-1] opacity-30"/> */}
      <img
        src={image4}
        className="absolute w-[20%] top-[110px] left-[160px] z-[-1]"
        alt=""
      />
      {/* <img src={image5} className="absolute w-full z-[-1] opacity-50"/> */}
      <div className="w-full mb-12">
        <div className="w-full md:w-[70%] mx-auto md:flex mt-12">
          <div className="w-[95%] md:w-[30%] text-center bg-[#1D1332] rounded-lg shadow-lg p-4">
            <img
              className="w-[100%] mx-auto rounded-lg" // Slightly larger image, fits the card's size better
              src={technical[0].tabs[currentTab].image}
              alt=""
            />
            <h1 className="text-[roboto] text-2xl mt-6 text-white">
              {technical[0].name}
            </h1>
            <h1 className="text-[roboto] text-xl mt-2 text-gray-300">
              {technical[0].desc}
            </h1>
            {technical[0].link && (
              <a href={technical[0].link}>
                <button className="text-2xl w-[80%] mx-[10%] py-2 mt-4 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all duration-300">
                  Register
                </button>
              </a>
            )}
          </div>

          <div className="w-full md:w-[70%] pl-2 md:pl-16 px-4 sm:px-6">
            <h1 className="text-3xl font-bold text-white mb-4">
              Event Details
            </h1>
            <div className="flex mt-8 overflow-x-auto scrollbar-hide">
              {display3()}
              <div className="w-[4px]"></div>
              {technical[0].tabs.map((tab, i) => cat(tab, i))}
            </div>

            <div className="border-2 border-white border-r-[8px] p-4 text-lg rounded-r-lg bg-[#1D1332] shadow-lg overflow-hidden sm:p-6 sm:m-4">
              <p className="text-white">
                {parse(technical[0].tabs[currentTab].content)}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
