"use client"
import React, { useContext } from "react";
import { FaFire } from "react-icons/fa";
import {CiWallet} from "react-icons/ci";
import ToggleButton from "./ToggleButton";
import { theme } from "../site/layout";

const Navbar = () => {
  const {darkMode,setDarkMode} = useContext(theme);
  return (
    <div className="dark:bg-[#0F0E0E] outline-none  border-none bg-white dark:text-white text-black sticky z-10 top-0 w-full font-light shadow-sm dark:shadow-none">
      <div className="flex gap-[4vw] justify-between items-center w-full px-[2vw] py-1 text-md">
        <div>LOGO</div>
        <div className="flex gap-20">
          <div>Trade</div>
          <div className="flex items-center justify-center gap-3"><FaFire
            color="orange"
          />Airdrop</div>
          <div>Earn</div>
          <div>Bridge</div>
          <div>Leaderboard</div>
          <div>Community</div>
        </div>
        <div className="flex gap-[2vw] items-center">
          <div><ToggleButton darkMode={darkMode} setDarkMode={setDarkMode}/></div>
          <div>BLOB</div>
          <div>
            <button className="bg-[#0cf3c4] text-black px-4 py-2 rounded-lg flex gap-2"><CiWallet color="black" size={25}/>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
