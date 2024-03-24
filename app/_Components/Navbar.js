import React from "react";

const Navbar = () => {
  return (
    <div className="bg-[#151415] text-white font-bold text-lg border-[#2C2D2D] border-[1px]">
      <div className="flex gap-[4vw] justify-between w-full px-[2vw] py-3 text-xl">
        <div>LOGO</div>
        <div className="flex gap-20">
          <div>Trade</div>
          <div>Airdrop</div>
          <div>Earn</div>
          <div>Bridge</div>
          <div>Leaderboard</div>
          <div>Community</div>
        </div>
        <div className="flex gap-[2vw]">
          <div>Toggle</div>
          <div>BLOB</div>
          <div>
            <button>Connect Wallet</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
