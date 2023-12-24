import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { WagmiConfig, configureChains } from "wagmi";
import { mainnet, bsc } from "wagmi/chains";
import {
  RainbowKitProvider,
  darkTheme,
  getDefaultWallets,
} from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import "@rainbow-me/rainbowkit/styles.css";
import { ConfigProvider, theme } from "antd";
import Router from "./router/router.jsx";
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, bsc],
  [publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig config={wagmiConfig}>
      <ConfigProvider
        theme={{
          // 1. 单独使用暗色算法
          algorithm: theme.darkAlgorithm,
          // 2. 组合使用暗色算法与紧凑算法
          algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
        }}
      >
        <Router />
      </ConfigProvider>
    </WagmiConfig>
  </React.StrictMode>
);
