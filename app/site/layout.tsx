"use client";
import React, { useState } from "react";
import Navbar from "../_Components/Navbar";
import theme from "../_context/theme";
import userContext from "../_context/userContext";
import { Chain, fantom, fantomTestnet, polygonAmoy } from "wagmi/chains";
import { createConfig, http, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import NextTopLoader from "nextjs-toploader";
import { Web3Provider } from "../providers";
import { createStorage } from 'wagmi'
import trancheContext from "../_context/trancheContext";

let storage;

if (typeof window !== "undefined") {
  storage = createStorage({
    key: 'my-wagmi-app-key', 
    storage: window.localStorage,
  })
}


const amoy: Chain = {
  id: 80002,
  name: "Amoy",
  // network: "Polygon Amoy", // Add the network property
  nativeCurrency: { name: "AMOY", symbol: "AMOY", decimals: 18 },
  rpcUrls: {
    default: { http: ["https://rpc-amoy.polygon.technology/"] },
    public: { http: ["https://rpc-amoy.polygon.technology"] },
  },
  blockExplorers: {
    default: { name: "", url: "https://amoy.polygonscan.com/" },
  },
};


const config = createConfig({
  chains: [fantomTestnet, polygonAmoy],
  transports: {
    [fantomTestnet.id]: http(),
    [polygonAmoy.id]: http(),
  },
  ssr: true,
  storage
});

const queryClient = new QueryClient();

interface trancheData{
  base:number,
  apr:number,
  currentDeposit:number,
  maxDeposit:number,
  unlockedDeposit:number,
  lockedDeposit:number,
  currentEarning:number,
  shares:number
}

const layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({});
  const [juniorTrancheData,setJuniorTrancheData] = useState<trancheData|null>({
    base:15.95,
    apr:59.19,
    currentDeposit:3000000,
    maxDeposit:4000000,
    unlockedDeposit:0,
    lockedDeposit:0.00,
    currentEarning:0.00,
    shares:0.00
  });
  const [seniorTrancheData,setSeniorTrancheData] = useState<trancheData|null>({
    base:8.79,
    apr:33.70,
    currentDeposit:3500000,
    maxDeposit:3500000,
    unlockedDeposit:0,
    lockedDeposit:0.00,
    currentEarning:0.00,
    shares:0.00
  });
  const [data, setData] = useState({
    token: "BTC/USD",
    pairIndex: 0,
    leverage: 0,
    orderDetails: {},
  });
  return (


  <QueryClientProvider client={queryClient}>
    <WagmiProvider config={config}>
    <Web3Provider>

        <div className={`relative scroll-smooth ${darkMode && "dark"}`}>
          <theme.Provider value={{ darkMode, setDarkMode }}>
            <userContext.Provider value={{ user, setUser, data, setData }}>
            <trancheContext.Provider value={{juniorTrancheData,seniorTrancheData,setJuniorTrancheData,setSeniorTrancheData}}>
              <Navbar/>
              {children}
            </trancheContext.Provider>
            </userContext.Provider>
          </theme.Provider>
        </div>
        </Web3Provider>

    </WagmiProvider>
      </QueryClientProvider>

  );
};

export default layout;
