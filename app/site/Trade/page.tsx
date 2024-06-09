"use client"
import React, { useContext, useState, useEffect } from 'react';
import { FaBox, FaChevronDown, FaFire } from "react-icons/fa";
import Image from "next/image";
import Sidebar from "../../_Components/Sidebar"
import MiddleBottom from "../../_Components/MiddleBottom";
import RightOrder from "../../_Components/RightOrder";
import Chart from "../../_Components/Chart";
import Popup from "../../_Components/Popup";
import {motion,AnimatePresence} from 'framer-motion';
import { RxHamburgerMenu } from "react-icons/rx";
import userContext from '../../_context/userContext';
import {EvmPriceServiceConnection} from "@pythnetwork/pyth-evm-js"

import { idToToken, priceIds } from "../../../helpers/price";
import {usePriceStore} from "../../../store/priceStore"
import {fetchChartStats} from "../../../contracts-integration/utils"
import WalletsProvider from '../../_Components/Wallet';
import TradingViewWidget from '../../_Components/TradeView';
import TradeAdjustSidebar from '../../../components/trade/trade-adjust-sidebar';
import TradeDetailsTable from '@/components/trade-details-table';
import BottomDetails from '@/components/BottomDetails';

type chartData={
    funding: any;
    borrowingRate: any;
    openInterestS: any;
    openInterestL?: any;
    volume24h: any;
}

