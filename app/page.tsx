import Image from "next/image";
import { ParticleBg } from "./_Components/Particle";
import Link from "next/link.js";

export default function Home() {
  return (
    <>
      <main>
        <div className="w-[100vw] h-fit bg-[#17131d] flex items-center justify-center flex-col gap-4">
            <div id="title button">
                <div className="w-fit h-full p-[0.1rem] bg-gradient-to-b from-[#9D4EFE] to-[#371d8a] rounded-full">
                  <div className="w-full bg-black h-full rounded-full px-14 text-lg py-2 text-[#9D4EFE]">
                      remex
                  </div>
                </div>
            </div>
            <div id="heading" className="text-6xl text-white">
                Lorem ipsum, dolor sit amet.
            </div>
            <div id="static cards" className="w-full h-[30vh]  flex items-center justify-center gap-8 mt-24">
                  <div id="card1" className="bg-[#131A2A] shadow-lg  shadow-[#3335480A] max-w-[25vw] h-full rounded-lg flex justify-center items-center">
                        <div id="text" className="flex flex-col items-center justify-between  px-6 py-8 h-full w-2/3">
                              <div id="heading" className="text-xl ">
                                  Maximize your potential across crypto and RWAs
                              </div>
                              <div id="textInside" className="text-[0.9rem] text-gray-500">
                                  Our infrastructure provides traders access to upto 100x leverage for major cryptocurrencies, forex and commodities pairs.
                              </div>
                        </div>
                        <div id="image" className="h-[30vh] w-1/3">
                          <Image src="/Images/cardImage1.png" width={500} height={1000} objectFit="contain" alt="cardImage1" className="w-full h-full"/>
                        </div>
                  </div>
                  <div id="card2" className="bg-[#131A2A] shadow-lg  shadow-[#3335480A] max-w-[25vw] h-full rounded-lg flex justify-center items-center">
                        <div id="text" className="flex flex-col items-center justify-between  px-6 py-8 h-full w-2/3">
                              <div id="heading" className="text-xl ">
                                  Maximize your potential across crypto and RWAs
                              </div>
                              <div id="textInside" className="text-[0.9rem] text-gray-500">
                                  Our infrastructure provides traders access to upto 100x leverage for major cryptocurrencies, forex and commodities pairs.
                              </div>
                        </div>
                        <div id="image" className="h-[30vh] w-1/3">
                          <Image src="/Images/cardImage2.png" width={500} height={1000} objectFit="contain" alt="cardImage1" className="w-full h-full"/>
                        </div>
                  </div>
            </div>
            <div id="animated cards" className="w-full h-[30vh] flex items-center justify-center gap-8 my-28">
                <div id="card1" className="w-1/5 rounded-lg border border-[#1B2236] h-full bg-[#0D111C]">
                  hello
                </div>
                <div id="card2" className="w-1/5 rounded-lg border border-[#1B2236] h-full bg-[#0D111C]">
                  hello
                </div>
                <div id="card3" className="w-1/5 rounded-lg border border-[#1B2236] h-full bg-[#0D111C]">
                  hello
                </div>

            </div>
            
        </div>
      </main>
    </>
  );
}


