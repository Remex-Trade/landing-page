import Image from "next/image";
import { ParticleBg } from "./_Components/Particle";
import Link from "next/link.js";

export default function Home() {
  const data = [{ pair: "SOL", CNG: "-2.4507%" }, {}, {}, {}, {}];
  return (
    <>
      <main className="max-w-[100vw] overflow-hidden">
        <div className="w-[100vw] h-[100vh] static">
          <Image
            src="/Images/cubes (1).png"
            fill
            objectFit="contain"
            alt="Backdrop"
          />
          <div className="w-[100vw] h-[100vh] absolute">
            <Image src="/Images/Effect.png" fill alt="Backdrop" />
          </div>
          <div
            id="nav"
            className="w-[100vw] flex justify-center items-center p-[1vw] gap-[15vw] bg-[rgb(10,7,12)] bg-opacity-25 sticky top-0 absolute z-10 backdrop-blur"
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
            <h1 className="text-7xl mb-[2vw] font-plusJakarta">
              Trade <span className="text-[#7950AE] font-bold">CRYPTO</span>{" "}
              like never before
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
       
        
        <div className="w-[100vw] h-fit bg-[#17131d] flex items-center justify-center flex-col gap-4">
        <div>
        <div className="flex gap-[2vw] w-fit">
          {data.map((p) => {
            return (
              <div
                id="cards"
                className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]"
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
                      <span className="font-extralight">24HVOL </span> $335.7K
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-[1vw] w-fit ml-[3vw]">
          {data.map((p) => {
            return (
              <div
                id="cards"
                className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]"
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
                      <span className="font-extralight">24HVOL </span> $335.7K
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex gap-[2vw] w-fit">
          {data.map((p) => {
            return (
              <div
                id="cards"
                className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]"
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
                      <span className="font-extralight">24HVOL </span> $335.7K
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>

        
          <div id="title button" className="w-full flex justify-center items-center my-20">
            <div className="w-fit h-full p-[0.1rem] bg-gradient-to-b from-[#9D4EFE] to-[#371d8a] rounded-full">
              <div className="w-full bg-black h-full rounded-full px-14 text-lg py-2 text-[#9D4EFE]">
                remex
              </div>
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
            className="w-full h-[30vh] flex items-center justify-center gap-8 my-28"
          >
            <div
              id="card1"
              className="w-1/5 rounded-lg border border-[#1B2236] h-full bg-[#0D111C]"
            >
              hello
            </div>
            <div
              id="card2"
              className="w-1/5 rounded-lg border border-[#1B2236] h-full bg-[#0D111C]"
            >
              hello
            </div>
            <div
              id="card3"
              className="w-1/5 rounded-lg border border-[#1B2236] h-full bg-[#0D111C]"
            >
              hello
            </div>
          </div>
          </div>
          <div className="flex bg-[#030712]">
          <div className="flex w-[100vw] h-[100vh] relative z-10 flex mt-[2vw] ">
            <Image src="/Images/effect2.png" fill alt="gradient"/>
            <div className="flex flex-col gap-[1vw] w-[50vw] z-0 overflow-hidden absolute">
              <div className="flex gap-[1vw] animate-infinite-scroll">
                <Image src="/Images/card2.svg" width={450} height={100} alt="card2"/>
                <Image src="/Images/card2.svg" width={450} height={100} alt="card2"/>
                <Image src="/Images/card2.svg" width={450} height={100} alt="card2"/>
              </div>
              <div className="flex gap-[1vw] animate-infinite-scroll-reverse">
              <Image src="/Images/card2.svg" width={450} height={100} alt="card2"/>
                <Image src="/Images/card2.svg" width={450} height={100} alt="card2"/>
                <Image src="/Images/card2.svg" width={450} height={100} alt="card2"/>
              </div>
            </div>
            <div className="ml-[40vw]">
                  <div className=" flex flex-col gap-[2vw] w-[50vw] items-center justify-center pl-[13vw] absolute z-20  h-[70vh] backdrop-blur-[5px] bg-[#030712] bg-opacity-15 p-[1vw] shadow-xl">
                    <h1 className="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipiscing.</h1>
                    <p className="text-3xl  p-[1vw]">Arcadia lets you discover all the possible areas in web 3 marketing. We are committed to provide the excellence to each of your requirements</p>
                  </div>
            </div>
            </div>
          </div>
          <div>
            {/* <Image src="/Images/effect2.png" fill alt="gradient" className="absolute"/> */}
          </div>
      </main>
    </>
  );
}
