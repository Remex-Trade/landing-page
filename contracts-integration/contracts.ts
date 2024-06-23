import { ethers } from "ethers";
import {
  PAIR_STORAGE_ADDRESS,
  STAKE_TOKEN_ADDRESS,
  STAKING_ADDRESS,
  STORAGE_ADDRESS,
  TRADING_ADDRESS,
} from "./address";
import { GnsTradingABI } from "./abi/GnsTradingABI";
import { storageABI } from "./abi/StoageABI";
import { stakingABI } from "./abi/stakingABI";
import { erc20Abi } from "viem";
import { pairStorageABI } from "./abi/pairStorageABI";

export const getTradingContract = (chainId: number) => {
  if (!window["ethereum"]) return undefined;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(TRADING_ADDRESS[chainId], GnsTradingABI, signer);
};

export const getStorageContract = (chainId: number) => {
  if (!window["ethereum"]) return undefined;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(STORAGE_ADDRESS[chainId], storageABI, signer);
};

export const getStakingContract = (chainId: number) => {
  if (!window["ethereum"]) return undefined;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(STAKING_ADDRESS[chainId], stakingABI, signer);
};

export const getStakeTokenContract = (chainId: number) => {
  if (!window["ethereum"]) return undefined;
  const provider = new ethers.providers.Web3Provider(window.ethereum);
  const signer = provider.getSigner();
  return new ethers.Contract(STAKE_TOKEN_ADDRESS[chainId], erc20Abi, signer);
};
