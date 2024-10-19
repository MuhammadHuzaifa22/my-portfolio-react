import React, { useState ,useEffect} from 'react'
import myLogo from '/src/assets/Images/my-logo-hf.png';
import '../index.css';
import { FcAbout } from "react-icons/fc";
import { GrProjects } from "react-icons/gr";
import { IoIosContact } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import Confetti from "react-confetti";
import logoImage from '/src/assets/Images/my professional logo.png'
import { FaBarsStaggered } from "react-icons/fa6";




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
        <div className='relative  md:px-[5px] lg:px-[10px]   transition duration-200 py-2 scale-x-100 hover:scale-x-100  hover:border-t-[1px] hover:border-b-[1px] text-white  hover:shadow-white rounded-md hidden sm:hidden md:block lg:block w-fit'>
        <div className='flex gap-5 items-center text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light relative flex-col rounded-md w-fit'>

          {location.pathname === '/' ? <p className='cursor-pointer text-md  border-b-[1px] border-t-[1px] hover:transition  duration-200 rounded-md p-[5px] w-[80px] h-[80px] flex items-center justify-center  ease-in-out border-white'><FaHome />Home</p> : <Link to='/'><p className='cursor-pointer  hover:border-b-[1px]  hover:border-t-[1px] hover:transition hover:scale-x-95 duration-200 rounded-md ease-in-out p-[5px] border-white w-[80px] h-[80px] flex items-center justify-center text-md'><FaHome />Home</p></Link>}
          {location.pathname === '/about' ? <p className='cursor-pointer text-md border-b-[1px] border-t-[2px] hover:transition  duration-200 rounded-md p-[5px] ease-in-out w-[80px] h-[80px]  flex items-center justify-center border-white'>About</p> : <Link to='/about'><p className='w-[80px] h-[80px] flex items-center justify-center cursor-pointer text-md hover:border-b-[1px] hover:border-t-[1px] hover:transition hover:scale-x-95 duration-200 rounded-md ease-in-out p-[5px] border-white'>About</p></Link>}
          {location.pathname === '/projects' ? <p className='cursor-pointer text-md border-b-[1px] border-t-[1px] hover:transition  duration-200 rounded-md p-[5px] ease-in-out border-white  w-[80px] h-[80px] flex items-center justify-center'>Projects</p> : <Link to='/projects'><p className=' w-[80px] h-[80px] flex items-center justify-center cursor-pointer text-md hover:border-b-[1px] hover:border-t-[1px] hover:transition hover:scale-x-95 duration-200 rounded-md ease-in-out p-[5px] border-white'>Projects</p></Link>}
          {location.pathname === '/contact' ? <p className='cursor-pointer text-md border-b-[1px] border-t-[1px] hover:transition  duration-200 rounded-md p-[5px] ease-in-out border-white w-[80px] h-[80px]  flex items-center justify-center'>Contact</p> : <Link to='/contact'><p className='w-[80px] h-[80px] flex items-center justify-center cursor-pointer text-md hover:border-b-[1px] hover:border-t-[1px] hover:transition hover:scale-x-95 duration-200 rounded-md ease-in-out p-[5px] border-white'>Contact</p></Link>}

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
        className="menu menu-md dropdown-content mt-[-40px] w-52 p-2  text-lg xs:text-xl sm:text-2xl  text-black rounded-box justify-center items-center gap-1 absolute mr-[-200px]  border-t-[1px] border-b-[1px] bg-white text-black">
        <Link to="/"><p className='cursor-pointer roboto  w-full border-t-[1px] border-b-[1px]  hover:border-white flex items-center gap-1 border-white   rounded-md px-[5px]'><FaHome />Home</p></Link>
        <Link to="/about"><p className='cursor-pointer roboto  border-t-[1px] border-b-[1px] hover:border-white flex items-center gap-1 border-white   w-full rounded-md px-[5px]'><FcAbout />About</p></Link>
        <Link to="/projects"><p className='cursor-pointer roboto  border-t-[1px] border-b-[1px] hover:border-white  flex items-center gap-1 border-white   w-full rounded-md px-[5px]'><GrProjects /> Projects</p></Link>
        <Link to="/contact"><p className='cursor-pointer roboto  border-t-[1px] border-b-[1px]  hover:border-white flex items-center gap-1 border-white   w-full rounded-md px-[5px]'><IoIosContact />Contact</p></Link>
      </ul>
    </div>
  </div>
    </nav>
    </div>
  )
}

export default Navbar