export const translateAbiToken = "0xf9Df794F45f291F95ECF7F9517ce541A62528c7e";

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

export const translateAbiConfig = {
  compiler: {
    version: "0.8.7+commit.e28d00a7",
  },
  language: "Solidity",
  output: {
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "calculate",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_Money",
            type: "uint256",
          },
        ],
        name: "depositMoney",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "getAccumulateInterest",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_usedQuantity",
            type: "uint256",
          },
        ],
        name: "getDK",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_loansuer",
            type: "address",
          },
        ],
        name: "getLoanUserInformation",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_usedQuantity",
            type: "uint256",
          },
        ],
        name: "mortgage_DK",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "pickInterest",
        outputs: [
          {
            internalType: "uint256",
            name: "",
            type: "uint256",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "redeem_DK",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "withdrawMoney",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    devdoc: {
      kind: "dev",
      methods: {},
      version: 1,
    },
    userdoc: {
      kind: "user",
      methods: {},
      version: 1,
    },
  },
  settings: {
    compilationTarget: {
      "contracts/lendingPool/LendingPool.sol": "lendingPool",
    },
    evmVersion: "london",
    libraries: {},
    metadata: {
      bytecodeHash: "ipfs",
    },
    optimizer: {
      enabled: false,
      runs: 200,
    },
    remappings: [],
  },
  sources: {
    "contracts/lendingPool/LendingPool.sol": {
      keccak256:
        "0x83604d828728f1ba7b60605a9c55f05e1f5770ee88e36e323c01f6615666978d",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://f8a14d56a259d8612a81258f3660680222dd9253008864777f9f3e91d412ca03",
        "dweb:/ipfs/QmPZyEa65peuTnZS89nZcTyMMKFZxkJYd51NZ28EbpqEDo",
      ],
    },
    "contracts/lendingPool/interfaces/IERC20.sol": {
      keccak256:
        "0x659351d7e277c88410100765400346f6e1053dfa8b242a38704582f31e8ce90b",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://bf0fe9077392c771cf933354a64b7a43d067414d71df3b970ff3408f347cd62b",
        "dweb:/ipfs/QmafUVnBc8hWWUGVUCsGit7eACaqLaeqxKc3FAmJqvfogf",
      ],
    },
    "contracts/lendingPool/interfaces/IPRICE.sol": {
      keccak256:
        "0x515088515b77013334d65290cc2a64cf0c3046f6eb1ecd1de48072c977e3cb8b",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://8481282735c8de9f0be68f950512d4a294a4cea395e96b716315dac854263559",
        "dweb:/ipfs/QmQhu2E3yQHcR9iVoxWkFDdfVvGsuirk3yDd7Kh1LBNLA8",
      ],
    },
    "contracts/lendingPool/interfaces/ISwapRouter.sol": {
      keccak256:
        "0x9c32d10dd25ec7731877fc474716c5d1593b67acd98cfe91ed927ea54aad7d72",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://caa0d42a9f4349d3f6203c630b81eb20efec02e91e91e2fa2a3f72b064c4e55e",
        "dweb:/ipfs/Qme5MbNpmqz4hYqT5RHpGSJWfm2ifmcJbQoU8WHfBv2aLv",
      ],
    },
  },
  version: 1,
};
