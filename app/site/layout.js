"use client";
import React, { useState } from "react";
import Navbar from "../_Components/Navbar";
import theme from "../_context/theme";
import userContext from "../_context/userContext";
import { fantom, fantomTestnet } from "wagmi/chains";
import { createConfig, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const config = createConfig({
  chains: [fantomTestnet],

  transports: {
    [fantomTestnet.id]: http(),
  },
});

const queryClient = new QueryClient();


const layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({});
  const [data, setData] = useState({
    token:"BTC/USD",
    leverage:0
  });
  return (
      <QueryClientProvider client={queryClient}>
    <WagmiProvider config={config}>
        <div className={`relative scroll-smooth ${darkMode && "dark"}`}>
          <theme.Provider value={{ darkMode, setDarkMode }}>
            <userContext.Provider value={{ user, setUser, data, setData }}>
              <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
              {children}
            </userContext.Provider>
          </theme.Provider>
        </div>
    </WagmiProvider>
      </QueryClientProvider>
  );
};

export default layout;
