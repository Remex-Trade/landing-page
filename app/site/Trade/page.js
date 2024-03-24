import React from 'react'

const page = () => {
  return (
    <div>
      <div className='flex gap-[4vw] p-[2vw] text-xl'>
        <div>LOGO</div>
        <div className='flex gap-[2vw]'>
          <div>Trade</div>
          <div>Airdrop</div>
          <div>Activity</div>
          <div>Earn</div>
          <div>Referrals</div>
          <div>Bridge</div>
          <div>Leaderboard</div>
          <div>Tutorial</div>
          <div>Community</div>
          <div>More</div>
        </div>
        <div className='flex gap-[2vw]'>
          <div>Toggle</div>
          <div>Language</div>
          <div>BLOB</div>
          <div><button>Connect Wallet</button></div>
        </div>
      </div>
    </div>
  )
}

export default page