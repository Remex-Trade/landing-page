import React from "react";
import { FaFire } from "react-icons/fa";
import Image from "next/image";
import Chart from "@/app/_Components/Chart";
import Sidebar from "../../_Components/Sidebar"
const page = () => {
  return (
    <div className="flex">
      <div
        id="sidebar"
        className="h-full mb-10 rounded-b-xl w-[20vw] bg-[#151415] border-[#2C2D2D] border-[1px]"
      >
        <Sidebar/>
      </div>
      <div className="w-[80vw] h-[100vh]">
        <div className="w-full flex h-[4vh] px-4 gap-10 items-center py-4 bg-[#151415] border-[#2C2D2D] border-[1px]">
          <FaFire color="orange" />
          <div>
            BTC/USD
            <span className="text-green-200">+0.15%</span>
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
            <span className="text-green-200">+0.15%</span>
          </div>
        </div>

        <div className="flex">

          <div className="flex flex-col h-[92vh] justify-center items-start m-8 gap-10 ">
            <div
              id="middle-top"
              className=" rounded-xl flex gap-2 flex-col bg-[#151415] border-[#2C2D2D] border-[1px] w-[55vw] h-full"
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
                <Chart/>
              </div>
            </div>
            <div
              id="middle-bottom"
              className="rounded-xl bg-[#151415] border-[#2C2D2D] border-[1px] w-[55vw] h-[46vh]"
            ></div>
          </div>
          <div id="right-order fixed inset-y-0">
            <div className="mt-10 bg-[#151415] border-[#2C2D2D] rounded-xl border-[1px] h-[70vh] sticky w-[20vw]">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
