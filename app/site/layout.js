"use client"
import React, { useState } from 'react'
import Navbar from '../_Components/Navbar'

export const theme = React.createContext();

const layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`relative  ${darkMode && 'dark'}`}>
      <theme.Provider value={{ darkMode, setDarkMode }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {children}
      </theme.Provider>
    </div>
  )
}

export default layout
