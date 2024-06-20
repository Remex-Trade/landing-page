"use client";
import React from "react";
import LineCharts from "../../_Components/LineCharts";
import ChartBlock from "../../_Components/ChartBlock";

const page = () => {
  return (
    <div className="w-full h-full flex flex-col py-20 items-center justify-center bg-[#111114]">
      <div id="page-content" className="w-[90%] sc0:w-[90%]">
        <div
          id="page-heading"
          className="w-full flex items-center justify-center font-bold text-white text-5xl"
        >
          Analytics
        </div>
        <div id="blocks" className="w-full flex flex-col gap-3 mt-10">
          <div
            id="blocks-row-1"
            className="flex gap-3 items-center justify-center"
          >
            <div className=" border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col">
              <span className="text-gray-500 text-lg font-bold">
                Total Value Locked
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
            </div>
            <div className=" border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col">
              <span className="text-gray-500 text-lg font-bold">
                Total Value Locked
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
            </div>
            <div className=" border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col">
              <span className="text-gray-500 text-lg font-bold">
                Total Value Locked
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
            </div>
          </div>
          <div
            id="blocks-row-2"
            className="flex gap-3 items-center justify-center"
          >
            <div className=" border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col">
              <span className="text-gray-500 text-lg font-bold">
                Total Value Locked
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
            </div>
            <div className=" border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col">
              <span className="text-gray-500 text-lg font-bold">
                Total Value Locked
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
            </div>
            <div className=" border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col">
              <span className="text-gray-500 text-lg font-bold">
                Total Value Locked
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
            </div>
          </div>
        </div>
        <div
          id="line-charts"
          className="w-full flex-col flex gap-8 my-10 items-center justify-center"
        >
          <div id="chart-row1" className="flex w-full gap-10 justify-between">
            <div
              id="chart-1"
              className="border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col w-full h-[15rem]"
            >
              <span className="text-gray-500 text-lg font-bold">
                24h Volume
              </span>
              <span className="text-white text-3xl font-bold">$12M</span>
              <LineCharts />{" "}
              {/* Pass the data through chartData prop in LineCharts */}
            </div>
            <div
              id="chart-2"
              className="border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col w-full h-[15rem]"
            >
              <span className="text-gray-500 text-lg font-bold">
                24h Trades
              </span>
              <span className="text-white text-3xl font-bold">2.18K</span>
              <LineCharts />
            </div>
          </div>
          <div id="chart-row2" className="flex w-full gap-10 justify-between">
            <div
              id="chart-1"
              className="border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col w-full h-[15rem]"
            >
              <span className="text-gray-500 text-lg font-bold">24h Fees</span>
              <span className="text-white text-3xl font-bold">$15.63K</span>
              <LineCharts />
            </div>
            <div
              id="chart-2"
              className="border-[2px] border-[#181A20] rounded-xl px-8 py-10 flex flex-col w-full h-[15rem]"
            >
              <span className="text-gray-500 text-lg font-bold">
                24h Realized PnL
              </span>
              <span className="text-white text-3xl font-bold">$-64.56K</span>
              <LineCharts />
            </div>
          </div>
        </div>
        <div id="chart-info" className="grid grid-cols-1 sc0:grid-cols-2 gap-10">
            <div id="chart">
                <ChartBlock title="Trades Count" text="120.09k" type="Composed"/>
            </div>
            <div id="chart">
                <ChartBlock title="Profit And Loss" text="$-771.91k" type="PosNegBar"/>
            </div>
            <div id="chart">
                <ChartBlock title="Traders" text="11.46k" type="StackedLine"/>
            </div>
            <div id="chart">
                <ChartBlock title="Vault Buffer Ratio" text="1.01" type="Line"/>
            </div>
            <div id="chart">
                <ChartBlock title="Total Value Locked" text="$12.24M" type="ComposedLine"/>
            </div>
            <div id="chart">
                <ChartBlock title="Total Volumes" text="$675.46M" type="StackedLine2"/>
            </div>
            <div id="chart">
                <ChartBlock title="Total Fees" text="$652.85M" type="StackedLine3"/>
            </div>
            <div id="chart">
                <ChartBlock title="Loss Protection" text="$106.63K" type="Composed"/>
            </div>
            <div id="chart">
                <ChartBlock title="Margin Fee (Annulaised)"  type="MultiLine"/>
            </div>
            <div id="chart">
                <ChartBlock title="Total Volume By Pair"  type="MultiStacked"/>
            </div>
            <div id="chart">
                <ChartBlock title="Total Volume By Pair"  type="pie"/>
            </div>
            <div id="chart">
                <ChartBlock title="Daily Projected APY(Unlocked LPs)"  type="TwoLine"/>
            </div>
            <div id="chart">
                <ChartBlock title="Total Liquidation" text="$794.53K"  type="Composed"/>
            </div>
            <div id="chart">
                <ChartBlock title="Open Interest Snapshot" text="4.34M"  type="StackedComposed"/>
            </div>
            <div id="chart">
                <ChartBlock title="Open Interest Skew Snapshot" text="136.90K"  type="Line"/>
            </div>
            <div id="chart">
                <ChartBlock title="Vaults Utilization"  type="Bar"/>
            </div>
            <div id="chart">
                <ChartBlock title="Daily Share Rate"  type="ComposedLine2"/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default page;
