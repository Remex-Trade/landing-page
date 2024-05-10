"use client";
import { createChart } from "lightweight-charts";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";
import theme from "../_context/theme";
import { getCandlesFromPricesPyth, useChartPrices } from "./chart-helper";
import {EvmPriceServiceConnection} from "@pythnetwork/pyth-evm-js"
import userContext from "../_context/userContext";
import { priceIds } from "../../helpers/price";
import {usePriceStore} from "../../store/priceStore"

const Chart = ({ show }) => {
  const chartContainer = useRef<any>();
  const { darkMode } = useContext(theme);
  const {data} = useContext(userContext);
  const [period,setPeriod] = useState("1m");
  const chainId = 250;
  const [priceData, updatePriceData] = useChartPrices(
    chainId, // send 250 always for now. 
    data.token, 
    false,
    "5m"
    // currentAveragePrice
  );
  const [currentChart, setCurrentChart] = useState();
  const [currentSeries, setCurrentSeries] = useState<any>();
  // const latestPrice = usePriceStore(state  => state.latestPrice)

  // const [priceData, updatePriceData] = useChartPrices(
  //   chainId,
  //   chartToken.symbol,
  //   chartToken.isStable,
  //   period,
  //   currentAveragePrice
  // );

  useEffect(() => {
    const interval = setInterval(() => {
      updatePriceData(undefined, true);
    },60 * 1000);
    return () => clearInterval(interval);
  }, [updatePriceData]);

  const updateFeedData = useCallback((chartPrice) => {
    let newCandleData;
    if (priceData && priceData.length){
      newCandleData = getCandlesFromPricesPyth(priceData?.[priceData.length - 1], chartPrice, "5m")
    } else{
      newCandleData = getCandlesFromPricesPyth(null, chartPrice, "5m")
    }
    currentSeries??currentSeries.update(newCandleData)
  }, [currentSeries, priceData])

  useEffect(() => {
    if (!data.token) return;
    const priceId = priceIds[data.token]
    if (!priceId) return

    const connection = new EvmPriceServiceConnection(
      "https://hermes.pyth.network"
    );


    if (updateFeedData) {
      connection.subscribePriceFeedUpdates([priceId], (priceFeed) => {
        const updatedPrice = priceFeed.getPriceNoOlderThan(60);
        if (updatedPrice) {
          const chartPrice = {
            time: updatedPrice.publishTime,
            value: parseFloat(updatedPrice.price) * Math.pow(10, updatedPrice.expo),
          };
          updateFeedData(chartPrice);
        }
      });

      return () => {
        connection.closeWebSocket();
      };
    }
  }, [updateFeedData, data.token]);


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
    const newSeries = chart.addCandlestickSeries({ priceFormat: {
      type: 'price',
      precision: 4,
      minMove: 0.0001,
  },});
    newSeries.applyOptions({
      wickUpColor: "rgb(12,243,196)",
      upColor: "rgb(12,243,196)",
      wickDownColor: "rgb(225, 50, 85)",
      downColor: "rgb(225, 50, 85)",
      borderVisible: false,
    });

    chart.timeScale().fitContent();
    setCurrentChart(chart);
    setCurrentSeries(newSeries);
    return () => {
      chart.remove();
    };
  }, [show, darkMode]);

  useEffect(() => {
    if (currentSeries && priceData && priceData.length) {
      currentSeries.setData(priceData);
    }
  }, [priceData, currentSeries]);

  const buttons = ["1m", "15m", "1D", "1W"];
  return (
    <>
      <div className="flex gap-6 h-10 items-center px-4 mb-2">
        <div className="text-sm dark:text-white text-black">Time</div>
        {buttons.map((button) => {
          return (
            <>
              <button className="text-sm my-10 dark:text-white dark:hover:bg-[#2C2D2D]  dark:focus:bg-[#2C2D2D] text-black hover:bg-[#F7F4F7] focus:bg-[#F7F4F7] px-4 py-2 rounded-xl"
                onClick={()=>setPeriod(button)}
              >
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
