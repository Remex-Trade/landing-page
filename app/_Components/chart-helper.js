import useSWR from "swr";
import { ApolloClient, InMemoryCache, gql } from "@apollo/client";
import { BigNumberish, ethers } from "ethers";
import { useMemo } from "react";
export const USD_DECIMALS = 30;

const BigNumber = ethers.BigNumber;

export function createClient(uri) {
  return new ApolloClient({
    uri,
    cache: new InMemoryCache(),
  });
}

export const CHART_PERIODS = {
  "5m": 60 * 5,
  "15m": 60 * 15,
  "1h": 60 * 60,
  "4h": 60 * 60 * 4,
  "1d": 60 * 60 * 24,
};

export const CHART_PERIODS_MAP = {
  "5m": 5,
  "15m": 15,
  "1h": 60,
  "4h":60 * 4,
  "1d":  "D",
};

export const formatAmount = (
  amount,
  tokenDecimals,
  displayDecimals,
  useCommas,
  defaultValue
) => {
  if (!defaultValue) {
    defaultValue = "--";
  }
  if (amount === undefined || amount.toString().length === 0) {
    return defaultValue;
  }
  if (displayDecimals === undefined) {
    displayDecimals = 4;
  }
  let amountStr = ethers.utils.formatUnits(amount, tokenDecimals);
  if (displayDecimals !== 0) {
    amountStr = limitDecimals(amountStr, displayDecimals);
    amountStr = padDecimals(amountStr, displayDecimals);
  } else {
    amountStr = Number(amountStr).toFixed(0);
  }
  if (useCommas) {
    return numberWithCommas(amountStr);
  }
  return amountStr;
};
export const padDecimals = (amount, minDecimals) => {
  let amountStr = amount.toString();
  const dotIndex = amountStr.indexOf(".");
  if (dotIndex !== -1) {
    const decimals = amountStr.length - dotIndex - 1;
    if (decimals < minDecimals) {
      amountStr = amountStr.padEnd(
        amountStr.length + (minDecimals - decimals),
        "0"
      );
    }
  } else {
    amountStr = amountStr + ".0000";
  }
  return amountStr;
};
export const limitDecimals = (amount, maxDecimals) => {
  let amountStr = amount.toString();
  if (maxDecimals === undefined) {
    return amountStr;
  }
  if (maxDecimals === 0) {
    return amountStr.split(".")[0];
  }
  const dotIndex = amountStr.indexOf(".");
  if (dotIndex !== -1) {
    let decimals = amountStr.length - dotIndex - 1;
    if (decimals > maxDecimals) {
      amountStr = amountStr.substr(
        0,
        amountStr.length - (decimals - maxDecimals)
      );
    }
  }
  return amountStr;
};

export function numberWithCommas(x) {
  if (!x) {
    return "...";
  }

  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}

export const chainlinkClient = createClient(
  "https://api.thegraph.com/subgraphs/name/deividask/chainlink"
);

const PYTH_FEED_ID_MAP = {

  FTM_USD: "0x5c6c0d2386e3352356c3ab84434fafb5ea067ac2678a38a338c4a69ddc4bdb0c", 
}
// https://benchmarks.pyth.network/v1/shims/tradingview/history?symbol=FTM%2FUSD&resolution=15&from=1712715047&to=1712801447

