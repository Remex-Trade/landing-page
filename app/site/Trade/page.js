"use client"
import React, { useState } from 'react';
import { FaBox, FaFire } from "react-icons/fa";
import Image from "next/image";
import dynamic from "next/dynamic";
import Charts from "@/app/_Components/Chart";
import Sidebar from "../../_Components/Sidebar"
import MiddleBottom from "@/app/_Components/MiddleBottom";
import RightOrder from "@/app/_Components/RightOrder";

import { RxHamburgerMenu } from "react-icons/rx";
const page = () => {
  const [show,setShow]=useState(true);
  const getShow=(data)=>{
      setShow(data)
  }
  
  return (
    <div className="flex">
      <div className=''>
      {show?<div
        id="sidebar"
        className="h-[100vh] bg-[#F7F7F8] text-black overflow-hidden rounded-b-xl w-[20vw] dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-xl dark:border-[1px]"
      >
        <Sidebar getShow={getShow}/>
      </div>:
      <div className='bg-white mt-[4vw] bg-[#F7F7F8] dark:bg-[#0F0E0E] text-black dark:text-white dark:border-[#2C2D2D] border-[1px] w-[5vw] h-[2vw] absolute  rounded-r-lg'>
          <div className='flex gap-3 mt-2 ml-2 mr-2' onClick={()=>setShow(true)}>
            <div>Pairs</div>
            <RxHamburgerMenu className='mt-1'/>
          </div>
      </div>}
      </div>
      <div className=" w-full h-[100vh]">
        <div className="bg-white dark:bg-[#0f0e0e] w-full sticky top-[50px] text-black dark:text-white flex h-[5vh] px-4 gap-10 items-center py-4 dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-sm dark:border-[1px]">
          <FaFire color="orange" />
          <div>
            BTC/USD
            <span className="text-green-600 dark:text-[#0cf3c4]">+0.15%</span>
          </div>

          <div>
            ETH/USD
            <span className="text-red-500">-0.15%</span>
          </div>

          <div>
            SOL/USD
            <span className="text-red-500">-0.15%</span>
          </div>

          <div>
            TIA/USD
            <span className="text-green-600 dark:text-[#0cf3c4]">+0.15%</span>
          </div>
        </div>

        <div className="flex w-full h-full gap-2 bg-[#F7F7F8] dark:bg-black">
          <div className="flex flex-col mr-[18vw] h-full w-full justify-start  items-start m-8 gap-4">
            <div
              id="middle-top"
              className=" w-full rounded-xl flex gap-2 flex-col  bg-white text-black dark:text-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D]  dark:border-[1px] shadow-md h-[48vh] "
            >
              <div className="w-full h-[20%] px-8 py-2 flex gap-8 justify-start items-center">
                <Image src="/Images/SOL.svg" width={50} height={50} className="rounded-full h-100 w-100" />
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.8rem] dark:text-white ">SQL/USD</span>
                  <span className="text-green-600  font-bold text-md">192.73</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="ext-black text-[0.8rem] dark:text-white ">24h Change</span>
                  <span className="text-green-600  text-[0.8rem]">+18.866%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="ext-black text-[0.8rem] dark:text-white  underline">Open Interest(I)</span>
                  <span className="text-s[0.8rem]">161,897/507,020</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.8rem]  dark:text-white underline">Open Interest(II)</span>
                  <span className="text-[0.8rem]">38,349/628,079</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="ext-black text-[0.8rem] dark:text-white underline">Funding</span>
                  <span className="text-green-600  text-[0.8rem]">0.0030%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.8rem]  dark:text-white underline">Borrowing Rate</span>
                  <span className="text-green-600  text-[0.8rem]">0.0021%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.8rem]  dark:text-white">24h volume(USDT)</span>
                  <span className="text-[0.8rem]">3,039,440.17</span>
                </div>

              </div>
              <div>
              
                <Charts show={show}/>
              
              </div>
            </div>
            <div
              id="middle-bottom"
              className="flex flex-col gap-1 justify-center rounded-xl dark:bg-[#0F0E0E] bg-white dark:border-[#2C2D2D] shadow-lg border-[1px] w-full h-[42vh]"
            >
               <MiddleBottom/>
            </div>
          </div>
          <div id="right-order" className="h-[100vh] fixed right-4">
            <div className=" overflow-y-auto  mt-10 dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-lg rounded-xl border-[1px] h-[77vh] w-[16vw]">
                <RightOrder/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
