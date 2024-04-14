"use client";
import React, { useState } from "react";
import Navbar from "../_Components/Navbar";
import theme from "../_context/theme";
import userContext from "../_context/userContext";

const layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({});
  const [data, setData] = useState({});
  return (
    <div className={`relative scroll-smooth ${darkMode && "dark"}`}>
      <theme.Provider value={{ darkMode, setDarkMode }}>
        <userContext.Provider value={{ user, setUser,data,setData }}>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          {children}
        </userContext.Provider>
      </theme.Provider>
    </div>
  );
};

export default layout;
