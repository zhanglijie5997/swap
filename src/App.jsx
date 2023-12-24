import { useState } from "react";
import "./App.scss";
import {
  ConnectButton,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { useMemo } from "react";
import i18n from "./i18n/i18n";
import { publicProvider } from "wagmi/providers/public";
import { configureChains } from "wagmi";
import { I18nextProvider, useTranslation } from "react-i18next";
import { mainnet, bsc } from "wagmi/chains";
import  { routerName } from "./router/router";
import { useNavigate, Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
const { chains } = configureChains([mainnet, bsc], [publicProvider()]);
function App() {
  const navigate = useNavigate();
  const local = useLocation();
  const currentPath = useMemo(() => {
    return local.pathname;
  }, [local.pathname])
 
  const tabs = useMemo(() => [
    {
      name: "首页",
      path: routerName.home,
    },
    {
      name: "swap",
      path: routerName.swap,
    },
  ]);
  const { t } = useTranslation();
  return (
    <RainbowKitProvider
      coolMode
      chains={chains}
      theme={darkTheme()}
      locale={"zh-CN"}
    >
      <I18nextProvider instance={i18n}>
        <div className="app">
          <header>
            <ConnectButton showBalance></ConnectButton>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <ul>
              {tabs.map((e, i) => <li key={i} onClick={() => navigate(`/${e.path}`)} className={`${currentPath == '/' +  e.path ?  'active':''}`}>
                {t(e.name)}
              </li>)}
            </ul>
          </footer>
        </div>
      </I18nextProvider>
    </RainbowKitProvider>
  );
}

export default App;
