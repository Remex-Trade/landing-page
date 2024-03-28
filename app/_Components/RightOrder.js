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
      <div className="w-full flex h-100">
        {buttons.map((button) => {
          return (
            <button
              className={`w-full px-4 py-2 text-lg font-bold ${
                (button==="Long"&& selected==="Long")
                  ? "bg-[#122720] text-[#0A9C72] border-b-2 border-b-[#0A9C72]"
                  : (button==="Short" && selected==="Short")?"text-red-700 bg-[#291B1A] border-b-2 border-b-red-700":"text-[#4F4F4F] border-[#2C2D2D] border-b-2"
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
      <div className="h-30 px-4 w-full text-[0.8rem] h-100 text-[#4F4F4F] border-b-2 border-b-[#2C2D2D] flex gap-6 ">
        {options.map((option) => {
          return (
            <button
              className={`${
                option === selectedOption
                  ? "h-full py-2 text-white border-b-2 border-b-white"
                  : "h-full py-2"
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
