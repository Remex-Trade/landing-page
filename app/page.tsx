import Image from "next/image";
import { ParticleBg } from "./_Components/Particle";
import Link from "next/link.js";

export default function Home() {
  const data=[
    {"pair":"SOL","CNG":"-2.4507%",},
    {},
    {},
    {},
    {}]
  return (
    <>
      <main>
        <div className="w-[100vw] h-[100vh] relative">
          <Image src="/Images/cubes (1).png" fill alt="Backdrop"/>
          <div className="w-[100vw] h-[100vh] absolute">
            <Image src="/Images/Effect.png" fill alt="Backdrop"/>
          </div>
          <div id="nav" className="w-[100vw] absolute flex justify-center items-center p-[1vw] gap-[15vw] bg-[rgb(10,7,12)] bg-opacity-25 sticky top-0 absolute z-10 backdrop-blur">
            <div className="font-extrabold text-3xl">remex</div>
            <div className="flex gap-[3vw]">
              <div>Discord</div>
              <div>Medium</div>
              <div>Twitter</div>
              <div>Docs</div>
            </div>
            <button className="w-[7vw] h-[2.5vw] rounded-3xl bg-[#371D8A] text-[#FFFFFF]">Launch App</button>
          </div>
          <div className="w-[60vw] h-[100vh] absolute flex flex-col pr-[10vw] pl-[10vw] mt-[16vw] z-0">
              <h1 className="text-8xl mb-[2vw] font-plusJakarta">Trade <span className="text-[#7950AE] font-bold">CRYPTO</span> like never before</h1>
              <p className="font-plusJakarta text-2xl font-extralight text-[#918FA3] ">remex  lets you trade all your favourite assets at lightning speed without compromising security.</p>
              <div className="flex gap-[2.5vw] justify-center items-start mt-[2.5vw] w-[18vw]">
                <button className="w-[7vw] h-[2.5vw] rounded-3xl bg-[#371D8A] text-[#FFFFFF]">Launch App</button>
                <button className="w-[7vw] h-[2.5vw] rounded-3xl bg-transparent text-[#371D8A] border border-2 border-[#371D8A]">Launch App</button>
              </div>
          </div>
        </div>
        <div className="flex gap-[2vw] w-fit">
        {data.map((p)=>{
          return(
            <div id="cards" className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]">
          <div className="flex ">
            <div>
              <Image src="/Images/sol.png" width={100} height={100} alt="SOL"/>
            </div>
            <div className="flex flex-col gap-1">
              <p>SOL</p>
              <p>SOL</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <p></p>
              <p><span className="font-extralight">CNG</span><span className="text-[#BD2738]">-2.054%</span></p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-2xl font-thin">$141.567</p>
              <p><span className="font-extralight">24HVOL </span> $335.7K</p>
            </div>
          </div>
        </div>
          )
        })}
        </div>
        <div className="flex gap-[1vw] w-fit ml-[3vw]">
        {data.map((p)=>{
          return(
            <div id="cards" className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]">
          <div className="flex ">
            <div>
              <Image src="/Images/sol.png" width={100} height={100} alt="SOL"/>
            </div>
            <div className="flex flex-col gap-1">
              <p>SOL</p>
              <p>SOL</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <p></p>
              <p><span className="font-extralight">CNG</span><span className="text-[#BD2738]">-2.054%</span></p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-2xl font-thin">$141.567</p>
              <p><span className="font-extralight">24HVOL </span> $335.7K</p>
            </div>
          </div>
        </div>
          )
        })}
        </div>
        <div className="flex gap-[2vw] w-fit">
        {data.map((p)=>{
          return(
            <div id="cards" className="flex gap-[2vw] bg-[#0D0F14] w-[22vw] h-[5vw] items-center justify-center mt-[2vw] rounded-xl shadow-[2px_3px_1px_1px_#0C111B]">
          <div className="flex ">
            <div>
              <Image src="/Images/sol.png" width={100} height={100} alt="SOL"/>
            </div>
            <div className="flex flex-col gap-1">
              <p>SOL</p>
              <p>SOL</p>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="flex flex-col">
              <p></p>
              <p><span className="font-extralight">CNG</span><span className="text-[#BD2738]">-2.054%</span></p>
            </div>
            <div className="flex flex-col items-end">
              <p className="text-2xl font-thin">$141.567</p>
              <p><span className="font-extralight">24HVOL </span> $335.7K</p>
            </div>
          </div>
        </div>
          )
        })}
        </div>
        <div>
          
        </div>
      </main>
    </>
  );
}
