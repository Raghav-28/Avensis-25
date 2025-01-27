import React, { useState, useEffect } from "react";
import Logo from "../../Images/IMG_6750__1_-removebg-preview.png";
import { useToImage } from "@hcorta/react-to-image";
import pass from "../../Images/passes.jpeg";
import { account } from "../../services/appwriteService.js"; // Ensure this path is correct

const Index = () => {
  const { ref, isLoading, getPng, dataURL } = useToImage();
  const [downloadURL, setDownloadURL] = useState(null);
  const [download, setDownload] = useState("Download");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Fetch user details using Appwrite's Account service
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const user = await account.get();
        setName(user.name); // Update name
        setEmail(user.email); // Update email
        console.log("User details:", user);
      } catch (error) {
        console.error("Error fetching user:", error);
        // Optional: Redirect to login or show an error message
      }
    };

    fetchUserDetails();
  }, []);

  // Function to display user details
  const display = () => (
    <div className="ml-[42%] pt-[40px] md:pt-28 font-source">
      <h1 className="text-sm md:text-2xl">Name: {name}</h1>
      <h1 className="text-sm md:text-2xl">Email: {email}</h1>
    </div>
  );

  // Handle download button
  async function handleDownload() {
    setDownload("THANKS");
    const url = await getPng();
    setDownloadURL(url);
    console.log("Download URL:", url);
  }

  return (
    <div className="w-full" ref={ref}>
      <div className='bg-cover bg-[url("https://i.ibb.co/rZzZWbx/passes.png")] h-[115px] md:h-[260px]  w-[370px] md:w-[800px] mx-auto shadow-lg  my-24 shadow-white'>
        {display()}
      </div>
      <button
        className="mb-24 ml-[36%] md:ml-[46%] font-medium font-dm tracking-wider bg-theme text-[14px] leading-8 text-[#F9F7F7] hover:text-theme border-gradient-to-r from-cyan-500 to-blue-500 border-2 px-5 py-1 rounded-[20px] hover:bg-[#F9F7F7] duration-500"
        onClick={handleDownload}
      >
        {download}
      </button>
    </div>
  );
};

export default Index;
