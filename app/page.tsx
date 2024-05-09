"use client"
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import {useTypewriter,Cursor} from "react-simple-typewriter";
import {useScroll,motion, AnimatePresence, MotionValue, useMotionValueEvent, useTransform} from "framer-motion";
import { useRef, useState } from "react";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  const [open,setOpen] = useState(-1);
  const data = [
    { pair: "SOL", CHG: -2.084, price: 141.757, vol: 335.7 },
    { pair: "ETH", CHG: -1.802, price: 3053.231, vol: 312.8 },
    { pair: "FTM", CHG: -1.482, price: 0.701, vol:178.8 },
    { pair: "BNB", CHG: -1.345, price: 555.820, vol: 102.1 },
    { pair: "BTC", CHG: -2.179, price: 63694.000, vol: 384.8 },
    { pair: "ENA", CHG: -3.063, price: 0.981, vol: 27.24 },
    { pair: "WIF", CHG: -6.498, price: 2.756, vol: 254.6 },
    { pair: "SOL", CHG: -2.084, price: 141.757, vol: 335.7 },
    { pair: "ETH", CHG: -1.802, price: 3053.231, vol: 312.8 },
    { pair: "FTM", CHG: -1.482, price: 0.701, vol:178.8 },
    { pair: "BNB", CHG: -1.345, price: 555.820, vol: 102.1 },
    { pair: "BTC", CHG: -2.179, price: 63694.000, vol: 384.8 },
    { pair: "ENA", CHG: -3.063, price: 0.981, vol: 27.24 },
    { pair: "WIF", CHG: -6.498, price: 2.756, vol: 254.6 },
  ];
  const data2 = [
    { pair: "BNB", CHG: -1.345, price: 555.820, vol: 102.1 },
    { pair: "WIF", CHG: -6.498, price: 2.756, vol: 254.6 },
    { pair: "BTC", CHG: -2.179, price: 63694.000, vol: 384.8 },
    { pair: "ETH", CHG: -1.802, price: 3053.231, vol: 312.8 },
    { pair: "ENA", CHG: -3.063, price: 0.981, vol: 27.24 },
    { pair: "SOL", CHG: -2.084, price: 141.757, vol: 335.7 },
    { pair: "FTM", CHG: -1.482, price: 0.701, vol:178.8 },
    { pair: "BNB", CHG: -1.345, price: 555.820, vol: 102.1 },
    { pair: "WIF", CHG: -6.498, price: 2.756, vol: 254.6 },
    { pair: "BTC", CHG: -2.179, price: 63694.000, vol: 384.8 },
    { pair: "ETH", CHG: -1.802, price: 3053.231, vol: 312.8 },
    { pair: "ENA", CHG: -3.063, price: 0.981, vol: 27.24 },
    { pair: "SOL", CHG: -2.084, price: 141.757, vol: 335.7 },
    { pair: "FTM", CHG: -1.482, price: 0.701, vol:178.8 },
  ];
  const data3 = [
    { pair: "ENA", CHG: -3.063, price: 0.981, vol: 27.24 },
    { pair: "BNB", CHG: -1.345, price: 555.820, vol: 102.1 },
    { pair: "ETH", CHG: -1.802, price: 3053.231, vol: 312.8 },
    { pair: "WIF", CHG: -6.498, price: 2.756, vol: 254.6 },
    { pair: "BTC", CHG: -2.179, price: 63694.000, vol: 384.8 },
    { pair: "SOL", CHG: -2.084, price: 141.757, vol: 335.7 },
    { pair: "FTM", CHG: -1.482, price: 0.701, vol:178.8 },
    { pair: "ENA", CHG: -3.063, price: 0.981, vol: 27.24 },
    { pair: "ETH", CHG: -1.802, price: 3053.231, vol: 312.8 },
    { pair: "BNB", CHG: -1.345, price: 555.820, vol: 102.1 },
    { pair: "BTC", CHG: -2.179, price: 63694.000, vol: 384.8 },
    { pair: "SOL", CHG: -2.084, price: 141.757, vol: 335.7 },
    { pair: "FTM", CHG: -1.482, price: 0.701, vol:178.8 },
    { pair: "WIF", CHG: -6.498, price: 2.756, vol: 254.6 },
  ];
  const dataSponsor = [{},{},{},{}]
  const ref = useRef(null);
  const {scrollYProgress} = useScroll({target:ref});
  const x = useParallax(scrollYProgress,300);
  const x2 = useParallax(scrollYProgress,-300);
  const [text,textHelper] = useTypewriter({
    words:["Crypto"],
    loop:true,
    typeSpeed:150,
    deleteSpeed:50,
    delaySpeed:1000
  })  
  
  function useParallax(value:MotionValue<number>,distance:number){
    return useTransform(value,[0,1],[-distance,distance])
  }
  return (
    <>
      <main className="max-w-[100vw] overflow-hidden">
        <AnimatePresence>
          <div className="w-[100vw] h-[100vh] relative">
            <Image src="/Images/cubes (1).png" fill alt="Backdrop" />

            <div className="w-[100vw] h-[100vh] absolute">
              <Image src="/Images/Effect.png" fill alt="Backdrop" />
            </div>
            <div
              id="nav"
              className="w-[100vw] sticky  flex justify-center items-center p-[1vw] gap-[15vw] bg-[rgb(10,7,12)] bg-opacity-25 sticky top-0 absolute z-10 backdrop-blur"
            >
              <div className="font-extrabold text-3xl flex items-center justify-center gap-0">
                <Image src="/Images/logo.png" width={70} height={70} alt="logo" />
                <span className="relative right-3 top-2">emex</span></div>
              <div className="flex gap-[3vw] items-center justify-center">
                <div>Discord</div>
                <div>Medium</div>
                <div>Twitter</div>
                <div>Docs</div>
                <Link href="/site/Trade">
                  <button className="w-full px-4 h-[2.5vw] rounded-3xl bg-[#371D8A] text-[#FFFFFF]">
                    Launch App
                  </button>
                </Link>
              </div>
            </div>

            <div className="w-[60vw] h-[100vh] absolute flex flex-col pr-[10vw] pl-[10vw] absolute top-72 z-0">
              <h1 className="text-7xl mb-[2vw] font-plusJakarta flex flex-col gap-4">
                <div className="">
                  Trade{" "}
                  <span className="text-[#7950AE] font-bold">
                    {text}
                    <Cursor />
                  </span>{" "}
                </div>
                <div>like never before</div>
              </h1>
              <p className="font-plusJakarta text-2xl font-extralight text-[#918FA3] ">
                Remex lets you trade all your favourite assets at lightning
                speed without compromising security.
              </p>
              <div className="flex gap-[2.5vw] justify-center items-start mt-[2.5vw] w-[25vw]">
                <Link href="/site/Trade">
                  <button className="w-full h-[2.5vw] px-6 py-1 rounded-3xl bg-[#371D8A] text-[#FFFFFF] hover:bg-transparent hover:border-2 hover:border-[#371D8A] hover:text-[#371D8A]">
                    Launch App
                  </button>
                </Link>
                <Link href="/site/Trade">
                  <button className="w-full h-[2.5vw] px-6 rounded-3xl bg-transparent text-[#371D8A] border border-2 border-[#371D8A] hover:bg-violet-800 hover:text-white">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[100vw] relative h-fit bg-[#17131d] flex items-center justify-center flex-col gap-4">
            <div className="relative">
              <div
                id="ellipse"
                className="w-[40vw] h-[40vw] absolute z-[0] rounded-full bg-gradient-to-b from-[#FF0A6C26] to-[#2D27FF26] -right-60 blur"
              ></div>
              <div className="flex gap-[2vw] w-full relative z-[2]" style={{whiteSpace:"nowrap"}}>

                <AnimatePresence>
                  
                {data.map((p) => {
                  return (
                    <motion.div
                      initial={{x:0}}
                      animate={{x:"200%"}}
                      transition={{
                        ease: "linear",
                        duration:10,
                        repeat: Infinity,
                        repeatDelay: 0,
                      }}
                      id="cards"
                      className="flex  gap-4  bg-[#0D0F14] w-[80%] h-full items-center justify-center mt-[2vw] rounded-xl py-4 px-8 shadow-lg shadow-black"
                      
                    >
                      <div
                        id="Image"
                        className="rounded-full overflow-hidden items-center sc1:w-[20%] w-[] justify-center "
                      >
                        <Image
                          src={`${
                            `/Images/crypto/${p.pair.toLowerCase()}.png`
                          }`}
                          width={20}
                          height={20}
                          sizes="vw"
                          alt="crypto"
                          className=" w-fit h-full"
                        />
                      </div>
                      <div id="name" className="flex flex-col h-full">
                        <p>{p.pair}</p>
                        <p>{p.pair}</p>
                      </div>
                      <div id="data" className="flex flex-col gap-2 w-full">
                        <div className="text-xl font-extralight text-zinc-400 self-end">
                          ${p.price}
                        </div>
                        <div className="flex text-[0.8rem] self-end text-zinc-400 gap-3">
                          <div className="flex gap-1">
                            <span>CHG</span>
                            <span
                              className={`${
                                p.CHG < 0 ? "text-red-500" : "text-green-300"
                              }`}
                            >
                              {p.CHG}%
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <span>24H VOL</span>
                            <span className="text-white">${p.vol}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
                
                </AnimatePresence>
              </div>

              <div className="flex gap-[2vw] w-fit ml-[3vw] relative z-[2]">
                {data2.map((p) => {
                  return (
                    <motion.div
                      // ref={ref}
                      // style={{x:x2}}
                      initial={{ x: "0" }}
                      animate={{ x: "-200%" }}
                      transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity,
                        repeatDelay: 0,
                      }}
                      id="cards"
                      className="flex  gap-[2vw] bg-[#0D0F14] w-[23vw] h-[4vw] items-center justify-center mt-[2vw] rounded-xl py-11 px-8 shadow-lg shadow-black"
                    >
                      <div
                        id="Image"
                        className="rounded-full items-center w-[20%] justify-center "
                      >
                        <Image
                          src={`${
                            `/Images/crypto/${p.pair.toLowerCase()}.png`
                          }`}
                          width={500}
                          height={500}
                          alt="crypto"
                          className="rounded-full"
                        />
                      </div>
                      <div id="name" className="flex flex-col ">
                        <p>{p.pair}</p>
                        <p>{p.pair}</p>
                      </div>
                      <div id="data" className="flex flex-col gap-2 w-full">
                        <div className="text-2xl font-extralight text-zinc-400 self-end">
                          ${p.price}
                        </div>
                        <div className="flex text-[0.8rem] self-end text-zinc-400 gap-3">
                          <div className="flex gap-1">
                            <span>CHG</span>
                            <span
                              className={`${
                                p.CHG < 0 ? "text-red-500" : "text-green-300"
                              }`}
                            >
                              {p.CHG}%
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <span>24H VOL</span>
                            <span className="text-white">${p.vol}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="flex gap-[2vw] w-fit relative z-[2]">
                {data3.map((p) => {
                  return (
                    <motion.div
                      // ref={ref}
                      // style={{x}}
                      initial={{ x: 0 }}
                      animate={{ x: "200%" }}
                      transition={{
                        ease: "linear",
                        duration: 10,
                        repeat: Infinity,
                        repeatDelay: 0,
                      }}
                      id="cards"
                      className="flex  gap-[2vw] bg-[#0D0F14] w-[23vw] h-[4vw] items-center justify-center mt-[2vw] rounded-xl py-11 px-8 shadow-lg shadow-black"
                    >
                      <div
                        id="Image"
                        className="rounded-full items-center w-[20%] justify-center "
                      >
                        <Image
                          src={`${
                            `/Images/crypto/${p.pair.toLowerCase()}.png`
                          }`}
                          width={500}
                          height={500}
                          alt="crypto"
                          className="rounded-full"
                        />
                      </div>
                      <div id="name" className="flex flex-col ">
                        <p>{p.pair}</p>
                        <p>{p.pair}</p>
                      </div>
                      <div id="data" className="flex flex-col gap-2 w-full">
                        <div className="text-2xl font-extralight text-zinc-400 self-end">
                          ${p.price}
                        </div>
                        <div className="flex text-[0.8rem] self-end text-zinc-400 gap-3">
                          <div className="flex gap-1">
                            <span>CHG</span>
                            <span
                              className={`${
                                p.CHG < 0 ? "text-red-500" : "text-green-300"
                              }`}
                            >
                              {p.CHG}%
                            </span>
                          </div>
                          <div className="flex gap-1">
                            <span>24H VOL</span>
                            <span className="text-white">${p.vol}</span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            <div
              id="title button"
              className="w-full flex flex-col gap-8 justify-center items-center mt-20"
            >
              <div className="w-fit h-full p-[0.1rem] bg-gradient-to-b from-[#9D4EFE] to-[#371d8a] rounded-full">
                <div className="w-full bg-black h-full rounded-full px-14 text-lg py-2 text-[#9D4EFE]">
                  The Remex Trade
                </div>
              </div>
              <div id="section2 heading" className="text-6xl">
                Scalable leverage for everyone
              </div>
            </div>

            <div
              id="static cards"
              className="w-full h-[30vh]  flex items-center justify-center gap-8 mt-24"
            >
              <div
                id="card1"
                className="bg-[#131A2A] shadow-lg  shadow-[#3335480A] max-w-[25vw] h-full rounded-lg flex justify-center items-center"
              >
                <div
                  id="text"
                  className="flex flex-col items-center justify-between  px-6 py-10 h-full w-2/3"
                >
                  <div id="heading" className="text-xl ">
                    Maximize your potential across crypto and RWAs
                  </div>
                  <div id="textInside" className="text-[0.9rem] text-gray-500">
                    Our infrastructure provides traders access to upto 100x
                    leverage for major cryptocurrencies, forex and commodities
                    pairs.
                  </div>
                </div>
                <div id="image" className="h-[30vh] w-1/3">
                  <Image
                    src="/Images/cardImage1.png"
                    width={500}
                    height={1000}
                    objectFit="contain"
                    alt="cardImage1"
                    className="w-full h-full"
                  />
                </div>
              </div>
              <div
                id="card2"
                className="bg-[#131A2A] shadow-lg  shadow-[#3335480A] max-w-[25vw] h-full rounded-lg flex justify-center items-center"
              >
                <div
                  id="text"
                  className="flex flex-col items-center justify-between  px-6 py-14 h-full w-2/3"
                >
                  <div id="heading" className="text-xl ">
                    Trusted Collateral, Trustless settlement
                  </div>
                  <div id="textInside" className="text-[0.9rem] text-gray-500">
                    All transactions are settled onchain, and powered by
                    Circle’s USDC, the most trusted digital dollar in the world
                  </div>
                </div>
                <div id="image" className="h-[30vh] w-1/3">
                  <Image
                    src="/Images/cardImage2.png"
                    width={500}
                    height={1000}
                    objectFit="contain"
                    alt="cardImage1"
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>

            <div
              id="animated cards"
              className="w-full h-[30vh] relative flex items-center px-14 sc1:px-56 justify-center gap-8 my-28"
            >
              <div
                id="ellipse"
                className="w-[40vw] h-[40vw] absolute z-[0] rounded-full bg-gradient-to-b from-[#FF0A6C26] to-[#2D27FF26] -left-80 blur"
              ></div>
              <motion.div
                whileHover={{
                  scale: 1.3,
                }}
                transition={{ ease: "easeInOut", duration: 500 }}
                id="card1"
                className="w-2/5 relative z-1 rounded-2xl border flex justify-start items-start px-8 py-10 gap-4 flex-col border-[#1B2236] h-full bg-[#0D111C]"
              >
                <div className="text-2xl font-bold text-white flex flex-col">
                  <span>Cefi Frontend,</span>
                  <span>Defi Frontend,</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span>
                    CEX like experience with fully onchain execution, settlement
                    and self-custody
                  </span>
                </div>
              </motion.div>
              <div
                id="card2"
                className="w-2/5 relative z-1  rounded-2xl border flex justify-start items-start px-8 py-10 gap-4 flex-col border-[#1B2236] h-full bg-[#0D111C]"
              >
                <div className="text-2xl font-bold text-white flex flex-col">
                  <span>The most advanced market making vaults in DeFi,</span>
                </div>
                <div className="text-sm text-gray-500">
                  <span>
                    Our USDC vaults offer liquidity providers a structured way
                    to earn real yields, while allowing them to control their
                    risk and time exposure to traders
                  </span>
                </div>
              </div>
              <div
                id="card3"
                className="w-2/5 relative z-1 rounded-2xl border flex justify-start items-start px-8 py-10 gap-4 flex-col border-[#1B2236] h-full bg-[#0D111C]"
              >
                <div className="text-2xl font-bold text-white flex flex-col">
                  <span>World class execution and security- Powered by the Fantom Network</span>
                  
                </div>
                <div className="text-sm text-gray-500">
                  <span>
                    We’re building on the world’s most performant blockchains
                    secured by Ethereum
                  </span>
                </div>
              </div>
            </div>
            <div
              id="PoweredBannerWrapper"
              className="w-full h-fit flex justify-center items-center"
            >
              <div
                id="PoweredBanner"
                className="flex gap-10 bg-[radial-gradient(50%_50%_at_50%_50%,#9766E9_0%,#6B0CE3_100%)] w-[60%] h-fit justify-center items-center px-16 py-6 rounded-3xl "
              >
                {/* <Image src="/Images/poweredBackdrop.png" width={900} height={200} objectFit="cover" alt="backdrop" /> */}
                <div
                  id="textContent"
                  className="w-2/3 bg-[url('/Images/poweredBackdrop.png')] w-full flex flex-col gap-16"
                >
                  <div id="text" className="text-white flex flex-col">
                    <div className="text-2xl font-bold ">
                      <span>Powered by </span>
                      <span className="text-yellow-500">Fantom Network</span>
                    </div>
                    <div className="text-lg text-white">
                      The leading decentralised crypto trading protocol,
                      governed by a global community
                    </div>
                  </div>
                </div>
                <div id="learnmore" className="w-1/3">
                  <button className="px-8 py-3 hover:bg-white hover:text-black rounded-xl border border-white">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="flex ">
              <div className="flex w-[100vw] h-[100vh] relative z-10 flex mt-[2vw] ">
                <div className="flex flex-col gap-[1vw] w-[60%] z-0 overflow-hidden absolute h-full items-center justify-center">
                  <motion.div
                    className="flex gap-[1vw] flex-nowrap "
                    initial={{ x: 0 }}
                    animate={{ x: "-100%" }}
                    transition={{
                      ease: "linear",
                      duration: 30,
                      repeat: Infinity,
                      repeatDelay: 0,
                    }}
                  >
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                  </motion.div>
                  <motion.div
                    className="flex gap-[1vw]"
                    initial={{ x: "-100%" }}
                    animate={{ x: "0%" }}
                    transition={{
                      ease: "linear",
                      duration: 30,
                      repeat: Infinity,
                      repeatDelay: 0,
                    }}
                  >
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                    <Image
                      src="/Images/card2.svg"
                      width={450}
                      height={100}
                      alt="card2"
                    />
                  </motion.div>
                </div>
                <div className="ml-[40vw] flex h-full items-center justify-start">
                  <div className=" flex flex-col gap-[2vw] h-[90%] w-[80vw] items-center justify-center px-32 absolute z-20  h-[70vh] blur-[120px] bg-[#1C162B] rounded-full  p-[1vw] "></div>
                  <div className=" flex flex-col gap-[4vw] h-[70%] w-[50vw] items-start justify-center right-0 px-32 absolute z-30  h-[70vh]   rounded-full bg-opacity-15 p-[1vw] ">
                    <h1 className="text-5xl font-bold ">
                      The Best pricing across CeFi and DeFi
                    </h1>
                    <p className="text-2xl text-zinc-400">
                      Low latency oracles powered by Pyth offer the best
                      possible execution prices for traders across DeFi and CeFi
                      venues, while Chainlink backup feeds ensure maximum
                      decentralization
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="StackedImageSection"
              className="w-full h-[100vh] flex bg-[url('/Images/landingpagesection3.png')] bg-no-repeat bg-cover py-10"
            >
              <div
                id="textContent"
                className="w-[60%] flex justify-center gap-4 items-center flex-col"
              >
                <div
                  id="heading"
                  className="flex flex-col text-5xl gap-2 text-white"
                >
                  <span className="text-[#9C4EFE] font-bold">Manage</span>
                  <span>Your Trading Account</span>
                </div>
                <div id="points" className="flex flex-col w-[50%] gap-8 my-10">
                  <div id="point1" className="flex gap-10">
                    <div className="w-[25%] flex items-start">
                      <svg
                        width="200"
                        height="78"
                        viewBox="0 0 77  78"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_132_2907)">
                          <g clip-path="url(#clip1_132_2907)">
                            <path
                              d="M22.3125 24.7564C31.1146 24.7564 38.25 21.1886 38.25 16.7876C38.25 12.3866 31.1146 8.81885 22.3125 8.81885C13.5105 8.81885 6.375 12.3866 6.375 16.7876C6.375 21.1886 13.5105 24.7564 22.3125 24.7564Z"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.375 16.7876C6.375 16.7876 6.375 23.5428 6.375 27.9438C6.375 32.3448 13.5105 35.9126 22.3125 35.9126C31.1145 35.9126 38.25 32.3448 38.25 27.9438C38.25 25.3371 38.25 16.7876 38.25 16.7876"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.375 27.9438C6.375 27.9438 6.375 34.6992 6.375 39.1002C6.375 43.5011 13.5105 47.0688 22.3125 47.0688C31.1145 47.0688 38.25 43.5011 38.25 39.1002C38.25 36.4934 38.25 27.9438 38.25 27.9438"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.375 39.1001C6.375 39.1001 6.375 45.8554 6.375 50.2563C6.375 54.6573 13.5105 58.2251 22.3125 58.2251C31.1145 58.2251 38.25 54.6573 38.25 50.2563C38.25 47.6496 38.25 39.1001 38.25 39.1001"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M6.375 50.2563C6.375 50.2563 6.375 57.0116 6.375 61.4126C6.375 65.8136 13.5105 69.3813 22.3125 69.3813C31.1145 69.3813 38.25 65.8136 38.25 61.4126C38.25 58.8058 38.25 50.2563 38.25 50.2563"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M54.1875 47.0688C62.9896 47.0688 70.125 43.501 70.125 39.1C70.125 34.699 62.9896 31.1313 54.1875 31.1313C45.3855 31.1313 38.25 34.699 38.25 39.1C38.25 43.501 45.3855 47.0688 54.1875 47.0688Z"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38.25 39.1001C38.25 39.1001 38.25 45.8554 38.25 50.2563C38.25 54.6573 45.3856 58.2251 54.1875 58.2251C62.9895 58.2251 70.125 54.6573 70.125 50.2563C70.125 47.6496 70.125 39.1001 70.125 39.1001"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M38.25 50.2563C38.25 50.2563 38.25 57.0116 38.25 61.4126C38.25 65.8136 45.3856 69.3813 54.1875 69.3813C62.9895 69.3813 70.125 65.8136 70.125 61.4126C70.125 58.8058 70.125 50.2563 70.125 50.2563"
                              stroke="#9C4EFF"
                              stroke-width="5.4"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_132_2907">
                            <rect
                              width="76.5"
                              height="76.5"
                              fill="white"
                              transform="translate(0 0.850098)"
                            />
                          </clipPath>
                          <clipPath id="clip1_132_2907">
                            <rect
                              width="76.5"
                              height="76.5"
                              fill="white"
                              transform="translate(0 0.850098)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-bold text-lg">
                        Self Custody your Funds
                      </span>
                      <span className="font-light text-zinc-400">
                        Remex accounts are 100% self custody and secure.
                        Withdraw and deposit with no restrictions.
                      </span>
                    </div>
                  </div>
                  <div id="point2" className="flex gap-10">
                    <div className="w-[25%] flex items-start">
                      <svg
                        width="200"
                        height="78"
                        viewBox="0 0 77 78"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_132_2920)">
                          <g clip-path="url(#clip1_132_2920)">
                            <path
                              d="M58.0987 25.1038L59.8741 23.322C60.4975 22.695 60.9838 21.9454 61.3022 21.1206C61.6206 20.2958 61.764 19.4138 61.7235 18.5306C61.6831 17.6475 61.4596 16.7823 61.0672 15.99C60.6747 15.1978 60.1219 14.4958 59.4439 13.9284C52.7016 8.28509 44.3938 4.84027 35.6364 4.05672L35.0627 4.0376C33.471 4.03948 31.9371 4.63375 30.7595 5.70466C29.4399 6.91272 28.6877 8.62122 28.6877 10.4126V17.5175C17.031 20.2747 8.50122 30.8668 8.50122 43.0366C8.50122 57.5302 20.2567 69.3144 34.7152 69.3144C39.7961 69.3144 44.6283 67.7876 48.8709 65.0272C49.7538 65.4799 50.7292 65.7476 51.7397 65.7476L52.0871 65.7348C52.9841 65.686 53.8606 65.4476 54.6588 65.0355C55.4571 64.6235 56.1591 64.047 56.7186 63.3442C61.2577 57.6379 63.7336 50.5641 63.7438 43.2725C63.7357 36.7859 61.768 30.4529 58.0987 25.1038ZM34.7152 62.9394C23.7566 62.9394 14.8762 54.0367 14.8762 43.0366C14.8764 38.2657 16.5944 33.6544 19.716 30.0465C22.8375 26.4385 27.1538 24.0752 31.8751 23.3889V43.8144L46.5664 58.9678C43.153 61.5453 38.9924 62.9397 34.7152 62.9394ZM35.0627 39.1798V10.4126C42.5264 11.0852 49.6063 14.0224 55.3543 18.8308L35.0627 39.1798ZM35.7448 43.2247L51.7428 27.198C55.3924 31.7608 57.381 37.4296 57.3815 43.2725C57.3891 49.1245 55.3999 54.8041 51.7428 59.3726L35.7448 43.2247Z"
                              fill="#9C4EFF"
                            />
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_132_2920">
                            <rect
                              width="76.5"
                              height="76.5"
                              fill="white"
                              transform="translate(0 0.850098)"
                            />
                          </clipPath>
                          <clipPath id="clip1_132_2920">
                            <rect
                              width="76.5"
                              height="76.5"
                              fill="white"
                              transform="translate(0 0.850098)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>

                    <div className="flex flex-col">
                      <span className="font-bold text-lg">
                        Detailed Analytics
                      </span>
                      <span className="font-light text-zinc-400">
                        View your historical PnL, active positions, trade
                        history, margin balance, and more!
                      </span>
                    </div>
                  </div>
                  <div id="point3" className="flex gap-10">
                    <svg
                      width="200"
                      height="78"
                      viewBox="0 0 77 78"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_132_2926)">
                        <g clip-path="url(#clip1_132_2926)">
                          <path
                            d="M9.5625 67.7876V61.4126C9.5625 58.0311 10.9058 54.7881 13.2969 52.397C15.688 50.0059 18.931 48.6626 22.3125 48.6626H35.0625C38.444 48.6626 41.687 50.0059 44.0781 52.397C46.4692 54.7881 47.8125 58.0311 47.8125 61.4126V67.7876M51 10.827C53.7426 11.5291 56.1734 13.1242 57.9093 15.3606C59.6452 17.5969 60.5875 20.3475 60.5875 23.1786C60.5875 26.0096 59.6452 28.7601 57.9093 30.9965C56.1734 33.2328 53.7426 34.8279 51 35.5301M66.9375 67.7876V61.4126C66.9213 58.5985 65.9746 55.8689 64.2449 53.6491C62.5153 51.4294 60.0997 49.8442 57.375 49.1407M15.9375 23.1626C15.9375 26.5441 17.2808 29.7871 19.6719 32.1782C22.063 34.5693 25.306 35.9126 28.6875 35.9126C32.069 35.9126 35.312 34.5693 37.7031 32.1782C40.0942 29.7871 41.4375 26.5441 41.4375 23.1626C41.4375 19.7811 40.0942 16.5381 37.7031 14.147C35.312 11.7559 32.069 10.4126 28.6875 10.4126C25.306 10.4126 22.063 11.7559 19.6719 14.147C17.2808 16.5381 15.9375 19.7811 15.9375 23.1626Z"
                            stroke="#9C4EFF"
                            stroke-width="5.4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id="clip0_132_2926">
                          <rect
                            width="76.5"
                            height="76.5"
                            fill="white"
                            transform="translate(0 0.850098)"
                          />
                        </clipPath>
                        <clipPath id="clip1_132_2926">
                          <rect
                            width="76.5"
                            height="76.5"
                            fill="white"
                            transform="translate(0 0.850098)"
                          />
                        </clipPath>
                      </defs>
                    </svg>

                    <div className="flex flex-col">
                      <span className="font-bold text-lg">
                        Manage Multiple Accounts
                      </span>
                      <span className="font-light text-zinc-400">
                        Manage multiple accounts and take advantage of
                        cross-margin positions.
                      </span>
                    </div>
                  </div>
                </div>
                <div id="getStarted" className=" w-[40%]">
                  <button className="px-8 py-2 rounded-full text-white bg-[#361D8B]">
                    Get Started
                  </button>
                </div>
              </div>

              <div
                id="stackedImages"
                className="w-[50%] h-[100vh] flex justify-center h-full items-center"
              >
                <div className="relative w-full h-full flex items-center justify-center">
                  <Image
                    src="/Images/panel.png"
                    width={750}
                    height={100}
                    alt="panel"
                    className="absolute z-[10] bottom-56  right-0 shadow-2xl"
                  />
                  <Image
                    src="/Images/panel.png"
                    width={750}
                    height={100}
                    alt="panel"
                    className="absolute z-[5] bottom-48 right-10"
                  />
                  <Image
                    src="/Images/panel.png"
                    width={750}
                    height={100}
                    alt="panel"
                    className="absolute z-[1] bottom-40 right-20"
                  />
                </div>
              </div>
            </div>
            <div id="partnersSection" className="w-full mb-52">
              <div
                id="Strokeparteners"
                className="w-full flex items-start relative justify-start"
              >
                <div className="text-9xl w-full self-start font-extrabold px-56">
                  Partners
                </div>
                <div className="absolute z-1 w-full h-[2vh] top-24 blur bg-[#16121D]"></div>
                <AnimatePresence>
                <motion.div
                  className="absolute flex z-10 w-full gap-16 h-fit top-32 py-18 items-center justify-center"
                  initial={{ x: 0 }}
                  animate={{ x: "-100%" }}
                  exit={{x:0}}
                  transition={{
                    ease: "linear",
                    duration: 20,
                    repeat: Infinity,
                    repeatDelay: 0,
                  }}
                >
                  {dataSponsor.map((p,index)=>{
                  return(
                  <Image
                  src={`/Images/sponsors/sponsor${index+1}.png`}
                  width={200}
                  height={50}
                  alt="partners"
                  className="w-full h-full"
                />)
                })}
                {dataSponsor.map((p,index)=>{
                  return(
                  <Image
                  src={`/Images/sponsors/sponsor${index+1}.png`}
                  width={200}
                  height={50}
                  alt="partners"
                  className="w-full h-full"
                />)
                })}
                {dataSponsor.map((p,index)=>{
                  return(
                  <Image
                  src={`/Images/sponsors/sponsor${index+1}.png`}
                  width={200}
                  height={50}
                  alt="partners"
                  className="w-full h-full"
                />)
                })}
                {dataSponsor.map((p,index)=>{
                  return(
                  <Image
                  src={`/Images/sponsors/sponsor${index+1}.png`}
                  width={200}
                  height={50}
                  alt="partners"
                  className="w-full h-full"
                />)
                })}
                  
                  
                </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <div
              id="FAQ"
              className="flex flex-col items-center gap-10 justify-center w-full h-fit"
            >
              <div
                id="heading"
                className="w-full flex gap-4  flex-col items-center justify-center "
              >
                <span className="font-bold text-4xl text-[#4735A3]">FAQs</span>
                <span className="text-white text-3xl">
                  Why choose remex trade
                </span>
              </div>
              <div id="questions" className="w-[60%]">
                <motion.div
                  id="question1"
                  className="w-full border-t cursor-pointer border-t-zinc-600 px-8 py-6 flex flex-col gap-8 text-xl"
                  onClick={() => {
                    if (open == 0) setOpen(-1);
                    else setOpen(0);
                  }}
                >
                  <div className="flex justify-between w-full ">
                    <span>What is remex trade?</span>
                    {open==0?
                        <FaChevronUp color="white" size={10} />:
                        <FaChevronDown color="white" size={10} />
                    }
                    
                    
                  </div>
                  <AnimatePresence> 
                  {open==0 &&
                  <motion.div initial={{y:-10,opacity:0,height:0}} animate={{y:0,opacity:1,height:"100%"}} exit={{y:-10,opacity:0,height:0}} transition={{duration:0.2 ,ease:"linear"}}>
                    <p
                      className="text-zinc-300 "
                      style={{ userSelect: "none" }}
                    >
                      Remex trade is perpetual DEX that offers a variety of
                      trading options and high liquidity including forex and
                      commodities . The platform represents a new type of
                      decentralized exchange due to the continuous innovation
                      promoted by its developers.
                    </p>
                  </motion.div>
                  }
                  </AnimatePresence>
                </motion.div>
                <div
                  id="question1"
                  className="w-full border-t cursor-pointer gap-8 border-t-zinc-600 px-8 py-6 flex flex-col justify-between text-xl"
                  onClick={() => {
                    if (open == 1) setOpen(-1);
                    else setOpen(1);
                  }}
                >
                  <div className="w-full flex justify-between">
                  <span>What are Perpetuals? </span>
                  {open==1?
                    <FaChevronUp color="white" size={10}/>:
                    <FaChevronDown color="white" size={10} />
                  } 
                  </div>
                  <AnimatePresence>
                  {open == 1 &&
                  <motion.div initial={{y:-10,opacity:0,height:0}} animate={{y:0,opacity:1,height:"100%"}} exit={{y:-10,opacity:0,height:"0px"}} transition={{duration:0.2 ,ease:"linear"}}>
                    <p
                      className="text-zinc-300 "
                      style={{ userSelect: "none" }}
                    >
                      Perpetual contracts, also known as "perpetuals" or "perps"
                      are a type of derivative contract that allow traders to
                      speculate on the price of an underlying asset, such as a
                      cryptocurrency, without actually owning the asset. These
                      contracts are called "perpetual" because they do not have
                      an expiration date and can be held indefinitely.
                    </p>
                  </motion.div>
                  }
                  </AnimatePresence>
                </div>
                <motion.div
                  id="question1"
                  className="w-full border-t cursor-pointer gap-8 r border-t-zinc-600 px-8 py-6 flex flex-col justify-between text-xl"
                  onClick={() => {
                    if (open == 2) setOpen(-1);
                    else setOpen(2);
                  }}
               >
                <div className="w-full flex justify-between">
                  <span>What do TP/SL/LIQ mean ?</span>
                  {open==2?
                    <FaChevronUp color="white" size={10}/>:
                    <FaChevronDown color="white" size={10} />
                  } 
                  
                </div>
                <AnimatePresence>
                {open==2 && 
                  <motion.div initial={{y:-10,opacity:0,height:0}} animate={{y:0,opacity:1,height:"100%"}} exit={{y:-10,opacity:0,height:0}} transition={{duration:0.2 ,ease:"linear"}}>
                    <p
                      className="text-zinc-300 "
                      style={{ userSelect: "none" }}
                    >
                      TP stands for take-profit, or the ability to close out your trade position at a certain profit % (or at a certain price). SL stands for stop-loss, which is the opposite of take profit (i.e., preventing any further downside from your trade position), and LIQ stands for liquidation price.
                    </p>
                  </motion.div>
                  }
                  </AnimatePresence>
                </motion.div>
                <div
                  id="question1"
                  className="w-full border-t cursor-pointer gap-8 border-t-zinc-600 px-8 py-6 flex flex-col justify-between text-xl"
                  onClick={() => {
                    if (open == 3) setOpen(-1);
                    else setOpen(3);
                  }}
                >
                  <div className="w-full flex justify-between">
                  <span>Can I use other stablecoins as collateral?</span>
                  {open==3?
                  <FaChevronUp color="white" size={10} />:
                  <FaChevronDown color="white" size={10} />
}
                  </div>
                  <AnimatePresence>
                  {open==3 && 
                  <motion.div initial={{y:-10,opacity:0,height:0}} animate={{y:0,opacity:1,height:"100%"}} exit={{y:-10,opacity:0,height:0}} transition={{duration:0.2 ,ease:"linear"}}>
                    <p
                      className="text-zinc-300 "
                      style={{ userSelect: "none" }}
                    >
                      You cannot. Other stables can be easily converted to USDC within our in-app exchange tab. We plan to add native support for other stablecoins in the future. 
                    </p>
                  </motion.div>
                  }
                  </AnimatePresence>
                </div>
                <div
                  id="question1"
                  className="w-full border-y cursor-pointer gap-8 border-y-zinc-600 px-8 py-6 flex flex-col justify-between text-xl"
                  onClick={() => {
                    if (open == 4) setOpen(-1);
                    else setOpen(4);
                  }}
                >
                  <div className="w-full flex justify-between">
                  <span>Why is price impact necessary?</span>
                  {open==4?
                  <FaChevronUp color="white" size={10} />:
                  <FaChevronDown color="white" size={10} />


                  }
                  </div>
                  <AnimatePresence>
                  {open==4 && 
                  <motion.div initial={{y:-10,opacity:0,height:0}} animate={{y:0,opacity:1,height:"100%"}} exit={{y:-10,opacity:0,height:0}} transition={{duration:0.2 ,ease:"linear"}}>
                    <p
                      className="text-zinc-300 "
                      style={{ userSelect: "none" }}
                    >
                      Price impacts are necessary to prevent oracle manipulation, and to ensure we can still offer the best possible prices across CeFi and DeFi. 
                    </p>
                  </motion.div>
                  }
                  </AnimatePresence>
                </div>
              </div>
            </div>
            <div
              id="Footer"
              className="w-full h-fit py-14 flex flex-col bg-black items-center gap-10"
            >
              <div className="w-full flex items-center justify-center font-bold text-4xl text-white">
                remex
              </div>
              <div className="w-[60%] flex justify-between text-zinc-400">
                <span>@ 2024.All rights reserved.</span>
                <div className="flex gap-6">
                  <span>Careers</span>
                  <span>Legal</span>
                  <span>Privacy</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* <Image src="/Images/effect2.png" fill alt="gradient" className="absolute"/> */}
          </div>
        </AnimatePresence>
      </main>
    </>
  );
}
