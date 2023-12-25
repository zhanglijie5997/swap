export const translateAbiToken = "0xBD86eC6E03e4cb8F73FC7Cfc9111F53dE047982F";

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
        inputs: [],
        name: "getCumulativeLending",
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
        name: "getUsdt",
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
        inputs: [],
        name: "getUser",
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
        "0x28fb1870ed8af91d5352ce483f786459b8d9530231b3a2211083bab6232acccb",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://31c5dd5223fbe6003e8bcf76e84043e22f6a08069361ad49e191ae65c72f102c",
        "dweb:/ipfs/QmNXAr5jFL5i7QLmM5MLT5EQco4SsbmKScKL9VBSXeKM5B",
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
