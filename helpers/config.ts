"use client";

import { http, createStorage, cookieStorage } from "wagmi";
import { fantomTestnet } from "wagmi/chains";
import { Chain, getDefaultConfig } from "@rainbow-me/rainbowkit";

const projectId = "4af4492230df1c074def2de12bdbbb0a";

const supportedChains: Chain[] = [fantomTestnet];

export const config = getDefaultConfig({
  appName: "WalletConnection",
  projectId,
  chains: supportedChains as any,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: supportedChains.reduce((obj, chain) => ({ ...obj, [chain.id]: http() }), {}),
});
