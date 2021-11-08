
const ethers = require("ethers");
const { Finding, FindingSeverity, FindingType } = require("forta-agent");
const ABI = require('./ABI');
const polygon_endpoint = "";
const polygon_provider = new ethers.providers.JsonRpcProvider(polygon_endpoint);
const Polygon_LendingPool = new ethers.Contract(lp_addr_polygon, LP_ABI, polygon_provider);
const PolygonPriceOracle = new ethers.Contract(
    ABI.polygon_priceoracle_addr,
    ABI.PRICEORACLE_ABI,
    polygon_provider);
var ReservesListPolygon = [];
initiateReserveLists = async () =>
{
  
  ReservesListPolygon = await Polygon_LendingPool.getReservesList();
  
}
initiateFallbackOracle_addr = async () => {
    fallbackOracle_addr.push(await PolygonPriceOracle.getFallbackOracle());
  
  }
  var polygonAssetPrices = new Map(); // key: (asset address, price)
ReservesListPolygon.forEach(reserve => {
  polygonAssetPrices.set(reserve, 0);
});
module.exports = {
 polygon_endpoint, polygon_provider,Polygon_LendingPool,PolygonPriceOracle,ReservesListPolygon,
 initiateReserveLists, initiateFallbackOracle_addr,
 

}