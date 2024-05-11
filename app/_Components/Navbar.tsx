"use client"
import React, { useContext, useState } from "react";
import Link from 'next/link'
import { FaChevronDown, FaChevronRight, FaFire } from "react-icons/fa";
import {CiWallet} from "react-icons/ci";
import ToggleButton from "./ToggleButton";
import theme from "../_context/theme";
import WalletsProvider from "./Wallet";
import Image from "next/image";
import { IoIosClose } from "react-icons/io";
import {motion,AnimatePresence} from "framer-motion";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const {darkMode,setDarkMode} = useContext(theme);
  const [selected,setSelected] = useState("Trade");
  const names = ["Trade","Airdrop","Referral","Leaderboard"]
  const networks = ["openBNB","Manta Pacific","BNB"]
  const [open,setOpen] = useState(false)
  const [menuOpen,setMenuOpen] = useState(false);
  const [selectedNetwork,setSelectedNetwork] = useState("openBNB");
  return (
    <>
    <div className="dark:bg-[#0F0E0E] outline-none  border-none bg-white dark:text-white text-black sticky z-10 top-0 w-[100vw] font-light shadow-sm dark:shadow-none">
      <div className="flex gap-[4vw] justify-between items-center w-full px-[2vw] py-1 text-md">
      <div className="w-full flex items-center justify-start font-bold text-2xl text-white">

          <Image src="/Images/logo.png" width={50} height={50} alt="logo" />
          <span className="relative right-3 top-1 text-black dark:text-white">emex</span>
        </div>
        <div className="hidden sc1:flex gap-20">
          {names.map((name)=>{
            return(
              <Link key={name} href={`${name}`}>
                <div className={`dark:text-white text-black flex gap-2 items-center dark:hover:bg-[#373636] font-bold hover:bg-neutral-200 rounded-lg px-3 py-1 ${selected===name && 'dark:bg-[#373636] bg-neutral-300 '}`} onClick={()=>setSelected(name)}>{name==="Airdrop" && <FaFire color="orange"/>}{name}</div>
              </Link>
            )
          })}
        </div>
        <div className="flex gap-[2vw] items-center">
          <div className="hidden sc1:block"><ToggleButton darkMode={darkMode} setDarkMode={setDarkMode}/></div>
          <div className="w-16 h-10 bg-[#383838] rounded-lg px-2 py-2 flex items-center justify-between" onClick={()=>setOpen(true)}>
              <Image src={`/networks/${selectedNetwork.split(" ")[0].toLowerCase()}.svg`} width={30} height={100} alt="networks"/>
              <FaChevronDown color="white" size={10}/>
          </div>
          <div>
            <div className="flex">
            <WalletsProvider />
              </div>
          </div>
          <div className="w-10 h-full">
            {menuOpen?
            <IoIosClose size={30} onClick={()=>setMenuOpen(false)}/>
            :
            <IoMenu size={20} onClick={()=>setMenuOpen(true)}/>
            }
              
          </div>
        </div>
      </div>
    </div >
    <AnimatePresence>
    {open &&
    <>
    <div className="sc1:hidden w-[100vw] h-[95vh] bg-black absolute z-40 opacity-50">

    </div>
    <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.2}} exit={{opacity:0}} className="sc1:hidden w-[100vw] h-[90vh] flex items-center justify-center absolute z-50 ">
    <div className="w-[80vw] h-[70vw] bg-[#2B2B2B] rounded-xl flex flex-col">
          <div className="flex border-b border-b-slate-500 px-4 py-3 justify-between h-fit w-full">
              <span className="text-sm text-slate-200 font-bold">Select Network</span>
              <IoIosClose size={20} onClick={()=>setOpen(false)}/>
          </div>
          <div className="flex flex-col justify-between h-full py-6">
          {networks.map((network,index)=>{
            return(
              <>
              <div className={`flex items-center px-6 gap-4 w-full h-full hover:bg-[#3B3A3D] ${selectedNetwork===network?"bg-[#3B3A3D]":"bg-none"}`} onClick={()=>{setSelectedNetwork(network); setOpen(false)}}>
                <Image src={`/networks/${network.split(" ")[0].toLowerCase()}.svg`} width={30} height={30} alt="networkImage"/>
                <span className="text-lg">{network}</span>
              </div>
              </>
            )
          })}
          </div>
    </div>
    </motion.div>
  </>
  }
  </AnimatePresence>
  {menuOpen&&
  <div className="h-[95vh] w-full absolute z-50 right-0 bg-black flex flex-col gap-10 py-12 items-center">
      <div className="w-full">
        {names.map((name)=>{
          return(
            <>
            <Link key={name} href={`${name}`} >
              <div className="flex justify-between w-full h-fit py-4 px-8 text-lg items-center border-b border-b-[#2D2D2C] bg-[#141515]" onClick={()=>setMenuOpen(false)}>
                {name}
                <FaChevronRight size={10} color="white"/>
              </div>
              </Link>
            </>
          )
        })}
      </div>

  </div>
  }
    </>
  );
};

export default Navbar;
