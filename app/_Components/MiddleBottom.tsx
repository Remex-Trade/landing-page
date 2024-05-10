"use client"
import React, { useContext, useState } from "react";
import { FaBox } from "react-icons/fa";
import theme from "../_context/theme";

const MiddleBottom = () => {
  const [selected, setSelected] = useState(0);
  const arr1 = ["Position(0)", "Open Orders(0)", "Order history(0)"];
  const {darkMode} = useContext(theme);
  const arr2 = [
    [
      "Symbol",
      "Position Size",
      "Liq Rate",
      "Margin Ration",
      "TP/SL",
      "Entry Price",
      "Floating PNL",
      "Close",
      "Detail",
    ],
    [
        "Time",
        "Symbol",
        "Status",
        "Leverage",
        "Price",
        "Size",
        "Side",
        "Type",
        "Operate"
    ],
    [
        "Time",
        "Symbol",
        "Leverage",
        "Trading Price",
        "Size",
        "Type",
        "Margin",
        "Fee",
        "Total PNL",
    ]
  ];
  return (
    <>
      <div className="flex w-full gap-4 sc1:gap-10 p-8 py-6 text-black">
        {arr1.map((value, index) => {
          return (
            <button
              className={`text-sm dark:text-slate-100 px-3 py-1 sc1:py-2 rounded-lg ${
                index == selected && "dark:bg-[#2c2d2d] bg-[#F4F5F4] dark:text-white font-bold"
              }`}
              onClick={() => setSelected(index)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="h-[60%] sc1:h-[90%] w-full px-8 text-center ">
        <div className=" gap-4 grid-cols-9 border-b-2 dark:border-b-[#2c2d2d] sc1:grid hidden ">
      {arr2[selected].map((value) => {
        return <div className="text-[0.9rem] text-black dark:text-white">{value}</div>;
      })}
    </div>
      <div className="h-full w-full flex flex-col gap-4 justify-center items-center">
        <FaBox size={50} color={`${darkMode?'white':'grey'}`} />
        <div className="text-black dark:text-white">No Data</div>
      </div>
      </div>
    </>
  );
};

export default MiddleBottom;
