import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import '../index.css'

const MyTypewriterComponent = ({details1,details2}) => {
  return (
    <div className="text-center inline-flex items-center gap-[5px]">
      <span style={{ fontFamily: 'monospace', fontWeight: 500 }}>
        {!details2 ? <Typewriter
          words={[details1]}
          loop={1} 
          cursor
          cursorStyle=""
          typeSpeed={170}    
          deleteSpeed={0}
          delaySpeed={800}
          
        /> : <Typewriter
        words={[details1,details2]}
        loop={0}  // 0 = infinite loop
        cursor
        cursorStyle="|"
         // Custom character for cursor
        typeSpeed={100}
        deleteSpeed={50}
        delaySpeed={1000}
      />}
        
      </span>
      {/* <CgWebsite className="ml-2 text-2xl text-[#24ff18]" /> */}
    </div>
  );
};

export default MyTypewriterComponent;
