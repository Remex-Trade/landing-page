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
});

const queryClient = new QueryClient();

const layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(true);
  const [user, setUser] = useState({});
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
                <Navbar />

                {children}
              </userContext.Provider>
            </theme.Provider>
          </div>
        </Web3Provider>
      </WagmiProvider>
    </QueryClientProvider>
  );
};

export default layout;
