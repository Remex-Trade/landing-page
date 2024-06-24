import { PAIR_STORAGE_ADDRESS } from "./address";
import { readContract } from "@wagmi/core";
import { config } from "../helpers/coreConfig";
import { pairStorageABI } from "./abi/pairStorageABI";

/**
 * Get pairs data from pair storage contract.
 *
 * @param chainId - The chain ID where the contract is deployed.
 * @returns A promise that resolves to an array of pairs data.
 */
export const getPairs = async (chainId: number) => {
  const data = await readContract(config, {
    abi: pairStorageABI,
    address: PAIR_STORAGE_ADDRESS[chainId],
    functionName: "pairsCount",
    chainId: chainId as any,
  });

  // console.log("GETPAIRS", chainId, data.toString());

  const pairsCount = Number(data.toString());

  const pairsPromise = Array.from({ length: pairsCount }).map(async (_, i) => {
    return await readContract(config, {
      abi: pairStorageABI,
      address: PAIR_STORAGE_ADDRESS[chainId],
      functionName: "pairs",
      args: [BigInt(i)],
      chainId: chainId as any,
    });
  });

  const pairsData = await Promise.all(pairsPromise);

  // console.log(pairsData);
  const formattedData = pairsData.map((d, index) => {
    return {
      from: d[0],
      to: d[1],
      feed: d[2],
      pairIndex: index,
      spreadP: d[3],
      groupIndex: d[4],
      feeIndex: d[5],
    };
  });

  return formattedData;
};
