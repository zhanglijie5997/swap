import React, {useCallback, useState, useEffect} from "react";
import { Radio } from "antd";
import "./home.scss";
import { useStore } from "../../store/store";
import useAbi from "../../hook/connect.hook";
import { debounce, slepp, unParse18 } from "../../utils/utils";
import { useAccount } from "wagmi";
import { dkAddress, usdtAddress, wagmiContractToken } from "../../config/config";
import { erc20ABI, useErc20Allowance } from "../../generated";
import { useChainId } from "wagmi";
import { useContractWrite } from "wagmi";
import { maxUint256 } from "viem";
import { useMemo } from "react";
import useTranslateAbi from "../../hook/translate.hook";
const plainOptions = ["500USDT", "1000USDT"];
const giveBalance = {
  "[0,0]": 552,
  "[0,1]": 1104,
  "[1,0]": 552,
  "[1,1]": 1104,
}
function Home() {
  const [checked, setChecked] = useState(0);
  const [dayChecked, setDayChecked] = useState(0);
  // const [mintStatus, setMintStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const {address} = useAccount()
  const connect = useAbi();
  const store = useStore();
  const [isBusy, setIsBusy] = useState(false);
  const chainId = useChainId();
  const getAward = useMemo(() => {
    return connect.getAward.data ? connect.getAward.data.map(e => e.toString()): [0,0,0];
  }, [connect.getAward.data])

  const mintStatus = useMemo(() => {
    return connect.getAwardQuantity.data ? unParse18(Number(connect.getAwardQuantity.data[0]) * Number(connect.getAwardQuantity.data[1]))  : 0;
  }, [connect.getAward.data])

  const canMint = useMemo(() => {
    console.log(connect.getAward.data, "connect.getAward.data;");
    return connect.getAward.data && unParse18(Number(connect.getAward.data[2]))   >= 5.52
  }, [connect.getAward.data])

  const onchange = (value) => {
    console.log(1);
    setChecked(value);
  };

  const handleDay = (value) => {
    setDayChecked(value);
  };

  const init  = async() => {
    await slepp(400)
    // const res = await connect.getUserTokenNumber();
    // console.log(res, "resss");
  }

  useEffect(() => {
    console.log(address);
    if (address) {
      // init();
      console.log(connect.tokenOfOwnerByIndex.data, "connect.tokenOfOwnerByIndex.data");
    }
  }, [address])

  const usdtAllowance = useErc20Allowance({
    address: dkAddress,
    args: [address,wagmiContractToken],
    chainId,
    onSuccess(v) {
      console.log(v);
    },
    onError(e) {
      console.log(e, "eee");
    }
  })

  const approve = useContractWrite({
    address: dkAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [wagmiContractToken, maxUint256],
  })

  const handleAuthorization = async() => {
    try {
      await approve.writeAsync();
      usdtAllowance.refetch();
    } catch (error) {
      
    }
  }

  const handleMint = useCallback(debounce(async() => {
    if (loading) return;
    setLoading(true);
    console.log(store.baseData.state.data.account);
    
    try {
      if(mintStatus != 0) {
        console.log(connect.balanceOf.data, "取出");
        await connect.withdrawRewards.writeAsync({
          args: [connect.tokenOfOwnerByIndex.data]
        })
        return;
      }
      if (!canMint) {
        return;
      }
      if (dayChecked == 0) {
        await connect.OneMint.writeAsync()
      }else {
        await connect.TwoMint.writeAsync()
      }
      await connect.getUserTokenNumber();

    } catch (error) {
      
    } finally {
      setLoading(false);
    }
  }, 300), [store.baseData, dayChecked, checked, loading])

  return (
    <div className="home  mt-4">
      <div className="card">
        <div className="z-10 relative">
          <p className="border-b title flex justify-between items-end">
            <span>全网质押</span>
            <span className="text-gray-50 subtitle number">剩余数量：{getAward[2]}</span>
          </p>
          {/* 选择mint 价值500U的/1000U的 */}
          <div className="tabs border-b">
            <p className="px-2 pt-2 text-gray-50 subtitle">Mint数量:</p>
            <ul className="flex items-center w-full">
              <li className="item flex items-center justify-center" onClick={() => onchange(0)}>
                <input
                  type="radio"
                  disabled={mintStatus != 0}
                  name="radio-2"
                  className="radio radio-primary"
                  checked={checked == 0}
                  value={0}
                  onChange={() => onchange(0)}
                />
                <span className="value">500USDT</span>
              </li>
              <li className="item flex items-center justify-center" onClick={() => onchange(1)}>
                <input
                  type="radio"
                  disabled={mintStatus != 0}
                  value={1}
                  name="radio-2"
                  className="radio radio-primary"
                  onChange={() => onchange(1)}
                  checked={checked == 1}
                />
                <span className="value">1000USDT</span>
              </li>
            </ul>
          </div>
          {/* 选择mint30天的池子/mint60天的池子 */}
          <div className="tabs border-b">
            <p className="px-2 pt-2 text-gray-50 subtitle">Mint天数:</p>

            <ul className="flex items-center w-full">
              <li className="item flex items-center justify-center" onClick={() => handleDay(0)}>
                <input
                  type="radio"
                  name="radio-3"
                  disabled={mintStatus != 0}
                  className="radio radio-primary"
                  checked={dayChecked == 0}
                  value={0}
                  onChange={() => handleDay(0)}
                />
                <span className="value">30Day</span>
              </li>
              <li className="item flex items-center justify-center"  onClick={() => handleDay(1)}>
                <input
                  type="radio"
                  value={1}
                  disabled={mintStatus != 0}
                  name="radio-3"
                  className="radio radio-primary"
                  checked={dayChecked == 1}
                  onChange={() => handleDay(1)}
                />
                <span className="value">60Day</span>
              </li>
            </ul>
          </div>
          {/* 动态展示mint后的每日收益和总收益 */}
          <div>
            <p className="px-2 pt-2 text-gray-50 subtitle">收益额（USDT）:</p>
            <p className="px-2 pt-2 text-lg font-bold">{giveBalance[`[${checked},${dayChecked}]`]}USDT</p>
          </div>
          {/* 当前钱包还未mint：mint按钮  当前钱包已经mint：领取收益按钮*/}
          {
            usdtAllowance.data == 0 ? <button className="btn btn-primary w-full mx-auto mt-2" onClick={handleAuthorization}>授权</button> :<button
            onClick={handleMint}
            className={`btn btn-primary w-full mx-auto mt-2  flex justify-center items-center ${
              mintStatus ? "" : "radio-primary  "
            }`}
          >
            { loading ? <span className="loading loading-dots loading-xs"></span> : null}
            {mintStatus  != 0 ? `领取收益${mintStatus}USDT` : `${canMint ? 'Mint': 'Mint条件不足'}`}
          </button>
          }
          
        </div>
      </div>
    </div>
  );
}

export default Home;
