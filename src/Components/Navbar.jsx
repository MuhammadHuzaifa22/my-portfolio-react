import React, { useState ,useEffect} from 'react'
import '../index.css';
import CustomLogo from "../Components/CustomLogo";
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
      
      <nav className="p-[5px]  flex  items-center  z-50  w-full  justify-between" >
        <div className='flex items-center gap-[10px] px-[10px]'>
          <CustomLogo className="text-lg md:text-xl lg:text-2xl"/>
          <h1 className="text-lg md:text-xl lg:text-2xl  playfair-display font-bold">Huzaifa Furqan</h1>
        </div>
        <div className='relative  md:px-[5px] lg:px-[10px] transition duration-200 py-2 scale-x-100 hover:scale-x-100  text-white  hover:shadow-white  hidden sm:hidden md:block lg:block w-fit'>
        <div className='flex gap-[10px] items-center text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light relative  rounded-md w-fit'>

        {location.pathname === '/' ? (
  <p className="cursor-pointer text-md w-[120px] h-[20px] playfair-display flex items-center justify-center hover:text-white bg-[black] border-[1px] border-[black]  transition duration-100 rounded-sm">
    &lt;Home/&gt;
  </p>
) : (
  <Link to="/">
    <p className="cursor-pointer w-[110px] h-[20px] text-md playfair-display flex items-center justify-center text-black hover:text-white  hover:bg-[black] border-black border-[1px]  transition duration-100 rounded-sm">
      Home<AiFillHome /> 
    </p>
  </Link>
)}

{location.pathname === '/about' ? (
  <p className="cursor-pointer text-md hover:text-white w-[130px] h-[20px] p-[5px] flex items-center justify-center playfair-display bg-[black] border-[1px] border-[black]  transition duration-200 rounded-sm">
    &lt;About/&gt;
  </p>
) : (
  <Link to="/about">
    <p className="cursor-pointer text-md text-black hover:text-white w-[120px] h-[20px] p-[5px] flex items-center justify-center playfair-display hover:bg-[black] border-[black] border-[1px]  transition duration-200 rounded-sm">
    About<FaCircleInfo /> 
    </p>
  </Link>
)}

{location.pathname === '/projects' ? (
  <p className="cursor-pointer text-md hover:text-white w-[165px] h-[20px] p-[5px] flex items-center justify-center playfair-display text-white bg-[black]  border-[black] border-[1px] transition duration-200 rounded-sm">
    &lt;Projects/&gt;
  </p>
) : (
  <Link to="/projects">
    <p className="cursor-pointer text-md hover:text-white text-black w-[130px] h-[20px] p-[5px] flex items-center justify-center playfair-display hover:bg-[black] border-[1px] border-[black]  transition duration-200 rounded-sm">
       Projects<GrProjects className='text-sm'/>
    </p>
  </Link>
)}
{location.pathname === '/contact' ? (
  <p className="cursor-pointer text-md hover:text-white text-white w-[150px] h-[20px] p-[5px] flex items-center justify-center playfair-display bg-[black] border-[1px] border-[black] transition duration-200 rounded-sm">
   &lt;Contact/&gt;
  </p>
) : (
  <Link to="/contact">
    <p className="cursor-pointer text-md hover:text-white text-black w-[140px] h-[20px] p-[5px] flex items-center justify-center playfair-display hover:bg-[black] border-[black] border-[1px] transition duration-200 rounded-sm">
      Contact<GrContactInfo />
    </p>
  </Link>
)}


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
        className="menu menu-md dropdown-content mt-[-40px] w-52 p-2  text-lg xs:text-xl sm:text-2xl  justify-center items-center gap-1 absolute   border-t-[1px] border-b-[1px] bg-white text-black">
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