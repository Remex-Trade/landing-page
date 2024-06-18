"use client"
import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import WalletsProvider from './Wallet';

const DepositButton = () => {
    const {isDisconnected} = useAccount();
    const [isLoading,setIsLoading] = useState(false);
    const handleClick = ()=>{
        setIsLoading(true)
        setTimeout(()=>setIsLoading(false),1000); //change this function to update the deposit button
    }

  return (
    <div className='flex w-full items-center justify-center'>
    {isDisconnected ?
        <WalletsProvider/>:
        <button className="w-full rounded-xl bg-[#761EF3] flex items-center justify-center text-white text-md py-2" onClick={handleClick}>{isLoading?"Loading":"Deposit"}</button>
    }
    </div>
  )
}

export default DepositButton