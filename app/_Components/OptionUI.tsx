"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { IoIosArrowDown } from "react-icons/io";
import WalletsProvider from "./Wallet";
import userContext from "../_context/userContext";
import { FaChevronDown } from "react-icons/fa";

const OptionUI = ({ option,topOption,showPopup,setShowPopup}) => {
  const [percentage, setPercentage] = useState(0); // Initial percentage
  const {user,data} = useContext(userContext);
  const [isTp, setIsTp] = useState(false);
  const tp = [100, 200, 300, 500];
  const sl = ["None", "-25%", "-30%", "-75%"];
  const handleInputChange = (e) => {
    setPercentage(Math.round(e.target.value));
  };
  return (
    <div className="bg-white text-sm dark:bg-[#0f0e0f] hover:cursor-pointer overflow-hidden w-full sc1:w-full ">
        <div className="flex flex-col px-6 py-2 w-full h-content gap-4 overflow-hidden ">
          <div className="w-full h-full flex justify-center items-center">

            {/* Collateral */}
            <div className="w-full bg-black flex flex-col px-4 gap-2 py-3 rounded-xl border border-[#161623]  sc1:text-[0.7rem]">
                <div className="flex w-full justify-between items-center">
                  <div className="text-slate-300 ">Collateral<span className="text-slate-400">(33.4-1.03M)</span></div>
                  <div className="text-slate-300">Get Collateral</div>
                </div>
                <div className="flex w-full justify-center items-center">
                  <input type="number" className="text-3xl sc1:text-2xl h-full w-[70%] font-bold bg-transparent outline-none" value={33.5}/>
                  <div className="flex justify-center sc1:w-[30%] w-[25%] items-center">
                    <Image src="/Images/crypto/dai.svg" width={25} height={25} alt="collateral"/>
                    <span className="w-full text-center text-lg font-bold">DAI</span>
                    <FaChevronDown/>
                  </div>
                </div>
            </div>
          </div>
          {/* Slider */}
          <div className="flex justify-center w-full gap-4">
            <div className="flex flex-col justify-center w-full gap-2 ">
              <div className="w-full flex items-center justify-between">
                <span className="text-sm text-slate-200">Leverage</span>
            <div className="w-[30%] rounded-md border-[1px] justify-center items-center flex dark:border-gray-800 h-10 dark:bg-black bg-[#F7F8F7] dark:text-white text-gray-700">
              {`${percentage}x`}
            </div>
            </div>
              <div className="w-[90%] flex justify-between relative items-center h-3 rounded-lg mt-2 dark:bg-black border border-[#2c2d2d] bg-[#F7F7F8] text-gray-500 dark:text-white">
                <input
                  className="slider z-10 relative transitiion duration-2"
                  id="slider"
                  type="range"
                  step="1"
                  value={percentage}
                  onChange={handleInputChange}
                />
                
                <div className="absolute z-0 flex w-full justify-between">
                  
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  
                </div>
                <div
                  className={`absolute z-0 dark:bg-gradient-to-r dark:from-[#2ACCF6] dark:to-[#6EFECF] h-2 rounded-lg`}
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              <div className="w-[95%] text-[0.7rem] mb-5 text-gray-500 flex h-fit justify-between">
                <span className="">0x</span>
                <span className="">20x</span>
                <span className="">40x</span>
                <span className="">60x</span>
                <span className="">80x</span>
                <span className="">100x</span>
              </div>
            </div>

            
          </div>
          {/*Price*/}
          {option!='Market'&& 
                <div className="w-full flex flex-col">
                    <div className="w-full flex rounded-xl text-slate-300 text-[0.9rem] sc1:text-[0.8rem] justify-between items-center">
                        <div>Price</div>
                        <div>Mark 66634.1</div>
                    </div>
                    <input type="number" value={66634.1} className="w-full rounded-xl px-4 py-2 text-xl sc1:text-lg sc1:px-2 text-white bg-black border-2 border-[#161623]"/> 
                </div>
                }
          {/* Tp/SL */}
          <div className="flex gap-2 items-center">
            
            <input
              type="checkbox"
              id="TP/SL"
              checked={isTp}
              onClick={() => {
                setIsTp(!isTp)
              }}
              className="dark:bg-gray-500 dark:text-[#Ocf334]"
            />
            <label htmlFor="TP/SL" className="text-sm dark:text-white text-gray-600">
              TP/SL
            </label>
          </div>
          {isTp &&
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm text-gray-600 dark:text-white">Take Profit</p>
              <div className="flex gap-2 justify-between">
                <div className="flex gap-4 w-full text-[0.8rem]">
                  <div className="flex gap-2 w-1/5  bg-[#2c2d2d] rounded-md px-2 py-1">
                  <input type="number"  className="bg-transparent w-full outline-none" value={300}/>
                  <span className="text-white">%</span>
                  </div>
                  <div className="flex w-3/5 gap-2 bg-[#2c2d2d]  rounded-md px-2 py-1">
                  <input type="number"  className="bg-transparent outline-none w-full" value={6754.999}/>
                  <span>USD</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm dark:text-white text-gray-600">Stop Loss</p>
              <div className="flex gap-2">
                {sl.map((button) => {
                  return (
                    <button className="px-1 rounded-lg text-[12px] focus:bg-[#F7F7F8] focus:shadow-md hover:bg-[#F7F8F7] dark:focus:bg-[#262626] dark:hover:bg-[#262626] text-gray-500 dark:focus:text-white ">
                      {button}
                    </button>
                  );
                })}
                <button className="px-2 py-1 rounded-lg text-[12px] bg-[#F7F8F8] text-gray-600 dark:bg-[#262626] dark:text-gray-500">
                  Price
                </button>
              </div>
            </div>
          </div>
          }

          {/* Connect wallet */}
          <div className="w-full mt-2 flex items-center justify-center">
          <div >
            {!(user.length>0)?

            <WalletsProvider />:
            <button className={`rounded-lg px-20 py-2 text-lg dark:text-slate-800 font-bold ${topOption==="Long"?'bg-[#0cf3c0]':'bg-red-500'}`}>{topOption==="Long"?
              "Buy/Long":"Sell/Short"}</button>
          }
          </div>
              {/* <button className={`w-full rounded-lg  text-md h-12 ${topOption==="Short"?'bg-red-500 text-white':'bg-[#0CF3C4] text-[#004679]'}`}> Connect wallet </button> */}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2">
          <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Margin</span>
                <span>0.00USD</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Max Open Poisition</span>
                <span>0.000USD</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Est. Execution Price</span>
                <span>196.980</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Spread</span>
                <span>0.00%</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Position Size</span>
                <span>0.00USD</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="">Fees</span>
                <span>0.0000USD</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="">Execution Fee</span>
                <span>0.000012BNB</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline">Liq price</span>
                <span>0</span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default OptionUI;
