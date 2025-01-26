import React from "react";
import { useEffect } from "react";
function Preloader({ onComplete }) {
    useEffect(() => {
      const timer = setTimeout(() => {
        onComplete();
      }, 2000); // Adjust the duration as needed
  
      return () => clearTimeout(timer); // Cleanup timer
    }, [onComplete]);
  
    return (
      <div id="preloader" className="w-100vw h-100vh flex justify-center items-center bg-gray-100 box b">
        <img
          src="/avensis/client/public/android-chrome-512x512.png"
          alt="Preloader"
          style={{
            width: "300px",
            height: "auto",
            border: "5px solid #000",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          }}
        />
      </div>
    );
  }



export default Preloader;
