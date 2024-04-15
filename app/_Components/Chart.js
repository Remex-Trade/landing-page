"use client";
import { createChart } from "lightweight-charts";
import React, { useContext, useEffect, useRef, useState } from "react";
import theme from "../_context/theme";

import { useChartPrices } from "./chart-helper";
import userContext from "../_context/userContext";
function getChartToken(swapOption, fromToken, toToken, chainId) {
  if (!fromToken || !toToken) {
    return;
  }

  if (swapOption !== SWAP) {
    return toToken;
  }

  if (fromToken.isUsdg && toToken.isUsdg) {
    return getTokens(chainId).find((t) => t.isStable);
  }
  if (fromToken.isUsdg) {
    return toToken;
  }
  if (toToken.isUsdg) {
    return fromToken;
  }

  if (fromToken.isStable && toToken.isStable) {
    return toToken;
  }
  if (fromToken.isStable) {
    return toToken;
  }
  if (toToken.isStable) {
    return fromToken;
  }

  return toToken;
}

const Chart = ({ show }) => {
  const [chartToken, setChartToken] = useState({
    maxPrice: null,
    minPrice: null,
  });

  const chartContainer = useRef();
  const { darkMode } = useContext(theme);
  const {data} = useContext(userContext);
  
  const chainId = 250;
  const [priceData, updatePriceData] = useChartPrices(
    chainId,
    data.token,
    false,
    "1d"
    // currentAveragePrice
  );


  console.log("priceData", priceData);
  // const [priceData, updatePriceData] = useChartPrices(
  //   chainId,
  //   chartToken.symbol,
  //   chartToken.isStable,
  //   period,
  //   currentAveragePrice
  // );

  // useEffect(() => {
  //   const tmp = getChartToken(swapOption, fromToken, toToken, chainId);
  //   setChartToken(tmp);
  // }, [swapOption, fromToken, toToken, chainId]);
  useEffect(() => {
    const interval = setInterval(() => {
      updatePriceData(undefined, true);
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, [updatePriceData]);

  useEffect(() => {
    let chart;

    if (!darkMode) {
      chart = createChart(chartContainer.current, {
        layout: {
          background: { color: "#fff" },
          textColor: "#CED1D7",
        },
        grid: {
          vertLines: { color: "#F4F5F4" },
          horzLines: { color: "#F4F5F4" },
        },
        width: chartContainer.current.offsetWidth,
        height: 280,
      });
    } else {
      chart = createChart(chartContainer.current, {
        layout: {
          background: { color: "#0F0E0E" },
          textColor: "#DDD",
        },
        grid: {
          vertLines: { color: "#444" },
          horzLines: { color: "#444" },
        },
        width: chartContainer.current.offsetWidth,
        height: 300,
      });
    }
    const newSeries = chart.addCandlestickSeries();
    newSeries.applyOptions({
      wickUpColor: "rgb(12,243,196)",
      upColor: "rgb(12,243,196)",
      wickDownColor: "rgb(225, 50, 85)",
      downColor: "rgb(225, 50, 85)",
      borderVisible: false,
    });

    chart.timeScale().fitContent();


    if (priceData?.length){

      newSeries.setData(priceData);
    }
    return () => {
      chart.remove();
    };
  }, [show, darkMode, priceData]);

  const buttons = ["1m", "15m", "1D", "1W"];
  return (
    <>
      <div className="flex gap-6 h-10 items-center px-4 mb-2">
        <div className="text-sm dark:text-white text-black">Time</div>
        {buttons.map((button) => {
          return (
            <>
              <button className="text-sm dark:text-white dark:hover:bg-[#2C2D2D]  dark:focus:bg-[#2C2D2D] text-black hover:bg-[#F7F4F7] focus:bg-[#F7F4F7] px-4 py-2 rounded-xl">
                {button}
              </button>
            </>
          );
        })}
      </div>
      <div ref={chartContainer} className="w-full rounded-full "></div>
    </>
  );
};

export default Chart;
