import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logoo.png";
import cookie from "js-cookie";

const Navbar = () => {
  let Links = [
    { name: "About", link: "#ABout" },
    { name: "Events", link: "/events" },
    { name: "Contact Us", link: "#footer" },
  ];

  let [open, setOpen] = useState(false);
  const [user, setUser] = useState("REGISTER");
  console.log(user);
  // if(cookie.get("name",{ domain: ''})&&user=="REGISTER"){
  //   console.log(user)
  //   setUser(cookie.get("name",{ domain: ''}));
  // }
  useEffect(() => {
    fetch("https://avensis-backend.msit.in/api/current_user", {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((user) => {
        console.log("User info:", user);
        const userName = user.name;
        console.log("User name:", userName);
        setUser(user.name);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <section className="w-full top-0 left-0 flex items-center justify-between px-20 bg-theme py-4">
      {/* Logo */}
      <div className="cursor-pointer flex">
        <Link to="/">
          <div className="flex items-center">
            <img
              className="w-[65px] md:w-[80px] xl:w-[80px] h-[55px] md:h-[70px]"
              src={Logo}
              alt="Logo"
            />
            <div className="ml-1 md:ml-4">
              <h4 className="font-[ultra] text-xl md:text-[35px] font-[100] tracking-widest md:tracking-[9px] py-0 leading-5 md:leading-10 mt-3 md:mt-1">
                AVENSIS
              </h4>
              <p className="pt-0 mt-0 tracking-wider md:tracking-widest text-[9px] md:text-sm font-[600]">
                Inspire | Initiate | Innovate
              </p>
            </div>
          </div>
        </Link>
      </div>

      {/* Links */}
      <div className="hidden md:flex items-center space-x-8">
        {Links.map((link) => (
          <a
            key={link.name}
            href={link.link}
            className="hover:underline hover:delay-1000 transition-transform ease-in-out underline-offset-8 decoration-[#F9F7F7] text-[#F9F7F7] hover:text-gray-300 duration-500"
          >
            {link.name}
          </a>
        ))}
        {user === "REGISTER" ? (
          <Link to="https://avensis-backend.msit.in/auth/google/callback">
            <button className="font-medium tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500 border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7] duration-500">
              REGISTER
            </button>
          </Link>
        ) : (
          <Link to="/pass">
            <button className="font-medium tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500 border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7] duration-500">
              {user}
            </button>
          </Link>
        )}
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <button
          onClick={() => setOpen(!open)}
          className="text-3xl text-white focus:outline-none"
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <ul className="absolute bg-theme top-20 left-0 w-full flex flex-col items-center space-y-4 py-4">
          {Links.map((link) => (
            <a
              key={link.name}
              href={link.link}
              className="text-[#F9F7F7] hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
          {user === "REGISTER" ? (
            <Link to="https://avensis-backend.msit.in/auth/google/callback">
              <button className="font-medium tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500 border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7] duration-500">
                REGISTER
              </button>
            </Link>
          ) : (
            <Link to="/pass">
              <button className="font-medium tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500 border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7] duration-500">
                {user}
              </button>
            </Link>
          )}
        </ul>
      )}
    </section>
  );
};

export default Navbar;
