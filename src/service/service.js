// http://68.178.171.224:8601/api/coin/getCoin
import { get } from "../utils/http.utils";
// 获取价格
export const getCoin = () => get('/coin/getCoin')