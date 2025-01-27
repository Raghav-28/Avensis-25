import React from "react";
import image1 from "../../../Images/shape3.png";
import image2 from "../../../Images/shape2.png";
import "../../../style.css";
import { Link } from "react-router-dom";
import { fadeInLeftBig, fadeInRightBig, tada, flash } from "react-animations";
import { StyleSheet, css } from "aphrodite";
import eventpass from "../../../Images/pass'25.jpg"
const Index = () => {
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

  const handleDownload = () => {
    // Create an invisible link and trigger the download automatically
    const link = document.createElement('a');
    link.href = "https://i.ibb.co/Rp125fQ/pass-25.jpg"; // Your image URL
    link.download = "pass'25.jpg"; // File name for download
    link.style.display = 'none'; // Hide the link
    document.body.appendChild(link);
    link.click(); // Automatically click to trigger the download
    document.body.removeChild(link);
  };

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
              "Ticket to a new reality"
            </h2>
            <div className="buttons flex flex-col md:flex-row md:space-x-4">
  <button
    onClick={handleDownload} // Trigger the download on click
    className={`md:mt-16 subscribe2 ${css(styles.tada)} md:mr-4`}
  >
    GET PASS
  </button>

  <Link to="/events">
    <button className={`md:mt-4 subscribe3 ${css(styles.tada)}`}>
      EXPLORE
    </button>
  </Link>
</div>

            <p className={`${css(styles.flash)}`}>
              Step into the digital abyss at AVENSIS 2025. Where technology transcends dimensions.
            </p>
          </div>
          <img src={image2} className="shape2" alt="" />
        </div>
      </section>
    </div>
  );
};

export default Index;
