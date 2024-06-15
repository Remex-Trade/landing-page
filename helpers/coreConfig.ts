import { http, createConfig } from "@wagmi/core";
import { fantomTestnet, polygonAmoy} from "@wagmi/core/chains";

export const config = createConfig({
  chains: [fantomTestnet, polygonAmoy],
  transports: {
    [fantomTestnet.id]: http(),
    [polygonAmoy.id]: http(),
  },
});
