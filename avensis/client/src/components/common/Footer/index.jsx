import React from "react";
// import image from "../../../Images/footer-back.png";
import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
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

        
             </div>
      
    </div>
  );
};

export default Footer;
