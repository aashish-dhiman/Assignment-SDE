import { disclosureConfig } from "./sidebar/disclosure";
import { featuresConfig } from "./sidebar/features";
import { investConfig } from "./sidebar/invest";
import { marketConfig } from "./sidebar/market";

export const sidebarConfig = [
  {
    title: "Invest",
    id: "invest",
    items: investConfig,
  },
  {
    title: "Features",
    id: "features",
    items: featuresConfig,
  },
  {
    title: "Market",
    id: "market",
    items: marketConfig,
  },
  {
    title: "Pricing",
    id: "pricing",
    url: "https://www.indmoney.com/pricing?type=indian-stocks",
  },
  {
    title: "Disclosure",
    id: "disclosure",
    items: disclosureConfig,
  },
];