export async function getChartPricesFromStats(symbol, period) {
  if (["WBTC", "WETH", "WFTM"].includes(symbol)) {
    symbol = symbol.substr(1);
  } else if (symbol === "BTC.b") {
    symbol = "BTC";
  }

  const _symbol = "FTM/USD"
  // const _symbol = getNormalizedAxlTokenSymbol(symbol);

  const timeDiff = CHART_PERIODS[period] * 3000;
  const from = Math.floor(Date.now() / 1000 - timeDiff);
  const to = Math.floor(Date.now() / 1000);
  const url = `https://benchmarks.pyth.network/v1/shims/tradingview/history?symbol=${_symbol}&resolution=${CHART_PERIODS_MAP[period]}&from=${from}&to=${to}`
  // const url = `${GMX_STATS_API_URL}/candles/${_symbol}?preferableChainId=${chainId}&period=${period}&from=${from}&preferableSource=fast`;

  const TIMEOUT = 30000;
  const res = await new Promise(async (resolve, reject) => {
    let done = false;
    setTimeout(() => {
      done = true;
      reject(new Error(`request timeout ${url}`));
    }, TIMEOUT);

    let lastEx;
    for (let i = 0; i < 3; i++) {
      if (done) return;
      try {
        const res = await fetch(url);
        resolve(res);
        return;
      } catch (ex) {
        await sleep(300);
        lastEx = ex;
      }
    }
    reject(lastEx);
  });
  if (!res.ok) {
    throw new Error(`request failed ${res.status} ${res.statusText}`);
  }
  const json = await res.json();
  const length = json?.t?.length || 0;
  let prices = Array.from({ length: length }, (v, i) => {
    return {
      t: json.t[i] ,
      o: json.o[i] ,
      c: json.c[i],
      h: json.h[i],
      l: json.l[i],
    };
  });

  console.log("p1",prices)


  // let prices = json?.prices;
  if (!prices || prices.length < 10) {
    throw new Error(`not enough prices data: ${prices?.length}`);
  }

  const OBSOLETE_THRESHOLD = Date.now() / 1000 - 60 * 30; // 30 min ago
  // const updatedAt = json?.updatedAt || 0;
  // if (updatedAt < OBSOLETE_THRESHOLD) {
  //   throw new Error(
  //     "chart data is obsolete, last price record at " +
  //       new Date(updatedAt * 1000).toISOString() +
  //       " now: " +
  //       new Date().toISOString()
  //   );
  // }

  prices = prices.map(({ t, o: open, c: close, h: high, l: low }) => ({
    time: t + timezoneOffset,
    open,
    close,
    high,
    low,
  }));

  console.log("p2",prices)
  return prices;
}

const FEED_ID_MAP = {
  BTC_USD: "0xdbe1941bfbe4410d6865b9b7078e0b49af144d2d",
  ETH_USD: "0x37bc7498f4ff12c19678ee8fe19d713b87f6a9e6",
  BNB_USD: "0xc45ebd0f901ba6b2b8c7e70b717778f055ef5e6d",
  LINK_USD: "0xdfd03bfc3465107ce570a0397b247f546a42d0fa",
  UNI_USD: "0x68577f915131087199fe48913d8b416b3984fd38",
  SUSHI_USD: "0x7213536a36094cd8a768a5e45203ec286cba2d74",
  AVAX_USD: "0x0fc3657899693648bba4dbd2d8b33b82e875105d",
  AAVE_USD: "0xe3f0dede4b499c07e12475087ab1a084b5f93bc0",
  YFI_USD: "0x8a4d74003870064d41d4f84940550911fbfccf04",
  SPELL_USD: "0x8640b23468815902e011948f3ab173e1e83f9879",
  FTM_USD: "0xbDb80D19dEA36EB7f63bdFD2bdD4033B2b7e8e4d",
};
export const timezoneOffset = -new Date().getTimezoneOffset() * 60;

export function getChainlinkChartPricesFromGraph(tokenSymbol, period) {
  if (["WBTC", "WETH", "WFTM"].includes(tokenSymbol)) {
    tokenSymbol = tokenSymbol.substr(1);
  }
  const marketName = tokenSymbol + "_USD";
  const feedId = FEED_ID_MAP[marketName];
  if (!feedId) {
    throw new Error(`undefined marketName ${marketName}`);
  }

  const PER_CHUNK = 1000;
  const CHUNKS_TOTAL = 6;
  const requests = [];
  for (let i = 0; i < CHUNKS_TOTAL; i++) {
    const query = gql(`{
      rounds(
        first: ${PER_CHUNK},
        skip: ${i * PER_CHUNK},
        orderBy: unixTimestamp,
        orderDirection: desc,
        where: {feed: "${feedId}"}
      ) {
        unixTimestamp,
        value
      }
    }`);
    requests.push(chainlinkClient.query({ query }));
  }

  return Promise.all(requests)
    .then((chunks) => {
      let prices = [];
      const uniqTs = new Set();
      chunks.forEach((chunk) => {
        chunk.data.rounds.forEach((item) => {
          if (uniqTs.has(item.unixTimestamp)) {
            return;
          }

          uniqTs.add(item.unixTimestamp);
          prices.push([item.unixTimestamp, Number(item.value) / 1e8]);
        });
      });

      prices.sort(([timeA], [timeB]) => timeA - timeB);
      prices = getCandlesFromPrices(prices, period);
      return prices;
    })
    .catch((err) => {
      // eslint-disable-next-line no-console
      console.error(err);
    });
}

