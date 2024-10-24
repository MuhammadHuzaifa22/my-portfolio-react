import React, { useState ,useEffect} from 'react'
import '../index.css';
import { FcAbout } from "react-icons/fc";
import { IoIosContact } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import logoImage from '/src/assets/Images/my professional logo.png'
import { FaBarsStaggered } from "react-icons/fa6";
import { AiFillHome } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";
import { GrProjects } from "react-icons/gr";
import { GrContactInfo } from "react-icons/gr";

const Navbar = () => {
  let [handleListShow,setHandleListShow] = useState(false);
  const location = useLocation();
  const [scrollY, setScrollY] = useState(0);
  let [backdropBlurEffect,setBackDropBlurEffect] = useState(false);


  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    
    window.addEventListener('scroll', handleScroll);

    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  

function showList(){
setHandleListShow(!handleListShow);
}


  return (
    <div >
      
      <nav className="p-[5px] sm:p-[5px] md:p-[8px] lg:p-[10px] navbar flex  flex-col  fixed  z-50  w-fit md:mt-[40px]  lg:mt-[50px] top-0 left-0 " id="navbar">
          <img src={logoImage} alt="" className='w-[50px] sm:w-[70px] md:w-[90px] lg:w-[100px] h-[50px] sm:h-[70px] md:h-[90px] lg:h-[100px] rounded-md border-t-[1px] border-b-[1px] mb-3'/>
        <div className='relative  md:px-[5px] lg:px-[10px]   transition duration-200 py-2 scale-x-100 hover:scale-x-100  hover:border-[1px] text-white  hover:shadow-white  hidden sm:hidden md:block lg:block w-fit'>
        <div className='flex gap-5 items-center text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light relative flex-col rounded-md w-fit'>

          {location.pathname === '/' ? <p className='cursor-pointer text-md  border-[1px]  hover:transition  duration-200  p-[2px] w-[120px] h-[40px] font-light font-mono flex items-center justify-center  ease-in-out border-white '>
         
   
        <div className="text-md font-mono text-[#24ff18] inline-flex items-center gap-[2px]">
          &lt;<AiFillHome /> Home /&gt;
        </div></p> : <Link to='/'><p className='cursor-pointer  hover:border-[1px]   hover:transition hover:scale-x-95 duration-200  ease-in-out p-[5px] border-white w-[110px] h-[40px] flex items-center justify-center text-md font-mono'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center">
        <AiFillHome /> Home 
        </div></p></Link>}
          {location.pathname === '/about' ? <p className='cursor-pointer text-md  border-[1px] hover:transition  duration-200 p-[5px] ease-in-out w-[130px] h-[40px]  flex items-center justify-center border-white'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center gap-[5px]">
          &lt;<FaCircleInfo /> About /&gt;
        </div></p> : <Link to='/about'><p className='w-[120px] h-[40px] flex items-center justify-center cursor-pointer text-md hover:border-[1px] hover:transition hover:scale-x-95 duration-200  ease-in-out p-[5px] border-white'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center gap-[5px]">
        <FaCircleInfo />   About
        </div></p></Link>}
          {location.pathname === '/projects' ? <p className='cursor-pointer text-md border-[1px]  hover:transition  duration-200  p-[5px] ease-in-out w-[165px] h-[40px]  flex items-center justify-center border-white'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center gap-[5px]">
          &lt; <GrProjects />Projects /&gt;
        </div></p> : <Link to='/projects'><p className='w-[130px] h-[40px] flex items-center justify-center cursor-pointer text-md hover:border-[1px]  hover:transition hover:scale-x-95 duration-200  ease-in-out p-[5px] border-white'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center gap-[5px]">
        <GrProjects /> Projects 
        </div></p></Link>}
          {location.pathname === '/contact' ? <p className='cursor-pointer text-md  border-[1px] hover:transition  duration-200 p-[5px] ease-in-out border-white w-[150px] h-[40px]  flex items-center justify-center'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center gap-[5px]">
          &lt;<GrContactInfo /> Contact /&gt;
        </div></p> : <Link to='/contact'><p className='w-[140px] h-[40px] flex items-center justify-center cursor-pointer text-md  hover:border-[1px] hover:transition hover:scale-x-95 duration-200  ease-in-out p-[5px] border-white'><div className="text-lg font-mono text-[#24ff18] inline-flex items-center gap-[5px]">
        <GrContactInfo /> Contact 
        </div></p></Link>}

        </div>
        </div>
        <div className="flex-none  sm:block md:hidden lg:hidden">
        <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar text-black">
        <div className="rounded-full text-2xl">
        <button className='text-white'>
        <FaBarsStaggered/>
        </button>
      </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-md dropdown-content mt-[-40px] w-52 p-2  text-lg xs:text-xl sm:text-2xl  justify-center items-center gap-1 absolute mr-[-200px]  border-t-[1px] border-b-[1px] bg-white text-black">
        <Link to="/"><p className='cursor-pointer roboto  w-full border-t-[1px] border-b-[1px]  hover:border-white flex items-center gap-1 border-white   rounded-md px-[5px]'>Home</p></Link>
        <Link to="/about"><p className='cursor-pointer roboto  border-t-[1px] border-b-[1px] hover:border-white flex items-center gap-1 border-white   w-full rounded-md px-[5px]'>About</p></Link>
        <Link to="/projects"><p className='cursor-pointer roboto  border-t-[1px] border-b-[1px] hover:border-white  flex items-center gap-1 border-white   w-full rounded-md px-[5px]'> Projects</p></Link>
        <Link to="/contact"><p className='cursor-pointer roboto  border-t-[1px] border-b-[1px]  hover:border-white flex items-center gap-1 border-white   w-full rounded-md px-[5px]'>Contact</p></Link>
      </ul>
    </div>
  </div>
    </nav>
    </div>
  )
}

export default Navbar