"use client";
import React, { useState } from "react";
import OptionUI from "./OptionUI";

const RightOrder = () => {
  const [selected, setSelected] = useState("Long");
  const [selectedOption, setSelectedOption] = useState("Market");
  const buttons = ["Long", "Short"];
  const options = ["Market", "Limit", "Conditional"];
  return (
    <>
      <div className="w-full flex h-100 sticky top-0">
        {buttons.map((button) => {
          return (
            <button
              className={`w-full px-4 py-2 text-lg font-bold ${
                (button==="Long"&& selected==="Long")
                  ?"dark:bg-[#022921] bg-[#E6F9F3] text-[#0CF3C4] border-b-4 border-b-[#0cf3c4]"
                  : (button==="Short" && selected==="Short")?"text-red-700 bg-[#FDEDEF] dark:bg-[#291B1A] border-b-4 border-b-red-700":"dark:text-[#4F4F4F] text-[#9CA3AF] bg-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D] border-[#9CA3AF ] border-b-2"
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
      <div className="sticky top-12 dark:bg-[#0F0E0E] bg-white text-black h-31 px-4 w-full text-[0.8rem] h-100 dark:text-[#4F4F4F] border-b-[1px] dark:boder-2 border-b-[#9CA3AF] dark:border-b-[#2C2D2D] flex gap-6 ">
        {options.map((option) => {
          return (
            <button
              className={`${
                option === selectedOption
                  ? "h-full py-2 dark:text-white text-black border-b-black border-b-[1px] dark:border-b-white"
                  : "h-full py-2 text-[#9CA3AF]"
              }`}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </button>
          );
        })}
      </div>
      <OptionUI option={selectedOption}/>
    </>
  );
};

export default RightOrder;
