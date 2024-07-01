"use client"
import React,{useState} from 'react'
import Image from 'next/image';
import { FaChevronDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FaX } from 'react-icons/fa6';
import { IoSunnySharp } from "react-icons/io5";
import { DiVim } from 'react-icons/di';
import { IoSearch } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
const page = () => {
  const [openTokens,setOpenTokens]= useState(false);
  const tokens=[{
    image:'/Images/crypto/ftm.png',
    name:'FTM',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/dai.svg',
    name:'DAI',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/eth.png',
    name:'ETH',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/ena.png',
    name:'ENA',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/sol.png',
    name:'SOL',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/btc.png',
    name:'BTC',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/wif.png',
    name:'WIF',
    wallet:'0x308...254ca'
  },{
    image:'/Images/crypto/bnb.png',
    name:'BNB',
    wallet:'0x308...254ca'
  }]
  const [swapValue,setSwapValue] = useState(0.0);
  const [selectedToken,setSelectedToken]= useState('FTM');
  const [toToken,setToToken] = useState("ETH");
  const [type,setType] = useState("from");
  return (
    <div className="w-full h-screen  flex px-4 lg:px-12 flex-col items-center justify-start overflow-x-hidden bg-[#F8FAFC] dark:bg-[#120E1B]">
        {openTokens&& 
            <>
          <div className='bg-black w-full h-screen absolute z-40 opacity-55'></div>
          <div className='w-full h-screen flex items-center justify-center absolute z-50'>
            <div className='flex items-start justify-start py-10 bg-[#1F233C] w-[45%] h-[35rem] rounded-xl  '>
            <div className='flex flex-col w-[90%] gap-4 px-8 py-2'>
              <div className='flex w-full gap-2 justify-between rounded-xl'>
              <div className='flex border border-slate-700 w-[70%] rounded-md p-2'>
                <IoSearch className='text-slate-400 mr-2' size={25}/>
                <input type="text" placeholder='WETH, USDC,0x....' className='bg-transparent outline-none'/>
              </div>
              <div className='bg-slate-500 rounded-xl p-2 self-end' onClick={()=>{setOpenTokens(false)}}><RxCross2 /></div>
              </div>
              <div className=''>
              <div className='flex flex-col gap-2 overflow-y-scroll h-[25rem]'>
                {tokens.map((token)=>{
                  return(
                    <div className='flex gap-[1rem] hover:bg-slate-400 p-4 rounded-md' onClick={()=>{
                      if(type=="from"){
                        setSelectedToken(`${token.name}`)                       
                      }else{
                        setToToken(`${token.name}`)
                      }
                      setOpenTokens(false);
                      }}>
                      <Image src={token.image}
                      alt="token"
                      width={50}
                      height={50}
                      className="rounded-full"
                      />
                      <div className='flex flex-col gap-[0.2rem]'>
                          <div className='text-md text-white'>{token.name}</div>
                          <div className='text-sm text-slate-400'>{token.wallet}</div>
                      </div>
                    </div>
                  )
                })
              }
              </div>
              </div>
            </div>
          </div>
          </div>
            </>
        }
        
        <div className='text-5xl font mt-24 dark:text-white text-black font-bold'>
            Swap Tokens
        </div>
      <div className="flex flex-col sc0:flex-row gap-4 my-20 md:gap-5 w-full md:w-[90%] items-center justify-center h-[40rem] md:h-[20rem] relative z-10">       
        <div
          id="swap-box"
          className="bg-white shadow-md dark:bg-[#21212d] w-full lg:w-[45%] py-10 px-4 lg:px-10 flex flex-col gap-4 h-full rounded-xl"
        >
          <div className="flex justify-between w-full font-bold text-gray-500 dark:text-[#647186]">
            <span>Swap</span>
            <span>Available 0.0 {selectedToken}</span>
          </div>
          <div className="w-full flex items-center  border border-gray-300 dark:border-[#647186] rounded-lg h-[95%]">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[50%] md:w-[30%] cursor-pointer" onClick={()=>{
              setOpenTokens(true)
              setType("from");
              } }>
              <div className="w-full h-full flex justify-between px-4 items-center text-[#647186] gap-8 lg:gap-0">
                <div className="flex gap-2 items-center" >
                  <Image
                    src={`${tokens.filter((p)=>p.name===selectedToken).map((e)=>e.image)}`}
                    width={25}
                    height={25}
                    alt={"velo"}
                    className='rounded-full'
                  />
                  <span>{selectedToken}</span>
                </div>
                <FaChevronDown size={10} />
              </div>
            </div>
            <input
              type="text"
              value={"0.0"}
              className="bg-transparent px-4 select-none border-none outline-none text-black font-bold dark:text-slate-100"
              onChange={(e)=>setSwapValue(Number(e.target.value))}
            />
          </div>
         
          <div className='flex items-center justify-center w-full gap-2'>
              <hr className='w-[50%] border border-gray-300 dark:border-[#121B2C] border-1'/>
              <div className=" h-fit">
                <Image
                  src="/Images/swap.png"
                  width={25}
                  height={25}
                  alt="swap"
                  className="rounded-sm my-4 relative"
                />
              </div>
              <hr  className='w-[50%] border  border-gray-300 dark:border-[#121B2C]'/>
          </div>

          <div className="flex justify-between w-full text-gray-800 font-bold dark:text-[#647186]">
            <span>For</span>
            <span>Available 0.0 {toToken}</span>
          </div>
          <div className="w-full flex items-center  border border-gray-300 dark:border-[#647186] rounded-lg h-[95%]">
            <div className="border-r border-[#647186] h-full  flex items-start py-2 justify-start w-[50%] md:w-[30%] cursor-pointer" onClick={
              ()=>{
                setOpenTokens(true);
                setType("to");  
              } }>
              <div className="w-full  h-full flex justify-between px-4 items-center text-[#647186] gap-10 md:gap-0">
                <div className="flex gap-2 items-center ">
                  <Image
                    src={`${tokens.filter((p)=>p.name===toToken).map((e)=>e.image)}`}
                    width={25}
                    height={25}
                    alt={"velo"}
                    className='rounded-full'
                  />
                  <span>{toToken}</span>
                </div>
                <FaChevronDown size={10} />
              </div>
            </div>
            <input
              type="text"
              value={"0.0"}
              className="bg-transparent select-none px-4 border-none outline-none text-black font-bold dark:text-slate-100"
            />
          </div>
        </div>
        <div className="dark:bg-[#21212d] bg-white shadow-md w-full lg:w-[37%] h-full flex flex-col gap-10 py-4 px-4 lg:py-7 lg:px-12 rounded-xl">
          <div className='text-2xl text-black dark:text-white' >Swap</div>
          <div className="flex flex-col text-black dark:text-white">
            <div className="flex gap-4">
              <div className="dark:bg-[#0F172B] bg-[#d4d4d4] text-black dark:text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                1
              </div>
              <div className="text-sm text-black dark:text-white">
                Start by selecting the token to Swap from and the amount you want to
                exchange
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4"> 
              <div className="dark:bg-[#0F172B] bg-[#d4d4d4] text-black dark:text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                2
              </div>
              <div className="text-sm text-black dark:text-white">
              Pick the token you want to exchange for
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4">
              <div className="dark:bg-[#0F172B] bg-[#d4d4d4] text-black dark:text-white rounded-full py-1 px-1 flex justify-center text-[0.7rem] h-6 w-6">
                3
              </div>
              <div className="text-sm text-black dark:text-white">
              The quote will be ready in a moment!
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default page