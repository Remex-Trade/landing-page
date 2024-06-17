"use client";

import * as React from "react";
import {
  RainbowKitProvider,
  getDefaultWallets,
  connectorsForWallets,
} from "@rainbow-me/rainbowkit";
import {
  argentWallet,
  trustWallet,
  ledgerWallet,
} from "@rainbow-me/rainbowkit/wallets";
import { createConfig, http, WagmiProvider } from "wagmi";
import { polygonMumbai } from "wagmi/chains";
import { createClient } from "viem";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "connectkit";
import { metaMask } from "wagmi/connectors";
import { walletConnect } from "wagmi/connectors";

// const config = createConfig({
//     chains: [polygonMumbai],
//     connectors: [metaMask()],
//     client({ chain }) {
//       return createClient({ chain, transport: http('https://polygon-mumbai.g.alchemy.com/v2/Jl0asyFZmfuW_3WWuq4lVrjZmU2k2nom') })
//     },
//   })

// const config = createConfig({
//   chains: [polygonMumbai],
//   // connectors: [
//   //     walletConnect({
//   //       projectId: 'de79ccb05a7f1f12b1b9333a5dd5bbfa',
//   //     }),
//   //   ],

//   transports: {
//     [polygonMumbai.id]: http(
//       "https://polygon-mumbai.g.alchemy.com/v2/Jl0asyFZmfuW_3WWuq4lVrjZmU2k2nom"
//     ),
//   },
// });

// const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
// const projectId = `85a616505f219621a73d1af8a208fd14`;

// const { wallets } = getDefaultWallets({
//     appName: "IKnowSpots",
//     projectId,
//     chains,
// });

// const demoAppInfo = {
//     appName: "IKnowSpots",
// };

// const connectors = connectorsForWallets([
//     ...wallets,
//     {
//         groupName: "Other",
//         wallets: [
//             argentWallet({ projectId, chains }),
//             trustWallet({ projectId, chains }),
//             ledgerWallet({ projectId, chains }),
//         ],
//     },
// ]);

// const wagmiConfig = createConfig({
//     autoConnect: true,
//     connectors,
//     publicClient,
//     webSocketPublicClient,
// });
const queryClient = new QueryClient();

// export function Providers({ children }: { children: React.ReactNode }) {
//     const [mounted, setMounted] = React.useState(false);
//     React.useEffect(() => setMounted(true), []);
//     return (
//         <WagmiProvider config={config}>
//             <QueryClientProvider client={queryClient}>
//         <ConnectKitProvider>{children}</ConnectKitProvider>
//       </QueryClientProvider>
//         </WagmiProvider>
//     );
// }

export const Web3Provider = ({ children }) => {
  return (
    // <WagmiProvider config={config}>
      // <QueryClientProvider client={queryClient}>
        <ConnectKitProvider
          customTheme={{
            "--ck-connectbutton-background":"#371C8B",
            "--ck-connectbutton-color":"#ffffff",
            "--ck-connectbutton-hover-background":"#644290"
          }}
        >
          {children}
        </ConnectKitProvider>
      // </QueryClientProvider>
    // </WagmiProvider>
  );
};
