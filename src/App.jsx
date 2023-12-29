import { useState } from "react";
import "./App.scss";
import {
  ConnectButton,
  RainbowKitProvider,
  darkTheme,
  lightTheme,
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
import Language from "./components/language";
const { chains } = configureChains([ bsc], [publicProvider()]);
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
          <header className="flex glass w-full h-[90px] sm:h-[60px] justify-between items-center border-y bg-[url('/WaveBG3.png')]">
            <img src="/WechatIMG1422.jpg" alt="" className="icon h-12 ml-2" />
            <div className="mr-2 flex items-center">
              <Language />
              <ConnectButton ></ConnectButton>
            </div>
          </header>
          <main>
            <Outlet />
          </main>
          <footer>
            <div className="btm-nav">
              {
                tabs.map((e, i) =>
                  <button className={`${currentPath == '/' + e.path ? 'active':''}`} key={i} onClick={() => navigate(`/${e.path}`)} >
                    <span className="btm-nav-label">{t(e.name)}</span>
                  </button>
                )
              }
            </div>
          </footer>
        </div>
      </I18nextProvider>
    </RainbowKitProvider>
  );
}

export default App;
