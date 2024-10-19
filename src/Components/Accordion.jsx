import { useState } from "react";



const Accordion = ({content}) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="w-full max-w-md mx-auto my-[5px]">
        <div className="border-t-[1px] border-b-[1px] border-white  rounded-md">
          {/* Accordion Header */}
          <button
            className="w-full text-left px-[5px]  bg-transparent rounded-md flex justify-between items-center"
            onClick={toggleAccordion}
          >
            <span className="text-md font-light text-white">Details</span>
            <svg
              className={`w-6 h-[20px] transform transition-transform duration-200 ease-in-out ${
                isOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
  
          {/* Accordion Content */}
          <div
            className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-screen' : 'max-h-0'
            }`}
          >
            <div className="p-[5px] bg-transpaernt rounded-md backdrop-blur-md">
              <p className="text-blue-300 font-light text-sm sm:text-sm md:text-md lg:text-lg text-start ">
                {content}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Accordion;