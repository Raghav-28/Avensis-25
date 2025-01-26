import React from "react";
import image1 from "../../../Images/shape3.png";
import image2 from "../../../Images/shape2.png";
// import image3 from "../../../Images/shape6.png";
import "../../../style.css";
import { Link } from "react-router-dom";
// import { bounce } from 'react-animations';
import { fadeInLeftBig, fadeInRightBig, tada, flash } from "react-animations";
import { StyleSheet, css } from "aphrodite";
// head.js



const index = () => {
  const styles = StyleSheet.create({
    fadeInLeftBig: {
      animationName: fadeInLeftBig,
      animationDuration: "2s",
    },

    fadeInRightBig: {
      animationName: fadeInRightBig,
      animationDuration: "2s",
    },

    tada: {
      animationName: tada,
      animationDuration: "2s",
    },
    flash: {
      animationName: flash,
      animationDuration: "3s",
    },
  });

  return (
    <div className="">
      <section id="Head">
        <div id="head">
          <img src={image1} className="shape3" alt="" />
          <div id="Headtitle">
            <h1 className={`${css(styles.fadeInLeftBig)} font-[astroz]`}>
            AETHERIZED REALM
            </h1>
            <h2 className={`${css(styles.fadeInRightBig)}`}>
              "ticket to a new reality"{" "}
            </h2>
            <p className={`${css(styles.flash)}`}>
            Step into the digital abyss at AVENSIS 2025.
            Where technology transcends dimensions.{" "}
            </p>
          </div>
          <img src={image2} className="shape2" alt="" />
        </div>
        <div className="buttons">
          <div className="w-[40px]"></div>
          <Link to="/events">
            <button className={`md:mt-16 subscribe3 ${css(styles.tada)}`}>
              EXPLORE
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default index;
