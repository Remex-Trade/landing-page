import { http, createConfig } from "@wagmi/core";
import { fantomTestnet } from "@wagmi/core/chains";

export const config = createConfig({
  chains: [fantomTestnet],
  transports: {
    [fantomTestnet.id]: http(),
  },
});
