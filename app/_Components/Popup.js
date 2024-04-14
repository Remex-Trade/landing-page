"use client"
import React from 'react'
import { FaCross } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';
import { useState } from 'react';

const Popup = ({showPopup,setShowPopup}) => {
  const [percentage, setPercentage] = useState(0);
  const handleInputChange = (e) => {
    setPercentage(e.target.value);
  };
  return (
    <>
    <div className='z-[1000] absolute  flex items-center justify-center w-[100vw] h-[100vh] bg-gray-700 opacity-25' onClick={()=>setShowPopup(false)}>
    </div>
    <div className='z-[1010] absolute  flex items-center justify-center w-[100vw] h-[100vh]'>
    <div className='bg-[#2A2A2B] rounded-xl flex flex-col py-2 w-fit h-fit text-slate-100'>
          <div className='flex justify-between items-center border-b-2 border-b-[#3B3A3D] px-6'>
            Adjust Leverage
            <IoMdClose onClick={()=>setShowPopup(false)}/>
          </div>
          <div className='flex flex-col p-4  gap-4'> 
            <div>Leverage</div>
            <div><input type='text' value={0} className='w-[20vw] h-[5vh] rounded-md bg-[#3B3A3D] text-center'/></div>
            <div className="flex justify-center w-full gap-4">
            <div className="flex flex-col justify-center w-full gap-2 ">
              <div className="w-full flex justify-between relative items-center h-2 rounded-lg mt-5 dark:bg-[#2C2D2D] bg-[#F7F7F8] text-gray-500 dark:text-white">
                <input
                  className="slider z-10 relative"
                  type="range"
                  min="0"
                  max="20"
                  value={percentage}
                  onChange={handleInputChange}
                />
                <div className="absolute z-0 flex w-full justify-between">
                  <div className="rounded-full bg-gray-400 w-1 h-1 "></div>
                  <div className="rounded-full bg-gray-400 w-1 h-1 "></div>
                  <div className="rounded-full bg-gray-400 h-1 w-1"></div>
                  <div className="rounded-full bg-gray-400 h-1 w-1"></div>
                  <div className="rounded-full bg-gray-400 h-1 w-1"></div>
                  <div className="rounded-full bg-gray-400 h-1 w-1"></div>
                </div>
                <div
                  className={`absolute z-0 bg-[#0CF3C4] h-2 rounded-lg`}
                  style={{ width: `${percentage * 5}%` }}
                ></div>
              </div>
              <div className="w-full text-[12px] text-gray-500 gap-2 flex h-content justify-between">
                <span>0x</span>
                <span>4x</span>
                <span>8x</span>
                <span>12x</span>
                <span>16x</span>
                <span>20x</span>
              </div>
            </div>

            <div className="w-[30%] rounded-md border-[1px] justify-center items-center flex dark:border-gray-800 h-10 dark:bg-[#171716] bg-[#F7F8F7] dark:text-white text-gray-700">
              {`${percentage}x`}
            </div>
          </div>
            <button className='px-6 py-2 bg-[#0Cf3c4] rounded-lg text-green-900'>Confirm</button>
          </div>
    </div>
</div>
</>
  )
}

export default Popup;