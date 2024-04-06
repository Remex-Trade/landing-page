import React from 'react'
import Image from 'next/image';
import Link from 'next/link'
import { HiSpeakerphone } from "react-icons/hi";
const page = () => {
  return (
    <div>
        <div id='heading' className='bg-[#141515] w-[100vw] h-full py-16 flex flex-col items-center justify-center'>
            <div className='flex items-start flex-col gap-6'>
            <div>
                <Image src='/Images/referral.svg' alt="Profile Picture" height={200} width={200} />
            </div>
            <div className='flex flex-col text-7xl font-black '>
                <span className='bg-gradient-to-tr from-[#39A2FA] via-[#33CBE2] to-[#37F6C9] text-transparent bg-clip-text'>Refer Friends</span>
                <span className='bg-gradient-to-tr from-[#39A2FA] via-[#33CBE2] to-[#37F6C9] text-transparent bg-clip-text'>Earn Together</span>
            </div>
            <div className='text-sm font-light'>
                <span>Get up to 30% rebate when you invite friends to KiloEx! </span>
                <Link href="#" className='text-blue-400 hover:underline'>View Rules</Link>
            </div>
            <div className='rounded-lg bg-[#272627] text-sm flex items-center gap-2 text-white px-4 py-2'>
                <span><HiSpeakerphone color='white'/></span>
                <span>0x2c...344 gets</span>
                <span className='text-yellow-400'>$4539.00</span>

            </div>
            </div>
        </div>
    </div>
  )
}

export default page