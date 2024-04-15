"use client";
import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "../providers";

import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./MyComponent";

const WalletsProvider = () => {
  return (
    <Web3Provider>
          <ConnectKitButton/>
          <MyComponent/>
    </Web3Provider>
  );
};

export default WalletsProvider;
