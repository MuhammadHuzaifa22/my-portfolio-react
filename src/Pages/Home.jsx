import React, { useEffect, useRef, useState } from "react";
import "../index.css";
import { useSpring, animated } from "@react-spring/web";
import logoImage from '/src/assets/Images/my professional logo.png'
import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';

import { SiAltiumdesigner } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { SiBookmyshow } from "react-icons/si";
import CustomLogo from "../Components/CustomLogo";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { RiKeyboardLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
import { MdDeveloperMode } from "react-icons/md";







const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
    const [laptopStyle, setLaptopStyle] = useState(false);
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const scrollTimeoutRef = useRef(null); 
    let [imageRotatingStyle,setImageRotatingStyle] = useState(false);

    const audioRef = useRef(null);

    const playSound = () => {
      audioRef.current.play();
    };


    const handleMouseMove = (event) => {
      // Account for scroll position by subtracting scroll offsets
      setCursorPosition({
        x: event.clientX,
        y: event.clientY + window.scrollY, // Adjust for vertical scroll
      });
    };


    // Create a spring animation for the cursor
    const props = useSpring({
        to: { x: cursorPosition.x, y: cursorPosition.y },
        config: { tension: 300, friction: 20 },
    });

    const handleScroll = () => {
        const currentScrollPosition = window.scrollY; // Get current scroll position
        setScrollPosition(currentScrollPosition);

        // Set laptopStyle
        if (currentScrollPosition >= 450 && !laptopStyle) {
            setLaptopStyle(true);


            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }


            scrollTimeoutRef.current = setTimeout(() => {
                setLaptopStyle(false);
            }, 1000);
        }


        if (currentScrollPosition >= 100 && !imageRotatingStyle && currentScrollPosition <= 200) {
          setImageRotatingStyle(true);

          
          if (scrollTimeoutRef.current) {
              clearTimeout(scrollTimeoutRef.current);
          }

          

          
          
      }
    };

    useEffect(() => {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("mousemove", handleMouseMove);
  
        if (scrollTimeoutRef.current) {
          clearTimeout(scrollTimeoutRef.current);
        }
      };
            
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        }, []);
    

  return (
    
    <div className="mt-[-50px] pt-[100px] "  id="home">
      
      {/* Hero Started */}      
      <div className="flex justify-center items-center  pt-5">
        {/* Top Section */}
        <div className="text-center flex flex-col gap-5">
                  
          <h1 className=" text-xl sm:text-xl md:text-2xl lg:text-3xl font-medim text-center mx-auto playfair-display font-medium">
    .Jr Front End Developer
          </h1>
          
          <h1 className="playfair-display text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 font-normal ">
    Hi I am <span className="font-medium inline-flex items-center">
    Huzaifa Furqan<CustomLogo />
      </span>
            </h1>
          <h1 className="playfair-display text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2  font-normal ">
          I <span className=" font-medium inline-flex  items-center">design<SiAltiumdesigner /></span> and <span className="font-medium  inline-flex items-center gap-[3px]">code<FaCode/> simple things </span> and I love what to do.
          </h1>
        
        </div>
      </div>
      <div class="pixel-spinner">
  <div class="pixel-spinner-inner"></div>
</div>

      
      <div id="brief-intro-body" className="p-5 flex flex-col justify-center items-center h-fit text-center gap-5 max-w-md mx-auto mt-[100px]">
        <h1 className="playfair-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium ">Let Me Introduce My Self</h1>
      <h1 className="playfair-display text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 font-normal">I am good in <span className="font-medium inline-flex items-center gap-[5px]">JavaScript<IoLogoJavascript/></span>, <span className="font-medium inline-flex items-center gap-[5px]">React<FaReact/></span>, <span className="font-medium inline-flex items-center gap-[5px]">Tailwind CSS<RiTailwindCssFill /></span>, and <span className="font-medium inline-flex items-center gap-[5px]">Bootstrap<FaBootstrap/></span>.</h1>
      <h1 className="playfair-display text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 font-normal">
  I am also good in <span className=" font-medium">problem-solving</span>, <span className="font-medium inline-flex items-center gap-[5px]">fast typing<RiKeyboardLine /></span>, <span className="font-medium">teaching</span>, and <span className="font-medium">self-motivation</span>.
</h1>
<h1 className="text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 playfair-display">
  I am interested in <span className="font-medium inline-flex items-center gap-[5px]">web design<CgWebsite /></span>, <span className="font-medium inline-flex items-center gap-[5px]">development<MdDeveloperMode /></span>, and <span className="font-medium">learning English</span>.
</h1>
<h1 className="text-xl md:text-2xl lg:text-3xl playfair-display font-medium mt-[50px]">Reach Out</h1>
<div className="flex space-x-6 justify-center items-center flex-wrap">
      {/* YouTube */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-red-600 transition-colors duration-300 ease-in-out"
      >
        <FaYoutube className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-600 transition-colors duration-300 ease-in-out"
      >
        <FaLinkedin className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
      </a>
      {/* GitHub */}
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-gray-500 transition-colors duration-300 ease-in-out"
      >
        <FaGithub className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
      </a>
    </div>
      </div>
    </div>
  );
};

export default Home;