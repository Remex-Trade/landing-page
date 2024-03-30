"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Draggable from "react-draggable";

import { IoIosArrowDown } from "react-icons/io";
const OptionUI = ({ option }) => {
  const [percentage, setPercentage] = useState(0); // Initial percentage
  const [isTp, setIsTp] = useState(false);
  const tp = [100, 200, 300, 500];
  const sl = ["None", "-25%", "-30%", "-75%"];
  const handleInputChange = (e) => {
    setPercentage(e.target.value);
  };
  console.log(percentage);
  return (
    <div className="hover:cursor-pointer overflow-hidden">
      
        <div className="flex flex-col px-6 py-8 w-full h-content gap-4 overflow-hidden ">
          {/* Leverage */}
          <div className="bg-[#2C2D2D] w-full rounded-xl h-content py-2 px-4">
            <div className="w-full flex justify-between">
              <div className="flex gap-3 items-center jusitfy-center w-[30%] h-full">
                <Image
                  src="/Images/right1.svg"
                  alt="leverage"
                  height={200}
                  width={200}
                />
                <div className="flex flex-col gap-1">
                  <span className="text-sm">Leverage</span>
                  <span className="text-xl font-bold">20X</span>
                </div>
              </div>
              <div className="mt-auto mb-auto">
                <IoIosArrowDown />
              </div>
            </div>
          </div>
          {option==="Conditional" &&(
            <>
            <div className="bg-[#2C2D2D] px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
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
               <div className="bg-[#2C2D2D] px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
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
          <div className="bg-[#2C2D2D] px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
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
              <div className="w-full flex justify-between relative items-center h-2 rounded-lg mt-5 bg-[#2c2d2d]">
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
                  className={`absolute z-0 bg-[#0CF3C4] h-2 rounded-lg `}
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

            <div className="w-[30%] rounded-md border-[1px] justify-center items-center flex border-gray-800 h-10 bg-[#171716] ">
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
              className="bg-gray-500 text-[#Ocf334]"
            />
            <label htmlFor="TP/SL" className="font-sm">
              TP/SL
            </label>
          </div>
          {isTp &&
          <div className="flex flex-col gap-4">
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm text-white">Take Profit</p>
              <div className="flex gap-2 justify-between">
                {tp.map((button) => {
                  return (
                    <button className="px-1 rounded-lg text-[12px] focus:bg-[#262626] hover:bg-[#262626] text-gray-500 focus:text-white ">
                      {button}%
                    </button>
                  );
                })}
                <button className="px-2 py-1 rounded-lg text-[12px] bg-[#262626] text-gray-500 ">
                  Price
                </button>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <p className="text-sm text-white">Stop Loss</p>
              <div className="flex gap-2">
                {sl.map((button) => {
                  return (
                    <button className="px-1 rounded-lg text-[13px] focus:bg-[#262626] hover:bg-[#262626] text-gray-500 focus:text-white ">
                      {button}
                    </button>
                  );
                })}
                <button className="px-2 py-1 rounded-lg text-[12px] bg-[#262626] text-gray-500 ">
                  Price
                </button>
              </div>
            </div>
          </div>
          }

          {/* Connect wallet */}
          <div className="w-full mt-2">
              <button className="w-full rounded-lg bg-[#0CF3C4] text-[#004679] text-md h-12 "> Connect wallet </button>
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
