"use client"
import React, { useContext, useState } from 'react';
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import userContext from '../_context/userContext';
import { usePriceStore} from "../../store/priceStore"
import Image from 'next/image';
const Sidebar=({getShow})=>{
    const [Favorites,setFavorites]=useState(false);
    const [FavArr,setFavArr]=useState([])
    const [search,setSearch]=useState("")
    const [show,setShow]=useState(true)
    const {data,setData} = useContext(userContext); 
    const latestPrice = usePriceStore(state  => state.latestPrice)
    const last24HourChange = usePriceStore(state  => state.last24HourChange)
    
    let Data=[
        {"id":1,"icon":"","Pairs":"BTC/USD","Price":"70367.4","Change":"+4.67","stared":false},
        {"id":2,"icon":"","Pairs":"ETH/USD","Price":"70367.4","Change":"+4.67","stared":false},
        {"id":3,"icon":"https://assets.coingecko.com/coins/images/825/small/binance-coin-logo.png","Pairs":"BNB/USD","Price":"70367.4","Change":"+4.67","stared":false},
        {"id":4,"icon":"","Pairs":"SOL/USD","Price":"70367.4","Change":"+4.67","stared":false},
        {"id":5,"icon":"","Pairs":"FTM/USD","Price":"70367.4","Change":"+4.67","stared":false},
        {"id":6,"icon":"","Pairs":"MATIC/USD","Price":"70367.4","Change":"+4.67","stared":false},
    ]

    const last24HourPrice = usePriceStore(state  => state.last24HourPrice)
 
    function getChangePercentage(tokenName){
      const currentTokenValue = latestPrice[tokenName]
      const prevTokenValue = last24HourPrice[tokenName]
  
      if (!currentTokenValue || !prevTokenValue) {
        return "-"
      }
      const precentage = (currentTokenValue - prevTokenValue) / prevTokenValue * 100;
      if (precentage > 0) {
        return "+" + precentage.toFixed(2) + "%"
      } 
  
      return precentage.toFixed(2) + "%"
    }

    let Pairs=Data;
    const searchPair=(e)=>{
        setSearch(e.target.value.toUpperCase())
    }
    const hideSideBar=()=>{
        setShow(false)
    }

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

    return(
        <div className='dark:bg-[#0F0C0F] h-full  bg-white dark:text-white text-black'>
            <div className="flex flex-col gap-[1vw]  px-4 py-[2vw] text-[13px]">
            <div class="flex w-full justify-between items-center px-2">
                <input
                    type="search"
                    className="relative m-0 block rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-2 py-1 text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    id="exampleFormControlInput2"
                    ariaDescribedby="button-addon2"
                    onChange={searchPair}
                    />
               
                <RxHamburgerMenu className='text-lg' onClick={hideSideBar}/>
                {getShow(show)}
            </div>
            <div className="flex gap-[1vw] text-zinc-400">
                <div className={Favorites && "border-b-white"}><button onClick={()=>setFavorites(true)} className={Favorites && "dark:text-white text-black border-b-2 border-b-white pb-2"}>Favorites</button></div>
                <div className={Favorites || "border-b-white"}><button onClick={()=>setFavorites(false)} className={Favorites || "dark:text-white text-black border-b-2 border-b-white pb-2"}>All Perpetual</button></div>
            </div>
            <div className="flex justify-between text-zinc-400 px-3">
                <div>Pairs</div>
                <div className="flex gap-[2vw]">
                    <div>Price</div>
                    <div>Change</div>
                </div>
            </div>
            <div className='h-[100vh] overflow-y-auto '>
                <div className={Favorites?"hidden":'flex flex-col gap-1 mr-4 mb-3'}>
                    {(Data.filter(e=>e.Pairs.includes(search))).map((Pair,index)=>{
                        const percentage = last24HourChange?.[Pair.Pairs] || "-"
                        return(
                            <div className={`flex justify-between w-full dark:text-white text-black cursor-pointer hover:bg-[#F4F5F4] dark:hover:bg-[#2c2d2d] px-2 py-4 rounded-xl ${data.token===Pair.Pairs&&'dark:bg-[#2c2d2d] bg-[#F4F5F4] '} `} onClick={()=>setData({...data,token:Pair.Pairs})}>
                            {/* <div className="flex justify-between w-full dark:text-white text-black hover:bg-[#F4F5F4] dark:hover:bg-[#2c2d2d] px-2 py-4 rounded-xl" onClick={()=>setData({...data,token:Pair.Pairs})}> */}
                                <div className='flex gap-[1vw] '>
                                    {/* {Starred ? (Pair.stared = true) : (Pair.stared = false)}
                                    <div>{Pair.stared?<FaStar style={{color: 'yellow'}} size={20} onClick={()=>setStarred(false)}/> : <CiStar size={20} onClick={()=>setStarred(true)}/>}</div> */}
                                <div>{FavArr.some(item => item.id === Pair.id)?<FaStar style={{color: '#FFA500'}} size={20} onClick={()=>{
                                            const newFavorite = FavArr.filter(e=>e!==Pair)
                                            setFavArr(prevFavArr => prevFavArr.filter(e => e.id !== Pair.id));
                                            console.log(FavArr)
                                        }}/> : <CiStar size={20} onClick={()=>{
                                            setFavArr([...FavArr, Pair])
                                            console.log(FavArr)
                                    }}/>}</div>
                                    <div>
                                        {Pair.Pairs}</div>
                                </div>
                                <div className="flex gap-[2vw]">
                                    <div>{formatPrice(latestPrice[Pair.Pairs])}</div>
                                    <div className={percentage.includes("+") ?  'text-[#0cf3c4]' : "text-red-500"}>{percentage}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            
            <div className={Favorites?'flex flex-col gap-1 mr-4':"hidden"}>
                {(FavArr.filter(e=>e.Pairs.includes(search))).map((Pair)=>{
                        const percentage = last24HourChange?.[Pair.Pairs] || "-"

                        return(
                            <div className="flex justify-between w-full hover:bg-[#f7f8f8] dark:hover:bg-[#2c2d2d] px-4 py-4 rounded-xl">
                                <div className='flex gap-[1vw]'>
                                    <FaStar style={{color: '#FFA500'}} size={20} onClick={()=>{
                                        const newFavorite = FavArr.filter(e=>e!==Pair)
                                        setFavArr(newFavorite)
                                    }}/>
                                    <div>{Pair.Pairs}</div>
                                </div>
                                <div className="flex gap-[2vw]">
                                    <div>{Pair.Price}</div>
                                    <div className='text-green-600'>{percentage}</div>
                                </div>
                            </div>
                        )
                    })}
            </div>
            </div>
        </div>
        </div>

    )
}
export default Sidebar;
 
