// @ts-check

import { erc20ABI } from 'wagmi';
import { etherscan, react } from '@wagmi/cli/plugins'
/** @type {import('@wagmi/cli').Config} */
export default { out: "src/generated.js", contracts: [
    {
        name: 'erc20',
        abi: erc20ABI,
      },
], plugins: [
    // etherscan({
    //     apiKey: process.env.ETHERSCAN_API_KEY!,
    //     chainId: mainnet.id,
    //     contracts: [
    //       {
    //         name: 'EnsRegistry',
    //         address: {
    //           [mainnet.id]: '0x314159265dd8dbb310642f98f50c066173c1259b',
    //           [sepolia.id]: '0x112234455c3a32fd11230c42e7bccd4a84e02010',
    //         },
    //       },
    //     ],
    //   }),
      react(),
] };
