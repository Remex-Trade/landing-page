import Image from "next/image";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
const OptionUI = ({ option }) => {
  return (
    <div className="hover:cursor-pointer">
      {option === "Market" && (
        <div className="flex flex-col px-6 py-8 w-full h-content gap-4 ">
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
          <div className="bg-[#2C2D2D] px-4 py-2 w-full rounded-xl h-content flex justify-start gap-4 items-center">
            <Image
              src="/Images/right2.svg"
              alt="trade"
              width={40}
              height={40}
            />
            <div className="flex flex-col h-full gap-1 py-1">
                <div className="flex text-sm items-center gap-2">Order By Value 
                    <IoIosArrowDown/>
                </div>
                <span className="text-xl font-bold">0</span>
                <div className="text-sm text-[#4f4f4f]">
                    Avbl: 0.00 USDT
                </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OptionUI;
