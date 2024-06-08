"use client";
import Image from "next/image";
import React, { useState } from "react";

const page = () => {
  const [selectedButton, setSelectedButton] = useState("stake");
  const [inputVal, setInputVal] = useState(0);
  return (
    <div className="w-full h-screen flex flex-col items-center py-10 justify-start bg-[#120E1B] gap-5">
      <div className="md:text-5xl text-2xl font-bold flex gap-2" id="heading1">
        <span>GNS Pool</span>
        <div className="w-fit rounded-lg bg-[#120E1B] border border-purple-700 text-purple-700  text-[0.9rem] md:text-sm flex items-center justify-center px-1 md:px-4 gap-2">
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_544_313)">
              <path
                d="M1.95703 5.472V12.528C1.95703 12.9816 2.19463 13.392 2.59063 13.6224L8.70343 17.1504C9.09223 17.3736 9.57463 17.3736 9.96343 17.1504L16.0762 13.6224C16.465 13.3992 16.7098 12.9816 16.7098 12.528V5.472C16.7098 5.0184 16.4722 4.608 16.0762 4.3776L9.96343 0.849605C9.57463 0.626405 9.09223 0.626405 8.70343 0.849605L2.59063 4.3776C2.20183 4.6008 1.96423 5.0184 1.96423 5.472H1.95703Z"
                fill="#213147"
              />
              <path
                d="M10.6618 10.368L9.79061 12.7584C9.76901 12.8232 9.76901 12.8952 9.79061 12.9672L11.2882 17.0784L13.0234 16.0776L10.9426 10.368C10.8922 10.2384 10.7122 10.2384 10.6618 10.368Z"
                fill="#12AAFF"
              />
              <path
                d="M12.4114 6.3504C12.361 6.2208 12.181 6.2208 12.1306 6.3504L11.2594 8.7408C11.2378 8.8056 11.2378 8.8776 11.2594 8.9496L13.7146 15.6816L15.4498 14.6808L12.4114 6.3576V6.3504Z"
                fill="#12AAFF"
              />
              <path
                d="M9.33014 1.116C9.37334 1.116 9.41654 1.1304 9.45254 1.152L16.0621 4.968C16.1413 5.0112 16.1845 5.0976 16.1845 5.184V12.816C16.1845 12.9024 16.1341 12.9888 16.0621 13.032L9.45254 16.848C9.41654 16.8696 9.37334 16.884 9.33014 16.884C9.28694 16.884 9.24374 16.8696 9.20774 16.848L2.59814 13.032C2.51894 12.9888 2.47574 12.9024 2.47574 12.816V5.1768C2.47574 5.0904 2.52614 5.004 2.59814 4.9608L9.20774 1.1448C9.24374 1.1232 9.28694 1.1088 9.33014 1.1088V1.116ZM9.33014 0C9.09254 0 8.86214 0.0576 8.64614 0.18L2.03654 3.996C1.61174 4.2408 1.35254 4.6872 1.35254 5.1768V12.8088C1.35254 13.2984 1.61174 13.7448 2.03654 13.9896L8.64614 17.8056C8.85494 17.928 9.09254 17.9856 9.33014 17.9856C9.56774 17.9856 9.79814 17.928 10.0141 17.8056L16.6237 13.9896C17.0485 13.7448 17.3077 13.2984 17.3077 12.8088V5.1768C17.3077 4.6872 17.0485 4.2408 16.6237 3.996L10.0069 0.18C9.79814 0.0576 9.56054 0 9.32294 0H9.33014Z"
                fill="#9DCCED"
              />
              <path
                d="M4.95215 15.6888L5.56415 14.0184L6.78815 15.0336L5.64335 16.0848L4.95215 15.6888Z"
                fill="#213147"
              />
              <path
                d="M8.76897 4.6368H7.09137C6.96897 4.6368 6.85377 4.716 6.81057 4.8312L3.21777 14.6808L4.95297 15.6816L8.91297 4.8312C8.94897 4.7304 8.87697 4.6296 8.77617 4.6296L8.76897 4.6368Z"
                fill="white"
              />
              <path
                d="M11.7069 4.6368H10.0293C9.90693 4.6368 9.79173 4.716 9.74853 4.8312L5.64453 16.0776L7.37973 17.0784L11.8437 4.8312C11.8797 4.7304 11.8077 4.6296 11.7069 4.6296V4.6368Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_544_313">
                <rect
                  width="18"
                  height="18"
                  fill="white"
                  transform="translate(0.330078)"
                />
              </clipPath>
            </defs>
          </svg>
          5.42% APY
        </div>
      </div>
      <div
        id="heading2"
        className="flex flex-col md:flex-row gap-2 md:gap-8 w-full md:w-[60%] items-center justify-center px-4 md:text-center"
      >
        <div className="flex flex-row md:flex-col gap-2 justify-between w-full md:justify-center">
          <span className="text-sm underline underline-dotted text-gray-200 ">
            TVL
          </span>
          <span className="text-white font-bold text-lg">$88,076,435</span>
        </div>
        <div className="flex flex-row md:flex-col gap-2 justify-between w-full md:justify-center">
          <span className="text-sm underline underline-dotted text-gray-200">
            GNS Price
          </span>
          <span className="text-white font-bold text-lg">$3.35</span>
        </div>
        <div className="flex flex-row md:flex-col gap-2  justify-between w-full md:justify-center">
          <span className="text-sm underline underline-dotted text-gray-200 ">
            Market Cap
          </span>
          <span className="text-white font-bold text-lg">$113,215,375</span>
        </div>
      </div>
      <div id="boxes" className="flex gap-4 md:gap-8 w-full md:w-[90%] sc1:w-[60%] mt-10 h-fit flex-col md:flex-row px-1">
        <div id="box1set" className="flex gap-0 md:gap-5 w-full flex-col h-full">
          <div
            id="box12"
            className="bg-[#21212d] border border-[#161221] rounded-t-lg md:rounded-xl px-8 py-4 w-full flex flex-col gap-2 h-full"
          >
            <span className="text-white text-xl font-bold">Your Stake</span>
            <div className="flex justify-between w-full text-gray-400 text-sm">
              <span>Staked</span>
              <span>0</span>
            </div>
            <div className="flex justify-between w-full text-gray-400 text-sm">
              <span>APR</span>
              <span>0.00%</span>
            </div>
            <div className="w-full flex items-center justify-end mt-5">
              <button
                className="text-sm rounded-md px-2 py-1 bg-gray-500 text-white"
                disabled
              >
                Harvest
              </button>
            </div>
          </div>
          <div
            id="box11"
            className="bg-[#21212d] border border-[#161221] rounded-b-lg md:rounded-xl px-8 py-4 w-full flex flex-col gap-2 h-full"
          >
            <span className="text-white text-xl font-bold">
              Pending Rewards ($0.00)
            </span>
            <div className="flex justify-between w-full text-gray-400 text-sm">
              <span>FTM</span>
              <div className="flex gap-2">
                <span className="text-white">0</span>
                <Image
                  src="/Images/crypto/ftm.png"
                  width={20}
                  height={20}
                  alt="fantom"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="flex justify-between w-full text-gray-400 text-sm">
              <span>ETH</span>
              <div className="flex gap-2">
                <span className="text-white">0</span>
                <Image
                  src="/Images/crypto/eth.png"
                  width={20}
                  height={20}
                  alt="fantom"
                  className="rounded-full"
                />
              </div>
            </div>

            <div className="flex justify-between w-full text-gray-400 text-sm">
              <span>DAI</span>
              <div className="flex gap-2">
                <span className="text-white">0</span>
                <Image
                  src="/Images/crypto/dai.svg"
                  width={20}
                  height={20}
                  alt="fantom"
                  className="rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          id="box2set"
          className="bg-[#21212d] border border-[#161221] rounded-xl px-8 py-4 w-full flex flex-col gap-2"
        >
          <div className="text-xl text-white font-bold">
            <span>Stake</span>
          </div>
          <div className="text-sm text-gray-400 flex flex-col gap-1">
            <span>
              Stake your GNS to earn a share of protocol revenue in DAI, WETH
              and USDC. Approximately 60% of all fees are currently directed to
              the GNS staking pool.
            </span>
            <span>
              Rewards are accrued on the contract and must be claimed. You will
              see the option to harvest them in your stats section above.
            </span>
          </div>
          <div className="w-full flex items-center justify-center gap-1 text-sm  rounded-sm">
            <div className="text-sm flex items-center justify-center w-fit rounded-md bg-black">
              <button
                className={`px-4 py-2 rounded-md border border-black ${
                  selectedButton === "stake" ? "bg-[#21212d]" : "bg-black"
                } `}
                onClick={() => {
                  setSelectedButton("stake");
                }}
              >
                Stake
              </button>
              <button
                className={`px-4 py-2 rounded-md border border-black ${
                  selectedButton === "unstake" ? "bg-[#21212d]" : "bg-black"
                }`}
                onClick={() => {
                  setSelectedButton("unstake");
                }}
              >
                Unstake
              </button>
            </div>
          </div>
          <div className="w-full flex items-center justify-center flex-col">
            <div className=" flex flex-col w-full rounded-lg bg-[#191B23] border border-black px-4 py-2">
              <div
                id="text"
                className="text-gray-400 gap-2 w-full flex text-[0.8rem] justify-between items-center"
              >
                <span>Amount</span>
                <span className="">0</span>
              </div>
              <div
                id="input"
                className="flex w-full justify-between items-center pr-4"
              >
                <input
                  type="text"
                  className="bg-transparent text-lg text-white outline-none"
                  value={inputVal}
                  onChange={(e) => setInputVal(+e.target.value)}
                />
                <span className="text-lg">GNS</span>
              </div>
            </div>
            <div className="w-full flex items-center justify-end mt-5">
              <button className="bg-[#3B1A91] text-white px-4 py-2 rounded-md">
                Approve
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
