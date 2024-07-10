"use client";
import React, { memo, useState } from "react";
import { FaBox } from "react-icons/fa";
import { DataTable } from "../data-table";
import useGetUserTrades from "@/contracts-integration/hooks/useGetUserTrades";
import { openTradeColumn } from "./openTradeColumn";
import { openLimitColumns } from "./openLimitColumns";

const tabs = [
  {
    label: "Trades",
    value: 0,
  },
  {
    label: "Orders",
    value: 1,
  },
  {
    label: "History",
    value: 2,
  },
] as const;

const TradeDetailsTable = () => {
  const [selected, setSelected] = useState<(typeof tabs)[number]["value"]>(0);
  const { data, error, isError } = useGetUserTrades();

  // console.log("error", error, isError);

  return (
    <>
      <div className="sc1:flex flex-col hidden w-full h-full">
        <div className="w-full h-fit flex">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-6 py-3  ${
                selected === tab.value ? "text-black font-extrabold dark:text-white":"text-slate-800 dark:text-slate-400"
              }`}
              onClick={() => setSelected(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="w-full h-full">
          {selected === 0 &&
            (data?.openTradesCount > 0 ? (
              <DataTable
                noDataMessage="Your Perp positions will appear here"
                columns={openTradeColumn}
                data={data.formattedOpenTrades}
              />
            ) : (
              <NoDataBox />
            ))}

          {selected === 1 &&
            (data?.openLimitCount > 0 ? (
              <DataTable
                noDataMessage="Your Perp positions will appear here"
                columns={openLimitColumns}
                data={data.formattedLimitOrders}
              />
            ) : (
              <NoDataBox />
            ))}
          {selected === 2 &&
            (data?.openLimitCount > 0 ? (
              <DataTable
                noDataMessage="Your Perp positions will appear here"
                columns={openLimitColumns}
                data={data.formattedLimitOrders}
              />
            ) : (
              <NoDataBox />
            ))}

          {/* <Image src={"/Images/middlebottom.svg"} width={128} height={128} alt="nodata" className="backdrop-grayscale-0 backdrop-grayscale opacity-10" style={{color:"transparent"}}/> */}
        </div>
      </div>
    </>
  );
};

function NoDataBox() {
  return (
    <div className="w-full h-full flex flex-col gap-3 items-center justify-center my-2">
      <FaBox size={75} className="text-neutral-400" />
      <span className="text-neutral-400">No data</span>
    </div>
  );
}

export default memo(TradeDetailsTable);
