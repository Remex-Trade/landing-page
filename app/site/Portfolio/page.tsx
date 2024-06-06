"use client";

import React, { useState } from "react";
import { useAccount } from "wagmi";
import WalletsProvider from "../../_Components/Wallet";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const page = () => {
  const { address } = useAccount();
  const [selected, setSelected] = useState("Position");
  const [dropdown,setDropdown] = useState(false);
  return (
    <div className="w-full h-full px-32 py-16 bg-[#101115] min-h-screen">
      <div className=" text-5xl py-8 items-center">Portfolio</div>
      <div className="flex w-full border-b border-b-zinc-800 gap-10 ">
        <button
          className={`text-sm text-neutral-300 py-3  ${selected==="Position" && 'border-b border-b-[#3B1A91]'}`}
          onClick={() => setSelected("Position")}
        >
          Position & Activity
        </button>
        <button
          className={`text-sm text-neutral-300 py-3    ${selected==="Overview" && 'border-b border-b-[#3B1A91]'}`}
          onClick={() => setSelected("Overview")}
        >
          Overview
        </button>
        <button
          className={`text-sm text-neutral-300 py-3  ${selected==="Stats" && 'border-b border-b-[#3B1A91]'}`}
          onClick={() => setSelected("Stats")}
        >
          Stats and Insight
        </button>
      </div>
      {selected === "Position" && (
        <>
          <div className="flex flex-col gap-8 my-10">
            <span>Position & Activities</span>
            <div className="flex border-b border-b-zinc-800">
              <button className="px-6 py-2 border border-gray-800 text-zinc-700 focus:bg-black focus:text-white text-sm">
                All Positions
              </button>
              <button className="px-6 py-2 border border-gray-800 text-zinc-700 focus:bg-black focus:text-white text-sm">
                Activity
              </button>
              <button className="px-6 py-2 border border-gray-800 text-zinc-700 focus:bg-black focus:text-white text-sm">
                Highlights
              </button>
            </div>
          </div>
          {!address ? (
            <div className="w-full flex justify-center items-center">
              <WalletsProvider />
            </div>
          ) : (
            <>
              <div className="flex border-b border-b-zinc-800 w-full justify-between">
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Pair
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  POS Size
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Collateral
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Open Prize
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Liq Prize
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Equity Value
                </button>
                <button className="px-6 py-2 text-zinc-600 text-sm">
                  Action
                </button>
              </div>
              <div className="w-full py-4 flex justify-center flex-col items-center gap-3">
                <Image
                  className="grayscale opacity-10"
                  src="/transaction.svg"
                  width={150}
                  height={150}
                  alt="No transaction"
                />
                <span className="text-gray-800">No transactions</span>
              </div>
            </>
          )}
        </>
      )}

      {selected === "Stats" && (
        <div  id="portfolio stats"  className="w-full h-full py-6 flex justify-center flex-col ">
          <div className="my-2">
            <span className="text-gray-500">Portfolio Stats</span>
          </div>
          <div className="border border-gray-800 rounded-xl flex px-8 py-10  w-full justify-center gap-20 items-center">
            <div className="flex w-full items-center gap-2">
                <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/shield.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">
                  Loss Protection Rebate
                </span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/box.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Total Trades</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/line-chart-down.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Average PnL</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/percentage.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Win Rate</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
            <div className="flex  w-full items-center gap-2">
            <div className="w-fit h-fit rounded-full border border-gray-800 bg-gray-900 p-1 flex items-center justify-center">
                <Image src="/Images/stats/bar-chart-2.svg" width={30} height={30} alt="shield"/>
                </div>
              <div className="flex flex-col">
                <span className="text-gray-500 text-md">Total Fees</span>
                <span className="text-white text-2xl">N/A</span>
              </div>
            </div>
          </div>
          <div id="asset stat" className="flex flex-col gap-4 my-6">
            <div className="text-md text-gray-500">
                <span>Asset Stats</span>
            </div>
            <div className="flex gap-6">
                <div className="bg-[rgb(16,17,21)] rounded-2xl border border-zinc-800 text-xl font-bold w-full">
                    <div className="p-10 border-b border-b-zinc-800">Trade By Asset</div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                </div>
                <div className="bg-[rgb(16,17,21)] rounded-2xl border border-zinc-800 text-xl font-bold w-full">
                    <div className="p-10 border-b border-b-zinc-800">Cummulative PnL by asset</div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                </div>
                <div className="bg-[rgb(16,17,21)] rounded-2xl border border-zinc-800 text-xl font-bold w-full">
                    <div className="p-10 border-b border-b-zinc-800">Win rate by asset class</div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                    <div className="p-10 border-b border-b-zinc-800"></div>
                </div>
            </div>
          </div>
        </div>
      )}
      {selected === "Overview" &&(
        <>
            <div className="w-ful flex items-center gap-10 justify-center my-10">
                <div className="flex flex-col gap-6 w-[40%]">
                    <span>Portfolio Details</span>
                <div className="w-full rounded-xl border border-zinc-800 flex-col">
                    <div className="py-8 px-10 flex flex-col gap-3 border-b border-b-zinc-800">
                        <span className="text-gray-200 text-[0.9rem]">Active portfolio value</span>
                        <div className="flex gap-2 text-4xl">
                            <span className="text-gray-300 font-bold">$</span>
                            <span className="text-white font-bold">0.000</span>
                            <span className="text-green-500 text-[0.9rem] flex items-center">0.000% <FaChevronUp/></span>
                        </div>
                    </div>
                    <div className="py-8 px-10 flex flex-col gap-3 border-b border-b-zinc-800">
                        <span className="text-gray-200 text-[0.9rem] px-6 py-3 border border-zinc-800 rounded-xl w-fit flex  items-center gap-2">PnL Today <FaChevronDown/></span>
                        <div className="flex gap-2 text-4xl">
                            <span className="text-white font-bold">NA</span>
                            <span className="text-green-500 text-[0.9rem] flex items-center">NaN% <FaChevronUp/></span>
                        </div>
                    </div>
                    <div className="py-8 px-10 flex flex-col gap-3 border-b border-b-zinc-800">
                        <span className="text-gray-200 text-[0.9rem]">Total Volume</span>
                        <div className="flex gap-2 text-4xl">
                            <span className="text-white font-bold">NA</span>
                        </div>
                    </div>
                </div>
                </div>
                <div className="flex flex-col gap-6 w-full ">
                <span>Live PnL Chart</span>
                <div className="w-full rounded-xl border border-zinc-800 flex-col">

                </div>
                </div>
            </div>
        </>
      )}
    </div>
  );
};

export default page;
