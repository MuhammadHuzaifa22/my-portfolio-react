import React from 'react'
import Accordion from './Accordion'

const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-transparent border-t-[1px] border-b-[1px] rounded-sm h-[8px]">
        <div
          className="bg-blue-700 h-[8px] rounded-sm transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };



const SkillDetails = ({name,percentage,details}) => {
  return (
    <div className='w-full md:w-[220px] lg:w-[290px] border-t-[1px] border-b-[1px] rounded-md p-[5px] relative flex flex-wrap flex-col gap-1'>
  <div className='flex justify-between'>
    <h1 className='text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl text-white'>{name}</h1>
    <h1 className='text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl text-white'>{percentage}</h1>
  </div>
  
  <ProgressBar progress={50} />
  <h1 className='text-white break-words overflow-wrap text-start'>
    <Accordion content={details}/>
    
  </h1>
</div>
  )
}

export default SkillDetails