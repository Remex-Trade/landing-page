"use client";
import React, { useState } from "react";
import Navbar from "../_Components/Navbar";
// import { Providers } from "../_context/WalletProvider";
// import "@rainbow-me/rainbowkit/styles.css";
// import { getDefaultConfig, RainbowKitProvider } from "@rainbow-me/rainbowkit";
// import { WagmiProvider } from "wagmi";
// import { mainnet, polygon, optimism, arbitrum, base } from "wagmi/chains";
// import { QueryClientProvider, QueryClien, getDefaultWallets } from "@tanstack/react-query";


export const theme = React.createContext();
// const { chains, publicClient } = configureChains(
//   [mainnet, polygon, polygonMumbai],
//   [
//     infuraProvider({
//       apiKey: "",
//     }),
//     publicProvider(),
//   ]
// );


// const { connectors } = getDefaultWallets({
//   appName: "streamsphere",
//   projectId: "b097ae842f994962e44a76ae14683fb7",
//   chains: [mainnet, polygon, optimism, arbitrum, base],
// });

// const wagmiConfig = createConfig({
//   autoConnect: true,
//   connectors,
//   publicClient,
// });
// const config = getDefaultConfig({
//   appName: "Dex",
//   projectId: "b097ae842f994962e44a76ae14683fb7",
//   chains: [mainnet, polygon, optimism, arbitrum, base],
//   ssr: true, // If your dApp uses server side rendering (SSR)
// });

const layout = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true);
  // const queryClient = new QueryClient();
  return (
    <div className={`relative scroll-smooth ${darkMode && "dark"}`}>
      <theme.Provider value={{ darkMode, setDarkMode }}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        {/* <Providers> */}
        {children}
        {/* </Providers> */}
      </theme.Provider>
    </div>
  );
};

export default layout;
