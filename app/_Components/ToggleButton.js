import React from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

const ToggleButton = ({darkMode,setDarkMode}) => {
  
  return (
    <div className='rounded-full h-full dark:border-[1px] border-neutral-600 m-1 p-1 w-[4vw] bg-[#F4F5F4] dark:bg-[#151415]'>
        {/*Dark Mode*/}
        <button className='rounded-full h-full p-2 w-1/2 bg-white shadow-lg dark:bg-[#2C2D2D]  relative left-0 dark:left-8 transition-all ease-out' 
            onClick={()=> setDarkMode(!darkMode)}
        >
            {darkMode?
            <FaMoon color='#F3DCA1'/>
            : <FaSun color='#F3DCA1'/>}
        </button>
    </div>
  )
}

export default ToggleButton