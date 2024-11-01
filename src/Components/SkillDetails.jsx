import React from 'react'
import Accordion from './Accordion'


const ProgressBar = ({ progress }) => {
    return (
      <div className="w-full bg-transparent border-[1px]  h-[8px]">
        <div
          className="bg-black h-[6px]  transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  };



const SkillDetails = ({name,percentage,details,wordsDetails,icon,progress}) => {
  return (
    <div className={`border-opacity-35 border-[1px] hover:border-opacity-100 relative flex flex-wrap flex-col gap-1   shadow-[0px_0px_2px_black] hover: transition-all duration-400  border-black rounded-sm ${wordsDetails && 'w-[300px]'} w-[250px] p-[5px]`}>
  
   <div className='flex justify-between items-center'>
    <h1 className='text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl playfair-display inline-flex items-center gap-[5px]'>{name}{icon && icon}</h1>
    <h1 className='text-sm xs:text-sm sm:text-md md:text-lg lg:text-xl '>{percentage}</h1>
    {wordsDetails && <h1 className='text-sm  mt-[5px]'>{wordsDetails}</h1>}
  </div> 
    
  
  <ProgressBar progress={progress} />
  <h1 className='text-white break-words overflow-wrap text-start'>
    <Accordion content={details}/>
    
  </h1>
</div>
  )
}

export default SkillDetails