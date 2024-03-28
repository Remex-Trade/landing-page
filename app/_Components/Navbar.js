import React from "react";
import { FaFire } from "react-icons/fa";
import {CiWallet} from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="bg-[#151415] sticky z-10 top-0 w-full text-white font-light border-[#2C2D2D] border-[1px]">
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
          <div>Toggle</div>
          <div>BLOB</div>
          <div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex gap-2"><CiWallet color="white" size={25}/>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Navbar;
