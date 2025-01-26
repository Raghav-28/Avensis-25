import React from "react";
import video from "../../../Images/avensis1.M4V";

const Index = () => {
  return (
    <div className="relative w-full h-screen bg-theme mb-24">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
      >
        <source src={video} type="video/mp4" />
        <source src="Images/movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for Dim Effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 z-10"></div>

      {/* Content (if needed) */}
      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-wide text-center">
        </h1>
      </div>
    </div>
  );
};

export default Index;
