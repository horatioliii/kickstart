import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0xddd26B615B8ef3571B4844bCedb55BF22c7Dfcc2"
);

export default instance;
