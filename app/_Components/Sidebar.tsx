"use client";
import React, { useContext, useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import userContext from "../_context/userContext";
import { usePriceStore } from "../../store/priceStore";
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";

import Image from "next/image";
import { FaX } from "react-icons/fa6";
const Sidebar = ({ getShow,setSelectOption,isRightOrder,setIsRightOrder }) => {
  const [Favorites, setFavorites] = useState(false);
  const [FavArr, setFavArr] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(true);
  const { data, setData } = useContext(userContext);
  const [priceSort, setPriceSort] = useState(0);
  const [changeSort, setChangeSort] = useState(0);
  const latestPrice = usePriceStore((state) => state.latestPrice);
  const last24HourChange = usePriceStore((state) => state.last24HourChange);

  let [DataArr, setDataArr] = useState([
    {
      id: 1,
      icon: "",
      Pairs: "BTC/USD",
      Price: `${formatPrice(latestPrice["BTC/USD"])}`,
      Change: `${last24HourChange?.["BTC/USD"] ?? "-"}`,
      stared: false,
    },
    {
      id: 2,
      icon: "",
      Pairs: "ETH/USD",
      Price: `${formatPrice(latestPrice["ETH/USD"])}`,
      Change: `${last24HourChange?.["ETH/USD"] ?? "-"}`,
      stared: false,
    },
    {
      id: 3,
      icon: "",
      Pairs: "BNB/USD",
      Price: `${formatPrice(latestPrice["BNB/USD"])}`,
      Change: `${last24HourChange?.["BNB/USD"] ?? "-"}`,
      stared: false,
    },
    {
      id: 4,
      icon: "",
      Pairs: "SOL/USD",
      Price: `${formatPrice(latestPrice["SOL/USD"])}`,
      Change: `${last24HourChange?.["SOL/USD"] ?? "-"}`,
      stared: false,
    },
    {
      id: 5,
      icon: "",
      Pairs: "FTM/USD",
      Price: `${formatPrice(latestPrice["FTM/USD"])}`,
      Change: `${last24HourChange?.["FTM/USD"] ?? "-"}`,
      stared: false,
    },
    {
      id: 6,
      icon: "",
      Pairs: "MATIC/USD",
      Price: `${formatPrice(latestPrice["MATIC/USD"])}`,
      Change: `${last24HourChange?.["MATIC/USD"] ?? "-"}`,
      stared: false,
    },
  ]);
  let Pairs = DataArr;

  const fetchData = () => {
    // Simulate fetching data
    setTimeout(() => {
      const newDataArr = [
        {
          id: 1,
          icon: "",
          Pairs: "BTC/USD",
          Price: `${formatPrice(latestPrice["BTC/USD"])}`,
          Change: `${last24HourChange?.["BTC/USD"] || "-"}`,
          stared: false,
        },
        {
          id: 2,
          icon: "",
          Pairs: "ETH/USD",
          Price: `${formatPrice(latestPrice["ETH/USD"])}`,
          Change: `${last24HourChange?.["ETH/USD"] || "-"}`,
          stared: false,
        },
        {
          id: 3,
          icon: "",
          Pairs: "BNB/USD",
          Price: `${formatPrice(latestPrice["BNB/USD"])}`,
          Change: `${last24HourChange?.["BNB/USD"] || "-"}`,
          stared: false,
        },
        {
          id: 4,
          icon: "",
          Pairs: "SOL/USD",
          Price: `${formatPrice(latestPrice["SOL/USD"])}`,
          Change: `${last24HourChange?.["SOL/USD"] || "-"}`,
          stared: false,
        },
        {
          id: 5,
          icon: "",
          Pairs: "FTM/USD",
          Price: `${formatPrice(latestPrice["FTM/USD"])}`,
          Change: `${last24HourChange?.["FTM/USD"] || "-"}`,
          stared: false,
        },
        {
          id: 6,
          icon: "",
          Pairs: "MATIC/USD",
          Price: `${formatPrice(latestPrice["MATIC/USD"])}`,
          Change: `${last24HourChange?.["MATIC/USD"] || "-"}`,
          stared: false,
        },
      ];

      if(priceSort==1){
        newDataArr.sort((a,b)=>{
            return(parseFloat(a.Price)-parseFloat(b.Price));
        })
      }else if(priceSort ==2){
        newDataArr.sort((a,b)=>{
            return(parseFloat(b.Price)-parseFloat(a.Price));
        })
      }else{
        setDataArr(newDataArr);
      }
      if(changeSort==1){
        newDataArr.sort((a,b)=>{
            return(parseFloat(a.Change)-parseFloat(b.Change));
        })
      }else if(changeSort ==2){
        newDataArr.sort((a,b)=>{
           return(parseFloat(b.Change)-parseFloat(a.Change));
        })
      }else{
        setDataArr(newDataArr)
      }
      setDataArr(newDataArr);
    }, 500); // Simulated delay
  };

  // Fetch data on initial render
  useEffect(() => {
    fetchData();
  }, [DataArr]);

  const last24HourPrice = usePriceStore((state) => state.last24HourPrice);

  function getChangePercentage(tokenName) {
    const currentTokenValue = latestPrice[tokenName];
    const prevTokenValue = last24HourPrice[tokenName];

    if (!currentTokenValue || !prevTokenValue) {
      return "-";
    }
    const precentage =
      ((currentTokenValue - prevTokenValue) / prevTokenValue) * 100;
    if (precentage > 0) {
      return "+" + precentage.toFixed(2) + "%";
    }

    return precentage.toFixed(2) + "%";
  }

  const searchPair = (e) => {
    setSearch(e.target.value.toUpperCase());
  };

  const hideSideBar = () => {
    setShow(false);
  };

  function formatPrice(price) {
    if (!price) {
      return "-";
    }

    const parts = price.toString().split(".");
    const integerPart = parts[0];
    const decimalPart = parts[1] || "";

    const totalDigits = 6;
    const integerDigits = integerPart.length;
    const decimalDigits = Math.max(0, totalDigits - integerDigits);

    return price.toFixed(decimalDigits);
  }
  const [selectedProp,setSelectedProp] = useState("All");
  return (
    <div className="dark:bg-[#0F0C0F] h-full w-full  bg-white dark:text-white text-black">
      <div className="flex flex-col gap-[1vw]  py-[2vw] text-[13px]">
          <div className="flex w-full gap-4 justify-between items-center px-2">
            <input
              type="search"
              className="w-full px-6 relative m-0 block rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-2 py-1 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
              placeholder="Search"
              aria-label="Search"
              id="exampleFormControlInput2" 
              onChange={searchPair}
            />

            <RxHamburgerMenu className="text-lg hidden sc1:flex" onClick={hideSideBar} />
            <FaX className="text-lg flex sc1:hidden" onClick={()=>setSelectOption(false)}/>
            {getShow(show)}
          </div>
        <div className="flex gap-2 w-full px-4 flex-wrap text-[0.7rem] mb-3 mt-3 sc1:mt-0">
          <div className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 ${selectedProp==="All"?"text-white bg-zinc-900":"text-zinc-500"}`} onClick={()=>setSelectedProp("All")}>
              All
          </div>
          <div className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 ${selectedProp==="New"?"text-white bg-zinc-900":"text-zinc-500"}`} onClick={()=>setSelectedProp("New")}>
              New
          </div>
          <div className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 ${selectedProp==="Crypto"?"text-white bg-zinc-900":"text-zinc-500"}`} onClick={()=>setSelectedProp("Crypto")}>
              Crypto
          </div>
          <div className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 ${selectedProp==="Forex"?"text-white bg-zinc-900":"text-zinc-500"}`} onClick={()=>setSelectedProp("Forex")}>
              Forex
          </div>
          <div className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 ${selectedProp==="Commodities"?"text-white bg-zinc-900":"text-zinc-500"}`} onClick={()=>setSelectedProp("Commodities")}>
              Commodities
          </div>
          <div className={`bg-black border border-[#2c2d2d] rounded-lg px-4 py-1 ${selectedProp==="Meme"?"text-white bg-zinc-900":"text-zinc-500"}`} onClick={()=>setSelectedProp("Meme")}>
              Meme
          </div>
        </div>
        {/* <div className="flex gap-[1vw] text-zinc-400"> */}
          {/* <div className={Favorites && "border-b-white"}>
            {/* <button
              onClick={() => setFavorites(true)}
              className={
                Favorites &&
                "dark:text-white text-black border-b-2 border-b-white pb-2"
              }
            >
              Favorites
            </button> */}
            

          {/* </div> */}
          {/* <div className={Favorites && "border-b-white"}>
            {/* <button
              onClick={() => setFavorites(false)}
              className={
                !Favorites &&
                "dark:text-white text-black border-b-2 border-b-white pb-2"
              }
            >
              All Perpetual
            </button> */}
          {/* </div> 
        </div> */}
        {/* <div className="flex w-[1/3] text-[0.7rem] justify-between text-zinc-400 px-1">
          <div className="">Pairs</div>
          <div className="flex gap-3 items-center">
            <div
              className="flex gap-1 cursor-pointer items-start w-full sc1:w-[4vw]"
              onClick={() => {
                if (priceSort == 2) {
                  setPriceSort(0);
                } else {
                  setPriceSort((priceSort) => (priceSort += 1));
                }
              }}
            >
              <div className="select-none">Price</div>
              <div className="flex flex-col">
                <TiArrowSortedUp
                  size={10}
                  style={{ margin: 0, padding: 0 }}
                  className={`${priceSort == 1 && "text-blue-500"}`}
                />
                <TiArrowSortedDown
                  size={10}
                  style={{ margin: 0, padding: 0 }}
                  className={`${priceSort == 2 && "text-blue-500"}`}
                />
              </div>
            </div>
            <div
              className="flex gap-1 cursor-pointer basis-1/2"
              onClick={() => {
                if (changeSort == 2) {
                  setChangeSort(0);
                } else {
                  setChangeSort((changeSort) => (changeSort += 1));
                  setPriceSort(0);
                }
              }}
            >
              <div className="select-none">Change</div>
              <div className="flex flex-col m-0">
                <TiArrowSortedUp
                  size={10}
                  style={{ margin: 0, padding: 0 }}
                  className={`${changeSort == 1 && "text-blue-500"}`}
                />
                <TiArrowSortedDown
                  size={10}
                  className={`${changeSort == 2 && "text-blue-500"}`}
                />
              </div>
            </div>
          </div>
        </div> */}
        <div className="h-[100vh] overflow-y-auto ">
          <div
            className={Favorites ? "hidden" : "flex flex-col gap-1 mb-3"}
          >
            {DataArr.filter((e) => e.Pairs.includes(search)).map(
              (Pair, index) => {
                const percentage = last24HourChange?.[Pair.Pairs] || "-";
                return (
                  <div
                    className={`flex text-[0.75rem] justify-between w-full dark:text-white text-black cursor-pointer hover:bg-[#F4F5F4] dark:hover:bg-[#2c2d2d] px-2 items-center py-2 rounded-xl ${
                      data.token === Pair.Pairs &&
                      "dark:bg-[#2c2d2d] bg-[#F4F5F4] "
                    } `}
                    onClick={() =>{
                       setData({ ...data, token: Pair.Pairs });
                       setSelectOption(false);
                       setIsRightOrder(true);
                    }}
                  >
                    {/* <div className="flex justify-between w-full dark:text-white text-black hover:bg-[#F4F5F4] dark:hover:bg-[#2c2d2d] px-2 py-4 rounded-xl" onClick={()=>setData({...data,token:Pair.Pairs})}> */}
                    <div className="flex w-full gap-2 items-center">
                      {/* {Starred ? (Pair.stared = true) : (Pair.stared = false)}
                                    <div>{Pair.stared?<FaStar style={{color: 'yellow'}} size={20} onClick={()=>setStarred(false)}/> : <CiStar size={20} onClick={()=>setStarred(true)}/>}</div> */}
                      <div className="flex items-start">
                        {FavArr.some((item) => item.id === Pair.id) ? (
                          <FaStar
                            style={{ color: "#FFA500" }}
                            size={20}
                            onClick={() => {
                              const newFavorite = FavArr.filter(
                                (e) => e !== Pair
                              );
                              setFavArr((prevFavArr) =>
                                prevFavArr.filter((e) => e.id !== Pair.id)
                              );
                              console.log(FavArr);
                            }}
                          />
                        ) : (
                          <CiStar
                            size={20}
                            onClick={() => {
                              setFavArr([...FavArr, Pair]);
                              console.log(FavArr);
                            }}
                          />
                        )}
                      </div>
                      <div className="flex h-full gap-2 items-start ">
                      <Image
                        src={`/Images/${Pair.Pairs.split(
                          "/"
                        )[0].toLowerCase()}.png`}
                        className="rounded-full w-8 h-8"
                        width={32}
                        height={32}
                        alt="sidebar1"
                      />
                      <div className="w-fit text-white font-bold h-full flex flex-col items-start text-center text-[1rem]">
                        <span>{Pair.Pairs}</span>
                        <span className="text-[0.6rem] text-slate-300">Bitcoin to USD</span>
                        </div>
                    </div>
                    
                    </div>
                    <div className="flex flex-col items-end w-full px-2 text-left">
                      {/* <div className='w-[3vw]'>{formatPrice(latestPrice[Pair.Pairs])}</div> */}
                      <div className="text-[0.9rem]">{Pair.Price}</div>
                      <div
                        className={
                          Pair.Change.includes("+")
                            ? "text-[#0cf3c4] text-[0.6rem]"
                            : "text-red-500  text-[0.6rem]"
                        }
                      >
                        {/* {Pair.Change} */}
                        20
                      </div>
                      {/* <div className="">{Pair.Change}</div> */}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          <div className={Favorites ? "flex flex-col gap-1 mr-4" : "hidden"}>
            {FavArr.filter((e) => e.Pairs.includes(search)).map((Pair) => {
              const percentage = last24HourChange?.[Pair.Pairs] || "-";

              return (
                <div className="flex justify-between w-full hover:bg-[#f7f8f8] dark:hover:bg-[#2c2d2d] px-4 py-4 rounded-xl">
                  <div className="flex gap-[1vw]">
                    <FaStar
                      style={{ color: "#FFA500" }}
                      size={20}
                      onClick={() => {
                        const newFavorite = FavArr.filter((e) => e !== Pair);
                        setFavArr(newFavorite);
                      }}
                    />
                    <div>{Pair.Pairs}</div>
                  </div>
                  <div className="flex gap-[2vw]">
                    <div>{Pair.Price}</div>
                    <div className="text-green-600">{percentage}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
