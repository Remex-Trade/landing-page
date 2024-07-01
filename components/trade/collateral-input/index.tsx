import React from "react";
import { SetTradeDataWithKey, TradeData } from "../types";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";

type Props = { setTradeData: SetTradeDataWithKey; tradeData: TradeData };

export default function CollatoralInput({ setTradeData, tradeData }: Props) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-full bg-[#D4D4D4] dark:bg-black flex flex-col px-4 gap-2 py-3 rounded-xl border dark:border-[#161623]  sc1:text-[0.7rem]">
        <div className="flex w-full justify-between items-center font-bold dark:font-normal">
          <div className="text-black dark:text-slate-300 ">
            Collateral<span className="text-gray-500 dark:text-slate-400">(33.4-1.03M)</span>
          </div>
          <div className="text-black dark:text-slate-300">Get Collateral</div>
        </div>
        <div className="flex w-full justify-center items-center">
          <input
            type="number"
            className="text-3xl sc1:text-2xl h-full w-[70%] font-bold bg-transparent outline-none text-black dark:text-white"
            value={tradeData.daiToken}
            onChange={(e) => setTradeData("daiToken", e.target.value)}
          />
          <div className="flex justify-center sc1:w-[30%] w-[25%] items-center dark:text-white text-black">
            <Image
              src="/Images/crypto/dai.svg"
              width={25}
              height={25}
              alt="collateral"
            />
            <span className="w-full text-center text-lg font-bold ">DAI</span>
            <FaChevronDown />
          </div>
        </div>
      </div>
    </div>
  );
}
