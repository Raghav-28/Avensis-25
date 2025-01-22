import image1 from "../Images/Events/Geekroomevent.png";

import scav from "../Images/Events/fun_crev/Pos_ScavengerHunt_6.PNG";
import gully from "../Images/Events/fun_crev/GullyCricket_4x4.PNG";
import cupid from "../Images/Events/fun_crev/Cupid AI _4×3.png";
import clue from "../Images/Events/fun_crev/Pos_CreativeCanvas_4.PNG";
import meme from "../Images/Events/fun_crev/Memeverse_2x2.PNG";
import bgmi from "../Images/Events/Gaming/Bgmi_4.5X3.PNG";
import cod from "../Images/Events/Gaming/COD_4.5X3.PNG";
import stumble from "../Images/Events/fun_crev/stumbleguys.avif";
import valo from "../Images/Events/Gaming/VALORANT_4.5X3.PNG";
import image23 from "../Images/Events/Technical/Hackavenue/hackavensis.png";
import cruntch from "../Images/Events/Technical/Hackavenue/crunch.png";
import utopia from "../Images/Events/Technical/Hackavenue/utopia.png";
import roboimag from "../Images/Events/Robotics/Pos_RoboWar_5.png";
import robomazeimag from "../Images/Events/Robotics/Pos_RoboMaze_5.png";
import robosocimag from "../Images/Events/Robotics/Pos_RoboSoccer_5.png";