function getCandlesFromPrices(prices, period) {
  const periodTime = CHART_PERIODS[period];

  if (prices.length < 2) {
    return [];
  }

  const candles = [];
  const first = prices[0];
  let prevTsGroup = Math.floor(first[0] / periodTime) * periodTime;
  let prevPrice = first[1];
  let o = prevPrice;
  let h = prevPrice;
  let l = prevPrice;
  let c = prevPrice;
  for (let i = 1; i < prices.length; i++) {
    const [ts, price] = prices[i];
    const tsGroup = Math.floor(ts / periodTime) * periodTime;
    if (prevTsGroup !== tsGroup) {
      candles.push({ t: prevTsGroup + timezoneOffset, o, h, l, c });
      o = c;
      h = Math.max(o, c);
      l = Math.min(o, c);
    }
    c = price;
    h = Math.max(h, price);
    l = Math.min(l, price);
    prevTsGroup = tsGroup;
  }

  return candles.map(({ t: time, o: open, c: close, h: high, l: low }) => ({
    time,
    open,
    close,
    high,
    low,
  }));
}

export function useChartPrices(
  chainId,
  symbol,
  isStable,
  period,
  currentAveragePrice
) {
  const swrKey =
    !isStable && symbol ? ["getChartCandles", chainId, symbol, period] : null;
  let { data: prices, mutate: updatePrices } = useSWR(swrKey, {
    fetcher: async (...args) => {
      try {
        return await getChartPricesFromStats(symbol, period);
      } catch (ex) {
        // eslint-disable-next-line no-console
        console.warn(ex);
        // eslint-disable-next-line no-console
        console.warn("Switching to graph chainlink data");
        try {
          return await getChainlinkChartPricesFromGraph(symbol, period);
        } catch (ex2) {
          // eslint-disable-next-line no-console
          console.warn("getChainlinkChartPricesFromGraph failed");
          // eslint-disable-next-line no-console
          console.warn(ex2);
          return [];
        }
      }
    },
    dedupingInterval: 60000,
    focusThrottleInterval: 60000 * 10,
  });

  const currentAveragePriceString =
    currentAveragePrice && currentAveragePrice.toString();
  const retPrices = useMemo(() => {
    if (isStable) {
      return getStablePriceData(period);
    }

    if (!prices) {
      return [];
    }

    let _prices = [...prices];
    if (currentAveragePriceString && prices.length) {
      _prices = appendCurrentAveragePrice(
        _prices,
        BigNumber.from(currentAveragePriceString),
        period
      );
    }

    return fillGaps(_prices, CHART_PERIODS[period]);
  }, [prices, isStable, currentAveragePriceString, period]);

  return [retPrices, updatePrices];
}

function fillGaps(prices, periodSeconds) {
  if (prices.length < 2) {
    return prices;
  }

  const newPrices = [prices[0]];
  let prevTime = prices[0].time;
  for (let i = 1; i < prices.length; i++) {
    const { time, open } = prices[i];
    if (prevTime) {
      let j = (time - prevTime) / periodSeconds - 1;
      while (j > 0) {
        newPrices.push({
          time: time - j * periodSeconds,
          open,
          close: open,
          high: open * 1.0003,
          low: open * 0.9996,
        });
        j--;
      }
    }

    prevTime = time;
    newPrices.push(prices[i]);
  }

  return newPrices;
}

export function getStablePriceData(period, countBack = 100) {
  const periodSeconds = CHART_PERIODS[period];
  const now = Math.floor(Date.now() / 1000 / periodSeconds) * periodSeconds;
  let priceData = [];
  for (let i = countBack; i > 0; i--) {
    priceData.push({
      time: now - i * periodSeconds,
      open: 1,
      close: 1,
      high: 1,
      low: 1,
    });
  }
  return priceData;
}

function appendCurrentAveragePrice(prices, currentAveragePrice, period) {
  const periodSeconds = CHART_PERIODS[period];
  const currentCandleTime = Math.floor(Date.now() / 1000 / periodSeconds) * periodSeconds + timezoneOffset;
  const last = prices[prices.length - 1];
  const averagePriceValue = parseFloat(formatAmount(currentAveragePrice, USD_DECIMALS, 5));
  if (currentCandleTime === last.time) {
    last.close = averagePriceValue;
    last.high = Math.max(last.high, averagePriceValue);
    last.low = Math.max(last.low, averagePriceValue);
    return prices;
  } else {
    const newCandle = {
      time: currentCandleTime,
      open: last.close,
      close: averagePriceValue,
      high: averagePriceValue,
      low: averagePriceValue,
    };
    return [...prices, newCandle];
  }
}
