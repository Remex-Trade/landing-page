"use client"
import React, { useState } from 'react'

const Chart = () => {
  const [stockData,setStockData] = useState([]);
  useEffect(()=>{
    fetchStockData(synmbol);
  },[])
  return (
    <div>
        <div id="time buttons" className='flex gap-5 text-md w-full px-5'>
            <div className='text-md text-slate-200 py-1'>Time</div>
            <button className='px-4 py-1 rounded-xl text-md text-slate-200 focus:text-white focus:bg-[#262626] hover:bg-[#262626]'>15m</button>
            <button className='px-4 py-1 rounded-xl text-md text-slate-200 focus:text-white focus:bg-[#262626] hover:bg-[#262626]'>1hr</button>
            <button className='px-4 py-1 rounded-xl text-md text-slate-200 focus:text-white focus:bg-[#262626] hover:bg-[#262626]'>4hr</button>
            <button className='px-4 py-1 rounded-xl text-md text-slate-200 focus:text-white focus:bg-[#262626] hover:bg-[#262626]'>1d</button>
            <button className='px-4 py-1 rounded-xl text-md text-slate-200 focus:text-white focus:bg-[#262626] hover:bg-[#262626]'>1w</button>
        </div>
        
    </div>
  )
}

export default Chart