"use client"
import Image from "next/image";
import React, { useContext, useState } from "react";
import trancheContext from "../../_context/trancheContext";
import Link from "next/link";


const page = () => {
  const {juniorTrancheData,seniorTrancheData} = useContext(trancheContext);
  const juniorCompletion= (juniorTrancheData.currentDeposit/juniorTrancheData.maxDeposit)*100;
  console.log(juniorCompletion)
  const seniorCompletion= (seniorTrancheData.currentDeposit/seniorTrancheData.maxDeposit)*100;
  return (
    <div className="w-full h-full bg-[#F8FAFC] dark:bg-[#0C0F11] flex py-16 justify-center">
    <div className=" h-full w-[90%] md:w-[80%] sc0:w-[60%] flex flex-col gap-4  items-start">
      <div id="heading" className="text-5xl text-black dark:text-white font-bold">
        Remex LP Vaults
      </div>
      <div id="text-content" className="text-slate-800 dark:text-gray-500 text-md">
        Invest USDC into our dynamic risk-return vaults, and earn real yields by
        providing liquidity to traders. Our auto- compounding vaults gain
        exposure to 60% of all protocol fees generated from counter-trading,
        trading fees, and early vault unlocks. Please invest responsibly
      </div>
      <div id="Cards" className="flex w-full gap-10 my-8 sc4:flex-row flex-col">
        <Link href="/site/Vault/tranche" className="w-full ">
            <div id="card1" className="bg-white shadow-md dark:bg-[#0c0f11] rounded-xl w-full dark:border-[0.2px] py-6 px-10 dark:border-gray-800 relative flex flex-col gap-3 hover:border-white transition duration-5000">
                <Image src="/Images/gradients/gradient1.png" width={250} height={250} alt="background"  className="absolute right-0 top-1"/>
                <Image src="/Images/crypto/coin.png" width={50} height={50} alt="token"/>
                <div id="card-headings" className="flex flex-col items-start gap-1"> 
                  <span id="card-heading" className="text-3xl text-black dark:text-white font-bold">Tranche</span>
                  <span id="card-text" className="text-gray-500 text-md">Our higher risk vault. Gets exposure to ~65% of all
                  fees and trader PnL</span>
                </div>
                <div id="percentage" className="flex justify-between my-4">
                  <div id="base" className="flex flex-col items-start">
                    <span id="base-text" className="text-green-500 text-4xl">{juniorTrancheData.base}%</span>
                    <span id="base-text" className="text-gray-500 text-md">Base APY</span>
                  </div>
                  <div id="locked-APR" className="flex flex-col items-end">
                    <span id="apr-text" className="text-green-500 text-4xl">{juniorTrancheData.apr}%</span>
                    <span id="apr-text" className="text-gray-500 text-md">Locked APR Boost</span>
                  </div>
                </div>
                <div id="container" className="rounded-xl bg-[#eae8e8]  dark:bg-[#181A20]  flex flex-col gap-3 p-4 mb-5"> 
                  <div id="current" className="flex justify-between w-full">
                    <span className="text-md text-gray-800 dark:text-gray-400">Current Deposits</span>
                    <span className="text-md text-black dark:text-white font-bold">{juniorTrancheData.currentDeposit} USDC</span>
                  </div>
                  <div id="completion-bar" className={`w-full bg-[#634479] h-4 rounded-full relative`}>
                    <div className={`w-[${juniorCompletion}%] rounded-xl h-4 bg-[#CD80F6]`}></div>
                  </div>
                  <div id="maximum" className="flex justify-between w-full">
                    <span className="text-md text-gray-800 dark:text-gray-400">Max. Value Capacity</span>
                    <span className="text-md text-black dark:text-white font-bold">{juniorTrancheData.maxDeposit} USDC</span>
                  </div>
                </div>
                <div id="info" className="flex flex-col gap-4 text-black dark:text-white font-bold">
                    <div id="info-text1" className="flex justify-between w-full">
                      <span className="text-gray-500 dark:text-gray-500">Unlocked Deposit</span>
                      <span>{juniorTrancheData.unlockedDeposit} USDC</span>
                    </div>
                    <div id="info-text2" className="flex justify-between w-full">
                      <span className="text-gray-500 dark:text-gray-500">Locked Deposit</span>
                      <span>{juniorTrancheData.lockedDeposit} USDC</span>
                    </div>
                    <div id="info-text" className="flex justify-between w-full">
                      <span className="text-gray-500 dark:text-gray-500">Current Earnings</span>
                      <span>{juniorTrancheData.currentEarning} USDC</span>
                    </div>
                    <div id="info-text" className="flex justify-between w-full">
                      <span className="text-gray-500 dark:text-gray-500">Total Shares</span>
                      <span>{juniorTrancheData.shares} jvUSDC</span>
                    </div>
                </div>
            </div>
            </Link>
          {/* <Link href="/site/Vault/senior" className="w-full">
            <div id="card2" className="dark:bg-[#0c0f11]  bg-white shadow-md rounded-xl w-full border-[0.2px] py-6 px-10 dark:border-gray-800 flex flex-col gap-3 relative hover:border-white transition duration-500">
              <Image src="/Images/gradients/gradient2.png" width={250} height={250} alt="background"  className="absolute right-0 top-1"/>
                
                <Image src="/Images/crypto/coin.png" width={50} height={50} alt="token"/>
                <div id="card-headings" className="flex flex-col items-start gap-1"> 
                  <span id="card-heading" className="text-3xl text-black dark:text-white font-bold">Senior Tranche</span>
                  <span id="card-text" className="text-gray-500 text-md">Our lower risk vault. Gets exposure to ~35% of all
                  fees and trader PnL</span>
                </div>
                <div id="percentage" className="flex justify-between my-4">
                  <div id="base" className="flex flex-col items-start">
                    <span id="base-text" className="text-green-500 text-4xl">{seniorTrancheData.base}%</span>
                    <span id="base-text" className="text-gray-500 text-md">Base APY</span>
                  </div>
                  <div id="locked-APR" className="flex flex-col items-end">
                    <span id="apr-text" className="text-green-500 text-4xl">{seniorTrancheData.apr}%</span>
                    <span id="apr-text" className="text-gray-500 text-md">Locked APR Boost</span>
                  </div>
                </div>
                <div id="container" className="rounded-xl bg-[#eae8e8]  dark:bg-[#181A20]  flex flex-col gap-3 p-4 mb-5">
                  <div id="current" className="flex justify-between w-full">
                    <span className="text-md text-gray-800 dark:text-gray-400">Current Deposits</span>
                    <span className="text-md text-black font-bold dark:text-white">{seniorTrancheData.currentDeposit} USDC</span>
                  </div>
                  <div id="completion-bar" className={`w-full bg-[#634479] h-4 rounded-full relative`}>
                    <div className={`w-[${seniorCompletion.toFixed(0)}rem] rounded-xl h-4 bg-[#CD80F6]`}></div>
                  </div>
                  <div id="maximum" className="flex justify-between w-full">
                    <span className="text-md text-gray-800 dark:text-gray-400">Max. Value Capacity</span>
                    <span className="text-md text-black font-bold dark:text-white">{seniorTrancheData.maxDeposit} USDC</span>
                  </div>
                </div>
                <div id="info" className="flex flex-col gap-4 dark:text-white text-black font-bold">
                    <div id="info-text1" className="flex justify-between w-full">
                      <span className="text-gray-500">Unlocked Deposit</span>
                      <span>{seniorTrancheData.unlockedDeposit} USDC</span>
                    </div>
                    <div id="info-text2" className="flex justify-between w-full">
                      <span className="text-gray-500">Locked Deposit</span>
                      <span>{seniorTrancheData.lockedDeposit} USDC</span>
                    </div>
                    <div id="info-text" className="flex justify-between w-full">
                      <span className="text-gray-500">Current Earnings</span>
                      <span>{seniorTrancheData.currentEarning} USDC</span>
                    </div>
                    <div id="info-text" className="flex justify-between w-full">
                      <span className="text-gray-500">Total Shares</span>
                      <span>{seniorTrancheData.shares} svUSDC</span>
                    </div>
                </div>
            </div>
          </Link> */}
      </div>
    </div>
    </div>
  );
};

export default page;
