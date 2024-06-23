import { getTradingContract } from "./contracts";
import { parseEther } from "ethers/lib/utils";

interface ITrade {
  pairIndex: number;
  index: number;
  initialPosToken: string;
  daiToken: string;
  openPrice: string;
  buy: boolean;
  leverage: number;
  takeProfit: string;
  stopLoss: string;
  type: "0" | "1" | "2";
  slippageP: string;
  referral: string;
}

/**
 * Opens a new trade on the specified trading contract.
 *
 * @param address - The address of the user initiating the trade.
 * @param chainId - The chain ID where the contract is deployed.
 * @param trade - An object containing trade details.
 *   - pairIndex: The index of the trading pair.
 *   - index: The index of the trade.
 *   - initialPosToken: The initial position token.
 *   - daiToken: The amount of DAI token for the trade.
 *   - openPrice: The price at which the trade is opened.
 *   - buy: Whether the trade is a buy (true) or sell (false).
 *   - leverage: The leverage applied to the trade.
 *   - takeProfit: The take profit value.
 *   - stopLoss: The stop loss value.
 *   - type: The type of the trade. 0 => MARKET , 1 => LIMIT ,2 => CONDITIONAL
 *   - slippageP: The slippage percentage.
 *   - referral: The referral code.
 */
export const openTrade = async (
  address: string,
  chainId: number,
  trade: ITrade
) => {
  console.log(trade);
  const contract = getTradingContract(chainId);
  const tx = await contract.openTrade(
    [
      address,
      trade.pairIndex,
      trade.index,
      trade.initialPosToken,
      parseEther(trade.daiToken),
      trade.openPrice,
      trade.buy,
      trade.leverage,
      trade.takeProfit,
      trade.stopLoss,
    ],
    trade.type,
    trade.slippageP,
    trade.referral
  );
  console.log("pairIndex", trade.pairIndex);
  await tx.wait();
};

/**
 * Cancels an open limit order on the specified trading contract.
 *
 * @param address - The address of the user cancelling the order.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @param index - The index of the limit order.
 */
export const cancelOpenLimitOrder = async (
  address: string,
  chainId: number,
  pairIndex: number,
  index: number
) => {
  const contract = getTradingContract(chainId);
  const tx = await contract.cancelOpenLimitOrder(pairIndex, index);
  await tx.wait();
};

/**
 * Closes an open trade on the specified trading contract.
 *
 * @param address - The address of the user closing the trade.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @param index - The index of the trade.
 */
export const closeTradeMarket = async (
  address: string,
  chainId: number,
  pairIndex: number,
  index: number
) => {
  const contract = getTradingContract(chainId);
  const tx = await contract.closeTradeMarket(pairIndex, index);
  await tx.wait();
};

/**
 * Updates the take profit (TP) value for an open trade on the specified trading contract.
 *
 * @param address - The address of the user updating the TP.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @param index - The index of the trade.
 * @param _newTp - The new take profit value.
 */
export const updateTp = async (
  address: string,
  chainId: number,
  pairIndex: number,
  index: number,
  _newTp: string
) => {
  const contract = getTradingContract(chainId);
  const tx = await contract.updateTp(pairIndex, index, _newTp);
  await tx.wait();
};

/**
 * Updates the stop loss (SL) value for an open trade on the specified trading contract.
 *
 * @param address - The address of the user updating the SL.
 * @param chainId - The chain ID where the contract is deployed.
 * @param pairIndex - The index of the trading pair.
 * @param index - The index of the trade.
 * @param _newSl - The new stop loss value.
 */
export const updateSl = async (
  address: string,
  chainId: number,
  pairIndex: number,
  index: number,
  _newSl: string
) => {
  const contract = getTradingContract(chainId);
  const tx = await contract.updateSl(pairIndex, index, _newSl);
  await tx.wait();
};


export const updateOpenLimitOrder=async(
  address: string,
  chainId: number,
  pairIndex: number,
  index: number,
  _newPrice: string,
  _newSl: string,
  _newTp: string
  ) => {
  const contract = getTradingContract(chainId);
  const tx = await contract.updateOpenLimitOrder(pairIndex, index, _newPrice,_newTp,_newSl);
  await tx.wait();
}
 
