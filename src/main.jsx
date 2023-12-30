import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, zora, bsc } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import { ConfigProvider, theme } from "antd";
import Router from "./router/router.jsx";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [bsc, mainnet],
  [
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit demo',
  projectId: 'YOUR_PROJECT_ID',
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
    <WagmiConfig config={wagmiConfig}>
      <ConfigProvider
       theme={{
        algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
       }}
      >
        <Router />
      </ConfigProvider>
    </WagmiConfig>
);
