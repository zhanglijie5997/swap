export const translateAbiToken = "0xD42ed63704d350dd95466965C0998D583C636f6C";

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
//返回存款月化收益，和邀请人的月化收益 以及贷款月化
// function getDepositIncome()external  view  returns(uint256,uint256,uint256);
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
        name: "getDkAndUsdtQuantity",
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
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "getInterestRate",
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
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
        name: "getLoanInterest",
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
            name: "_usdtQuantity",
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
        inputs: [
          {
            internalType: "address",
            name: "_user",
            type: "address",
          },
        ],
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
      "contracts/DKLOAN/loan.sol": "loan",
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
    "contracts/DKLOAN/interface/IERC20.sol": {
      keccak256:
        "0x64736e7ca5d9168cd868d67be559c48eb1a9318cfb6952d945e2bf99a5b8454f",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://0130b2228727dc7abe6956387cc63c1d5eb9dd9a70e3cbb17ec56dc562d0e5b5",
        "dweb:/ipfs/QmdrwMixk61CNGPe5xLxicQp58rnpZvT82Bzse1tdFhEV4",
      ],
    },
    "contracts/DKLOAN/interface/ISwapRouter.sol": {
      keccak256:
        "0xaee0c5d650b2f9e5b165bbe991579aa42a4ba7959c056a6fdab425e4f9c94e46",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://26f0db4c957776125a4e22470ebce9ef68e81979911d3c1f9412d86dc96dad85",
        "dweb:/ipfs/QmRGRKKTGDwvKSNCY4UT65Zx6EEEnc7Up2HbPPJEmRHUBc",
      ],
    },
    "contracts/DKLOAN/interface/Price.sol": {
      keccak256:
        "0xf032e24ee75d763afd7392abea9a8d3f36b223e23b433d205b735353ae9d2d33",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://b69b20cf0d3cad842eca0b4e09d4dd9b87cd9b35162ae3bd08ea15aa99567dcf",
        "dweb:/ipfs/QmUG81ej7hDri9wYj2xyeEFcaaqMK5SHrhioqPUTnc8u5H",
      ],
    },
    "contracts/DKLOAN/loan.sol": {
      keccak256:
        "0x69cdc75c2fd8920bb2091e636880fb7ba0cf9d6a62e870bbc578ecbe75ef85c7",
      license: "GPL-3.0",
      urls: [
        "bzz-raw://fe81b8c8c961e7df4f353d29529d9a9213c5a49c6138951fe99a76e1a27aa2bb",
        "dweb:/ipfs/Qmd8yFFheB61zPt4yc87qJ2GtdbdxoGRPyFbrVXBFXi45R",
      ],
    },
  },
  version: 1,
};
