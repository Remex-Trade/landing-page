"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import { FaArrowLeft, FaInfo } from "react-icons/fa";
import { MdInfo, MdWallet } from "react-icons/md";
import trancheContext from "../../../_context/trancheContext";
import SubmitButton from "../../../_Components/SubmitButton";
import VaultInput from "../../../_Components/VaultInput";

const page = () => {
    const options = ["Deposit","Withdraw","Lock","Unlock"]; //all top options
    const [selectedOption,setSelectedOption]= useState("Deposit"); //state for top options
    const [tranche,setTranche] = useState("senior"); //flag to check tranche type
    //row-1 blocks data
    const [data,setData] = useState({
      balance:435000,
      fees:325000
    })

    //data in the deposit block
    const [depositData,setDepositData] = useState({
      amount:0,
      receive:0,
      estfees:0,
      estapy:0,
      yield:0
    })
    const [withdrawData,setWithdrawData] = useState({
      amount:0,
      receive:0,
      widthdrawfees:0
    })
    const [lockData,setlockData] = useState({
      amount:0,
      duration:14,
      feeAPR:11.60,
      annualYeild: 0.00,
      remexFee:2.2
    })
    const {juniorTrancheData, seniorTrancheData} = useContext(trancheContext);
    const tranchedata = tranche==="senior"?seniorTrancheData:juniorTrancheData; //variable for getting data from context
    const [isLoading,setIsLoading] = useState(false);
    const handleDeposit = ()=>{
      //logic for deposit
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }
    const handleWithdraw = ()=>{
      //logic for withdraw
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }
    const handleLock = ()=>{
      //logic for lock
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        }, 2000);
    }

    const handleInputChange = (e)=>{
      //logic for input change
      setlockData({
        ...lockData,
        duration:e.target.value
      })
    }
  return (
    <div className="w-full h-full py-12 flex items-center justify-center bg-[#F8FAFC] dark:bg-[#0C0F11]">
      <div
        id="page-content"
        className="w-[80%] sc0:w-[90%] sc1:w-[70%] flex flex-col gap-4"
      >
        <div
          id="back-button"
          className="text-md text-gray-800 dark:text-gray-500 flex gap-2 items-center hover:underline"
        >
          <Link href="/site/Vault" className="flex gap-2"> 
          <FaArrowLeft />
          <span>Back to Vault</span>
          </Link>
        </div>
        <div id="heading" className="dark:text-white  text-black font-bold text-5xl">
          Senior Tranche
        </div>
        <div id="heading-text-content" className="text-md text-gray-700 dark:text-gray-500">
          Our higher risk vault, currently receiving ~65% of fees and trader
          PnL. Investing in this tranche gives you jvUSDC, a yield-bearing
          ERC-20 representing your ownership in the vault.
        </div>
        <div id="cards" className="flex flex-col gap-8 w-full my-6">
          <div id="card-row-1" className="flex gap-6 sc0:flex-row flex-col">
            <div
              id="card-r1"
              className=" bg-white shadow-lg dark:bg-[#0c0f11] rounded-xl w-full dark:border-[0.2px] py-6 px-6 dark:border-gray-800 relative flex flex-col gap-3"
            >
              <div id="icon">
                <svg
                  width="44"
                  height="45"
                  viewBox="0 0 44 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_544_1352)">
                    <g clip-path="url(#clip1_544_1352)">
                      <g clip-path="url(#clip2_544_1352)">
                        <path
                          d="M22 44.0601C34.1503 44.0601 44 34.2103 44 22.0601C44 9.90979 34.1503 0.0600586 22 0.0600586C9.84974 0.0600586 0 9.90979 0 22.0601C0 34.2103 9.84974 44.0601 22 44.0601Z"
                          fill="#E39A0C"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M22 43.478C33.8288 43.478 43.418 33.8889 43.418 22.0601C43.418 10.2312 33.8288 0.64209 22 0.64209C10.1712 0.64209 0.582031 10.2312 0.582031 22.0601C0.582031 33.8889 10.1712 43.478 22 43.478Z"
                          stroke="#E39A0C"
                          stroke-opacity="0.2"
                          stroke-width="1.16406"
                        />
                        <path
                          d="M15.3965 26.4601C15.3965 28.8901 17.3665 30.8601 19.7965 30.8601H24.1965C26.6265 30.8601 28.5965 28.8901 28.5965 26.4601C28.5965 24.03 26.6265 22.0601 24.1965 22.0601H19.7965C17.3665 22.0601 15.3965 20.0901 15.3965 17.6601C15.3965 15.23 17.3665 13.2601 19.7965 13.2601H24.1965C26.6265 13.2601 28.5965 15.23 28.5965 17.6601M21.9965 11.0601V33.0601"
                          stroke="#E39A0C"
                          stroke-width="1.9646"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_544_1352">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0 0.0600586)"
                      />
                    </clipPath>
                    <clipPath id="clip1_544_1352">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0 0.0600586)"
                      />
                    </clipPath>
                    <clipPath id="clip2_544_1352">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0 0.0600586)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div id="card-heading" className="text-2xl text-gray-700 dark:text-gray-500">
                Vault Balance
              </div>
              <div id="card-text" className="dark:text-white text-black text-sm">
                ${data.balance} {/* not sure what value should be here */}
              </div>
            </div>
            <div
              id="card-r2"
              className="bg-white shadow-lg dark:bg-[#0c0f11] rounded-xl w-full dark:border-[0.2px] py-6 px-6 border-gray-800 relative flex flex-col gap-3"
            >
              <div id="icon">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_544_1361)">
                    <g clip-path="url(#clip1_544_1361)">
                      <g clip-path="url(#clip2_544_1361)">
                        <path
                          d="M22.3304 43.571C34.2107 43.571 43.8416 33.9402 43.8416 22.0599C43.8416 10.1797 34.2107 0.548828 22.3304 0.548828C10.4502 0.548828 0.819336 10.1797 0.819336 22.0599C0.819336 33.9402 10.4502 43.571 22.3304 43.571Z"
                          fill="#579464"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M22.3303 42.7448C33.7542 42.7448 43.0151 33.4839 43.0151 22.06C43.0151 10.6361 33.7542 1.37524 22.3303 1.37524C10.9064 1.37524 1.64551 10.6361 1.64551 22.06C1.64551 33.4839 10.9064 42.7448 22.3303 42.7448Z"
                          stroke="#579464"
                          stroke-opacity="0.2"
                          stroke-width="1.6526"
                        />
                        <path
                          d="M30.1523 15.2156C30.1523 16.8356 26.6502 18.1489 22.33 18.1489C18.0099 18.1489 14.5078 16.8356 14.5078 15.2156M30.1523 15.2156C30.1523 13.5955 26.6502 12.2822 22.33 12.2822C18.0099 12.2822 14.5078 13.5955 14.5078 15.2156M30.1523 15.2156V28.9044C30.1523 30.5245 26.6502 31.8378 22.33 31.8378C18.0099 31.8378 14.5078 30.5245 14.5078 28.9044V15.2156M30.1523 19.7785C30.1523 21.3985 26.6502 22.7118 22.33 22.7118C18.0099 22.7118 14.5078 21.3985 14.5078 19.7785M30.1523 24.3382C30.1523 25.9583 26.6502 27.2716 22.33 27.2716C18.0099 27.2716 14.5078 25.9583 14.5078 24.3382"
                          stroke="#579464"
                          stroke-width="1.95556"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_544_1361">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0.330078 0.0600586)"
                      />
                    </clipPath>
                    <clipPath id="clip1_544_1361">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0.330078 0.0600586)"
                      />
                    </clipPath>
                    <clipPath id="clip2_544_1361">
                      <rect
                        width="44"
                        height="43.0222"
                        fill="white"
                        transform="translate(0.330078 0.548828)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div id="card-heading" className="text-2xl text-gray-700 dark:text-gray-500">
                All-Time Fees
              </div>
              <div id="card-text" className="dark:text-white text-black text-sm">
                ${data.fees} {/*not sure about the value to be added*/}
              </div>
            </div>
            <div
              id="card-r3"
              className="dark:bg-[#0c0f11] bg-white shadow-lg rounded-xl w-full dark:border-[0.2px] py-6 px-6 border-gray-800 relative flex flex-col gap-3"
            >
              <div id="icon">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_544_1370)">
                    <g clip-path="url(#clip1_544_1370)">
                      <g clip-path="url(#clip2_544_1370)">
                        <path
                          d="M22.6605 43.571C34.5408 43.571 44.1716 33.9402 44.1716 22.0599C44.1716 10.1797 34.5408 0.548828 22.6605 0.548828C10.7803 0.548828 1.14941 10.1797 1.14941 22.0599C1.14941 33.9402 10.7803 43.571 22.6605 43.571Z"
                          fill="#6B0CE3"
                          fill-opacity="0.1"
                        />
                        <path
                          d="M22.6598 42.7451C34.0839 42.7451 43.345 33.484 43.345 22.0599C43.345 10.6358 34.0839 1.37476 22.6598 1.37476C11.2357 1.37476 1.97461 10.6358 1.97461 22.0599C1.97461 33.484 11.2357 42.7451 22.6598 42.7451Z"
                          stroke="#6B0CE3"
                          stroke-opacity="0.2"
                          stroke-width="1.6518"
                        />
                        <path
                          d="M30.4826 18.3606V21.5323C30.4826 21.8479 30.3572 22.1504 30.1342 22.3734C29.9112 22.5964 29.6086 22.7218 29.2931 22.7218C28.9777 22.7218 28.6751 22.5964 28.4521 22.3734C28.2291 22.1504 28.1037 21.8479 28.1037 21.5323V21.2326L23.4729 25.8618C23.3507 25.9873 23.2014 26.0833 23.0366 26.1426C22.8717 26.202 22.6955 26.2231 22.5214 26.2044C22.3462 26.1875 22.177 26.1318 22.0262 26.0412C21.8753 25.9507 21.7464 25.8277 21.6491 25.681L19.9174 23.0834L15.8606 27.1306C15.6351 27.3406 15.3369 27.455 15.0288 27.4496C14.7206 27.4442 14.4267 27.3193 14.2087 27.1015C13.9908 26.8835 13.8659 26.5895 13.8605 26.2814C13.8551 25.9732 13.9695 25.675 14.1796 25.4495L19.2545 20.3746C19.3761 20.2483 19.5252 20.1517 19.6902 20.0923C19.8552 20.0329 20.0317 20.0123 20.2059 20.0321C20.3811 20.0489 20.5503 20.1047 20.7012 20.1952C20.8521 20.2858 20.9809 20.4089 21.0782 20.5554L22.81 23.1531L26.4147 19.55H26.1214C25.8059 19.55 25.5033 19.4246 25.2803 19.2016C25.0573 18.9786 24.9319 18.676 24.9319 18.3606C24.9319 18.0451 25.0573 17.7426 25.2803 17.5195C25.5033 17.2965 25.8059 17.1711 26.1214 17.1711H29.2931C29.6082 17.1724 29.91 17.2982 30.1328 17.5209C30.3556 17.7437 30.4813 18.0455 30.4826 18.3606Z"
                          fill="#B788FA"
                        />
                      </g>
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_544_1370">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0.660156 0.0600586)"
                      />
                    </clipPath>
                    <clipPath id="clip1_544_1370">
                      <rect
                        width="44"
                        height="44"
                        fill="white"
                        transform="translate(0.660156 0.0600586)"
                      />
                    </clipPath>
                    <clipPath id="clip2_544_1370">
                      <rect
                        width="44"
                        height="43.0222"
                        fill="white"
                        transform="translate(0.660156 0.548828)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <div id="card-content" className="text-[0.9rem] gap-2 flex text-gray-700  dark:text-gray-500">
                <div className="flex items-start w-fit justify-center gap-1 flex-col">
                    <div id="heading" className='items-center flex gap-1'>Base APY <MdInfo/></div>
                    <span className="dark:text-white text-black text-xl">{tranchedata.base}%</span>
                </div>
                <div className="flex items-start w-fit justify-center gap-1 flex-col">
                    <div id="heading" className='items-center flex gap-1'>Locked APR Boost <MdInfo/></div>
                    <span className="dark:text-white text-black text-xl">{tranchedata.apr}%</span>
                </div>
              </div>
              
            </div>
          </div>
          <div id="card-row-2" className="flex gap-6 sc0:flex-row flex-col">
            <div id="card-r1" className="dark:bg-[#0c0f11] bg-white shadow-lg rounded-xl w-full dark:border-[0.2px] px-5 border-gray-800 relative flex flex-col gap-3">
                <div id="options" className="w-full border-b-[0.1px] border-gray-200 dark:border-gray-800 flex justify-between text-sm">
                    {options.map((option)=>{
                        return(                            
                            <button className={`${option===selectedOption?"dark:text-white text-black border-b-2 font-bold h-full  border-[#cb81f5] dark:border-[#dcaaf8]":"text-gray-500"} py-2`}
                                onClick={()=>setSelectedOption(option)}
                            >{option}</button>
                        )
                    })}
                </div>
                <div id="card-content" className="px-6 pt-6 pb-8 flex flex-col gap-6">
                  {selectedOption==="Deposit" &&
                  <>
                    <div id="deposit" className="flex justify-between text-gray-700 dark:text-gray-500 text-lg">
                        <span>Deposit Amount</span>
                        <div id="amount" className="flex gap-1 items-center">
                            <MdWallet/>
                            <span>0</span>
                            <span className="text-green-500">Max</span>
                        </div>
                    </div>
                    
                    <VaultInput data={depositData} setData={setDepositData} type="deposit" image={"/Images/crypto/coin.png"}/>
                    <div id="card-info" className="flex flex-col gap-4 text-md font-bold">
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Receive</span>
                        <span className="dark:text-white text-black" >{depositData.receive} jvUSDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Est. Deposit Fee:</span>
                        <span className="dark:text-white text-black" >{depositData.estfees} USDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Est. APY:</span>
                        <span className="text-green-500" >{depositData.estapy}%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Est. Annual Yeild</span>
                        <span className="text-green-500" >{depositData.yield  } USDC</span>
                      </div>
                    </div>
                    <div id="cta-button">
                        <SubmitButton label="Deposit" handleClick={handleDeposit} isLoading={isLoading}/>
                    </div>
                  </>
                 }
                  {selectedOption==="Withdraw" &&
                  <>
                    <div id="withdraw" className="flex justify-between text-gray-700 dark:text-gray-500 text-lg">
                        <span>Withdraw Amount</span>
                        <div id="amount" className="flex gap-1 items-center">
                            <MdWallet/>
                            <span>0</span>
                            <span className="text-green-500">Max</span>
                        </div>
                    </div>
                    
                    <VaultInput data={withdrawData} setData={setWithdrawData} type="withdraw" image={"/Images/crypto/coin.png"}/>
                    <div id="card-info" className="flex flex-col gap-4 text-md font-bold">
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Receive</span>
                        <span className="dark:text-white text-black" >{withdrawData.receive} jvUSDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Withdrawal Fees:</span>
                        <span className="text-white" >{withdrawData.widthdrawfees} USDC</span>
                      </div>
                    </div>
                    <div id="cta-button">
                        <SubmitButton label="Withdraw" handleClick={handleWithdraw} isLoading={isLoading}/>
                    </div>
                  </>
                 }
                  {selectedOption==="Lock" &&
                  <>
                    <div id="Lock" className="flex justify-between dark:text-gray-500 text-gray-700 text-lg">
                        <span>Amount to Lock</span>
                        <div id="amount" className="flex gap-1 items-center">
                            <MdWallet/>
                            <span>0</span>
                            <span className="text-green-500">Max</span>
                        </div>
                    </div>
                    
                    <VaultInput data={lockData} setData={setlockData} type="withdraw" image={"/Images/crypto/usdc_green.svg"}/>
                    {/* Slider */}
          <div className="flex justify-center w-full gap-4">
            <div className="flex flex-col justify-center w-full gap-2 ">
              <div className="w-full flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-slate-200">Select Lock Duration</span>
            <div className="w-[30%] rounded-md dark:  border-[1px] justify-center items-center flex dark:border-gray-800 h-10 dark:bg-black bg-[#d4d4d4] dark:text-white text-gray-700">
              {`${lockData.duration} days`}
            </div>
            </div>
              <div className="w-full flex justify-between relative items-center h-3 rounded-lg mt-2 dark:bg-black dark:border border-[#2c2d2d] bg-[#d4d4d4] dark:text-gray-500 text-gray-700 ">
                <input
                  className="slider z-10 relative transitiion duration-2"
                  id="slider"
                  type="range"
                  step="1"
                  max={180}
                  min={14}
                  value={lockData.duration}
                  onChange={handleInputChange}
                />
                
                <div className="absolute z-0 flex w-full justify-between">
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>
                  <div className=" h-full"><div className="rounded-full bg-gray-400 w-1 h-1 "></div></div>  
                </div>
                <div
                  className={`absolute z-0 bg-gradient-to-r from-[#2ACCF6] to-[#6EFECF] h-2 rounded-lg`}
                  style={{ width: `${(lockData.duration-14)/(180-14) *100}%` ,maxWidth:'100%'}}
                ></div>
              </div>
              <div className="w-full text-[0.7rem] mb-5 dark:text-gray-500 text-gray-700 flex h-fit justify-between">
                <span className="">14 days</span>
                <span className="">3 months</span>
                <span className="">6 months</span>
              </div>
            </div>

            
          </div>
                    <div id="card-info" className="flex flex-col gap-4 text-md font-bold">
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Fee APR</span>
                        <span className="text-green-500" >{lockData.feeAPR}% fee APR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Est. Annual Yeild:</span>
                        <span className="dark:text-white text-black" >{lockData.annualYeild} USDC</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="dark:text-gray-500 text-gray-700">Remex Fee and XP Boost:</span>
                        <span className="dark:text-white text-black" >{lockData.remexFee} X</span>
                      </div>
                    </div>
                    <div id="cta-button">
                        <SubmitButton label="Lock" handleClick={handleLock} isLoading={isLoading}/>
                    </div>
                  </>
                 }
              </div>
            </div>
            <div id="card-r2" className="dark:bg-[#0c0f11] bg-white shadow-lg h-fit rounded-xl w-full dark:border-[0.2px] px-8 py-5  border-gray-800 relative flex flex-col gap-3">
                <div id="card-heading" className="dark:text-white text-black text-2xl py-5 dark:border-b-[0.2px] border-b-gray-800">
                    Vault Portfolio Stats
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex justify-between">
                      <span className="dark:text-gray-500 text-gray-700 font-bold">Unlocked Deposit</span>
                      <span className="text-black dark:text-white">0 USDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-500 text-gray-700 font-bold">Locked Deposit</span>
                      <span className="text-black dark:text-white">0.00 USDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-500 text-gray-700 font-bold">Current Earnings</span>
                      <span className="text-black dark:text-white">0.00 USDC</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="dark:text-gray-500 text-gray-700 font-bold">Total Shares</span>
                      <span className="text-black dark:text-white">0.00 jvUSDC</span>
                    </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
