export const wagmiContractToken = "0xc826b17388BF144De8EF14323c299E0dD01D6CdA";

export const wagmiContract = {
  compiler: {
    version: "0.6.1+commit.e6f7d5a4",
  },
  language: "Solidity",
  output: {
    abi: [
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_approved",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Approval",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_owner",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            indexed: false,
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "ApprovalForAll",
        type: "event",
      },
      {
        anonymous: false,
        inputs: [
          {
            indexed: true,
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            indexed: true,
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            indexed: true,
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "Transfer",
        type: "event",
      },
      {
        inputs: [],
        name: "OneMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [],
        name: "TwoMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_totalReward",
            type: "uint256",
          },
        ],
        name: "addAward",
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
            name: "_approved",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "approve",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        name: "balanceOf",
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
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getApproved",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [],
        name: "getAward",
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
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getAwardQuantity",
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
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "getDaysQuantity",
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
            name: "_owner",
            type: "address",
          },
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
        ],
        name: "isApprovedForAll",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "ownerOf",
        outputs: [
          {
            internalType: "address",
            name: "",
            type: "address",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceID",
            type: "bytes4",
          },
        ],
        name: "registerInterface",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_number",
            type: "uint256",
          },
        ],
        name: "returnOutput",
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
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "_data",
            type: "bytes",
          },
        ],
        name: "safeMint",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
        ],
        name: "safeTransferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_operator",
            type: "address",
          },
          {
            internalType: "bool",
            name: "_approved",
            type: "bool",
          },
        ],
        name: "setApprovalForAll",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "bytes4",
            name: "interfaceID",
            type: "bytes4",
          },
        ],
        name: "supportsInterface",
        outputs: [
          {
            internalType: "bool",
            name: "",
            type: "bool",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_token",
            type: "address",
          },
        ],
        name: "takeOutToken",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "tokenByIndex",
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
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
        ],
        name: "tokenOfOwnerByIndex",
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
        name: "totalSupply",
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
            name: "_from",
            type: "address",
          },
          {
            internalType: "address",
            name: "_to",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "transferFrom",
        outputs: [],
        stateMutability: "payable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "uint256",
            name: "_tokenId",
            type: "uint256",
          },
        ],
        name: "withdrawRewards",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    devdoc: {
      methods: {
        "totalSupply()": {
          details: "获得令牌总数",
          returns: {
            _0: "uint256 representing the total amount of tokens",
          },
        },
      },
    },
    userdoc: {
      methods: {
        "approve(address,uint256)": {
          notice: "授权token",
        },
        "balanceOf(address)": {
          notice: "获取所有者拥有多少个Token",
        },
        "getApproved(uint256)": {
          notice: "获取tokenId的被授权者",
        },
        "isApprovedForAll(address,address)": {
          notice:
            "是否全部授权，即_owner将自己所有的tokenId全部授权给_operator",
        },
        "ownerOf(uint256)": {
          notice: "获取tokenId的所有者",
        },
        "safeTransferFrom(address,address,uint256)": {
          notice: "安装转移token",
        },
        "safeTransferFrom(address,address,uint256,bytes)": {
          notice: "安装转移token，包含data",
        },
        "setApprovalForAll(address,bool)": {
          notice: "全部授权",
        },
        "tokenByIndex(uint256)": {
          notice: "功能：根据索引获得具体令牌ID",
        },
        "transferFrom(address,address,uint256)": {
          notice: "转移token",
        },
      },
    },
  },
  settings: {
    compilationTarget: {
      "contracts/ERC721/DK_Token721.sol": "DK",
    },
    evmVersion: "istanbul",
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
    "contracts/ERC721/DK721.sol": {
      keccak256:
        "0xe2a15ecda7a64c57723d1a4544906599cee452f33cdbcab17f11367e598ad48d",
      urls: [
        "bzz-raw://19bd5857d953d5cdf9854e9d9e0eb0df75953138fc8100ae5e506d92ba3f7c78",
        "dweb:/ipfs/QmbTcGE73ymSBEVA9bJBUFCK6wUgz7GemR8PbR9eToqpHz",
      ],
    },
    "contracts/ERC721/DK_Token721.sol": {
      keccak256:
        "0x1739c662fb94e9073eb3e478c563fa220eac4deacea6deb880ebe7be4eeb15e5",
      urls: [
        "bzz-raw://c37f17fe2f06cf7bdb699bee737f4e5388c3290a10641d173c5f4f751a979c6a",
        "dweb:/ipfs/QmXRzthhjPUKVtupaW9CUkNHKPtzKvpZdDk9gNE82wcFpL",
      ],
    },
    "contracts/ERC721/GetQuantity.sol": {
      keccak256:
        "0x1e3f4e94d33c967c2958b6301fecc284431935fb65a72f6778f10cec2546caef",
      urls: [
        "bzz-raw://41f65847c70fc693f4fa67a36f71f42929b7901a94caf165790966dc1f3025ff",
        "dweb:/ipfs/QmShwpEXwcstMib6km54TwBmukwPS2BsCZU21x3LDDEgxs",
      ],
    },
    "contracts/ERC721/Library/SafeMath.sol": {
      keccak256:
        "0x7f17fb6492bc44aa1716ca34e85966cff135a480e1b43a496e04643d22b46cda",
      urls: [
        "bzz-raw://d44fd993b1b23f7920059237cb5a5e7894a2536f40ceb4589d05edbaaf8614f9",
        "dweb:/ipfs/QmZTZp3rUJAo1GYbAad1iKt3qfDSi1YLzyY5PNSKV5FzJh",
      ],
    },
    "contracts/ERC721/Lnterfaces/IERC721.sol": {
      keccak256:
        "0x1067ed0ed31c35a1ae2dcb80d7bdd31a1221b74f3c7a1c0e4e236c6f4bc252e7",
      urls: [
        "bzz-raw://d5bfb3d7d88bb64bd245579d7dea4590c46bec360765af25092c09b91af576cf",
        "dweb:/ipfs/Qmbd93o8yraUnUuaEb6mcx2E3LKnppRH5HVY8iPnFfJW2U",
      ],
    },
    "contracts/ERC721/MiningPool721.sol": {
      keccak256:
        "0xa207a7fbd4cb8f24017593e887a32d5ab04d7bed7d4afafedd4c40fe16e8a309",
      urls: [
        "bzz-raw://fafcd89a4740dd715c499514e95e0c61bb50a709fbae5d0db7a79562aab092b4",
        "dweb:/ipfs/QmRCRufCajepE3eQ6ZTSHeUpgoBHiW17mxVBEjia2Mvy2u",
      ],
    },
  },
  version: 1,
};
