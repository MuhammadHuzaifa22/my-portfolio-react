import React from 'react'
import Accordion from '../Components/Accordion';
import SkillDetails from '../Components/SkillDetails';
import { SiAboutdotme } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { FaKeyboard } from "react-icons/fa";
import '../index.css'








const About = () => {




  const detailsCSS = `asfsadf<span className="text-white">sdfa</span>`
  return (
    <div className=' flex flex-col items-center justify-center  text-center' id="about">
      {/* About Me  Section*/}
<div className='mt-[20px] p-2 max-w-lg'>
<h1 className='lobster text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  text-[#24ff18]  inline-flex gap-2'>About Me<SiAboutdotme className='rounded-md h-[30px]'/></h1>

<div className='flex flex-col gap-1 '>
<p className='font-mono text-white text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light mt-[20px]'>Hi! I’m a <span className='text-[#24ff18]'>junior front-end developer</span> with experience in <span className='text-white'>HTML, CSS, and JavaScript.</span> I'm currently learning <span className='text-[#24ff18] '>React.js, Next.js,</span> and <span className='text-[#24ff18]'>React Native.</span>
</p>
<p className='font-mono text-white text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light'>
 I enjoy working on projects and exploring new technologies.
</p>
<p className='font-mono text-white text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light '>
In my free time, I <span className='text-[#24ff18]'>focus on</span>  expanding my <span English className=' text-[#24ff18]'>English vocabulary,</span> and sometimes I <span className='text-[#24ff18]'>create thumbnails</span> and do <span className='text-[#24ff18]'>simple video editing</span> for my LinkedIn profile. I <span className='text-[#24ff18]'>also teach</span> two classmates <span className='text-[#24ff18]'>for an hour each day,</span> which has helped me develop good <span className='text-[#24ff18]'>teaching skills.</span>

</p>
</div>
</div>

<div className='mt-[50px]' id="skills-section">
<h1 className='lobster text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  text-[#24ff18] inline-flex gap-2'>About My Skills<GiSkills className=' rounded-md h-[40px]'/></h1>
<div className='flex w-[300px] transform duration-200 ease-in xs:w-[360] sm:w-[440px] md:w-[520px] lg:w-[600px] flex-wrap   gap-2 justify-center py-2  mt-5'>
<SkillDetails name='HTML 5' percentage='50%' details=''/>
<SkillDetails name='Plain CSS' percentage='50%' details='sadifjaksldjf'/>
<SkillDetails name='JavaScript' percentage='60%' details='sadifjaksldjf'/>
<SkillDetails name='Bootstrap' percentage='60%' details='sadifjaksldjf'/>
<SkillDetails name='Tailwind CSS' percentage='70%' details='sadifjaksdf=dfdfdfdldjf'/>
<h1 className='lobster text-xl sm:text-xl md:text-2xl lg:text-3xl w-full font-medium  text-[#24ff18] my-3 inline-flex justify-center gap-2 '>About My Typing Skills<FaKeyboard className=' rounded-md h-[40px]'/></h1>
<SkillDetails 
  name={<span className="text-sm">English</span>} 
  percentage={<span className="text-sm">Accuracy: 92.31%</span>} 
  wordsDetails='32 WPM'
  details='sadifjaksdf=dfdfdfdldjf' 
/>
<SkillDetails 
  name={<span className="text-sm">Coding</span>} 
  percentage={<span className="text-sm">Accuracy: 96.58%</span>} 
  wordsDetails='29 WPM'
  details='sadifjaksdf=dfdfdfdldjf' 
/>



</div>

</div>
    </div>
  )
}

export default About;