import React from 'react'
import Accordion from '../Components/Accordion';
import SkillDetails from '../Components/SkillDetails';
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { FaKeyboard } from "react-icons/fa";
import '../index.css'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiEnglishInput } from "react-icons/ri";
import { FaFileCode } from "react-icons/fa";
import { SiCodersrank } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { TbBrandReactNative } from "react-icons/tb";
import { FaBook } from "react-icons/fa";
import { IoIosCreate } from "react-icons/io";
import { SiGoogledisplayandvideo360 } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";



const About = () => {
  
  
  
  


  
  return (
    <div className=' flex flex-col items-center justify-center  text-center ' id="about">

    
      {/* About Me  Section*/}
<div className='mt-[20px] p-2 max-w-lg'>
<h1 className='playfair-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium   inline-flex gap-2'>About Me</h1>

<div className='flex flex-col gap-1'>
<p className='playfair-display text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl  mt-[20px] font-normal '>Hi! I’m a <span className='font-medium inline-flex items-center gap-[5px]'>junior front-end developer <SiCodersrank  /></span> with experience in <span className='font-medium inline-flex items-center gap-[2px]'>HTML<FaHtml5 />, CSS<FaCss3Alt />, and JavaScript<IoLogoJavascript />.</span> I'm currently learning <span className='font-medium inline-flex items-center gap-[5px]'>React.js<FaReact />, Next.js<RiNextjsFill />,</span> and <span className='font-medium inline-flex items-center gap-[5px]'>React Native<TbBrandReactNative />.</span>
</p>
<p className='playfair-display text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-normal'>
 I enjoy working on projects and exploring new technologies.
</p>
<p className='playfair-display  text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-normal '>
In my free time, I <span className='font-medium'>focus on</span>  expanding my <span  className='font-medium inline-flex items-center gap-[5px]'>English vocabulary<FaBook />,</span> and sometimes I <span className='font-medium inline-flex items-center gap-[5px]'>create<IoIosCreate /> thumbnails</span> and do <span className='font-medium inline-flex items-center gap-[5px]'>simple video editing<SiGoogledisplayandvideo360 /></span> for my <span className='font-medium inline-flex items-center gap-[5px]'>LinkedIn Profile<FaLinkedin /></span>

</p>
</div>
</div>



      <div className='mt-[50px]' id="skills-section">
        <h1 className='playfair-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  inline-flex gap-2'>
          About My Skills
        </h1>
        <div className='flex w-[300px] transform duration-200 ease-in xs:w-[360px] sm:w-[440px] md:w-[520px] lg:w-[600px] flex-wrap gap-2 justify-center py-2 mt-5'>
          <SkillDetails name='HTML 5' percentage='50%' details='' icon={<FaHtml5 />} progress={50} />
          <SkillDetails name='Plain CSS' percentage='50%' details='sadifjaksldjf' icon={<FaCss3Alt />} progress={50} />
          <SkillDetails name='JavaScript' percentage='60%' details='sadifjaksldjf' icon={<IoLogoJavascript />} progress={60} />
          <SkillDetails name='Bootstrap' percentage='60%' details='sadifjaksldjf' icon={<FaBootstrap />} progress={60} />
          <SkillDetails name='Tailwind CSS' percentage='70%' details='sadifjaksdf=dfdfdfdldjf' icon={<RiTailwindCssFill className='text-2xl' />} progress={70} />
          
          <h1 className='playfair-display text-xl sm:text-xl md:text-2xl lg:text-3xl w-full font-medium  my-3 inline-flex justify-center gap-2'>
            About My Typing Skills
          </h1>

          <SkillDetails 
            name={<span className="text-sm inline-flex items-center gap-[5px]">English <RiEnglishInput /></span>} 
            percentage={<span className="text-sm">Accuracy: 92.31%</span>} 
            wordsDetails='32 WPM'
            details='sadifjaksdf=dfdfdfdldjf' 
            progress={92.31}
          />

          <SkillDetails 
            name={<span className="text-sm inline-flex items-center gap-[5px]">Coding <FaFileCode /></span>} 
            percentage={<span className="text-sm">Accuracy: 96.58%</span>} 
            wordsDetails='29 WPM'
            details='sadifjaksdf=dfdfdfdldjf' 
            progress={96.58}
          />
        </div>
      </div>
    

    </div>
  )
}

export default About;