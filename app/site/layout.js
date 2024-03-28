import React from 'react'
import Navbar from '../_Components/Navbar'

const layout = ({children}) => {
  return (
    <div className='relative'>
        <Navbar/>
        {children}
    </div>
  )
}

export default layout