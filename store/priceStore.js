import { create } from "zustand";
import {idToToken} from "../helpers/price"

function getChangePercentage(currentTokenValue, prevTokenValue){
  if (!currentTokenValue || !prevTokenValue) {
    return "-"
  }
  const precentage = (currentTokenValue - prevTokenValue) / prevTokenValue * 100;
  if (precentage > 0) {
    return "+" + precentage.toFixed(2) + "%"
  } 

  return precentage.toFixed(2) + "%"
}

function getChangePercentageAll(state){
  let percentageChange = {}
  if (state.latestPrice) {
   percentageChange = Object.entries(state.latestPrice).reduce((acc, [tokenName, currentPrice]) => {
      return {
        ...acc,
        [tokenName]: getChangePercentage(currentPrice, state.last24HourPrice[tokenName]),
      };
    }, {});
  }

  return percentageChange
  

}

export const usePriceStore = create((set) => ({
  latestPrice: {},
  last24HourPrice: {},
  last24HourChange: {},
  setLast24HourPrice: (price) =>
    set((state) => {
      // let percentageChange
      // if (state.latestPrice) {
      //  percentageChange = Object.entries(state.latestPrice).reduce((acc, [tokenName, currentPrice]) => {
      //     return {
      //       ...acc,
      //       [tokenName]: getChangePercentage(currentPrice, price[tokenName]),
      //     };
      //   }, {});
      // }
      

      return { last24HourPrice: { ...price }, last24HourChange: getChangePercentageAll({...state,  last24HourPrice: { ...price }}) };
    }),
  setLatestPrice: (tokenId, price) =>
    set((state) => ({
      latestPrice: { ...state.latestPrice, [idToToken["0x" + tokenId]]: price },
      last24HourChange: getChangePercentageAll({...state,  latestPrice: { ...state.latestPrice, [idToToken["0x" + tokenId]]: price }})
    })),
}));
