import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xE684f16540D4B9D9b839c0E98a46413dDd3e026E"
);

export default instance;
