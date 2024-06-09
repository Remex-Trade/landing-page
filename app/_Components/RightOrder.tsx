"use client";
import React, { useState } from "react";
import OptionUI from "./OptionUI";

const RightOrder = ({
  showPopup,
  setShowPopup,
  setShowOption,
  showOption,
  option,
}) => {
  const [selected, setSelected] = useState(option);
  const [tradeType, setTradeType] = useState("Market");
  const buttons = ["Long", "Short"];
  const options = ["Market", "Limit", "Conditional"];
  return (
    <>
      <div className="flex w-full sc1:w-full h-100 sticky top-0 text-sm">
        {buttons.map((button) => {
          return (
            <button
              className={`w-full px-4 py-2 text-sm sc1:text-lg  font-bold ${
                button === "Long" && selected === "Long"
                  ? "dark:bg-[#022921] bg-[#E6F9F3] text-[#0CF3C4] border-b-4 border-b-[#0cf3c4]"
                  : button === "Short" && selected === "Short"
                  ? "text-red-700 bg-[#FDEDEF] dark:bg-[#291B1A] border-b-4 border-b-red-700"
                  : "dark:text-[#4F4F4F] text-[#9CA3AF] bg-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D] border-[#9CA3AF ] border-b-2"
              }`}
              onClick={() => {
                setSelected(button);
              }}
            >
              {button}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between sticky top-12 dark:bg-[#0F0E0E]  bg-white text-black h-31 px-4 w-full sc1:w-full text-[0.85rem] h-100 dark:text-[#4F4F4F] gap-6">
        <div className="flex items-center gap-2 py-2 w-full justify-center">
          {options.map((option) => {
            return (
              <button
                className={`${
                  option === tradeType
                    ? "h-full py-2 dark:text-white bg-black font-bold text-black dark:border-[#211E28] border-2 "
                    : "h-full py-2 text-neutral-500 bg-[#0F0F12] dark:border-[#211E28] border-2"
                } px-4 rounded-lg my-2 w-full`}
                onClick={() => setTradeType(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
        {/* <button className="sc1:hidden"><IoIosClose size={30} onClick={()=>setShowOption(!showOption)}/></button> */}
      </div>
      <OptionUI
        showPopup={showPopup}
        setShowPopup={setShowPopup}
        option={tradeType}
        topOption={selected}
      />
    </>
  );
};

export default RightOrder;
