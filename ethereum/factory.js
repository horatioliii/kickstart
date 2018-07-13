import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x1706aAc65F5B5E637ee237dc547cC192d04470a3"
);

export default instance;
