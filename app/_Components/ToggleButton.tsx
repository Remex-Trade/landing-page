import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

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
    <div className='rounded-full h-full dark:border-[1px] border-neutral-600 m-1 p-1 w-[70px] bg-[#F4F5F4] dark:bg-[#151415]'>
        {/*Dark Mode*/}
        <button className='rounded-full h-full p-2 w-1/2 bg-white shadow-lg dark:bg-[#2C2D2D]  relative left-0 dark:left-8 transition-all ease-out' 
            onClick={handleToggle}
        >
            {darkMode?
            <FaMoon color='#F3DCA1'/>
            : <FaSun color='#F3DCA1'/>}
        </button>
    </div>
  )
}

export default ToggleButton