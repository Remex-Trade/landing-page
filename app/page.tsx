"use client"
import Image from "next/image";
import { ParticleBg } from "./_Components/Particle";
import Link from "next/link.js";
import { LuDatabase } from "react-icons/lu";
import { FaChevronDown } from "react-icons/fa";
import {useTypewriter,Cursor} from "react-simple-typewriter";
import {useScroll,motion, AnimatePresence, useMotionValue} from "framer-motion";
import useMeasure from "react-use-measure";

export default function Home() {
  const data = [{ pair: "SOL", CNG: "-2.4507%" }, {}, {}, {}, {}];
  const [ref,{width}] = useMeasure();
  const [text,textHelper] = useTypewriter({
    words:["Crypto"],
    loop:true,
    typeSpeed:150,
    deleteSpeed:50,
    delaySpeed:1000
  })

  const {scrollYProgress} = useScroll();
 
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
            className="w-[100vw] absolute flex justify-center items-center p-[1vw] gap-[15vw] bg-[rgb(10,7,12)] bg-opacity-25 sticky top-0 absolute z-10 backdrop-blur"
          >
            <div className="font-extrabold text-3xl">remex</div>
            <div className="flex gap-[3vw]">
              <div>Discord</div>
              <div>Medium</div>
              <div>Twitter</div>
              <div>Docs</div>
              <button className="w-[7vw] h-[2.5vw] rounded-3xl bg-[#371D8A] text-[#FFFFFF]">
                Launch App
              </button>
            </div>
          </div>

          <div className="w-[60vw] h-[100vh] absolute flex flex-col pr-[10vw] pl-[10vw] absolute top-72 z-0">
            <h1 className="text-8xl mb-[2vw] font-plusJakarta flex flex-col gap-4">
              <div>Trade <span className="text-[#7950AE] font-bold">{text}<Cursor/></span>{" "}</div>
              <div>like never before</div>
            </h1>
            <p className="font-plusJakarta text-2xl font-extralight text-[#918FA3] ">
              remex lets you trade all your favourite assets at lightning speed
              without compromising security.
            </p>
            <div className="flex gap-[2.5vw] justify-center items-start mt-[2.5vw] w-[18vw]">
              <button className="w-[7vw] h-[2.5vw] rounded-3xl bg-[#371D8A] text-[#FFFFFF]">
                Launch App
              </button>
              <button className="w-[7vw] h-[2.5vw] rounded-3xl bg-transparent text-[#371D8A] border border-2 border-[#371D8A]">
                Launch App
              </button>
            </div>
          </div>
        </div>

        <div className="w-[100vw] relative h-fit bg-[#17131d] flex items-center justify-center flex-col gap-4">
          <div className="relative">
            <div
              id="ellipse"
              className="w-[40vw] h-[40vw] absolute z-[0] rounded-full bg-gradient-to-b from-[#FF0A6C26] to-[#2D27FF26] -right-60 blur"
            ></div>
            <div className="flex gap-[2vw] w-fit relative z-[2] ">
              {data.map((p) => {
                return (
                  <motion.div
                    style={{
                      translateX:scrollYProgress,
                    }}
                    id="cards"
                    className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[4vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]"
                  >
                    <div className="flex ">
                      <div>
                        <Image
                          src="/Images/sol.png"
                          width={100}
                          height={100}
                          alt="SOL"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p>SOL</p>
                        <p>SOL</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col">
                        <p></p>
                        <p>
                          <span className="font-extralight">CNG</span>
                          <span className="text-[#BD2738]">-2.054%</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-2xl font-thin">$141.567</p>
                        <p>
                          <span className="font-extralight">24HVOL </span>{" "}
                          $335.7K
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex gap-[1vw] w-fit ml-[3vw] relative z-[2]">
              {data.map((p) => {
                return (
                  <motion.div
                    id="cards"
                    className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[1vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]"
                  >
                    <div className="flex ">
                      <div>
                        <Image
                          src="/Images/sol.png"
                          width={100}
                          height={100}
                          alt="SOL"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p>SOL</p>
                        <p>SOL</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col">
                        <p></p>
                        <p>
                          <span className="font-extralight">CNG</span>
                          <span className="text-[#BD2738]">-2.054%</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-2xl font-thin">$141.567</p>
                        <p>
                          <span className="font-extralight">24HVOL </span>{" "}
                          $335.7K
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <div className="flex gap-[2vw] w-fit relative z-[2]">
              {data.map((p) => {
                return (
                  <div
                    id="cards"
                    className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[1vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]"
                  >
                    <div className="flex ">
                      <div>
                        <Image
                          src="/Images/sol.png"
                          width={100}
                          height={100}
                          alt="SOL"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <p>SOL</p>
                        <p>SOL</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex flex-col">
                        <p></p>
                        <p>
                          <span className="font-extralight">CNG</span>
                          <span className="text-[#BD2738]">-2.054%</span>
                        </p>
                      </div>
                      <div className="flex flex-col items-end">
                        <p className="text-2xl font-thin">$141.567</p>
                        <p>
                          <span className="font-extralight">24HVOL </span>{" "}
                          $335.7K
                        </p>
                      </div>
                    </div>
                  </div>
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
                remex
              </div>
            </div>
            <div id="section2 heading" className="text-6xl">
              Lorem ipsum dolor sit.
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
                className="flex flex-col items-center justify-between  px-6 py-8 h-full w-2/3"
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
                className="flex flex-col items-center justify-between  px-6 py-8 h-full w-2/3"
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
            className="w-full h-[30vh] relative flex items-center justify-center gap-8 my-28"
          >
            <div
              id="ellipse"
              className="w-[40vw] h-[40vw] absolute z-[0] rounded-full bg-gradient-to-b from-[#FF0A6C26] to-[#2D27FF26] -left-80 blur"
            ></div>
            <div
              id="card1"
              className="w-1/5 relative z-1 rounded-2xl border flex justify-start items-start px-8 py-10 gap-4 flex-col border-[#1B2236] h-full bg-[#0D111C]"
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
            </div>
            <div
              id="card2"
              className="w-1/5 relative z-1  rounded-2xl border flex justify-start items-start px-8 py-10 gap-4 flex-col border-[#1B2236] h-full bg-[#0D111C]"
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
            </div>
            <div
              id="card3"
              className="w-1/5 relative z-1 rounded-2xl border flex justify-start items-start px-8 py-10 gap-4 flex-col border-[#1B2236] h-full bg-[#0D111C]"
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
                    The leading decentralised crypto trading protocol, governed
                    by a global community
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
          <div
            id="StackedImageSection"
            className="w-full h-[100vh] flex bg-[url('/Images/landingpagesection3.png')] bg-no-repeat bg-cover py-10"
          >
            <div
              id="textContent"
              className="w-[50%] flex justify-center gap-4 pl-80 flex-col"
            >
              <div
                id="heading"
                className="flex flex-col text-5xl gap-2 text-white"
              >
                <span className="text-[#9C4EFE] font-bold">Manage</span>
                <span>Your Trading Account</span>
              </div>
              <div id="points" className="flex flex-col w-[100%] gap-8 my-10">
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
                      Remex accounts are 100% self custody and secure. Withdraw
                      and deposit with no restrictions.
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
                      View your historical PnL, active positions, trade history,
                      margin balance, and more!
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
              <div id="getStarted" className="pl-8">
                    <button className="px-6 py-2 rounded-full text-white bg-[#361D8B]">Get Started</button>
                </div>
            </div>
            <div id="stackedImages" className="w-[50%] h-[100vh] flex justify-center h-full items-center">
              <div className="relative w-full h-full flex items-center justify-center">
              <Image src="/Images/panel.png" width={750} height={100} alt="panel" className="absolute z-[10] bottom-56  right-0 shadow-2xl"/>
              <Image src="/Images/panel.png" width={750} height={100} alt="panel" className="absolute z-[5] bottom-48 right-10"/>
              <Image src="/Images/panel.png" width={750} height={100} alt="panel" className="absolute z-[1] bottom-40 right-20"/>
              </div>
            </div>
          </div>
          <div id="partnersSection" className="w-full mb-52">
              <div id="Strokeparteners" className="w-full flex items-start relative justify-start">
                <div className="text-9xl w-full self-start font-extrabold px-56">
                  Partners
                </div>
                <div className="absolute z-1 w-full h-[2vh] top-24 blur bg-[#16121D]">
                </div>
                <div className="absolute flex z-10 w-full h-fit top-32">
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                    <Image src="/Images/partners.png" width={400} height={500} alt="partners"/>
                </div>
              </div>
          </div>
          <div id="FAQ" className="flex flex-col items-center gap-10 justify-center w-full h-fit">
                <div id="heading" className="w-full flex gap-4  flex-col items-center justify-center ">
                      <span className="font-bold text-4xl text-[#4735A3]">FAQs</span>
                      <span className="text-white text-3xl">Why Choose remex</span>
                </div>
                <div id="questions" className="w-[60%]">
                    <div id="question1" className="w-full border-t cursor-pointer border-t-zinc-600 px-8 py-6 flex justify-between text-xl">
                        <span>What is remex?</span>
                        <FaChevronDown color="white" size={10}/>
                    </div>
                    <div id="question1" className="w-full border-t cursor-pointer border-t-zinc-600 px-8 py-6 flex justify-between text-xl">
                        <span>What is remex?</span>
                        <FaChevronDown color="white" size={10}/>
                    </div>
                    <div id="question1" className="w-full border-t cursor-pointer border-t-zinc-600 px-8 py-6 flex justify-between text-xl">
                        <span>What is remex?</span>
                        <FaChevronDown color="white" size={10}/>
                    </div>
                    <div id="question1" className="w-full border-t cursor-pointer border-t-zinc-600 px-8 py-6 flex justify-between text-xl">
                        <span>What is remex?</span>
                        <FaChevronDown color="white" size={10}/>
                    </div>
                    <div id="question1" className="w-full border-y cursor-pointer border-y-zinc-600 px-8 py-6 flex justify-between text-xl">
                        <span>What is remex?</span>
                        <FaChevronDown color="white" size={10}/>
                    </div>
                </div>
          </div>
          <div id="Footer" className="w-full h-fit py-14 flex flex-col bg-black items-center gap-10">
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
        </AnimatePresence>
      </main>
    </>
  );
}
