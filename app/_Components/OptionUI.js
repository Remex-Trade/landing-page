import Image from 'next/image'
import React from 'react'

const OptionUI = ({option}) => {
  return (
    <div>
        {option==="Market"&&
            <div className='flex flex-col px-6 py-8 w-full h-content gap-4 '>
                <div className='bg-[#2C2D2D] w-full rounded-xl h-content py-2 px-4'>
                        <div className='w-full flex justify-between'>
                            <div className='flex gap-3 items-center jusitfy-center w-[30%] h-full'>
                                    <Image src="/Images/right1.svg" alt="leverage" height={200} width={200}/>
                                    <div className='flex flex-col gap-1'>
                                        <span className='text-sm'>Leverage</span>
                                        <span className='text-xl font-bold'>20X</span>
                                    </div>
                            </div>
                            <div>
                                <span>v</span>
                            </div>
                        </div>
                </div>
                <div className='bg-[#2C2D2D] w-full rounded-xl h-[13vh]'>
                        hello
                </div>
                
            </div>
        }
    </div>
  )
}

export default OptionUI