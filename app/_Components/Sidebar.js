"use client"
import React, { useState } from 'react';
const Sidebar=()=>{
    const [option,setOption]=useState("All Perpetual");
    const Data=[
        {"Pairs":"BTC/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"ETH/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"BNB/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"SQL/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"XRP/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"DOGE/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"AVAX/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"ARB/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"LTC/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"FIL/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"OP/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"INJ/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"RINDR/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"TIA/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"SEI/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"SUI/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"STRK/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"ORDI/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"AXL/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"PYTH/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"DYDX/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"WLD/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"CAKE/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"MANTA/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"BONK/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"WIF/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"JUP/USD","Price":"70367.4","Change":"+4.67"},
        {"Pairs":"DYM/USD","Price":"70367.4","Change":"+4.67"}
    ]
    return(
        <div className="flex flex-col gap-[1vw] p-[2vw]">
            <div class="relative flex">
                <input
                    type="search"
                    class="relative m-0 block flex-auto rounded border border-solid border-neutral-200 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
                    placeholder="Search"
                    aria-label="Search"
                    id="exampleFormControlInput2"
                    aria-describedby="button-addon2" />
                <span
                    class="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
                    id="button-addon2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor">
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg>
                </span>
            </div>
            <div className="flex gap-[1vw] text-zinc-400">
                <div onClick={()=>setOption("Favorites")}>Favorites</div>
                <div onClick={()=>setOption("All Perpetual")}>All Perpetual</div>
            </div>
            <div className="flex justify-between text-zinc-400">
                <div>Pairs</div>
                <div className="flex gap-[1vw]">
                    <div>Price</div>
                    <div>Change</div>
                </div>
            </div>
            <div className='flex flex-col gap-[1vw]'>
                {Data.map((Pair)=>{
                    return(
                        <div className="flex justify-between">
                            <div>{Pair.Pairs}</div>
                            <div className="flex gap-[1vw]">
                                <div>{Pair.Price}</div>
                                <div>{Pair.Change}</div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}
export default Sidebar;