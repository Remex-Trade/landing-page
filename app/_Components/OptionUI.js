"use client";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import Draggable from "react-draggable";
import { IoIosArrowDown } from "react-icons/io";
import WalletsProvider from "./Wallet";
import userContext from "../_context/userContext";

const OptionUI = ({ option,topOption,showPopup,setShowPopup}) => {
  const [percentage, setPercentage] = useState(0); // Initial percentage
  const {user,data} = useContext(userContext);
  const [isTp, setIsTp] = useState(false);
  const tp = [100, 200, 300, 500];
  const sl = ["None", "-25%", "-30%", "-75%"];
  const handleInputChange = (e) => {
    setPercentage(e.target.value);
  };
  console.log(percentage);
  return (
    <div className="bg-white dark:bg-[#0f0e0f] hover:cursor-pointer overflow-hidden">
      
        <div className="flex flex-col px-6 py-8 w-full h-content gap-4 overflow-hidden ">
          {/* Leverage */}
          <div className="dark:bg-[#2C2D2D] bg-[#F7F7F8] text-gray-500 dark:text-white w-full rounded-xl h-content py-2 px-4" 
          onClick={()=>setShowPopup(true)}
          >
            <div className="w-full flex justify-between">
              <div className="flex gap-3 items-center jusitfy-center w-[30%] h-full">
                <Image
                  src="/Images/right1.svg"
                  alt="leverage"
                  height={200}
                  width={200}
                />
                <div className="flex flex-col gap-1" >
                  <span className="text-sm">Leverage</span>
                  <span className="text-xl font-bold">{data.leverage}X</span>
                </div>
              </div>
              <div className="mt-auto mb-auto">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          {option==="Conditional" &&(
            <>
            <div className="dark:bg-[#2C2D2D] bg-[#F7F7F8] text-gray-500 dark:text-white px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
            <Image
              src="/Images/right2.svg"
              alt="trade"
              width={40}
              height={40}
            />
            <div className="flex flex-col h-full gap-1 py-1">
              <div className="flex text-sm items-center gap-2">
                Trigger Price
              </div>
             <div>
                <input className="text-xl font-bold bg-transparent border-none focus:border-none outline-none" type="text"  value={192.58}/>
             </div>
            </div>
             <div className="bg-red-200 ">
              <button className="text-blue-200 text-md bg-transparent outline-none border-none">Last</button>
             </div>
          </div>
            </>
          )}
          
          {option==="Limit" &&(
            <>
               <div className="dark:bg-[#2C2D2D] bg-[#F7F7F8] text-gray-500 dark:text-white px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
            <Image
              src="/Images/right2.svg"
              alt="trade"
              width={40}
              height={40}
            />
            <div className="flex flex-col h-full gap-1 py-1">
              <div className="flex text-sm items-center gap-2">
                Order Price
              </div>
             <div>
                <input className="text-xl font-bold bg-transparent border-none focus:border-none outline-none" type="text"  value={192.58}/>
             </div>
            </div>
          </div>
            </>
          )}
          {/* Trade */}
          <div className="dark:bg-[#2C2D2D] bg-[#F7F7F8] text-gray-500 dark:text-white px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
            <Image
              src="/Images/right2.svg"
              alt="trade"
              width={40}
              height={40}
            />
            <div className="flex flex-col h-full gap-1 py-1">
              <div className="flex text-sm items-center gap-2">
                Order By Value
                <IoIosArrowDown />
              </div>
              <span className="text-xl font-bold">0</span>
              <div className="text-sm text-[#4f4f4f]">Avbl: 0.00 USDT</div>
            </div>
          </div>

          {/* Slider */}
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

          {/* Tp/SL */}
          <div className="flex gap-2 items-center">
            
            <input
              type="checkbox"
              id="TP/SL"
              value={isTp}
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
                {tp.map((button) => {
                  return (
                    <button className="px-1 rounded-lg text-[12px] focus:bg-[#F7F7F8] focus:shadow-md hover:bg-[#F7F8F7] dark:focus:bg-[#262626] dark:hover:bg-[#262626] text-gray-500 dark:focus:text-white ">
                      {button}%
                    </button>
                  );
                })}
                <button className="px-2 py-1 rounded-lg text-[12px] bg-[#F7F8F8] text-gray-600 dark:bg-[#262626] dark:text-gray-500 ">
                  Price
                </button>
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
            {!user.length>0?

            <WalletsProvider />:
            <button className={`rounded-lg px-20 py-2 text-lg text-slate-100 font-bold ${topOption==="Long"?'bg-[#0cf3c4]':'bg-red-500'}`}>{topOption==="Long"?
              "Buy/Long":"Sell/Short"}</button>
          }
          </div>
              {/* <button className={`w-full rounded-lg  text-md h-12 ${topOption==="Short"?'bg-red-500 text-white':'bg-[#0CF3C4] text-[#004679]'}`}> Connect wallet </button> */}
          </div>

          {/* Details */}
          <div className="flex flex-col gap-2">
          <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Margin</span>
                <span>0.00USDT</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="decoration-dotted underline font-bold">Max Open Poisition</span>
                <span>0.000USDT</span>
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
                <span>0.00USDT</span>
            </div>
            <div className="flex w-full text-[12px] text-gray-400 items-center justify-between">
                <span className="">Fees</span>
                <span>0.0000USDT</span>
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
