"use client"
import React, { useState } from 'react'
import { useAccount } from 'wagmi'
import WalletsProvider from './Wallet';

const SubmitButton = ({label,handleClick,isLoading}:{label:string,handleClick:()=>void,isLoading:boolean}) => {
    const {isDisconnected} = useAccount();
    

  return (
    <div className='flex w-full items-center justify-center'>
    {isDisconnected ?
        <WalletsProvider/>:
        <button className="w-full rounded-xl bg-[#761EF3] flex items-center justify-center text-white text-md py-2" onClick={handleClick}>{isLoading?"Loading":label}</button>
    }
    </div>
  )
}

export default SubmitButton