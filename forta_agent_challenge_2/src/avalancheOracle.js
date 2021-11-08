ethers = require("ethers");
const { Finding, FindingSeverity, FindingType } = require("forta-agent");
const ABI = require('./ABI');
/* 
   
*/
const avalanche_endpoint = "";
const avalanche_provider = new ethers.providers.JsonRpcProvider(avalanche_endpoint);
const Avalanche_LendingPool = new ethers.Contract(lp_addr_avalanche, LP_ABI, avalanche_provider);
const AvalanchePriceOracle = new ethers.Contract(
    ABI.avalanche_priceoracle_addr,
    ABI.PRICEORACLE_ABI,
    avalanche_provider);
var ReservesListAvalanche = [];
initiateReserveLists = async () =>
{
  
  ReservesListAvalanche = await Avalanche_LendingPool.getReservesList();
  
}
initiateFallbackOracle_addr = async () => {
    fallbackOracle_addr.push(await AvalanchePriceOracle.getFallbackOracle());
  
  }
  var avalancheAssetPrices = new Map(); // key: (asset address, price)
  ReservesListAvalanche.forEach(reserve => {
    avalancheAssetPrices.set(reserve, 0);
  });
module.exports = {
    avalanche_endpoint,avalanche_provider,Avalanche_LendingPool,AvalanchePriceOracle,ReservesListAvalanche,
    initiateReserveLists,initiateFallbackOracle_addr,avalancheAssetPrices
}