export const Events = [
  {
    id: 0,
    name: "Creative Canvas",
    catName: "fun_crev",
    desc: "prize: ₹3000 ",
    date: "January 31st",
    time: "11:00am - 12:30pm",
    tabs: [
      {
        name: "ABOUT",
        image: clue,
        id: 0,
        content:
          "Each team will be given hurdles along with a treasure map for the initial round based , this round will be time based and if the team has completed hurdles within that time frame. That team will move forward to the final round. We will be dividing the slots based on number of teams that have registered. In the last round, we will be conducting some fun tasks which will help us decide our winner.  ",
      },
      {
        name: "SIZE",
        image: clue,
        id: 1,
        content: " 3 members",
      },
      {
        name: "EXPECTED FOOTFALL",
        image: clue,
        id: 2,
        content: " 10 teams ",
      },
      {
        name: "RULES",
        image: clue,
        id: 3,
        content:
          " <div className='text-2xl'>	We will keep track of time. <br/>The team which will complete the task within the time frame will proceed to the last round. <br/>The top 2 teams will be announced as winners at the end of the day. <br/></div>",
      },
      {
        name: "VENUE",
        image: clue,
        id: 4,
        content: "Infront of Boy’s Hostel",
      },
    ],
  },
  {
    id: 1,
    name: "Memeverse",
    catName: "fun_crev",
    date: "January 31st",
    time: "11:00am - 12:30pm",
    desc: "prize: ₹3000 ",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: meme,
        content:
          "<div className=''>   <span className=' text-[#4A9FA0] font-bold '> ROUND 1: </span>  Make each team caption a funny meme related image in 5 minutes and only about half of the total teams will qualify for the next round. <br/>   <span className=' text-[#4A9FA0] font-bold '> ROUND 2: </span>   Make each team enact a given meme and only half of those teams will qualify for the next round. <br/>ROUND 3- Make them create a funny meme on their friends funny picture and the top two funny memes will get prices.(will create it on their phone or laptops and email it to us) <br/> </div>",
      },
      {
        name: "SIZE",
        id: 1,
        image: meme,
        content:
          " <span className=' text-[#4A9FA0] font-bold '> Team Size: </span>  4-5 members",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: meme,
        content: " 9-10 teams ",
      },
      {
        name: "RULES",
        id: 3,
        image: meme,
        content:
          " <div className='text-2xl'>	-	We will keep track of time for each round. <br/>-	The teams would be marked based on how funny memes they make and their meme knowledge <br/>-	Each round will be elimination round and only the winner + runner-up will get prices. <br/></div>",
      },
      {
        name: "VENUE",
        id: 4,
        image: meme,
        content: "Ground beside boys hostel",
      },
    ],
  },
  {
    id: 2,
    name: "BGMI",
    catName: "gaming",
    date: "January 31st",
    time: "11:00am - 1:00pm",
    desc: "",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: bgmi,
        content:
          "There will be 100 students fighting against each other in team of four inside a server room to be declared as champions. The last team standing will be the champions . ",
      },
      {
        name: "SIZE",
        id: 1,
        image: bgmi,
        content:
          "   <span className=' text-[#4A9FA0] font-bold '> Team Size: </span>  maximum 4",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: bgmi,
        content: " 300-400 ",
      },
      {
        name: "REQIREMENT",
        id: 3,
        image: bgmi,
        content:
          "<div className='text-2xl'>A LAB <br/>MOBILE PHONES (to be arranged by students) <br/>Wi-Fi connection <br/></div>",
      },
    ],
  },
  {
    id: 3,
    name: "STUMBLE GUYS",
    catName: "gaming",
    date: "January 31st",
    time: "2:00pm - 4:30pm",
    desc: "",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: stumble,
        content:
          "32 PLAYERS WILL BE PLAYING AGAINST EACH OTHER THE FIRST ON TO REACH THE FINISH LINE WILL BE THE WINNER.",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 1,
        image: stumble,
        content: " 300-400 ",
      },
      {
        name: "REQIREMENT",
        id: 2,
        image: stumble,
        content:
          " <div className='text-2xl'>Venue:LAB <br/>EQUIPMENTS: WIFI, EXTENSION CORDS, MOBILE PHONES(PLAYER WILL CARRY THIER OWN) <br/></div>",
      },
    ],
  },
  {
    id: 4,
    name: "VALORANT",
    catName: "gaming",
    date: "January 31st",
    time: "11:00am - 1:00pm",
    desc: "",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: valo,
        content:
          "EACH TEAM WILL BE CONSISTING OF 5 PLAYERS EACH. THE TEAMS WILL BE PLAYING AGAINST EACH OTHER IN 5 V 5 GAME. THE FIRST TEAM TO WIN 13 ROUNDS WINS THE GAME AND WILL BE QUALIFIED FOR THE NEXT ROUND.",
      },
      {
        name: "SIZE",
        id: 1,
        image: valo,
        content:
          "  <span className=' text-[#4A9FA0] font-bold '> Team Size: </span>  maximum 4",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: valo,
        content: " 15 teams ",
      },
      {
        name: "REQIREMENT",
        id: 3,
        image: valo,
        content:
          "<div className='text-2xl'> <span className=' text-[#4A9FA0] font-bold '> Venue: </span> LAB <br/>EQUIPMENTS: WIFI, EXTENSION CORDS, MOBILE PHONES(PLAYER WILL CARRY THIER OWN) <br/></div>",
      },
    ],
  },
  {
    id: 5,
    name: "COD",
    catName: "gaming",
    date: "January 31st",
    time: "2:00pm - 4:30pm",
    desc: "",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: cod,
        content:
          "There will be 10 student playing against each other in a server .The last student surviving against all will be declared as winner",
      },
      {
        name: "SIZE",
        id: 1,
        image: cod,
        content: " individual",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: cod,
        content: " around 300-400 ",
      },
      {
        name: "REQIREMENT",
        id: 3,
        image: cod,
        content:
          " <div className='text-2xl'>   <span className=' text-[#4A9FA0] font-bold '> Venue: </span>  LAB <br/>Mobile phone <br/>wifi-connections</div>",
      },
    ],
  },
  {
    id: 6,
    name: "Robo War",
    catName: "robotics",
    time: "1:00pm - 3:30pm",
    date: "January 31st",

    desc: "PRIZE: ₹3000 ",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: roboimag,
        content:
          "There will be 100 students fighting against each other in team of four inside a server room to be declared as champions. The last team standing will be the champions . ",
      },
      {
        name: "SIZE",
        id: 1,
        image: roboimag,
        content: " 5-6 members ",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: roboimag,
        content: " 10 teams",
      },
      {
        name: "REQIREMENT",
        id: 3,
        image: roboimag,
        content:
          " <div className='text-2xl'>We will keep track of time till the last player on the team is left.<br/>The team which kept the discussion going on for the longest wins.<br/>The top 2 teams will be announced as winners at the end of the day.<br/><div className='flex'><div className='font-bold'>WARNING:</div><p> If the player takes more than 5 seconds to speak then a penalty of 15 seconds will be added to the total time.</p></div></div>",
      },
      {
        name: "THEME",
        id: 4,
        image: roboimag,
        content: "Related to technology",
      },
    ],
  },

  {
    id: 7,
    name: " Robo maze",
    catName: "robotics",
    date: "January 31st",
    time: "11:00am - 12:30pm",
    desc: "Prizes: ₹3500 and ₹1500",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: robomazeimag,
        content:
          "Each participant will be made to represent a buyer and a seller, they will be given a product at some base price and both have to negotiate on that base price. Buyer will target to buy the product at lowest possible price in accordance with the base price and seller will negotiate to sell the product as high as possible. Event will consist of multiple rounds at increasing difficulty level.",
      },
      {
        name: "SIZE",
        id: 1,
        image: robomazeimag,
        content: " Individual Participation ",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: robomazeimag,
        content: " 30+",
      },
      {
        name: "REQIREMENT",
        id: 3,
        image: robomazeimag,
        content:
          " <div className='text-2xl'>Preference 1: Common room Preference <br/> 2: Any classroom </div>",
      },
      {
        name: "THEME",
        id: 4,
        image: robomazeimag,
        content: "Related to corporate meeting",
      },
    ],
  },

  {
    id: 8,
    name: "ROBO SOCCER",
    catName: "robotics",
    date: "January 31st",
    time: "12:00am - 2:30pm",
    desc: "Prizes - ₹5000 and ₹1500",
    tabs: [
      {
        name: "ABOUT",
        id: 0,
        image: robosocimag,
        content:
          "<div className='text-2xl'>This Event has two rounds: <br/>Round 1: Follow the Tale Each team will be shown 4 pictures. They have to explain the situation shown and keep connecting the situations together as the pictures are shown.<br/>Round 2: Defend the devil Each team will be given a controversial statement and they have to defend the  statements with proper arguments.</div> ",
      },
      {
        name: "SIZE",
        id: 1,
        image: robosocimag,
        content: " 3 ",
      },
      {
        name: "EXPECTED FOOTFALL",
        id: 2,
        image: robosocimag,
        content: " 15 teams",
      },
      {
        name: "REQIREMENT",
        id: 3,
        image: robosocimag,
        content:
          " <div className='text-2xl'> <h1 className='font-bold'>Venue:</h1> Any classroom with projector<br/><h1 className='font-bold'>Coordinators Required:</h1> 4-5 <br/><h1 className='font-bold'> Equipment: </h1> Mic, Scorecard, Posters, Decorative Material<br/></div>",
      },
      {
        name: "RULE",
        id: 4,
        image: robosocimag,
        content:
          "<div className=''> Use of foul language is prohibited. <br/>Vulgar content will not be appreciated. <br/>Each team will be scored by every other team and the judges. After round 1, 5 teams will be selected based on the scores scored.</div>",
      },
    ],
  },
  {
    id: 9,
    name: "GR Algo Hunt",
    desc: "PRIZE: Worth ₹6,000 ",
    date: "Jan 31st",
    time: "10:00am Onwards",
    link: "https://unstop.com/hackathons/algohunt-avensis-2024-maharaja-surajmal-institute-of-technology-msit-new-delhi-881841",
    catName: "technical",
    tabs: [
      {
        name: "ABOUT",
        image: image1,
        id: 0,
        content:
          "Algo Hunt by geek room is a realm of data strcutres and algorithms where participants will compete to win exciting przies by their problem solving capabilities",
      },
      ,
      {
        name: "PRIZES",
        image: image1,
        id: 2,
        content:
          " <div className= 'font-bold text-white'>  First Prize: ₹6000    <br/>         <br/>    </div>",
      },
      {
        name: "SPEAKERS",
        image: image1,
        id: 3,
        content: " Coming Soon ",
      },
      {
        name: "GUIDELINES",
        image: image1,
        id: 4,
        content:
          "There is no restriction on the type of hack you build or who the hack is for software , prototypes and ideas hack are all allowed <br/> Participants are not allowed to start their project before the hackathon starts <br/> you are not allowed to reuse code from existing projects <br/> Usage of open-source libraries/packages is allowed <br/> Participants must bring their own laptop",
      },
    ],
  },
  {
    id: 10,
    name: "CODE CRUNCH",
    desc: "PRIZE: Worth ₹6,000 ",
    date: "Jan 31st",
    time: "11:00am - 1:30pm",
    link: "https://unstop.com/p/codecrunch-dsa-marathon-avensis-2024-maharaja-surajmal-institute-of-technology-msit-new-delhi-882663",
    catName: "technical",
    tabs: [
      {
        name: "ABOUT",
        image: cruntch,
        id: 0,
        content:
          "Welcome to the Labyrinth of programming residing coding challengers with various hit points, defeat the challenger and heal yourself as well as win existing rewards.<br/><br/>Once you enter the Labyrinth you will be given HP of 300s and facing the 1st coding challenger, once you beat the challenger you will get extra HP of 300s, similarly for beating the 2nd challenger you will be given the same amount of HP, but the excitement begins as you beat the 3rd challenger, this time you will be winning a reward as well and gain HP of 420s, and for beating the 4th challenger you will be getting a HP of 600s, bigger rewards and a gateway to beat the ultimate challenger, defeat him you shall be known as “THE CONQUEROR”.",
      },
      {
        name: "NOTE",
        image: cruntch,
        id: 1,
        content:
          " The Labyrinth is considered as one of the most lethal places by the scholars, which is yet to be conquered, so it’s essential to enter it with your partner.<br/>Once your HP reaches zero you won’t be able to respawn.<br/>Each health point is equal to 1 second of life.",
      },
      {
        name: "TIPS",
        image: cruntch,
        id: 2,
        content:
          " <div className= 'font-bold text-white'> Try to beat the challengers as fast as possible as it will help you to gain a chance to beat the ultimate challenger.</div>",
      },
      {
        name: "VENUE",
        image: cruntch,
        id: 3,
        content:
          " <div className= 'font-bold text-white'> MSIT , C-4 Janakpuri </div>",
      },
    ],
  },
  {
    id: 11,
    name: "UI UTOPIA",
    desc: "PRIZE: Worth ₹6,000 ",
    date: "Jan 31st",
    time: "11:00 am to 1:30pm",
    link: "https://unstop.com/competitions/ui-utopia-avensis-2024-maharaja-surajmal-institute-of-technology-msit-new-delhi-882679",
    catName: "technical",
    catName: "technical",
    tabs: [
      {
        name: "ABOUT",
        image: utopia,
        id: 0,
        content:
          "Welcome to UTOPIA, where imagination meets innovation in the realm of UI/UX design! This competition transcends traditional boundaries, inviting designers to craft digital experiences that inspire, captivate, and revolutionize. <br/><br/>In image23, participants harness the power of Figma to sculpt user interfaces that redefine user interactions, elevate aesthetics, and breathe life into pixels. From sleek minimalism to vibrant exuberance, every design tells a story, weaving a tapestry of creativity and functionality. <br/><br/>Embrace the challenge, unleash your creativity, and embark on a journey to shape the future of digital experiences. In image23, the canvas is yours, and the possibilities are limitless.",
      },
      {
        name: "WINNING CRITERIA",
        image: utopia,
        id: 1,
        content:
          "<div className=''>1.	The competition will follow a judging criteria based on the following aspects:<br/>    a.	Usability: Intuitiveness, ease of navigation, and overall user experience.<br/>    b.	Visual Appeal: Aesthetics, use of color, typography, and visual hierarchy.<br/>    c.	Innovation: Creativity, originality, and uniqueness of design concepts.<br/>    d.	Functionality: Practicality, responsiveness, and adherence to design principles.<br/>2.	Participants must submit their Figma prototypes for evaluation before the designated deadline.<br/>3.	Judges' decisions will be final and binding.<br/>4.	Any attempt at plagiarism or violation of intellectual property rights will result in immediate disqualification.</div>",
      },
      {
        name: "SPECIFICATION",
        image: utopia,
        id: 2,
        content:
          " <div className=''> <span className=' text-[#4A9FA0] font-bold '>DESIGN SPECIFICATION: <br/> </span>1.	Participants must design their interfaces exclusively using Figma, adhering to a no-code approach.<br/>2.	Designs should be responsive and adaptable to various screen sizes and devices.<br/>3.	Utilization of Figma plugins and resources is permitted to enhance design efficiency and creativity.<br/>4.	Designs must be original and free from any copyrighted material or trademarks.<br/>5.	Participants are encouraged to provide a brief rationale or user story behind their design choices.<br/></div> ",
      },
      {
        name: "RULES",
        image: utopia,
        id: 3,
        content:
          " <div className='text-2xl'>1.	Individuals or teams of up to three members are eligible to participate in image23.<br/>2.	Participants must register and submit their entries within the specified timeline to qualify for evaluation.<br/>3.	All designs must be submitted in Figma format (.fig) along with a brief description outlining the design rationale.<br/>4.	Any form of unethical behavior, including but not limited to plagiarism or sabotage, will lead to immediate disqualification.<br/>5.	The organizers reserve the right to modify the rules or judging criteria if deemed necessary.<br/></div>",
      },
      {
        name: "VENUE",
        image: utopia,
        id: 4,
        content:
          "  <span className=' text-[#4A9FA0] font-bold '>VIRTUAL EVENT.  </span>   ",
      },
    ],
  },
  {
    id: 12,
    name: "HACK AVENSIS",
    desc: "Hackathon",
    date: "Jan 31st",
    time: "1:00 PM - 4:30 PM",
    link: "https://unstop.com/hackathons/hackavensis-2024-avensis-2024-maharaja-surajmal-institute-of-technology-msit-new-delhi-881791",
    catName: "technical",
    tabs: [
      {
        name: "ABOUT",
        image: image23,
        id: 0,
        content:
          "<span className='text-[#4A9FA0] font-semibold'>Welcome to HACK AVENSIS!</span><br/><br/>Hack Avensis is more than just a hackathon; it's an innovation hub where ideas meet execution and dreams take flight. Join us for an adrenaline-fueled journey into the world of hacking, where creativity, collaboration, and code converge to solve real-world problems.<br/><br/>This hackathon isn't just for seasoned developers; it's for anyone with a passion for problem-solving and a drive to make a difference. Whether you're a coding whiz or a newbie eager to learn, there's a place for you at HACK AVENSIS.<br/><br/>Get ready to immerse yourself in a whirlwind of innovation, mentorship, and excitement. Together, let's code, create, and change the world, one line at a time!",
      },
      {
        name: "PROBLEM STATEMENTS",
        image: image23,
        id: 1,
        content:
          "<div className='font-bold'><ul><li>1. Enhancing Healthcare Accessibility through Telemedicine Solutions.</li><br/><li>2. Sustainable Solutions for Waste Management in Urban Areas.</li><br/><li>3. Revolutionizing Online Education Platforms for Enhanced Learning Experience.</li><br/><li>4. Optimizing Supply Chain Management for Improved Efficiency.</li></ul></div><br/>Stay updated on Unstop site for the detailed problem statements. Register now to secure your spot and receive all necessary updates!",
      },
      {
        name: "GUIDELINES",
        image: image23,
        id: 2,
        content:
          "<div className='font-bold text-white'>Hack Avensis Guidelines:</div><br/><br/><div>- Teams must consist of 2-4 members, with diverse skill sets encouraged for optimal collaboration.<br/><br/>- Participants must register using the provided link before the event date to ensure seamless participation.<br/><br/>- Code submissions must adhere to ethical standards and respect intellectual property rights.<br/><br/>- Participants are encouraged to leverage open-source resources and APIs, but plagiarism is strictly prohibited.<br/><br/>- Each team will have designated time slots for presentations and demos, with judges evaluating projects based on creativity, functionality, and impact.<br/><br/>- Collaboration and teamwork are key; foster a supportive environment, share knowledge, and have fun hacking!</div>",
      },
      {
        name: "VENUE",
        image: image23,
        id: 3,
        content:
          "<div className='text-[#4A9FA0] text-white'><span className='font-bold'>VENUE: 105 105 A 106 B </span><br/></div>",
      },
    ],
  },
  {
    id: 13,
    name: "SCAVENGER HUNT",
    desc: "cultural",
    date: "Jan 31st",
    time: "11:00 AM - 1:30 PM",
    link: "https://forms.gle/WMbWH4NPvagp1btj7",
    catName: "technical",
    tabs: [
      {
        name: "ABOUT",
        image: scav,
        id: 0,
        content:
          "<span className='text-[#4A9FA0] font-semibold'>Welcome to HACK AVENSIS!</span><br/><br/>Hack Avensis is more than just a hackathon; it's an innovation hub where ideas meet execution and dreams take flight. Join us for an adrenaline-fueled journey into the world of hacking, where creativity, collaboration, and code converge to solve real-world problems.<br/><br/>This hackathon isn't just for seasoned developers; it's for anyone with a passion for problem-solving and a drive to make a difference. Whether you're a coding whiz or a newbie eager to learn, there's a place for you at HACK AVENSIS.<br/><br/>Get ready to immerse yourself in a whirlwind of innovation, mentorship, and excitement. Together, let's code, create, and change the world, one line at a time!",
      },
      {
        name: "PROBLEM STATEMENTS",
        image: scav,
        id: 1,
        content:
          "<div className='font-bold'><ul><li>1. Enhancing Healthcare Accessibility through Telemedicine Solutions.</li><br/><li>2. Sustainable Solutions for Waste Management in Urban Areas.</li><br/><li>3. Revolutionizing Online Education Platforms for Enhanced Learning Experience.</li><br/><li>4. Optimizing Supply Chain Management for Improved Efficiency.</li></ul></div><br/>Stay updated on Unstop site for the detailed problem statements. Register now to secure your spot and receive all necessary updates!",
      },
      {
        name: "GUIDELINES",
        image: scav,
        id: 2,
        content:
          "<div className='font-bold text-white'>Hack Avensis Guidelines:</div><br/><br/><div>- Teams must consist of 2-4 members, with diverse skill sets encouraged for optimal collaboration.<br/><br/>- Participants must register using the provided link before the event date to ensure seamless participation.<br/><br/>- Code submissions must adhere to ethical standards and respect intellectual property rights.<br/><br/>- Participants are encouraged to leverage open-source resources and APIs, but plagiarism is strictly prohibited.<br/><br/>- Each team will have designated time slots for presentations and demos, with judges evaluating projects based on creativity, functionality, and impact.<br/><br/>- Collaboration and teamwork are key; foster a supportive environment, share knowledge, and have fun hacking!</div>",
      },
      {
        name: "VENUE",
        image: scav,
        id: 3,
        content:
          "<div className='text-[#4A9FA0] text-white'><span className='font-bold'>VENUE: 105 105 A 106 B </span><br/></div>",
      },
    ],
  },

  {
    id: 14,
    name: "Gully Cricket",
    date: "January 31st ",
    time: "11:00 AM - 1:30 PM",
    catName: "cultural",
    desc: "PRIZES: ₹3000, ₹2000, ₹1000",
    link: "https://forms.gle/wpzQ4XNEYC7nZaFD9",
    tabs: [
      {
        name: "ABOUT",
        image: gully,
        id: 0,
        content:
          "Line Following Robo Maze game is to challenge participants to develop their programming and robotics skills by designing a robot that can successfully navigate through a complex maze, using sensors and advanced algorithms to make quick decisions and reach the end point within the shortest possible time.",
      },
      {
        name: "WINNING CRITERIA",
        image: gully,
        id: 1,
        content:
          "<div className=''>1.	The victory criteria for a robot maze game involve successfully navigating the robot through the maze to a specific endpoint or goal. <br/>2.	The robot must complete the maze within a certain amount of time while following any specified rules, such as staying within the bounds of the maze or avoiding certain obstacles. <br/>3.	The robot that successfully completes the maze within the designated time limit while meeting all criteria will be declared the winner. <br/></div>",
      },
      {
        name: "SPECIFICATION",
        image: gully,
        id: 2,
        content:
          " <div className=''> <span className=' text-[#4A9FA0] font-bold '>MAZE SPECIFICATION : </span> <br/>  1.	The maze will have dead-ends and false paths, creating additional challenges for the robot to navigate through. <br/>2.	The maze will have only one entry and exit point, providing a clear objective for the robot to work towards. <br/>3.	The maze will be visually appealing and include clear markings to help the robot identify the path and navigate through the maze. <br/>4.	The maze will be designed with precision and accuracy, ensuring that the robot relies solely on its sensors and programming to navigate through the maze. <br/></div> ",
      },
      {
        name: "RULES",
        image: gully,
        id: 3,
        content:
          " <div className='text-2xl'>1.	Contesting machines must be submitted to the organizers at the time of registration. <br/>2.	The micromouse handler is given time to adjust and calibrate the sensors after the maze is unveiled. <br/>3.	No selection of strategies or capturing of maze configuration is allowed. Violation of this rule will lead to instant disqualification. <br/> 4.	Each micromouse is allocated a total of 7 minutes of access to the maze after the 3minute sensor adjustment time. <br/>5.	Manual assistance to the micromouse during the contest is considered a disqualification. <br/>6.	Scoring is based on three parameters: run time, maze time, and the number of times the micromouse is derailed from track. </div>",
      },
      {
        name: "VENUE",
        image: gully,
        id: 4,
        content:
          "<span className=' text-[#4A9FA0] font-bold '> SEMINAR HALL 4TH FLOOR.  </span>   ",
      },
    ],
  },

  {
    id: 15,
    name: "Cupid AI",
    date: "January 31st ",
    time: "11:00 AM - 1:30 PM",
    catName: "cultural",
    desc: "PRIZES: ₹3000, ₹2000, ₹1000",
    link: "https://unstop.com/p/cupid-ai-avensis-2024-maharaja-surajmal-institute-of-technology-msit-new-delhi-883324",
    tabs: [
      {
        name: "ABOUT",
        image: cupid,
        id: 0,
        content: `Welcome to an extraordinary blind date experience at Avensis, our college fest, where we've integrated cutting-edge AI/ML technologies. `,
      },
      {
        name: "RULES",
        image: cupid,
        id: 1,
        content:
          "<div className=''>1.	Please arrive at least 30 minutes before the event starts. <br/>2. Bring a valid ID with you for entry <br/>3. Guys/Boys are required to pay a registration fee of Rs 50. This helps us organize a smoother event.	<br/> 4. Maintain proper decorum throughout; any misconduct will lead to immediate expulsion.<br/></div>",
      },
    
      {
        name: "VENUE",
        image: cupid,
        id: 4,
        content:
          "<span className=' text-[#4A9FA0] font-bold '> to be added soon  </span>   ",
      },
    ],
  },
];
