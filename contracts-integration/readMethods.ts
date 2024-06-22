import { getStorageContract } from "./contracts";
import { storageABI } from "./abi/StoageABI";
import { STORAGE_ADDRESS } from "./address";
import { readContract } from "@wagmi/core";
import { config } from "../helpers/coreConfig";

/**
 * Get Open Trades Count on trading contract.
 *
 * @param address - The address of the user cancelling the order.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 */
export const getOpenTradesCount = async (address: string, chainId: number, pairIndex: number) => {
  try {
    // const data = await readContract(config, {
    //   abi: storageABI,
    //   address: STORAGE_ADDRESS[chainId],
    //   functionName: "openTradesCount",
    //   args: [address as any, BigInt(pairIndex)],
    // });
    const contract = getStorageContract(chainId);
    const data = await contract.openTradesCount(address, pairIndex);
    console.log(data.toString());
    return Number(data.toString());
  } catch (error) {
    console.log(error);

    return 0;
  }
};

/**
 * Gets the open limit orders for a specific pair index.
 *
 * @param address - The address of the user.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @returns The list of open limit orders.
 */
export const getOpenLimitOrdersCount = async (
  address: string,
  chainId: number,
  pairIndex: number
) => {
  try {
    // const data = await readContract(config, {
    //   abi: storageABI,
    //   address: STORAGE_ADDRESS[chainId],
    //   functionName: "openLimitOrdersCount",
    //   args: [address as any, BigInt(pairIndex)],
    // });
    const contract = getStorageContract(chainId);
    const data = await contract.openLimitOrdersCount(address, pairIndex);
    console.log("Open Limit Orders:", data);
    return Number(data.toString());
  } catch (error) {
    console.log(error);
    return 0;
  }
};

/**
 * Gets the open trade orders for a specific pair index and .
 *
 * @param address - The address of the user.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @param index - The index of the pair count.
 * @returns The list of open limit orders.
 */
export const getOpenTrades = async (
  address: string,
  chainId: number,
  pairIndex: number,
  index: number
) => {
  const contract = getStorageContract(chainId);
  const data = await contract.openTrades(address, pairIndex, index);
  console.log("Open Trade Orders:", data);

  // const data = await readContract(config, {
  //   abi: storageABI,
  //   address: STORAGE_ADDRESS[chainId],
  //   functionName: "openTrades",
  //   args: [address as any, BigInt(pairIndex), BigInt(index)],
  // });
  // const tradeInfo = await readContract(config, {
  //   abi: storageABI,
  //   address: STORAGE_ADDRESS[chainId],
  //   functionName: "openTradesInfo",
  //   args: [address as any, BigInt(pairIndex), BigInt(index)],
  // });

  const tradeInfo = await contract.openTradesInfo(address, pairIndex, index);
  console.log("Open Trade Orders:", tradeInfo);

  const formattedData = {
    trader: data[0],
    pairIndex: data[1],
    index: data[2],
    initialPosToken: data[3],
    positionSizeDai: data[4],
    openPrice: data[5],
    buy: data[6],
    leverage: data[7],
    tp: data[8],
    sl: data[9],
    isClosed: tradeInfo[5],
  };

  return formattedData;
};

/**
 * Gets the open limit orders for a specific pair index and .
 *
 * @param address - The address of the user.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @param index - The index of the pair count.
 * @returns The list of open limit orders.
 */
export const getOpenLimitOrders = async (
  address: string,
  chainId: number,
  pairIndex: number,
  index: number
) => {
  try {
    console.log("index", index);
    const contract = getStorageContract(chainId);
    const data = await contract.getOpenLimitOrder(address, pairIndex, index);
    console.log("getOpenLimitOrder:", data);

    // const data = await readContract(config, {
    //   abi: storageABI,
    //   address: STORAGE_ADDRESS[chainId],
    //   functionName: "getOpenLimitOrder",
    //   args: [address as any, BigInt(pairIndex), BigInt(index)],
    // });
    const formattedData = { ...data, positionSizeDai: data.positionSize, openPrice: data.minPrice };
    return formattedData;
  } catch (error) {
    return null;
  }
};
