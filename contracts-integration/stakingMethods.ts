import { readContract } from "@wagmi/core";
import { parseEther } from "ethers/lib/utils";
import { erc20Abi, formatEther, maxUint256 } from "viem";

import { config } from "../helpers/coreConfig";
import { STAKE_TOKEN_ADDRESS, STAKING_ADDRESS } from "./address";
import { getStakeTokenContract, getStakingContract } from "./contracts";
import { stakingABI } from "./abi/stakingABI";

/**
 * Gets the allowance for a specified address to spend the staking token.
 *
 * @param {string} address - The address to check the allowance for.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @returns {Promise<bigint>} - The allowance amount.
 */
export const getAllowance = async (address: string, chainId: number) => {
  const data = await readContract(config, {
    abi: erc20Abi,
    address: STAKE_TOKEN_ADDRESS[chainId],
    functionName: "allowance",
    args: [address as any, STAKING_ADDRESS[chainId]],
  });

  return data;
};

/**
 * Gets the balance for a specified address to spend the staking token.
 *
 * @param {string} address - The address to check the balance for.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @returns {Promise<bigint>} - The balance amount.
 */
export const getBalance = async (address: string, chainId: number) => {
  const data = await readContract(config, {
    abi: erc20Abi,
    address: STAKE_TOKEN_ADDRESS[chainId],
    functionName: "balanceOf",
    args: [address as any],
  });

  return data;
};
/**
 * Gets the pending reward in DAI for a specified address.
 *
 * @param {string} address - The address to check the pending reward for.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @returns {Promise<bigint>} - The pending reward amount in DAI.
 */
export const getPendingRewardDai = async (address: string, chainId: number) => {
  const data = await readContract(config, {
    abi: stakingABI,
    address: STAKING_ADDRESS[chainId],
    functionName: "pendingRewardDai",
  });

  return data;
};

export const getUserStakeInfo = async (address: string, chainId: number) => {
  const data = await readContract(config, {
    abi: stakingABI,
    address: STAKING_ADDRESS[chainId],
    functionName: "users",
    args: [address as any],
  });

  return {
    stakedTokens: formatEther(data[0]),
    debtDai: formatEther(data[1]),
    totalBoostTokens: formatEther(data[2]),
    harvestedRewardsDai: formatEther(data[3]),
  };
};
/**
 * Approves the staking contract to spend the maximum amount of the staking token.
 *
 * @param {string} address - The address approving the spending of the staking token.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @returns {Promise<void>} - A promise that resolves when the transaction is complete.
 */
export const approveStakeToken = async (address: string, chainId: number) => {
  const contract = getStakeTokenContract(chainId);
  const tx = await contract.approve(STAKING_ADDRESS[chainId], maxUint256);
  await tx.wait();
};

/**
 * Stakes a specified amount of tokens.
 *
 * @param {string} address - The address staking the tokens.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @param {string} amount - The amount of tokens to stake.
 */
export const stakeTokens = async (address: string, chainId: number, amount: string) => {
  const contract = getStakingContract(chainId);
  const tx = await contract.stakeTokens(parseEther(amount));
  await tx.wait();
};

/**
 * Unstakes a specified amount of tokens.
 *
 * @param {string} address - The address unstaking the tokens.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @param {string} amount - The amount of tokens to unstake.
 * @returns {Promise<void>} - A promise that resolves when the transaction is complete.
 */
export const unstakeTokens = async (address: string, chainId: number, amount: string) => {
  const contract = getStakingContract(chainId);
  const tx = await contract.unstakeTokens(parseEther(amount));
  await tx.wait();
};

/**
 * Harvests the pending rewards.
 *
 * @param {string} address - The address harvesting the rewards.
 * @param {number} chainId - The chain ID where the contract is deployed.
 * @returns {Promise<void>} - A promise that resolves when the transaction is complete.
 */
export const harvest = async (address: string, chainId: number) => {
  const contract = getStakingContract(chainId);
  const tx = await contract.harvest();
  await tx.wait();
};

export const getUserStakeInfo = async (address: string, chainId: number) => {
  const data = await readContract(config, {
    abi: stakingABI,
    address: STAKING_ADDRESS[chainId],
    functionName: "users",
    args: [address as any],
  });

  return {
    stakedTokens: parseEther(data[0].toString()),
    debtDai: parseEther(data[1].toString()),
    totalBoostTokens: parseEther(data[2].toString()),
    harvestedRewardsDai: parseEther(data[3].toString()),
  };
};
