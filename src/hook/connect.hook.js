import { useEffect } from "react";
import { wagmiContract } from "../config/config";
import { useStore } from "../store/store";
import { useContractRead, useAccount } from "wagmi";

// interface LendingPool {
//     //存款合约
//     function depositMoney(uint256 _Money)external;
//     //返回存入本金和利息的外部函数
//     function calculate(address _user)external  view  returns(uint256,uint256);
//     //取出利息的外部函数
//     function pickInterest()external   returns  (uint256);
//     //取出本金和存款利息
//     function withdrawMoney()external  returns(bool);
//     //返回池子所有U的数量
//     function getUser()external view returns(uint256);
//     //计算获取USDT所需的DK数量的外部函数
//     function getUsdt(uint256 _usedQuantity)external  view  returns(uint256);
//     //抵押DK获得usdt
//     function mortgage_DK(uint256 _usedQuantity)external  returns(uint256);
//     //赎回DK
//     function redeem_DK()external;
//     //池子累计了多少利息
//     function getAccumulateInterest()external view  returns(uint256);
//     //返回借usdt数量,质押DK数量,质押的DK区块高度数量,产生的利息
//     function getLoanUserInformation(address _loansuer)external  view returns(uint256,uint256,uint256,uint256);
//     //当前池子可存存款的的额度
//     function getCumulativeLending()external view  returns(uint256);
// }
const contractAddress = "0xc826b17388BF144De8EF14323c299E0dD01D6CdA";
/**
 * @returns <{account: string, data: any}>
 */
const useAbi = () => {
  const store = useStore();
  const { address } = useAccount();
  console.log(address);
  useEffect(() => {
    
  }, []);
  const getUsdt = useContractRead({
    address: contractAddress,
    abi: wagmiContract.output.abi,
    functionName: "getUsdt",
    args: [10]
  });

  const getAccumulateInterest = useContractRead({
    address: contractAddress,
    abi: wagmiContract.output.abi,
    functionName: "getAccumulateInterest",
  })

  const getUser = useContractRead({
    address: "0xBD86eC6E03e4cb8F73FC7Cfc9111F53dE047982F",
    abi: wagmiContract.output.abi,
    functionName: "getUser",
  });

//   const 

//   const  useContractWrite
  return {
    account: store.baseData.state.data.account,
    getUsdt,
    getAccumulateInterest,
    getUser
  };
};

export default useAbi;
