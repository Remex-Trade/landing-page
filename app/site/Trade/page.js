"use client"
import React, { useContext, useState } from 'react';
import { FaBox, FaFire } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "../../_Components/Sidebar"
import MiddleBottom from "../../_Components/MiddleBottom";
import RightOrder from "../../_Components/RightOrder";
import Chart from "../../_Components/Chart";
import Popup from "../../_Components/Popup";

import { RxHamburgerMenu } from "react-icons/rx";
import userContext from '../../_context/userContext';
const page = () => {
  const [show,setShow]=useState(true);
  const[showPopup, setShowPopup] = useState(false);
  const {data,setData} = useContext(userContext);
 
  const handleClose = () => {
    setShowPopup(false);
  };
  const handleShow = () => {
    setShowPopup(true);
  };
  const getShow=(data)=>{
      setShow(data)
  }
  return (
    <>{showPopup &&
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    }
    <div className="flex text-sm    ">
      <div className='basis-1/5 bg-white dark:bg-none'>
      {show?<div
        id="sidebar"
        className="h-[100vh] bg-[#F7F7F8] text-black overflow-hidden rounded-b-xl w-full dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-xl dark:border-[1px]"
      >
        <Sidebar getShow={getShow}/>
      </div>:
      <div className='bg-white mt-[4vw] bg-[#F7F7F8] dark:bg-[#0F0E0E] text-black dark:text-white dark:border-[#2C2D2D] border-[1px] w-[10%] h-[2vw] absolute  rounded-r-lg'>
          <div className='flex gap-3 mt-2 ml-2 mr-2' onClick={()=>setShow(true)}>
            <div>Pairs</div>
            <RxHamburgerMenu className='mt-1'/>
          </div>
      </div>}
      </div>
      <div className=" basis-4/5  h-[100vh]">
        <div className="text-[0.8rem] bg-white dark:bg-[#0f0e0e] w-full sticky top-[50px] text-black dark:text-white flex h-fit px-4 gap-10 items-center py-2 dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-sm dark:border-[1px]">
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

        <div className="flex w-full h-full bg-[#F7F7F8] dark:bg-black">
          <div className="flex flex-col h-full w-[68%]  m-8 mr-0 justify-start  items-start  gap-6">
            <div
              id="middle-top"
              className=" w-full rounded-xl flex gap-2 flex-col bg-white text-black dark:text-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D]  dark:border-[1px] shadow-md h-fit "
            >
              <div className="w-full h-[20%] px-8 py-4 flex gap-8  text-[0.7rem] justify-start items-center">
                <Image src="/Images/SOL.svg" width={50} height={50} className="rounded-full h-100 w-100" />
                <div className="flex flex-col gap-1">
                  <span className="text-black dark:text-white ">SQL/USD</span>
                  <span className="text-green-600  font-bold">192.73</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="ext-black  dark:text-white ">24h Change</span>
                  <span className="text-green-600  ">+18.866%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="ext-black  text-[0.7rem] dark:text-white  underline">Open Interest(I)</span>
                  <span className="text-[0.7rem]">161,897/507,020</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.7rem]  dark:text-white underline">Open Interest(II)</span>
                  <span className="text-[0.7rem]">38,349/628,079</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="ext-black text-[0.7rem] dark:text-white underline">Funding</span>
                  <span className="text-green-600  text-[0.7rem]">0.0030%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.7rem]  dark:text-white underline">Borrowing Rate</span>
                  <span className="text-green-600  text-[0.7rem]">0.0021%</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-black text-[0.7rem]  dark:text-white">24h volume(USDT)</span>
                  <span className="text-[0.7rem]">3,039,440.17</span>
                </div>

              </div>
              <div>
              
                <Chart show={show}/>
              
              </div>
            </div>
            <div
              id="middle-bottom"
              className="flex flex-col gap-1 justify-center rounded-xl dark:bg-[#0F0E0E] bg-white dark:border-[#2C2D2D] shadow-lg border-[1px] w-full h-full"
            >
               <MiddleBottom/>
            </div>
          </div>
          <div id="right-order" className="h-[100vh] right-6 fixed  w-[20%]">
            <div className=" overflow-y-auto text-sm mt-10  dark:bg-[#0F0E0E]  dark:border-[#2C2D2D] shadow-lg rounded-xl border-[1px] h-[80vh] w-[3/5] ">
                <RightOrder showPopup = {showPopup} setShowPopup = {setShowPopup} />
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
};

export default page;
