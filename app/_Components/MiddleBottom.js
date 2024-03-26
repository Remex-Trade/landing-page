"use client";
import React, { useState } from "react";
import { FaBox } from "react-icons/fa";

const MiddleBottom = () => {
  const [selected, setSelected] = useState(0);
  const arr1 = ["Position(0)", "Open Orders(0)", "Order history(0)"];
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
      <div className="flex w-full gap-10 p-8 py-6">
        {arr1.map((value, index) => {
          return (
            <button
              className={`text-sm text-slate-100 px-3 py-2 rounded-lg ${
                index == selected && "bg-[#2c2d2d] text-white font-bold"
              }`}
              onClick={() => setSelected(index)}
            >
              {value}
            </button>
          );
        })}
      </div>
      <div className="h-[90%] w-full px-8 text-center">
        <div className="grid gap-4 grid-cols-9 border-b-2 border-b-[#2c2d2d]">
      {arr2[selected].map((value) => {
        return <div className="text-[0.9rem]">{value}</div>;
      })}
    </div>
      <div className="h-full w-full flex flex-col gap-4 justify-center items-center">
        <FaBox size={50} />
        <div>No Data</div>
      </div>
      </div>
    </>
  );
};

export default MiddleBottom;
