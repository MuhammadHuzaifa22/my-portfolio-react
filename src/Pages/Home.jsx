import React, { useEffect, useRef, useState } from "react";
import cartoonBoy from "/src/assets/Images/faceless boy cartoon1.png";
import codingInLaptop from "/src/assets/Images/coding.png";
import "../index.css";
import { useSpring, animated } from "@react-spring/web";
import laptopPhoto from '/src/assets/Images/Gemini_Generated_Image_u4148fu4148fu414.png'
import planetBgGray from '/src/assets/Images/shiny-golden-laptop-computer-illustration_1322560-49216.avif';
import logoImage from '/src/assets/Images/my professional logo.png'
import { FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa';




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
    <div className="mt-[-50px] pt-[100px] text-white "  id="home">
      {/* Hero Started */}      
      <div className="flex justify-center items-center  pt-5">
        {/* Top Section */}
        <div className="text-center flex flex-col gap-5">
                  
          <h1 className="lobster text-xl font-mono sm:text-2xl md:text-3xl lg:text-4xl font-medim text-[#24ff18]">
            Junior Front End Developer
          </h1>
    
    
    
    
    
          <h1 className="font-mono text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 text-white font-light">
            Hi I am  <span className=" text-[#24ff18]">Huzaifa Furqan</span>
          </h1>
          <h1 className="font-mono text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2  font-light text-white">
            I <span className=" text-[#24ff18] ">design</span> and <span className=" text-[#24ff18]">code simple things,</span> and I love what I do.
          </h1>
          <div className={`h-[180px] sm:h-[200px] md:h-[230px] lg:h-[250px] w-[180px] sm:w-[200px] md:w-[230px] lg:w-[250px] mx-auto mt-[80px] flex justify-center mb-[50px] rounded-md border-t-[1px] border-b-[1px]   transform duration-100  ${imageRotatingStyle ? 'border-t-[2px] border-b-[2px]' : ''}`}>
          <div className={`absolute ml-[200px] sm:ml-[230px] md:ml-[260px] lg:ml-[280px] cursor-pointer mt-[100px] rounded-md py-[10px] px-[10px] border-t-[1px] border-b-[1px] border-white w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center transition duration-100    ${imageRotatingStyle ? '  transform transition ease-in duration-500 -translate-y-24 -translate-x-17' : ''}`}>
          <li className="flex flex-col items-center mx-2 relative group">
            
      <a
        data-social="github"
        aria-label="GitHub"
        href="https://www.github.com/"
        className="relative overflow-hidden flex justify-center items-center w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-md  transition-all duration-300 ease-in-out hover:text-white text-white"
      >
        <div className="absolute bottom-0 left-0 w-full h-0 bg-gray-800 transition-all duration-300 ease-in-out group-hover:h-full"></div>
        <svg
          xmlSpace="preserve"
          viewBox="0 0 16 16"
          className="relative z-10 w-8 h-8"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"
          />
        </svg>
      </a>
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">     
      </div>
    </li>
            </div>
          <div className={`absolute ml-[60px] sm:ml-[80px] md:ml-[100px] lg:ml-[130px] mt-[-30px]  sm:mt-[-40px] md:mt-[-50px] lg:mt-[-70px] cursor-pointer rounded-md py-[10px] px-[10px] border-t-[1px] border-b-[1px] border-white w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center transition duration-100 ${imageRotatingStyle ? ' transform transition ease-in-out duration-500 translate-y-32 lg:translate-y-40 translate-x-20' : ''}`}>
          <li className="flex flex-col items-center mx-2 relative group rounded-md">
      <a
        data-social="linkedin"
        aria-label="LinkedIn"
        href="https://linkedin.com/"
        className="relative overflow-hidden flex justify-center items-center w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16  transition-all duration-300 ease-in-out hover:text-white hover:shadow-[3px_2px_45px_rgba(0,0,0,0.12)] rounded-md text-white"
      >
        <div className="absolute bottom-0 left-0 w-full  bg-[#0274b3] transition-all duration-300 ease-in-out group-hover:h-full"></div>
        <svg
          xmlSpace="preserve"
          viewBox="0 0 16 16"
          className="relative z-10 w-8 h-8"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"
          />
        </svg>
      </a>
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs py-1 px-2 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        
      </div>
    </li>
            </div>
            <div className={`absolute mr-[220px] sm:mr-[240px] md:mr-[260px] lg:mr-[280px]  cursor-pointer mt-[100px] rounded-md py-[10px] px-[10px] border-t-[1px] border-b-[1px] border-white w-[40px] sm:w-[50px] md:w-[60px] lg:w-[70px] h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] flex items-center justify-center  transition duration-100     ${imageRotatingStyle ? 'transform transition ease-in duration-500 -translate-y-24 translate-x-2' : ''}`}>
            <li className="flex flex-col items-center mx-2 relative group">
      <a
        data-social="youtube"
        aria-label="Youtube"
        href="https://youtube.com/"
        className="relative overflow-hidden flex justify-center items-center w-10 sm:w-12 md:w-14 lg:w-16 h-10 sm:h-12 md:h-14 lg:h-16 rounded-md  transition-all duration-300 ease-in-out hover:text-white text-white"
      >
        <div className="absolute bottom-0 left-0 w-full h-0 bg-red-600 transition-all duration-300 ease-in-out group-hover:h-full"></div>
        <svg
          xmlSpace="preserve"
          viewBox="0 0 16 16"
          className="relative z-10 w-8 h-8"
          fill="currentColor"
        >
          <path
            fill="currentColor"
            d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"
          />
        </svg>
      </a>
      <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#405de6] to-[#fd1f1f] text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
        
      </div>
    </li>
            </div>
          <img
                src={logoImage}
                alt="Faceless-cartoon-boy"
                className={`mx-auto mt-3 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[220px] h-[160px] sm:h-[180px] md:h-[200px] lg:h-[220px] rounded-md `}

            />
            
          </div>
     
        </div>
      
      </div>
    



  
      <div id="brief-intro-body" className="p-5 flex flex-col justify-center items-center h-fit text-center gap-5 max-w-md mx-auto">
        <h1 className="lobster text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  text-[#24ff18]">Let Me Introduce My Self</h1>
      <h1 className="font-mono text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 text-white font-light">I am good in <span className="text-[#24ff18] font-light">JavaScript</span>, <span className="text-[#24ff18] font-light">React</span>, <span className="text-[#24ff18] font-light">Tailwind CSS</span>, and <span className="text-[#24ff18] font-light">Bootstrap</span>.</h1>
      <h1 className="font-mono text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 text-white font-light">
  I am also good in <span className="text-[#24ff18] font-light">problem-solving</span>, <span className="text-[#24ff18] font-light">fast typing</span>, <span className="text-[#24ff18] font-light">teaching</span>, and <span className="text-[#24ff18] font-light">self-motivation</span>.
</h1>
<h1 className="font-mono text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl mt-2 text-white font-light">
  I am interested in <span className="text-[#24ff18] font-light">web design</span>, <span className="text-[#24ff18] font-light">development</span>, and <span className="text-[#24ff18] font-light">learning English</span>.
</h1>


<h1 className="text-xl md:text-2xl lg:text-3xl lobster mt-[50px] text-[#24ff18]">Reach Out</h1>
<div className="flex space-x-6 justify-center items-center flex-wrap">
      {/* YouTube */}
      <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-100 hover:text-red-600 transition-colors duration-300 ease-in-out"
      >
        <FaYoutube className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
      </a>
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-100 hover:text-blue-600 transition-colors duration-300 ease-in-out"
      >
        <FaLinkedin className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
      </a>
      {/* GitHub */}
      <a
        href="https://www.github.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-100 hover:text-gray-500 transition-colors duration-300 ease-in-out"
      >
        <FaGithub className="w-6 md:w-8 lg:w-10 h-6 md:h-8 lg:h-10 hover:scale-110 transform transition-transform duration-300 ease-in-out" />
      </a>
    </div>
      </div>
    </div>
  );
};

export default Home;