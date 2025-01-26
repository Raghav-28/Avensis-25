import React from "react";
import SpeakerCard from "./SpeakerCard";
import SponsorCard from "./SponsorCard";
import image from "../../../Images/speech.png";
import Sphere1 from "../../../Images/Sphere-Black-Matte1(1).png";
import shape3 from "../../../Images/shape3.png";
import Flapone from "../../../Images/Sponsors/Flapone.jpeg";
import easemytrip from "../../../Images/Sponsors/easemytrip.png";
import Maac from "../../../Images/Sponsors/Maac.jpeg";
import Siec from "../../../Images/Sponsors/Siec.jpeg";

import { Events } from "../../../config/events.js";

const index = () => {
  const speakers = [
    {
      name: "COMING SOON",
      designation: "",
      desc: "",
      image: image,
    },
    {
      name: "COMING SOON",
      designation: "",
      desc: "",
      image: image,
    },
    {
      name: "COMING SOON",
      designation: "",
      desc: "",
      image: image,
    },
  ];

  const sponsors = [
    {
      name: "Ease My Trip",
      image: easemytrip,
    },
    {
      name: "Siec Education ",
      image: Siec,
    },
    {
      name: "Flapone Aviation",
      image: Flapone,
    },
    {
      name: "MAAC",
      image: Maac,
    },
  ];

  return (
    <div className="w-full">
      <img src={Sphere1} class="funsphere" alt="sphere1" />
      {/* <img src={DecorativeLine} class="funline mt-[350px] z-[1]"/> */}
      <img src={shape3} class="funshape" alt=""></img>
      <div className="md:mx-[10%]">
        <div className="w-full mb-24">
          <div className="flex flex-wrap justify-around">
            {sponsors.map((sponsor) => (
              <SponsorCard name={sponsor.name} image={sponsor.image} />
            ))}
          </div>
        </div>
        <div className="w-full text-center text-4xl md:text-5xl font-[ultra] tracking-widest">
          <h1 className="text-white mt-2">WANT TO BE A</h1>
          <h1 className="text-[#EBB22D]  mt-2 md:mt-4">SPONSOR?</h1>
          <div className="flex justify-between w-[80%] md:w-[40%] mt-8 mx-auto">
            <a href="#">
              <button className="w-[130px] md:w-[180px] font-[roboto] text-white text-lg md:text-xl py-[12px] rounded-full bg-gradient-to-r from-[#771EBD] to-[#BF17C3] hover:scale-105 transition-transform">
                REGISTER
              </button>
            </a>
            <a href="#footer" className="ml-3">
              <button className="w-[130px] md:w-[180px] font-[roboto] text-white text-lg md:text-xl py-[12px] rounded-full border-[2px] border-white hover:bg-white hover:text-[#771EBD] hover:scale-105 transition-transform">
                CONTACT
              </button>
            </a>
          </div>

          <div className="w-full mt-16">
            <p className="text-white font-[ultra] text-3xl md:text-4xl tracking-widest my-8 ml-4 md:ml-0">
              DEPARTMENTS
            </p>

            <div className="mx-auto">
              <div className="md:ml-[5%] md:mt-10">
                <div className="md:flex md:justify-start gap-6">
                  <div className="bg-[#1D1332] flex rounded-lg p-3 md:p-5 w-[340px] md:w-[380px] h-[160px] md:h-[180px] mx-auto">
                    <img
                      className="object-cover w-2/3 h-full rounded-lg"
                      src={Events[11].tabs[0].image}
                      alt=""
                    />
                    <div className="text-white pl-3 font-[roboto] flex flex-col justify-center w-1/3">
                      <a href="/events">
                        <h1 className="text-lg md:text-xl font-bold text-left leading-tight">
                          Robotics
                        </h1>
                      </a>
                    </div>
                  </div>
                  <div className="bg-[#1D1332] mt-6 md:mt-0 flex rounded-lg p-3 md:p-5 w-[340px] md:w-[380px] h-[160px] md:h-[180px] mx-auto">
                    <img
                      className="object-cover w-2/3 h-full rounded-lg"
                      src={Events[11].tabs[1].image}
                      alt=""
                    />
                    <div className="text-white pl-2 font-[roboto] flex flex-col justify-center w-1/3">
                      <a href="/events">
                        <h1 className="text-lg md:text-xl font-bold text-left leading-tight">
                          Technical
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:ml-[5%] mt-8 md:mt-12">
                <div className="md:flex md:justify-start gap-6">
                  <div className="bg-[#1D1332] flex rounded-lg p-3 md:p-5 w-[340px] md:w-[380px] h-[160px] md:h-[180px] mx-auto">
                    <img
                      className="object-cover w-2/3 h-full rounded-lg"
                      src={Events[11].tabs[2].image}
                      alt=""
                    />
                    <div className="text-white pl-3 font-[roboto] flex flex-col justify-center w-1/3">
                      <a href="/events">
                        <h1 className="text-lg md:text-xl font-bold text-left leading-tight">
                          Gaming
                        </h1>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
