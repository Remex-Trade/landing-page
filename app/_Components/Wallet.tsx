"use client";
import { ConnectKitButton } from "connectkit";
import { Web3Provider } from "../providers";

import "react-toastify/dist/ReactToastify.css";
import MyComponent from "./MyComponent";

const WalletsProvider = () => {
  return (
    <>
          <ConnectKitButton/>
          <MyComponent/>
    </>
  );
};

export default WalletsProvider;
