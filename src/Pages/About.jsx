import React from 'react'

const About = () => {
  return (
    <div className=' flex flex-col items-center justify-center max-w-lg mx-auto text-center'>
      {/* About Me  Section*/}
<div className='mt-[20px] p-2'>
<h1 className='lobster text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  text-white'>About Me</h1>

<div className='flex flex-col gap-1 '>
<p className='text-blue-300 text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light mt-[20px]'>Hi! I’m a <span className='text-white'>junior front-end developer</span> with experience in <span className='text-white'>HTML, CSS, and JavaScript.</span> I'm currently learning <span className='text-white'>React.js, Next.js,</span> and <span className='text-white'>React Native.</span>
</p>
<p className='text-blue-300 text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light'>
 I enjoy working on projects and exploring new technologies.
</p>
<p className='text-blue-300 text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl font-light '>
In my free time, I <span className='text-white'>focus on</span>  expanding my <span English className='text-white'>English vocabulary,</span> and sometimes I <span className='text-white'>create thumbnails</span> and do <span className='text-white'>simple video editing</span> for my LinkedIn profile. I <span className='text-white'>also teach</span> two classmates <span className='text-white'>for an hour each day,</span> which has helped me develop good <span className='text-white'>teaching skills.</span>

</p>
</div>
</div>

<div className='mt-[50px]'>
<h1 className='lobster text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium  text-white'>About My Skills</h1>
<div className='flex w-[600px] flex-wrap  rounded-full gap-2 justify-center py-2 border-t-[1px] border-b-[1px] rounded-md'>

<div className='w-[290px] border-t-[1px] border-b-[1px] rounded-md p-[10px] relative flex flex-wrap flex-col gap-1'>
  <div className='flex justify-between'>
    <h1 className='text-xl text-white'>HTML 5</h1>
    <h1 className='text-xl text-white'>50%</h1>
  </div>
  <progress className="progress text-indigo-950 w-full bg-white" value="40" max="100"></progress>
  <h1 className='text-white break-words overflow-wrap text-start'>
    I can style fast using Plain Css with.
    
  </h1>
</div>

<div className='w-[290px] border-t-[1px] border-b-[1px] rounded-md p-[10px] relative flex flex-wrap flex-col gap-1'>
  <div className='flex justify-between'>
    <h1 className='text-xl text-white'>HTML 5</h1>
    <h1 className='text-xl text-white'>50%</h1>
  </div>
  <progress className="progress text-indigo-950 w-full bg-white" value="40" max="100"></progress>
  <h1 className='text-white break-words overflow-wrap text-start'>
    I can style fast using Plain Css with.
    
  </h1>
</div>


<div className='w-[290px] border-t-[1px] border-b-[1px] rounded-md p-[10px] relative flex flex-wrap flex-col gap-1'>
  <div className='flex justify-between'>
    <h1 className='text-xl text-white'>HTML 5</h1>
    <h1 className='text-xl text-white'>50%</h1>
  </div>
  <progress className="progress text-indigo-950 w-full bg-white" value="40" max="100"></progress>
  <h1 className='text-white break-words overflow-wrap text-start'>
    I can style fast using Plain Css with.
    
  </h1>
</div>

</div>

</div>
    </div>
  )
}

export default About