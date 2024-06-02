"use client";
import React, { useContext, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CiWallet } from "react-icons/ci";
import { GoTrophy } from "react-icons/go";
import { HiSpeakerphone } from "react-icons/hi";
import { IoPeopleOutline } from "react-icons/io5";
import { RiCoupon3Line } from "react-icons/ri";
// import usersProvider from "../../_Components/Wallet";
import userContext from "../../_context/userContext";
import { useAccount } from "wagmi";
import WalletsProvider from "../../_Components/Wallet";


const page = () => {
  const [selected, setSelected] = useState(0);
  const [time, setTime] = useState(0);
  const [code, setCode] = useState("zi7uc68j");
  // const [user, setuser] = useState(false);
  const {address,isDisconnected} = useAccount();
  const {user,setUser} = useContext(userContext);
  console.log(user);
  if(address){
    setUser(address);
  }
  if(isDisconnected){
    setUser(null);
  }
  return (
    <div>
      <div
        id="heading"
        className="bg-[#141515] w-[100vw] h-full py-16  gap-10 flex items-center justify-center"
      >
        <div className="flex items-start flex-col gap-6">
          <div>
            <Image
              src="/Images/referral.svg"
              alt="Profile Picture"
              height={200}
              width={200}
            />
          </div>
          <div className="flex flex-col text-7xl font-black ">
            <span className="bg-gradient-to-tr from-[#39A2FA] via-[#33CBE2] to-[#37F6C9] text-transparent bg-clip-text">
              Refer Friends
            </span>
            <span className="bg-gradient-to-tr from-[#39A2FA] via-[#33CBE2] to-[#37F6C9] text-transparent bg-clip-text">
              Earn Together
            </span>
          </div>
          <div className="text-sm font-light">
            <span>
              Get up to 30% rebate when you invite friends to Remex!{" "}
            </span>
            <Link href="#" className="text-blue-400 hover:underline">
              View Rules
            </Link>
          </div>
          <div className="rounded-lg bg-[#272627] text-sm flex items-center gap-2 text-white px-4 py-2">
            <span>
              <HiSpeakerphone color="white" />
            </span>
            <span>0x2c...344 gets</span>
            <span className="text-yellow-400">$4539.00</span>
          </div>
        </div>
        {!user && (
          <div className="bg-[#262626] rounded-xl w-[25%]">
            <div className="px-4 py-4 text-center border-b-2 border-b-[#373636]">
              Create Invitation Code and Get up to 30% Referral Commission
            </div>
            <div id="referral code" className="p-8 flex gap-4 flex-col">
              <input
                type="text"
                className="px-4 py-4 bg-[#373636] rounded-xl w-full focus:border focus:border-blue-500 outline-none"
                value={code}
                onChange={(e) => setCode(e.target.value)}
              />
              <p className="text-[0.7rem] px-4 text-gray-300 text-left">
                Generate referral codes using only lowercase letters and numbers
                (no uppercase letters and symbols), up to 20 characters long and
                can be created only once.
              </p>
              <button className="bg-[#3B1A91] flex justify-center items-center gap-2 text-white text-md rounded-md px-3 py-2">
                Create Now
              </button>
            </div>
          </div>
        )}
      </div>
      <div>
        <div className="w-[100vw] flex flex-col items-center justify-center  py-2">
          <div className="flex justify-start border-b-[2px] border-b-[#141515] items-center w-1/2 gap-10 text-gray-600 font-bold">
            <Link href="#Dashboard"  >
            <button
              className={`hover:text-white ${
                selected == 0 && "border-b-2 border-b-white h-full text-white"
              }`}
              onClick={() => {
                setSelected(0);
              }}
            >
              Dashboard
            </button>
            </Link>
            {user && (
              <>
              <Link href="#Referrals"  >
                <button
                  className={`hover:text-white ${
                    selected == 2 &&
                    "border-b-2 border-b-white h-full text-white"
                  }`}
                  onClick={() => {
                    setSelected(2);
                  }}
                >
                  Referrals
                </button>
                </Link>
                <Link href="#Commission"  >
                <button
                  className={`hover:text-white ${
                    selected == 3 &&
                    "border-b-2 border-b-white h-full text-white"
                  }`}
                  onClick={() => {
                    setSelected(3);
                  }}
                >
                  Commission Rebate
                </button>
                </Link>
              </>
            )}
            <Link href="#Leaderboard" >
            <button
              className={`hover:text-white ${
                selected == 1 && "border-b-2 border-b-white h-full text-white"
              }`}
              onClick={() => {
                setSelected(1);
              }}
            >
              Leaderboard
            </button>
            </Link>
          </div>
          <div className="w-1/2 px-4 m-10">
            <div className="flex justify-start flex-col items-start gap-8">
              <div id="Dashboard" className="text-2xl font-bold  flex items-center gap-4">
                {" "}
                <CiWallet color="#3B1A91" size={40} />
                Dashboard
              </div>
              <div className="w-full h-full bg-[#141515] flex items-center justify-center p-8 rounded-xl">
                {user ? 
                  <div className="flex items-start justify-center w-full flex-col gap-6">
                    <div className="flex items-start justify-center w-full flex-col gap-6">
                      <span className="text-sm underline decoration-dashed">
                        Pending
                      </span>
                      <span className="text-4xl font-bold">$0.0000</span>
                    </div>
                    <div className="flex gap-4">
                      <div className="rounded-xl bg-[#262626] gap-4 px-4 py-3 flex">
                        <Image
                          src="/Images/dashboard1.svg"
                          height={35}
                          width={35}
                          alt="token"
                        />
                        <div className="flex flex-col justify-center items-start">
                          <span className="font-bold text-sm text-white">
                            $0.0000
                          </span>
                          <span className="text-sm text-gray-300 ">opBNB</span>
                        </div>
                        <button
                          disabled
                          className="rounded-xl border border-gray-500 text-sm text-gray-500 px-3"
                        >
                          Claim
                        </button>
                      </div>
                      <div className="rounded-xl bg-[#262626] gap-4 px-4 py-3 flex">
                        <Image
                          src="/Images/dashboard2.svg"
                          height={35}
                          width={35}
                          alt="token"
                        />
                        <div className="flex flex-col justify-center items-start">
                          <span className="font-bold text-sm text-white">
                            $0.0000
                          </span>
                          <span className="text-sm text-gray-300 ">Manta</span>
                        </div>
                        <button
                          disabled
                          className="rounded-xl border border-gray-500 text-sm text-gray-500 px-3"
                        >
                          Claim
                        </button>
                      </div>
                      <div className="rounded-xl bg-[#262626] gap-4 px-4 py-3 flex">
                        <Image
                          src="/Images/dashboard3.svg"
                          height={35}
                          width={35}
                          alt="token"
                        />
                        <div className="flex flex-col justify-center items-start">
                          <span className="font-bold text-sm text-white">
                            $0.0000
                          </span>
                          <span className="text-sm text-gray-300 ">BNB</span>
                        </div>
                        <button
                          disabled
                          className="rounded-xl border border-gray-500 text-sm text-gray-500 px-3"
                        >
                          Claim
                        </button>
                      </div>
                    </div>
                    <div className="w-full">
                      <div className="flex gap-4">
                        <span className="text-sm font-bold">Claimed</span>
                        <span className="text-sm font-bold">$0.0000</span>
                        <span className="text-sm font-bold text-gray-600">
                          {"("}
                        </span>
                        <span className="text-sm font-bold text-gray-600 flex gap-2">
                          <Image
                            src="/Images/dashboard1.svg"
                            width={20}
                            height={20}
                            alt="referral1"
                          />
                          <span>$0.0000</span>
                        </span>
                        <span className="text-sm font-bold text-gray-600 flex gap-2">
                          <Image
                            src="/Images/dashboard2.svg"
                            width={20}
                            height={20}
                            alt="referral2"
                          />
                          <span>$0.0000</span>
                        </span>
                        <span className="text-sm font-bold text-gray-600 flex gap-2">
                          <Image
                            src="/Images/dashboard3.svg"
                            width={20}
                            height={20}
                            alt="referral3"
                          />
                          <span>$0.0000</span>
                        </span>
                        <span className="text-sm font-bold text-gray-600">
                          {")"}
                        </span>
                      </div>
                    </div>
                  </div>
                 : (
                  <WalletsProvider/>
                )}
              </div>
            </div>
          </div>
          {user && (
            <>
              <div id="Referrals" className="w-1/2 px-4 m-10 ">
                <div className="flex justify-start flex-col items-start gap-8">
                  <div className="text-2xl font-bold  flex items-center gap-4">
                    <IoPeopleOutline color="gold" size={40} />
                    Referral
                  </div>
                  <div className="w-full h-full bg-[#141515] flex flex-col items-center justify-center py-8 rounded-xl">
                    <div className="bg-[#262626] rounded-xl w-[50%]">
                      <div className="px-4 py-4 text-center border-b-2 border-b-[#373636]">
                        Create Invitation Code and Get up to 30% Referral
                        Commission
                      </div>
                      <div
                        id="referral code"
                        className="p-8 flex gap-4 flex-col"
                      >
                        <input
                          type="text"
                          className="px-4 py-4 bg-[#373636] rounded-xl w-full focus:border focus:border-blue-500 outline-none"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                        />
                        <p className="text-[0.7rem] px-4 text-gray-300 text-left">
                          Generate referral codes using only lowercase letters
                          and numbers (no uppercase letters and symbols), up to
                          20 characters long and can be created only once.
                        </p>
                        <button className="bg-[#3B1A91] flex justify-center items-center gap-2 text-white text-md rounded-md px-3 py-2">
                          Create Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="Commission" className="w-1/2 px-4 m-10 ">
                <div className="flex justify-start flex-col items-start gap-8">
                  <div className="text-2xl font-bold  flex items-center gap-4">
                    <RiCoupon3Line color="#3B1A91" size={40} />
                    Commission Rebate
                  </div>
                  <div className="w-full h-full bg-[#141515] flex flex-col items-center justify-center py-8 rounded-xl">
                    <div className="bg-[#262626] rounded-xl w-[50%]">
                      <div className="px-4 py-4 text-center border-b-2 border-b-[#373636]">
                      Bind Invitation Code and Enjoy 5% ~ 20% Fee Rebate
                      </div>
                      <div
                        id="referral code"
                        className="p-8 flex gap-4 flex-col"
                      >
                        <input
                          type="text"
                          className="px-4 py-4 bg-[#373636] rounded-xl w-full focus:border focus:border-blue-500 outline-none"
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="Enter Referral Code"
                        />
                        <p className="text-[0.7rem] px-4 text-gray-300 text-left">
                        You can use the referrer's invitation code or use Remex invitation Code
                        </p>
                        <button className="bg-[#3B1A91] flex justify-center items-center gap-2 text-white text-md rounded-md px-3 py-2">
                          Confirm
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          <div className="w-1/2 px-4 m-10 ">
            <div className="flex justify-start flex-col items-start gap-8">
              <div id="Leaderboard" className="text-2xl font-bold  flex items-center gap-4">
                <GoTrophy color="gold" size={40} />
                Leaderboard
              </div>
              <div className="w-full h-full bg-[#141515] flex flex-col items-center justify-center py-8 rounded-xl">
                <div className="w-[95%] border-b-[1px] border-b-gray-800 text-gray-400 py-1 flex gap-8">
                  <button
                    className={`hover:text-white text-sm ${
                      time == 0 &&
                      "border-b-2 border-b-white h-full text-white transition  ease-linear"
                    }`}
                    onClick={() => {
                      setTime(0);
                    }}
                  >
                    Weekly
                  </button>
                  <button
                    className={`hover:text-white text-sm ${
                      time == 1 &&
                      "border-b-2 border-b-white h-full text-white transition  ease-linear"
                    }`}
                    onClick={() => {
                      setTime(1);
                    }}
                  >
                    Total
                  </button>
                </div>
                <div className="w-[95%] flex px-2 py-4 text-sm text-gray-400 border-b-[1px] border-b-gray-800">
                  <div className="basis-1/4">Rank</div>
                  <div className="basis-3/4">Traders</div>
                  <div className="basis-3/4">Trading Invites</div>
                  <div className="basis-3/4 underline decoration-dashed">
                    Referral Income
                  </div>
                  <div className="basis-2/4 px-2"> 
                      Claim 
                  </div>
                </div>
                <div className="w-[95%]  px-2 py-4 text-md text-white border-b-[1px] border-b-gray-800 gap-8">
                  {leaderboardData.map((data, index) => {
                    return (
                      <div className="w-full flex flex-col gap-2">
                        <div className="flex items-center justify-start px-4 py-2 hover:bg-neutral-800 rounded-lg">
                          <div className="basis-1/4">
                            {index + 1 > 3 ? (
                              index + 1
                            ) : (
                              <Image
                                src={`/Images/trophy${index + 1}.png`}
                                width={20}
                                height={20}
                                alt="rank"
                              />
                            )}
                          </div>
                          <div className="basis-3/4">{data.trader}</div>
                          <div className="basis-3/4">{data.tradingInvites}</div>
                          <div className="basis-3/4 ">{data.referral}</div>
                          <button className="basis-2/4 bg-[#3B1A91] rounded-lg text-white text-sm px-2 py-2 ">Claim</button>
                        </div>
                      </div>
                    );
                  })}
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

const leaderboardData = [
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },

  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },

  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },

  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
  {
    trader: "0xsf...rd",
    tradingInvites: 257,
    referral: "$5.45",
  },
];
