const main_priceoracle_addr = "0xa50ba011c48153de246e5192c8f9258a2ba79ca9";
const amm_priceoracle_addr = main_priceoracle_addr;
const polygon_priceoracle_addr = "0x0229F777B0fAb107F9591a41d5F02E4e98dB6f2d"
const avalanche_priceoracle_addr = "0xdC336Cd4769f4cC7E9d726DA53e6d3fC710cEB89"
//hardcoded eth fallbackOracle
const FALLBACKORACLE_ADDRESS = "0x5b09e578cfeaa23f1b11127a658855434e4f3e09"
const PRICEORACLE_ABI = [
  "function getAssetsPrices(address[] calldata assets) external view returns (uint256[] memory)",
  "function getAssetPrice(address asset) public override view returns (uint256)",
  "function getSourceOfAsset(address asset) external view returns (address)",
  "function getFallbackOracle() external view returns (address)"
];
//hardcoded reserve list for all markets just in case
const AaveV2Markets = [
  "0x6b175474e89094c44da98b954eedeac495271d0f",
  "0x056fd409e1d7a124bd7017459dfea2f387b6d5cd",
  "0x57ab1ec28d129707052df4df418d58a2d46d5f51",
  "0x0000000000085d4780B73119b644AE5ecd22b376",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "0x8e870d67f660d95d5be530380d0ec0bd388289e1",
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "0xba100000625a3754423978a60c9317c58a424e3d",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "0x514910771af9ca656af840dff83e8264ecf986ca",
  "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
  "0x03ab458634910aad20ef5f1c8ee96f1d6ac54919",
  "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
  "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
  "0x4fabb145d64652a948d72533023f6e7a623c7c53",
  "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
  "0x853d955acef822db058eb8505911ed77f175b99e",
  "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
  "0xd46ba6d942050d489dbd938a2c909a5d5039a161",
  "0x0d8775f648430679a709e98d2b0cb6250d2887ef",
  "0xD533a949740bb3306d119CC777fa900bA034cd52",
  "0x1494ca1f11d487c2bbe4543e90080aeba4ba3c2b",
  "0xf629cbd94d3791c9250152bd8dfbdf380e2a3b9c",
  "0xdd974d5c2e2928dea5f71b9825b8b646686bd200",
  "0x0f5d2fb29fb7d3cfee444a200298f468908cc942",
  "0x408e41876cccdc0f92210600ef50372656052a38",
  "0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5",
  "0xc011a73ee8576fb46f5e1c5751ca3b9fe0af2a6f",
  "0xe41d2489571d322189246dafa5ebde1f4699f498"
  ]
const AaveAmmMarkets = [
  "0x6b175474e89094c44da98b954eedeac495271d0f",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599 ",
  "0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
  "0x004375dff511095cc5a197a54140a24efef3a416",
  "0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
  "0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
  "0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f",
  "0xb6909b960dbbe7392d405429eb2b3649752b4838",
  "0x3da1313ae46132a397d90d95b1424a9a7e3e0fce",
  "0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
  "0xc2adda861f89bbb333c90c492cb837741916a225",
  "0x8bd1661da98ebdd3bd080f0be4e6d9be8ce9858c",
  "0x43ae24960e5534731fc831386c07755a2dc33d47",
  "0xd3d2e2692501a5c9ca623199d38826e513033a17",
  "0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
  "0x2fdbadf3c4d5a8666bc06645b8358ab803996e28",
  "0x59a19d8c652fa0284f44113d0ff9aba70bd46fb4",
  "0x1eff8af5d577060ba4ac8a29a13525bb0ee2a3d5"

]
const AavePolygonMarkets = [
  "0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0",
  "0x6B175474E89094C44Da98b954EedeAC495271d0F",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9"
]
const AaveAvalancheMarkets = [
  "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
  "0x6b175474e89094c44da98b954eedeac495271d0f",
  "0xdac17f958d2ee523a2206206994597c13d831ec7",
  "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
  "0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9",
  "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
  "FvwEAhmxKfeiG8SnEvq42hc6whRyY3EFYAvebMqDNDGCgxN5Z",
]
module.exports = {
PRICEORACLE_ABI, FALLBACKORACLE_ADDRESS, AaveV2Markets, AaveAmmMarkets, AavePolygonMarkets,
AaveAvalancheMarkets, main_priceoracle_addr, amm_priceoracle_addr, polygon_priceoracle_addr, avalanche_priceoracle_addr
}
