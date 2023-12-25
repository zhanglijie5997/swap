import { useEffect } from "react";
import { wagmiContract, wagmiContractToken } from "../config/config";
import { useStore } from "../store/store";
import { useContractRead, useAccount, useContractWrite, useChainId } from "wagmi";
import { usePrepareContractWrite } from "wagmi";
import { useMemo } from "react";

// interface IDK {
//     //这个是500的池子
//    function OneMint()external;
//    //这是存1000的
//    function TwoMint()external;
//    //取出奖励
//    function withdrawRewards(uint256 _tokenId)external;
//    //查看累积奖励数量和奖励天数 -> 收益额
//     function getAwardQuantity(uint256 _tokenId)external   view   returns(uint256,uint256);
//    //查看当前奖励剩余天数和每日奖励数量
//    function getDaysQuantity(uint256 _tokenId)external view   returns (uint256,uint256);
//    //输入确定数量usdt 获取所需的dk数量
//    function returnOutput(uint256 _number)external  view  returns(uint256);
//    //往池子冲奖励 
//    function addAward(uint256 _totalReward)external returns(uint256);
//    //返回池子的1总奖励和 2需发放奖励(包含未发放的奖励)和 3池子剩余奖励
//    function getAward()external view  returns(uint256,uint256,uint256);
//    这个是传入用户钱包地址 可以获得用户NFT数量
//    function balanceOf(address _owner) external view returns (uint256);
//    // 通过地址和索引获得这个是通过钱包地址，和索引 获得用户NFT ID
//     function tokenOfOwnerByIndex(address owner, uint256 index) external  view returns (uint256) {
//         require(index < balanceOf(owner), "ERC721Enumerable: owner index out of bounds");//索引值小于当前所有者用的令牌数量
//         return _ownedTokens[owner][index];
//     }
// 
// }
const contractAddress = wagmiContractToken;
/**
 * @returns <{account: string, data: any}>
 */
const useAbi = () => {
  const store = useStore();
  const { address, connector } = useAccount();
  const chainId = useChainId();
  const baseConfig = useMemo(() => {
    return {
        address: contractAddress,
        abi: wagmiContract.output.abi,
        functionName: "OneMint",
        chainId
      }
  },[address, chainId]) ;

  const OneMint = useContractWrite({
    ...baseConfig,
    functionName: "OneMint",
  });

  const balanceOf = useContractRead({
    ...baseConfig,
    functionName: "balanceOf",
    args: [address]
  })
  //   通过地址和索引获得这个是通过钱包地址，和索引 获得用户NFT ID

  const tokenOfOwnerByIndex = useContractWrite({
    ...baseConfig,
    functionName: "tokenOfOwnerByIndex",
  })

  const TwoMint = useContractWrite({
    ...baseConfig,
    functionName: "TwoMint",
  })
  // 看累积奖励数量和奖励天数 -> 收益额
  const getAwardQuantity = useContractWrite({
    ...baseConfig,
    functionName: "getAwardQuantity",
  });

  /** 存钱 */
  const addAward = useContractWrite({
    ...baseConfig,
    functionName: "addAward",
  })

  const getUserTokenNumber = async () => {
      const _userBalance = Number(balanceOf.data);
      try {
        console.log(tokenOfOwnerByIndex, "tokenOfOwnerByIndex");
        tokenOfOwnerByIndex.write({
            args: [address, _userBalance]
        });
      } catch (error) {
        console.log(222);
      }
  }

  

  return {
    account: store.baseData.state.data.account, addAward,
    OneMint, TwoMint,  getAwardQuantity, balanceOf, getUserTokenNumber
  };
};

export default useAbi;
