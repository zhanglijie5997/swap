// http://68.178.171.224:8601/api/coin/getCoin
export default {
    baseUrl: process.env.NODE_ENV != 'production' ?  "/api" : "https://dkswap.com/api",
}