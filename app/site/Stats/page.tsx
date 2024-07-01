import React from 'react';
import { FaTrophy } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { IoCubeSharp } from "react-icons/io5";
import Image from 'next/image'
const page=()=>{
    const Stats={
        users:'11,767',
        volume:'$689,348,037',
        trades:'122,710'
    }
    const Stats_data=[
        {
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },
        {
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },
        {
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },
        {
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },
        {
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },
        {
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },{
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },{
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },{
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        },{
            user:'0x47...5FbA',
            profit:"+$26,860.96",
            vol:'$3M',
            trades:"72",
            wins:'31',
            winrate:'43.06%'
        }
]
    return(
        <div className='flex flex-col items-center justify-center bg-[#F8FAFC] dark:bg-black dark:bg-gradient-to-r from-transparent via-[#201635] to-transparent'>
            <div className='text-5xl m-[1.5rem] text-black dark:text-white font-semibold items-center justify-center sc2:justify-self-start w-[85%]'>
                <div>Statistics</div>
            </div>
            <div className='flex flex-col sc2:flex-row gap-[2rem] sc2:gap-[10rem] sc2:h-[10rem] m-[3rem]'>
                <div className='flex flex-col gap-[1rem] items-center justify-center w-[18rem] shadow-md dark:border border-1 border-neutral-600 p-[1rem] sc2:p-0 bg-white dark:bg-[#111114]  rounded-md'>
                    <div className='text-blue-900 text-xl border border-1 border-blue-900 p-2 rounded-full'><FaUserFriends /></div>
                    <div className='text-slate-700 dark:text-slate-300 text-lg font-semibold'>Users</div>
                    <div className='text-2xl text-black dark:text-white font-bold'>{Stats.users}</div>
                </div>
                <div className='flex flex-col gap-[1rem] items-center justify-center w-[18rem] shadow-md dark:border border-1 border-neutral-600 p-[1rem] sc2:p-0 bg-white dark:bg-[#111114]  rounded-md'>
                    <div className='text-amber-600 text-xl border border-1 border-amber-600 p-2 rounded-full'><VscGraph /></div>
                    <div className='text-slate-700 dark:text-slate-300 text-lg font-semibold'>Total Volume Traded</div>
                    <div className='text-2xl text-black dark:text-white font-bold'>{Stats.volume}</div>
                </div>
                <div className='flex flex-col gap-[1rem] items-center justify-center w-[18rem] shadow-md dark:border border-1 border-neutral-600 p-[1rem] sc2:p-0 bg-white dark:bg-[#111114]  rounded-md'>
                    <div className='text-green-800 text-xl border border-1 border-green-800 p-2 rounded-full'>
                    <IoCubeSharp />
                    </div>
                    <div className='text-slate-700 dark:text-slate-300 text-lg font-semibold'>Total Trades</div>
                    <div className='text-2xl text-black dark:text-white font-bold'>{Stats.trades}</div>
                </div>
            </div>
            <div className='text-xl font-semibold text-neutral-600 justify-self-start w-[85%]'>Last updated: 6 hours ago</div>
            <div className='flex flex-col gap-[2rem] w-[90%] shadow-xl mt-[2rem] mb-[1rem] bg-white dark:bg-[#111114] pt-[2.5rem] pb-[2.5rem] rounded-xl'>
                <div className='flex text-xs font-semibold text-slate-700 dark:text-[#C3C4CB] items-center justify-center '>
                    <div className='w-[25%] sc2:w-[8%] flex items-start justify-center '>RANK</div>
                    <div className='w-[30%] sc2:w-[20%] flex items-center justify-center'>USER</div>
                    <div className='w-[20%] hidden sc2:flex items-center justify-center'>NET PROFIT</div>
                    <div className='w-[10%] hidden sc2:flex items-center justify-center'>TOTAL VOLUME</div>
                    <div className='w-[10%] hidden sc2:flex items-center justify-center'>TOTAL TRADES</div>
                    <div className='w-[10%] hidden sc2:flex items-center justify-center'>TOTAL WINS</div>
                    <div className='w-[10%] hidden sc2:flex items-center justify-center'>WIN RATE</div>
                    <div className='w-[30%] flex items-center justify-center sc2:hidden'>WIN RATE</div>
                </div>
                <div className='flex flex-col gap-[2.5rem]'>
                    {
                        Stats_data.map((data,index)=>{
                            return(
                                <div>
                                    <div className='flex justify-center text-black dark:text-white items-center'>
                                        <div className='flex items-center justify-center w-[25%] sc2:w-[10%] font-bold'>
                                            {index + 1 > 3 ? (
                                                <div className='ml-[1rem]'>#{index+1}</div>
                                            ): (
                                            <div className='flex gap-2'>
                                                    <Image
                                                    src={`/Images/trophy${index + 1}.png`}
                                                    width={20}
                                                    height={20}
                                                    alt="rank"
                                                    />
                                                <div>#{index+1}</div>
                                            </div>
                                            )}
                                        </div>
                                        <div className='w-[30%] sc2:w-[20%] flex items-center  justify-center'>{data.user}</div>
                                        <div className='flex flex-col w-[40%] items-center justify-center sc2:hidden'>
                                                <div className='w-[20%] flex items-center justify-center text-green-600'>{data.profit}</div>
                                                <div className='w-[10%] hidden sc2:flex flex items-center justify-center'>{data.vol}</div>
                                                <div className='w-[10%] hidden sc2:flex flex items-center justify-center'>{data.trades}</div>
                                                <div className='w-[10%] hidden sc2:flex flex items-center justify-center'>{data.wins}</div>
                                                <div className='w-[10%] flex items-center justify-center'>{data.winrate}</div>
                                        </div>
                                                <div className='w-[20%] hidden sc2:flex items-center justify-center text-green-600'>{data.profit}</div>
                                                <div className='w-[10%] hidden sc2:flex flex items-center justify-center'>{data.vol}</div>
                                                <div className='w-[10%] hidden sc2:flex flex items-center justify-center'>{data.trades}</div>
                                                <div className='w-[10%] hidden sc2:flex flex items-center justify-center'>{data.wins}</div>
                                                <div className='w-[10%] hidden sc2:flex items-center justify-center'>{data.winrate}</div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default page;