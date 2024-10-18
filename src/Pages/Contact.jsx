import React from 'react'
import Confetti from "react-confetti";
import { useSpring, animated } from "react-spring";
import '../index.css';

const Contact = () => {
  const styles = useSpring({
    from: { borderWidth: 0 },
    to: { borderWidth: 5 },
    config: { duration: 1000 },
  });

  return (
    <>
    
     <div className="relative w-[200px] h-[400px] mx-auto">
      {/* Confetti in the background */}
      <div className="text-3xl pacifico">
      Contact
      
    </div>

      
    </div>
    
      
    </>
  )
}

export default Contact