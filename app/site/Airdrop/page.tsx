import React from "react";
import { RiBillLine } from "react-icons/ri";
import { MdOutlineRocket } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { LuWallet } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import Image from "next/image";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


const page = () => {
  return (
    <div className="flex flex-col items-center  gap-6 justify-center ">
      <div
        id="top-info"
        className="bg-[#011815] mt-16  mb-14 rounded-xl w-1/2 px-10 py-6 flex flex-col items-start"
      >
        <div className="flex flex-col gap-6 items-start justify-center">
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-[#032F26] rounded-full p-2">
              <RiBillLine color="#07F2C7" size={20} />
            </div>
            <span className="text-sm text-slate-200">
              Trade/LP to earn $LOGX every Friday from a weekly pool of
              3,000,000 tokens.
            </span>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-[#032F26] rounded-full p-2">
              <MdOutlineRocket color="#07F2C7" size={20} />
            </div>
            <span className="text-sm text-slate-200">
              Program will run till token launch
            </span>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-[#032F26] rounded-full p-2">
              <FaXTwitter color="#07F2C7" size={20} />
            </div>
            <span className="text-sm text-slate-200">
              Points and Gems have been converted to $LOGX tokens. Please check
              drop history section.
            </span>
          </div>
          <div className="flex gap-3 items-center justify-center">
            <div className="bg-[#032F26] rounded-full p-2">
              <LuWallet color="#07F2C7" size={20} />
            </div>
            <span className="text-sm text-slate-200">
              $LOGX can be claimed at TGE. Date will be announced in a few
              weeks.
            </span>
          </div>
        </div>
      </div>
      <div id="Drops" className="w-1/2 flex justify-between">
        <div className="text-3xl text-[#0CF3C4] flex gap-2">
          <span>$LOGX Drops</span>
          <BsStars color="#0CF3C4" size={30} />
        </div>
        <div className="text-lg text-[#0CF3C4]">🎁 $LogX Program Details</div>
      </div>
      <div id="Earn1" className="w-1/2 flex">
        <div className="w-3/5 py-8 px-10 flex-col flex gap-2 bg-[#060706] border border-[#252525] rounded-tl-2xl rounded-bl-2xl">
          <div className="text-md text-gray-600">Total earning</div>
          <div className="text-4xl text-[#0CF3C4] font-bold">0.00 $LOGX</div>
        </div>
        <div className="w-2/5 py-8 px-10 flex-col gap-2 flex bg-[#060706] border border-[#252525] rounded-tr-2xl rounded-br-2xl">
          <div className="text-lg text-gray-600 flex justify-between">
            <div className="">Your Position</div>
            <div className="text-white">#-</div>
          </div>
          <div className="text-lg text-gray-600 flex justify-between">
            <div>Drops When?</div>
            <div className="text-white">Every Friday</div>
          </div>
        </div>
      </div>
      <div id="Earn2"
        className="w-1/2 flex flex-col bg-[#060706] border border-[#252525] pt-4 rounded-2xl px-8"
      >
        <div className="w-full p-4 border-b border-b-[#252525]">
          How to Earn?
        </div>
        <div className="w-full p-4 flex flex-col border-b border-b-[#252525]">
          <div className="flex justify-between my-2 items-center">
            <div className="flex gap-4 items-center">
              <span>1. Earn $LOGX by trading on LogX OG</span>
              <div className="text-sm text-[#0CF3C4] bg-[#011815] px-4 py-2 rounded-full">
                1,000.000 $LogX Weekly
              </div>
            </div>
            <button className="text-sm rounded-lg text-black bg-[#0CF3C4] px-8 mt-2 py-2">
              Trade Now
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div className="text-sm text-gray-600">
              Trade on any chain listed below and earn $LOGX
            </div>
            <div className="flex gap-2">
              <Image src="/Images/airdrop1.svg" alt="airdropImage1" width={25} height={25} />
              <Image src="/Images/airdrop2.svg" alt="airdropImage2" width={25} height={25} />
              <Image src="/Images/airdrop3.svg" alt="airdropImage3" width={25} height={25} />
              <Image src="/Images/airdrop4.svg" alt="airdropImage4" width={25} height={25} />
              <Image src="/Images/airdrop5.svg" alt="airdropImage5" width={25} height={25} />
              <Image src="/Images/airdrop6.svg" alt="airdropImage6" width={25} height={25} />
              <Image src="/Images/airdrop7.svg" alt="airdropImage7" width={25} height={25} />
              <Image src="/Images/airdrop8.svg" alt="airdropImage8" width={25} height={25} />
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col border-b border-b-[#252525]">
          <div className="flex justify-between my-2 items-center">
            <div className="flex gap-4 items-center">
              <span>2. Earn $LOGX by trading on LogX Pro</span>
              <div className="text-sm text-[#0CF3C4] bg-[#011815] px-4 py-2 rounded-full">
                1,000.000 $LogX Weekly
              </div>
            </div>
            <button className="text-sm rounded-lg text-black bg-[#0CF3C4] px-8 mt-2 py-2">
              Trade Now
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div className="text-sm text-gray-600">
              Trade on any chain listed below and earn $LOGX
            </div>
            <div className="flex gap-2">
              <Image src="/Images/airdrop9.svg" alt="airdrop9" width={25} height={25} />
              <Image src="/Images/airdrop10.svg" alt = "airdrop10" width={25} height={25} />
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col border-b border-b-[#252525]">
          <div className="flex justify-between my-2 items-center">
            <div className="flex gap-4 items-center">
              <span>3. Provide Liquidity and earn $LOGX</span>
              <div className="text-sm text-[#0CF3C4] bg-[#011815] px-4 py-2 rounded-full">
                300,000 $LogX Weekly
              </div>
            </div>
            <button className="text-sm rounded-lg text-black bg-[#0CF3C4] px-8 mt-2 py-2">
              Provide Now
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div className="text-sm text-gray-600">
              Liquidity provision earns you $LOGX along with 60% of protocol
              trading fees
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col border-b border-b-[#252525]">
          <div className="flex justify-between my-2 items-center">
            <div className="flex gap-4 items-center">
              <span>4. Refer your friends and earn $LOGXX</span>
            </div>
            <button className="text-sm rounded-lg text-black bg-[#0CF3C4] px-8 mt-2 py-2">
              Refer Now
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div className="text-sm text-gray-600">
            Referring your friends unlocks $LOGX Allocations
            </div>
          </div>
        </div>
        <div className="w-full p-4 flex flex-col border-b border-b-[#252525]">
          <div className="flex justify-between my-2 items-center">
            <div className="flex gap-4 items-center">
              <span>5. Participate in LogX Campaigns & Competitions</span>
            </div>
            <button className="text-sm rounded-lg text-black bg-[#0CF3C4] px-8 mt-2 py-2">
              Join Now
            </button>
          </div>
          <div className="flex flex-col gap-2 justify-start">
            <div className="text-sm text-gray-600">
            Watch out for various campaigns & competitions to earn $LOGX
            </div>
          </div>
        </div>
      </div>
      <div id="Earn3"
        className="w-1/2 flex flex-col bg-[#060706] border border-[#252525] pt-4 rounded-2xl px-12"
      >
          <div className="flex justify-between py-6">
            <div className="text-lg">Drop History</div>
            <div>
                <MdKeyboardArrowUp size={36} color="white"/>
            </div>
          </div>
          <div className="border-b text-gray-600 flex py-4 justify-between border-b-[#252525]">
              <div>Week</div>
              <div>$LOGX</div>
              <div>Event</div>
          </div>
          <div className="border-b text-gray-600 flex py-4 justify-between border-b-[#252525]">
              <div>Week1</div>
              <div>-</div>
              <div>-</div>
          </div>
      </div>
      <div id="Bonus" className="w-1/2 my-8 flex justify-between">
        <div className="text-3xl text-[#0CF3C4] flex gap-2">
          <span>Bonus $LOGX</span>
          <BsStars color="#0CF3C4" size={30} />
        </div>
        <div className="text-lg text-gray-600">Royalty NFTs are now live with a special $LOGX allocation</div>
      </div>
      <div className="rounded-xl flex flex-col justify-between items-start p-8 w-1/2 h-56 bg-no-repeat bg-cover mb-20 p-0 bg-[url('/Images/nftbg.png')]">
          <div className="w-1/2 flex flex-col gap-2">
              <div className="text-white font-bold text-xl">
                    Royalty Free NFTs
              </div>
              <div className="text-md text-gray-500">
              Earn Black, Gold and Silver NFTs that can be
redeemed for $LOGX at token launch.
              </div>
          </div>
          <div className="text-[#0Cf3c4] text-md hover:underline cursor-pointer">
              Win Them Now!{'>'}
          </div>
      </div>
    </div>
  );
};

export default page;
