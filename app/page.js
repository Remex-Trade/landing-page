import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-10 w-full gap-[10vw]">
      <div className="flex justify-between w-full">
        <div>LOGO</div>
        <div className="flex gap-10 justify-evenly items-center text-stone-400 ">
          <div className="hover:text-white">Twitter</div>
          <div className="hover:text-white">Discord</div>
          <div className="hover:text-white">Medium</div>
          <div className="hover:text-white">Docs</div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-[12px] text-black">
            Launch App
          </button>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="rounded-full w-[40vw] h-[20vw] bg-gradient-to-r from-teal-900 from-10% via-cyan-800 via-30% to--500 to-90% blur-3xl relative"></div>
          <div className="absolute flex flex-col gap-10">
            <h1 className="text-7xl font-extrabold">LEVEL UP YOUR TRADING</h1>
            <div className="text-xl font-extralight tracking-wide flex flex-col items-center">
              <p>The first-ever gamified perp DEX</p>
              <p>Trade, level up, and unlock instant rewards</p>
            </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-[12px] text-black">
            Trade now
          </button>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/Images/sshot.webp"
            width={800}
            height={100}
            className="border-solid border-8 border-zinc-700 rounded-3xl relative left-[5vw] z-0"
          />
          <Image
            src="/Images/sshot_mobile.webp"
            width={300}
            height={200}
            className="border-solid border-8 border-zinc-700 rounded-3xl relative right-20 z-10"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="rounded-full w-[40vw] h-[20vw] bg-gradient-to-r from-teal-900 from-10% via-cyan-800 via-30% to--500 to-90% blur-3xl relative"></div>
        <div className="flex gap-[8vw] absolute">
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <h3 className="text-lg text-stone-400 ">Total Volume</h3>
            <h2 className="font-bold text-4xl">$4.29B</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <h3 className="text-lg text-stone-400 ">Total Value Locked</h3>
            <h2 className="font-bold text-4xl">$1.68 M</h2>
          </div>
          <div className="flex flex-col items-center justify-center gap-[1vw]">
            <h3 className=" text-lg text-stone-400 ">Total Trades</h3>
            <h2 className="font-bold text-4xl">1,062,153</h2>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[3vw] items-center justify-center">
        <div className="flex flex-col gap-[1vw] items-center justify-center">
          <h2 className="font-bold text-4xl">GAMIFIED TRADING</h2>
          <p className="text-xl font-extralight tracking-wide">
            Trade and earn XPs and items as you progress through your trading
            journey
          </p>
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/Images/sshot-gamified-inventory.webp"
            width={400}
            height={200}
            className="border-solid border-8 border-zinc-700 rounded-3xl relative left-[10vw] w-[25vw] h-[30vw] z-0"
          />
          <Image
            src="/Images/sshot-gamified-missions.webp"
            width={400}
            height={200}
            className="border-solid border-8 border-zinc-700 rounded-3xl w-[35vw] h-[35vw] z-50"
          />
          <Image
            src="/Images/sshot-gamified-reward.webp"
            width={500}
            height={300}
            className="border-solid border-8 border-zinc-700 rounded-3xl relative right-[10vw] w-[25vw] h-[30vw] z-0"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[3vw] items-center justify-center">
        <div className="flex flex-col gap-[1vw] items-center justify-center">
          <h2 className="font-bold text-4xl">EXCEPTIONAL TRADING EXPERIENCE</h2>
          <p className="text-xl font-extralight tracking-wide">
            Experience the most advanced decentralized trading, simplified for
            all
          </p>
        </div>
        <div className="grid  grid-cols-4 grid-rows-3 gap-[2vw]">
          <div className="flex flex-col col-start-1 col-end-4 row-start-1 row-end-3 bg-zinc-900 items-center justify-center p-[1vw] rounded-xl">
            <div className="flex flex-col justify-start">
              <h2 className="text-4xl">Trade Crypto, Forex, and </h2>
              <h2 className="text-4xl">Commodities with up to </h2>
              <h2 className="text-4xl">1000x Leverage</h2>
            </div>
            <Image
              src="/Images/coins.svg"
              width={350}
              height={300}
              className="self-end"
            />
          </div>
          <div className="flex flex-col gap-[1vw] bg-zinc-900 items-center justify-center p-[2vw] rounded-xl">
            <h1 className="text-6xl font-bold">O</h1>
            <h4 className="text-lg">Zero Gas Fee</h4>
          </div>
          <div className="flex flex-col bg-zinc-900 items-center justify-center p-[2vw] rounded-xl gap-1">
            <h2 className="text-3xl font-semibold">1-Click</h2>
            <h2 className="text-3xl font-semibold"> Trading</h2>
          </div>
          <div className="flex flex-col gap-[1vw] col-start-1 col-end-3 bg-zinc-900 items-center justify-center p-[2vw] rounded-xl">
            <h2 className="text-3xl font-semibold">Omnichain Onboarding</h2>
            <p className="text-lg text-stone-400">
              ✓ Connect with your favorite wallet
            </p>
            <p className="text-lg text-stone-400">
              ✓ Deposit from your favorite chain
            </p>
          </div>
          <div className="flex flex-col bg-zinc-900 items-center justify-center p-[2vw] rounded-lg col-start-3 col-end-5">
            <Image
              src="/Images/box.svg"
              width={280}
              height={280}
              className="self-end relative opacity-[0.3]"
            />
            {/* <div className="flex flex-col gap-[1vw] items-center justify-center absolute"> */}
            <h1 className="text-5xl font-bold absolute">1.3s</h1>
            <h4 className="text-xl">Blazing-fast Order Execution</h4>
            {/* </div> */}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[7vw]">
        <div className="flex flex-col items-center justify-center gap-[3vw]">
          <p className="text-xl text-stone-400">Powered By</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="117"
            height="40"
            fill="none"
          >
            <g fill="#E3E3E3" clip-path="url(#logo_pyth_svg__a)">
              <path d="M44.595 23.371v-2.706h6.394c.978 0 1.74-.28 2.288-.836.547-.558.821-1.292.821-2.2 0-.908-.274-1.657-.82-2.2-.548-.543-1.311-.814-2.289-.814h-8.43V27.82H39.8V11.816h11.19c.92 0 1.74.136 2.464.407a5.117 5.117 0 0 1 1.83 1.145c.496.492.876 1.09 1.139 1.793.263.704.394 1.496.394 2.377 0 .881-.132 1.654-.394 2.367a5.204 5.204 0 0 1-1.14 1.838 5.118 5.118 0 0 1-1.829 1.2c-.721.285-1.544.428-2.464.428h-6.394ZM65.873 27.816v-6.075l-8.452-9.925h3.744l6.198 7.372 6.218-7.372h3.547l-8.474 9.925v6.075h-2.781ZM86.717 27.816V14.611h-7.323v-2.795h17.438v2.795h-7.334v13.205h-2.781ZM114.23 11.816H117v16h-2.77v-16ZM102.276 27.816v-6.925h10.307v-2.477h-10.307v-6.598h-2.77v16h2.77ZM19.9 16c0 2.209-1.782 4-3.98 4v4c4.396 0 7.96-3.582 7.96-8s-3.564-8-7.96-8a7.88 7.88 0 0 0-3.98 1.07A8 8 0 0 0 7.96 16v20l3.579 3.596.4.404V16c0-2.21 1.783-4 3.98-4 2.199 0 3.98 1.79 3.98 4Z"></path>
              <path d="M15.92 0c-2.9 0-5.618.78-7.96 2.142-1.5.87-2.842 1.98-3.98 3.276A15.985 15.985 0 0 0 0 16v12l3.98 4V16a12 12 0 0 1 3.98-8.944A11.905 11.905 0 0 1 15.92 4c6.594 0 11.94 5.373 11.94 12s-5.346 12-11.94 12v4c8.793 0 15.92-7.164 15.92-16S24.713 0 15.92 0Z"></path>
            </g>
            <defs>
              <clipPath id="logo_pyth_svg__a">
                <path fill="#fff" d="M0 0h117v40H0z"></path>
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="flex flex-col items-center justify-center gap-[3vw]">
          <p className="text-xl text-stone-400">Backed By</p>
          <h2 className="text-5xl font-bold">HASHED</h2>
        </div>
        <div className="flex flex-col items-center justify-center gap-[3vw]">
          <p className="text-xl text-stone-400">Audited and Secured By</p>
          <h2 className="text-5xl font-bold">MOVEBIT</h2>
        </div>
      </div>
      <div className="flex justify-between w-full">
        <div className="flex gap-10 justify-evenly items-center text-stone-400 ">
          <div>LOGO</div>
          <div className="hover:text-white">Terms of Use</div>
          <div className="hover:text-white">Privacy Policy</div>
        </div>
        <div className="flex gap-10 justify-evenly items-center text-stone-400 ">
          <div className="hover:text-white">Twitter</div>
          <div className="hover:text-white">Discord</div>
          <div className="hover:text-white">Medium</div>
          <div className="hover:text-white">Docs</div>
        </div>
      </div>
    </main>
  );
}
