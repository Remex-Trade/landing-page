import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'
import { MdOutlineSafetyCheck, MdSunny } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";

const ToggleButton = ({darkMode,setDarkMode}) => {
  const handleToggle = ()=>{
    setDarkMode(darkMode=>!darkMode);
    if(darkMode==true){
      document.body.style.backgroundColor = "white";
    }else{
      document.body.style.backgroundColor = "black";
    }
  }
  return (
    <>
        {/*Dark Mode*/}
        <button className='rounded-full h-full mx-2 items-center bg-white shadow-lg dark:bg-[#2C2D2D]   transition-all ease-out' 
            onClick={handleToggle}
        >
            {darkMode?
            <MdOutlineWbSunny size={20}/>
            : <MdSunny size={20}/>}
        </button>
      </>
  )
}

export default ToggleButton