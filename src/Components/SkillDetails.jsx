import React from 'react'
import Accordion from './Accordion'

const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-transparent border-[1px]  h-[8px]">
        <div
          className="bg-[#24ff18] h-[6px]  transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };



const SkillDetails = ({name,percentage,details,wordsDetails}) => {
  return (
    <div className='w-full md:w-[220px] lg:w-[290px] border-[1px] p-[5px] relative flex flex-wrap flex-col gap-1'>
  
   <div className='flex justify-between items-center'>
    <h1 className='text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl text-[#24ff18] font-light font-mono'>{name}</h1>
    <h1 className='text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl text-white font-light font-mono'>{percentage}</h1>
    {wordsDetails && <h1 className='text-sm text-white mt-[5px]'>{wordsDetails}</h1>}
  </div> 
    
  
  <ProgressBar progress={50} />
  <h1 className='text-white break-words overflow-wrap text-start'>
    <Accordion content={details}/>
    
  </h1>
</div>
  )
}

export default SkillDetails