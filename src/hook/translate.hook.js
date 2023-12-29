import { useMemo } from "react";
import {
  useAccount,
  useChainId,
  useContractWrite,
  useContractRead,
} from "wagmi";
import { translateAbiConfig, translateAbiToken } from "../config/translate";

const useTranslateAbi = () => {
  const { address, connector } = useAccount();
  const chainId = useChainId();
  const baseConfig = useMemo(() => {
    return {
      address: translateAbiToken,
      abi: translateAbiConfig.output.abi,
      functionName: "OneMint",
      chainId,
    };
  }, [address, chainId]);

  // c存款 args: [uint256]
  const depositMoney = useContractWrite({
    ...baseConfig,
    functionName: "depositMoney",
  });
  // 返回存入本金和利息的外部函数
  const calculate = useContractRead({
    ...baseConfig,
    functionName: "calculate",
    args: [address],
  });
  // 取出利息的
  const pickInterest = useContractWrite({
    ...baseConfig,
    functionName: "pickInterest",
  });
  // 取出本金和存款利息
  const withdrawMoney=  useContractWrite({
    ...baseConfig,
    functionName: "withdrawMoney",
  });

  
  // 抵押DK获得usdt args: [uint256]
  const mortgage_DK = useContractWrite({
    ...baseConfig,
    functionName: "mortgage_DK",
  })
  // 赎回DK
  const redeem_DK = useContractWrite({
    ...baseConfig,
    functionName: "redeem_DK",
  })
  // 池子累计了多少利息
  const getAccumulateInterest = useContractWrite({
    ...baseConfig,
    functionName: "getAccumulateInterest",
  })
  // 返回借usdt数量,质押DK数量,质押的DK区块高度数量,产生的利息 args: [address]
  const getLoanUserInformation = useContractRead({
    ...baseConfig,
    functionName: "getLoanUserInformation",
    args: [address]
  })
  // 返回存款月化收益，和邀请人的月化收益 以及贷款月化
  const getDepositIncome = useContractRead({
    ...baseConfig,
    functionName: "getDepositIncome",
  })

  const getInterestRate = useContractRead({
    ...baseConfig,
    functionName: "getInterestRate",
    args: [address]
  })
  
  return {
    depositMoney,
    calculate,
    pickInterest,
    withdrawMoney,
    // getUser,
    // getUsdt,
    mortgage_DK,
    redeem_DK,
    getAccumulateInterest,
    getLoanUserInformation,
    getInterestRate
    // getCumulativeLending
  };
};
export default useTranslateAbi;