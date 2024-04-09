"use client"
import React, { useContext, useState } from "react";
import Link from 'next/link'
import { FaFire } from "react-icons/fa";
import {CiWallet} from "react-icons/ci";
import ToggleButton from "./ToggleButton";
import theme from "../_context/theme";
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
  const {darkMode,setDarkMode} = useContext(theme);
  const [selected,setSelected] = useState("Trade");
  const names = ["Trade","Airdrop","Referral","Leaderboard"]
  return (
    <div className="dark:bg-[#0F0E0E] outline-none  border-none bg-white dark:text-white text-black sticky z-10 top-0 w-full font-light shadow-sm dark:shadow-none">
      <div className="flex gap-[4vw] justify-between items-center w-full px-[2vw] py-1 text-md">
        <div>LOGO</div>
        <div className="flex gap-20">
          {names.map((name)=>{
            return(
              <>
              <Link href={`${name}`}>
                <div className={`text-white flex gap-2 items-center hover:bg-[#373636] font-bold rounded-lg px-3 py-1 ${selected===name && 'bg-[#373636] '}`} onClick={()=>setSelected(name)}>{name==="Airdrop" && <FaFire color="orange"/>}{name}</div>
              </Link>
              </>
            )
          })}
        </div>
        <div className="flex gap-[2vw] items-center">
          <div><ToggleButton darkMode={darkMode} setDarkMode={setDarkMode}/></div>
          <div>BLOB</div>
          <div>
            <button className="bg-[#0cf3c4] text-black px-4 py-2 rounded-lg flex gap-2">Connect wallet</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
