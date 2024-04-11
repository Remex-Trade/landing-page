"use client";
import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "../providers";

import "react-toastify/dist/ReactToastify.css";

const WalletsProvider = () => {
  return (
    <Web3Provider>

          <ConnectKitButton />

    </Web3Provider>
  );
};

export default WalletsProvider;
