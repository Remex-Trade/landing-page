export const priceIds = {
  "FTM/USD":
    "0x5c6c0d2386e3352356c3ab84434fafb5ea067ac2678a38a338c4a69ddc4bdb0c",
  "BTC/USD":
    "0xe62df6c8b4a85fe1a67db44dc12de5db330f7ac66b72dc658afedf0f4a415b43",
  "ETH/USD":
    "0xff61491a931112ddf1bd8147cd1b641375f79f5825126d665480874634fd0ace",
  "BNB/USD":
    "0x2f95862b045670cd22bee3114c39763a4a08beeb663b145d283c31d7d1101c4f",
  "SOL/USD":
    "0xef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d",
  "MATIC/USD":
    "0x5de33a9112c2b700b8d30b8a3402c103578ccfa2765696471cc672bd5cf6ac52",
  "LINK/USD":
    "0x8ac0c70fff57e9aefdf5edf44b51d62c2d433653cbb2cf5cc06bb115af04d221",
  "USDT/USD":
    "0x2b89b9dc8fdf9f34709a5b106b472f0f39bb6ca9ce04b0fd7f2e971688e2e53b",
};

export const idToToken = Object.entries(priceIds).reduce((acc, item) => {
  return {
    ...acc,
    [item[1]]: item[0],
  };
}, {});
