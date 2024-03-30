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
      {show?<div
        id="sidebar"
        className="h-[100vh] overflow-hidden mb-10 rounded-b-xl w-[20vw] bg-[#0F0E0E] border-[#2C2D2D] border-[1px]"
      >
        <Sidebar getShow={getShow}/>
      </div>:
      <div className='mt-[4vw] bg-[#0F0E0E] border-[#2C2D2D] border-[1px] w-[5vw] h-[2vw] absolute  rounded-r-lg'>
          <div className='flex gap-3 mt-2 ml-2 mr-2' onClick={()=>setShow(true)}>
            <div>Pairs</div>
            <RxHamburgerMenu className='mt-1'/>
          </div>
      </div>}
      <div className="w-full h-[100vh]">
        <div className="w-full sticky top-[50px] flex h-[5vh] px-4 gap-10 items-center py-4 bg-[#0F0E0E] border-[#2C2D2D] border-[1px]">
          <FaFire color="orange" />
          <div>
            BTC/USD
            <span className="text-[#0cf3c4]">+0.15%</span>
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
            <span className="text-[#0cf3c4]">+0.15%</span>
          </div>
        </div>

        <div className="flex w-full h-full">
          <div className="flex flex-col mr-[18vw] h-full w-full justify-start items-start my-8 mx-4 gap-4">
            <div
              id="middle-top"
              className=" rounded-xl flex gap-2 flex-col bg-[#0F0E0E] border-[#2C2D2D]  border-[1px] w-full  h-[48vh] "
            >
              <div className="h-[20%] px-8 py-2 flex gap-8 justify-start items-center">
                <Image src="/Images/SOL.svg" width={70} height={70} className="rounded-full h-100 w-100" />
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md">SQL/USD</span>
                  <span className="text-green-400 font-bold text-lg">192.73</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md">24h Change</span>
                  <span className="text-green-400 text-md">+18.866%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md underline">Open Interest(I)</span>
                  <span className="text-md">161,897/507,020</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md underline">Open Interest(II)</span>
                  <span className="text-md">38,349/628,079</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md underline">Funding</span>
                  <span className="text-green-400 text-md">0.0030%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md underline">Borrowing Rate</span>
                  <span className="text-green-400 text-md">0.0021%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-white text-md">24h volume(USDT)</span>
                  <span className="text-sm">3,039,440.17</span>
                </div>

              </div>
              <div>
              
                <Charts show={show}/>
              
              </div>
            </div>
            <div
              id="middle-bottom"
              className="flex flex-col gap-1 justify-center rounded-xl bg-[#0F0E0E] border-[#2C2D2D] border-[1px] w-full h-[42vh]"
            >
               <MiddleBottom/>
            </div>
          </div>
          <div id="right-order" className="h-[100vh] fixed right-0 mr-6">
            <div className=" overflow-y-auto scrollable mt-10 bg-[#0F0E0E] border-[#2C2D2D] rounded-xl border-[1px] h-[77vh] w-[16vw]">
                <RightOrder/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