const page = () => {
  const [show,setShow]=useState(true);
  const[showPopup, setShowPopup] = useState(false);
  const {data,setData,user} = useContext(userContext);
  const setLatestPrice = usePriceStore((state) => state.setLatestPrice)
  const latestPrice = usePriceStore(state  => state.latestPrice)
  const last24HourChange = usePriceStore(state  => state.last24HourChange)
  const setLast24HourPrice = usePriceStore((state) => state.setLast24HourPrice)
  const [showOption,setShowOption] = useState("close");
  const [option,setOption] = useState("Long");
  const [selectCrypto,setSelectCrypto] = useState(false);
  const [isRightOrder,setIsRightOrder] = useState(true);
const percentageChange = last24HourChange[data.token] || "-"

const [chartStats, setChartStats] = useState<chartData>()

 
  const handleClose = () => {
    setShowPopup(false);
  };
  const handleShow = () => {
    setShowPopup(true);
  };
  const getShow=(data)=>{
      setShow(data)
  }
  async function getLastDayData() {
    const connection = new EvmPriceServiceConnection(
      "https://hermes.pyth.network"
    );

    const now = (Date.now() / 1000);
    const timeThreshold = now - 24 * 60 * 60;

    const requests = Object.values(priceIds).map(async (priceId) => {
      const last24HourPrice = await connection.getPriceFeed(
        priceId,
        timeThreshold
      );

      return last24HourPrice;
    })

    return Promise.all(requests)
    .then((chunks) => {
      const prices = {}
      chunks.forEach((chunk) => {
        const price = chunk.getPriceUnchecked()
        
        if (price) {
          const token = idToToken["0x" + chunk.id]
          prices[token] = price.getPriceAsNumberUnchecked();
        }
      })
      setLast24HourPrice(prices)
      return chunks;
    })
    .catch((err) => {
   
      console.error(err);
    });
  }

  useEffect(() => {
    
    getLastDayData()

    const interval = setInterval(() => {
      getLastDayData()
    }, 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const connection = new EvmPriceServiceConnection(
      "https://hermes.pyth.network"
    );

    connection.subscribePriceFeedUpdates( Object.values(priceIds), (priceFeed) => {
      const updatedPrice = priceFeed.getPriceNoOlderThan(60);
      if (updatedPrice) {
        setLatestPrice(priceFeed.id, updatedPrice.getPriceAsNumberUnchecked())
      }
    });

    return () => {
      connection.closeWebSocket();
    };
  }, []);
  useEffect(() => {
    fetchChartStats("0xf36abcb2b8c9cc51f6c57a7bc49a9d2f072aebc2").then(data => setChartStats(data)).catch(err => console.log(err))
  }, [])
  return (
    <>
      {/* {showPopup &&
        <Popup showPopup={showPopup} setShowPopup={setShowPopup}/>
    }
    <div className={`flex text-sm w-full`}> */}
      {/* <div className=''>
      {show?<div
        id="sidebar"
        className="h-[100vh] hidden sc1:flex bg-[#F7F7F8] text-black overflow-hidden rounded-b-xl w-[20vw] dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-xl dark:border-[1px]"
      >
        <Sidebar getShow={getShow} setSelectOption={setSelectCrypto}/>
      </div>:
      <div className='bg-white mt-[4vw] bg-[#F7F7F8] dark:bg-[#0F0E0E] text-black dark:text-white dark:border-[#2C2D2D] border-[1px] w-[5%] h-[2vw] absolute  rounded-r-lg'>
          <div className='flex gap-3 mt-2 ml-2 mr-2' onClick={()=>setShow(true)}>
            <div>Pairs</div>
            <RxHamburgerMenu className='mt-1'/>
          </div>
      </div>} */}
      {/* </div> */}

      <div className="w-full h-full flex items-start">
        <div
          id="right-order"
          className="h-full hidden sc1:flex sc1:flex-col w-full md:w-[60%]  sc1:w-[35%] sc2:w-[25%] items-start"
        >
          <div onClick={()=>setIsRightOrder(!isRightOrder)} className="w-full relative z-30 h-full hidden sc1:flex justify-between items-center py-4 px-4 border border-[#2C2D2D] bg-[#0F0E0F]">
            <div className="flex gap-4 items-center">
            <Image
                      src={`/Images/${data.token
                        .split("/")[0]
                        .toLowerCase()}.png`}
                      width={30}
                      height={30}
                      alt="cryptoImage"
                      className="rounded-full h-100 w-100"
                    />
              <span className="text-lg">{data.token}</span>
            </div>
            <div className="flex gap-2 items-center">
              <span className="text-sm text-slate-300">All Markets</span>
              <FaChevronDown size={10} />
            </div>
          </div>
          {isRightOrder?
          <div className=" overflow-y-auto text-sm  dark:bg-[#0F0E0E]  dark:border-[#2C2D2D] shadow-lg  border-[1px] h-full w-full ">
          {/* <RightOrder
            showPopup={showPopup}
            setShowPopup={setShowPopup}
            setShowOption={setShowOption}
            showOption={showOption}
            option={option}
          /> */}
          <TradeAdjustSidebar />
        </div>:
          <div className="w-[100vw] h-[100vh] absolute z-20">
          <div className="absolute w-full h-full bg-black opacity-90 blur"></div>
          <div className="absolute w-[25%] h-full z-30">
            <Sidebar getShow={getShow} setSelectOption={setSelectCrypto} isRightOrder={isRightOrder} setIsRightOrder={setIsRightOrder}/>
          </div>
        </div>
          }
          
          
        </div>

        <div className="w-full sc1:w-[75%] h-full sc1:h-[100vh] ">
          {/* <div className="text-[0.8rem] hidden sc1:flex bg-white dark:bg-[#0f0e0e] w-full sticky top-[50px] text-black dark:text-white  h-fit px-4 gap-10 items-center py-2 dark:bg-[#0F0E0E] dark:border-[#2C2D2D] shadow-sm dark:border-[1px]">
            <FaFire color="orange" />
            <div>
              BTC/USD
              <span className="text-green-600 dark:text-[#0cf3c4]">+0.15%</span>
            </div>

            <div>
              ETH/USD
              <span className="text-red-500">-0.15%</span>
            </div>

            <div>
              SOL/USD
              <span className="text-red-500">-0.15%</span>
            </div>

            <div>
              TIA/USD
              <span className="text-green-600 dark:text-[#0cf3c4]">+0.15%</span>
            </div>
          </div> */}
          <AnimatePresence>
            {selectCrypto && (
              <motion.div
                initial={{ y: -500 }}
                animate={{ y: 0 }}
                exit={{ y: 1000 }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="absolute z-50 w-[100vw] h-[100vh] sc1:hidden "
              >
                <Sidebar getShow={getShow} setSelectOption={setSelectCrypto} isRightOrder={isRightOrder} setIsRightOrder={setIsRightOrder}/>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex w-full h-full bg-[#F7F7F8] dark:bg-black">
            <div
              className={`flex flex-col h-full m-0 sc1:m-0 mr-0 justify-start  items-start gap:0 sc1:gap-0 ${
                show ? "sc1:w-[100%] w-[100vw]" : "md:w-[70%] sc1:w-[60%] w-[100vw]"
              }`}
            >
              <div
                id="middle-top"
                className=" w-full  flex sc1:gap-2 flex-col bg-white text-black dark:text-white dark:bg-[#0F0E0E] dark:border-[#2C2D2D]  dark:border-[1px] shadow-md h-full"
              >
                <div className="w-full h-[10%] sc1:border-b sc1:border-b-[#2C2D2D] sc1:h-[20%] px-8 py-4 sc1:px-0 sc1:py-0 flex flex-col sc1:flex-row sc1:gap-2 gap-2  text-[0.7rem] justify-start items-start sc1:items-center">
                  <div
                    className="flex gap-4 w-full sc1:w-fit items-center"
                    onClick={() => setSelectCrypto(true)}
                  >
                    
                    <div className="flex w-full justify-between items-center">
                      <div className="flex gap-2 w-full items-center">
                      <Image
                      src={`/Images/${data.token
                        .split("/")[0]
                        .toLowerCase()}.png`}
                      width={30}
                      height={30}
                      alt="cryptoImage"
                      className="rounded-full h-100 w-100 flex sc1:hidden"
                    />
                        <div className="flex flex-col sc1:flex-row gap-1 sc1:justify-between sc1:w-[200%] h-full sc1:border-r sc1:border-r-[#2C2D2D] px-4 py-2">
                          
                          <span className="text-green-600 sc1:h-full   sc1:text-xl sc1:text-white hidden sc1:flex  font-bold text-[0.9rem]">
                          {"$"+Math.round(latestPrice[data.token] * 10) / 10}
                          </span>
                          <span
                        className={
                          percentageChange.includes("+")
                            ? "text-[#0cf3c4] text-lg hidden sc1:flex"
                            : "text-red-500 text-lg hidden sc1:flex"
                        }
                      >
                        {percentageChange}
                      </span>
                        </div>
                        <div className="sc1:hidden">
                          <FaChevronDown size={10} />
                        </div>
                      </div>
                      <div className="sc1:hidden flex flex-col">
                        <span className="text-white font-bold text-[1rem] sc1:text-[0.7rem]">
                        {"$"+Math.round(latestPrice[data.token] * 10) / 10}
                        </span>
                        {/* <span className={percentageChange.includes("+") ?  'text-[#0cf3c4]' : "text-red-500"}>{percentageChange}</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="w-full gap-4 sc1:flex hidden  sc1:gap-0 text-lg">
                    <div className="flex flex-col gap-1 sc1:gap-0 h-[90%] sc1:border-r sc1:border-r-[#2c2d2d] px-4">
                      <span className="text-black text-[0.72rem] sc1:text-[0.7rem] sc1:dark:text-neutral-400 dark:text-white  ">
                        Open Interest(L)
                      </span>
                      <span className="text-[0.7rem] sc1:text-lg sc1:text-white">
                        {chartStats?.openInterestS ?? "-"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sc1:gap-0 h-[90%] sc1:border-r sc1:border-r-[#2c2d2d] px-4">
                      <span className="text-black text-[0.72rem] sc1:text-[0.7rem] sc1:dark:text-neutral-400 dark:text-white  ">
                        Open Interest(S)
                      </span>
                      <span className="text-[0.7rem] sc1:text-lg sc1:text-white">
                        {chartStats?.openInterestS ?? "-"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sc1:gap-0 h-[90%] sc1:border-r sc1:border-r-[#2c2d2d] px-4">
                      <span className="text-black text-[0.72rem] sc1:text-[0.7rem] sc1:dark:text-neutral-400 dark:text-white  ">
                        Market Sentiment
                      </span>
                      <span className="text-[0.7rem] sc1:text-lg sc1:text-white">
                        {chartStats?.openInterestS ?? "-"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sc1:gap-0 h-[90%] sc1:border-r sc1:border-r-[#2c2d2d] px-4">
                      <span className="text-black text-[0.72rem] sc1:text-[0.7rem] sc1:dark:text-neutral-400 dark:text-white  ">
                        Margin Fee:Longs
                      </span>
                      <span className="text-[0.7rem] sc1:text-lg sc1:text-white">
                        {chartStats?.openInterestS ?? "-"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 sc1:gap-0 h-[90%] sc1:border-r sc1:border-r-[#2c2d2d] px-4">
                      <span className="text-black text-[0.72rem] sc1:text-[0.7rem] sc1:dark:text-neutral-400 dark:text-white  ">
                      Margin Fee:Shorts
                      </span>
                      <span className="text-[0.7rem] sc1:text-lg sc1:text-white">
                        {chartStats?.openInterestS ?? "-"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className='w-full h-[60vh]'>
                  {/* <Chart show={show} /> */}
                  <TradingViewWidget/>
                </div>
                <div className="w-full gap-4 flex sc1:hidden my-4 justify-center sc1:gap-6">
                  <div className=" gap-1 hidden sc1:flex">
                    <span className="text-black  dark:text-white ">
                      24h Change
                    </span>
                    <span
                      className={
                        percentageChange.includes("+")
                          ? "text-[#0cf3c4]"
                          : "text-red-500"
                      }
                    >
                      {percentageChange}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <span className="text-black text-[0.72rem] sc1:text-[0.7rem] dark:text-white  underline">
                      Open Interest(I)
                    </span>
                    <span className="text-[0.7rem]">
                      {chartStats?.openInterestS ?? "-"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <span className="text-black text-[0.72rem] sc1:text-[0.7rem]  dark:text-white underline">
                      Open Interest(II)
                    </span>
                    <span className="text-[0.7rem]">
                      {chartStats?.openInterestL ?? "-"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <span className="text-black text-[0.72rem] sc1:text-[0.7rem] dark:text-white underline">
                      Funding
                    </span>
                    <span className="text-green-600  text-[0.7rem]">
                      {chartStats?.funding ?? "-"}
                    </span>
                  </div>
                  <div className="flex-col gap-1 hidden sc1:flex">
                    <span className="text-black text-[0.72rem] sc1:text-[0.7rem]  dark:text-white underline">
                      Borrowing Rate
                    </span>
                    <span className="text-green-600  text-[0.7rem]">
                      {chartStats?.borrowingRate ?? "-"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 py-2">
                    <span className="text-black text-[0.72rem] sc1:text-[0.7rem]  dark:text-white">
                      24h volume(USD)
                    </span>
                    <span className="text-[0.7rem]">
                      {chartStats?.volume24h ?? "-"}
                    </span>
                  </div>
                </div>
              </div>
              {/* <BottomDetails /> */}
              <div
                id="middle-bottom"
                className="pb-10 pt-3 hidden sc1:flex sc1:py-0  flex-col gap-1  dark:bg-[#0F0E0E] bg-white dark:border-[#2C2D2D] shadow-lg border-[1px] w-full sc1:h-full h-fit"
              >
                <TradeDetailsTable />
              </div>
              <div className=" w-[100%] flex justify-center items-center h-full my-10 flex-col sc1:hidden ">
                <RightOrder
                  showPopup={showPopup}
                  setShowPopup={setShowPopup}
                  setShowOption={setShowOption}
                  showOption={showOption}
                  option={option}
                />
              </div>
            </div>
            {/* {user.length>0 ?
          <div id='mobile right-order' className='sc1:hidden h-[15vh] items-center justify-center bg-[#2B2A2A]  gap-8 flex w-full'>
            <button className='bg-[#0CF3C4] text-lg rounded-md px-12 py-2 text-white' onClick={()=>{setShowOption("Long"); setOption("Long")}}>Buy/Long</button>
            <button className='bg-[#E13255] text-lg rounded-md px-12 py-2 text-white' onClick={()=>{setShowOption("Short"); setOption("Short")}}>Sell/Short</button>
          </div>:
          // <div className='sc1:hidden w-full items-start py-10 justify-center flex h-full'>
          // <WalletsProvider/>
          // </div>
          } */}
            <AnimatePresence>
              {/* {showOption=="Long"&&
            <motion.div
              initial={{y:100,opacity:0.5}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.2,ease:"linear"}}
              exit={{y:100,opacity:0.5}}
              className='absolute bottom-0 z-50 w-full bg-[#2B2A2A] rounded-xl py-4'
            >
              <RightOrder showPopup={showPopup}  setShowPopup={setShowPopup} setShowOption={setShowOption} showOption={showOption} option={option}/>
            </motion.div>
          } */}
              {/* {showOption=="Short"&&
            <motion.div
              initial={{y:100,opacity:0.5}}
              animate={{y:0,opacity:1}}
              transition={{duration:0.2,ease:"linear"}}
              exit={{y:100,opacity:0.5}}
              className='absolute bottom-0 z-50 w-full bg-[#2B2A2A] rounded-xl py-4'
            >
              <RightOrder showPopup={showPopup}  setShowPopup={setShowPopup} setShowOption={setShowOption} showOption={showOption} option={option}/>
            </motion.div>
          } */}
            </AnimatePresence>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default page;
