import React, { useState } from "react";
import image from "../../../Images/footer-back.png";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const [count, setCount] = useState(0);
  function displayTeam() {
    setCount(1);
  }
  function hideTeam() {
    setCount(0);
  }
  /* const team = [
    {
      name: "Tanay Aggarwal",
      linkedIn:"https://www.tanayaggarwal.com",
      image : tanay,
    },
    {
      name: "Utkarsh Ahuja",
      linkedIn:"https://linktr.ee/ahuja_utkarsh",
      image : utkarsh,
    },
    {
      name: "Uday Sangwan",
      linkedIn:"https://linktr.ee/uday_sangwan",
      image : uday,
    },
    {
      name: "Mohd Kaif",
      linkedIn:"https://www.linkedin.com/in/mohd-kaif-7ba250228",
      image : kaif,
    },
    {
      name: "Yash Chaudhary",
      linkedIn:"https://www.linkedin.com/in/yash-c88/",
      image : yash,
    },
    {
      name: "Anshita Chaudhary",
      linkedIn:"https://www.linkedin.com/in/anshita-chaudhary-7b0272253",
      image : anshita,
    },
    {
      name: "Ankit Chaudhary",
      linkedIn:"https://www.linkedin.com/in/ankit-chaudhary-01a534228/",
      image : chutia,
    },
    {
      name: "Kratika Suri",
      linkedIn:"https://www.linkedin.com/in/kratika-suri-429229228",
      image : kratika,
    },{
      name: "Harsh Jain",
      linkedIn:"https://www.linkedin.com/in/harsh-jain-10467a22b",
      image : harsh,
    },
  ]; */ 
  // function memberCard(member)
  // {
  //   return <div class="mx-[15px] w-[160px]">
  //               <a href={member.linkedIn} target="_blank"><img src={member.image} className=' mx-auto rounded-[50%] w-36 h-36'/></a>
  //               <h4 className='text-[18px] text-black font-semibold'>{member.name}</h4>
  //               <a href={member.linkedIn}><h5 className='font-bold text-[16px] text-blue-600 '>Linkedin</h5></a>
  //           </div>
  // }
  return (
    <div id="footer"  className='m-0 bg-[url(https://i.ibb.co/vhQq6hM/footer-back.png)] '>
      <div className='pb-8'>

      
      <div className="contacts m-0">
  <div className="contact2 w-[80%] flex flex-wrap md:flex-nowrap justify-between mb-12">
    {/* Advisor 1 */}
    <div className="advisor mb-4 md:mb-0">
      <span className="contactname"> Tusshar Aggarwal</span>
      <br />
      <span>Chief Advisor</span>
      <br />
      <span>+91 88517 11857</span>
    </div>

    {/* Advisor 2 */}
    <div className="advisor mb-4 md:mb-0">
      <span className="contactname">Ishneet Kaur Chadha</span>
      <br />
      <span>Chief Advisor</span>
      <br />
      <span>+91 98714 38441</span>
    </div>

    {/* Advisor 3 */}
    <div className="advisor mb-4 md:mb-0">
      <span className="contactname">Sanskriti Singh</span>
      <br />
      <span>Chief Advisor</span>
      <br />
      <span>+91 88828 80292</span>
    </div>

    {/* Advisor 4 */}
    <div className="advisor mb-4 md:mb-0">
      <span className="contactname">Shubham Sharma</span>
      <br />
      <span>Chief Advisor</span>
      <br />
      <span>+91 84483 42840</span>
    </div>

    {/* Advisor 5 */}
    <div className="advisor mb-4 md:mb-0">
      <span className="contactname">Tarush Masand</span>
      <br />
      <span>Chief Advisor</span>
      <br />
      <span>+91 96258 92428</span>
    </div>
  </div>
</div>
{/* Tusshar Aggarwal
+91 88517 11857

Ishneet Kaur Chadha
+91 98714 38441

Sanskriti Singh
+91 88828 80292

Shubham Sharma
+91 84483 42840

Tarush Masand
+91 96258 92428 */}


        <div className='w-[80%] mb-3 mx-auto h-[1px] bg-[#EBB22D]'></div>

        {/* <div className='grid grid-cols-1 md:grid-cols-4 ml-4 '> */}
        <div class="md:flex justify-between m-0 w-[80%] md:w-[80%] mx-auto">
          <div className=' flex'>
              <h4>FOLLOW US </h4>
              <div className='py-1 '>
              <a  href='https://www.instagram.com/avensis_2023/'> <FaInstagram className='fa-brands fa-instagram fa-2 ml-2'></FaInstagram></a> </div>
              <FiMail className='mt-1 ml-2'></FiMail>              
              <a className=' ml-1' href="mailto:avensis2023@msit.in">avensis2023@msit.in</a>
          </div>
                  <div className=''>
               <h4> MSIT C-4 JANAKPURI, Delhi 110058 </h4>
              </div><h4 className="text-[12px] md:text-sm ">Coded  by Kunal  Vashisht <button onClick={displayTeam} className=   'text-[#EBB22D] font-bold text-[13px]'>MSIT</button></h4>
        </div>

        {/* Divider */}
        <div className="w-[90%] mb-4 mx-auto h-[1px] bg-[#EBB22D]"></div>

        {/* Footer Section */}
        <div className="w-[90%] md:flex justify-between items-center mx-auto text-center md:text-left">
          <div className="flex justify-center items-center mb-4 md:mb-0">
            <h4 className="font-bold text-lg">FOLLOW US</h4>
            <a href="https://www.instagram.com/avensis_2023/" className="ml-3">
              <FaInstagram className="fa-2xl text-[#EBB22D] hover:scale-110 transition-transform duration-200" />
            </a>
            <FiMail className="ml-4 text-[#EBB22D] text-xl" />
            <a
              href="mailto:avensis2023@msit.in"
              className="ml-2 text-sm text-gray-300 hover:text-white"
            >
              avensis2023@msit.in
            </a>
          </div>
          <div className="mb-4 md:mb-0">
            <h4 className="text-sm text-gray-300">
              MSIT C-4 JANAKPURI, Delhi 110058
            </h4>
          </div>
          <div>
            <h4 className="text-sm text-gray-300">
              Coded with ❤ by{" "}
              <button
                onClick={displayTeam}
                className="text-[#EBB22D] font-bold hover:underline"
              >
                MSIT
              </button>
            </h4>
          </div>
        </div>

        {count === 1 && (
          <div className=" w-[80%] mx-auto bg-white rounded-lg text-black fixed top-[5%] left-[10%]">
            <h1 className="py-3 ml-[10%] text-3xl font-semibold text-black">
              Meet the team
            </h1>
            <div className="w-full h-[2px] bg-gray-300"></div>
            <div className="w-[90%] flex flex-wrap mx-auto justify-around text-center mt-3">
              {/*
                        {team.map((member) => (
                          memberCard(member)
                        ))} 
                     */ }
                </div>
                <div className='w-full h-[2px] bg-gray-300'></div>
                <button onClick={hideTeam} type="button" id="closeteam" className='ml-[85%] my-2' data-dismiss="modal">Close</button>
              </div>
                 }
             </div>
      
    </div>
  );
};

export default Footer;
