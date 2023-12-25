import React from "react";
import { Radio } from "antd";
import { useState } from "react";
import "./home.scss";
import { useStore } from "../../store/store";
import { useCallback } from "react";
import useAbi from "../../hook/connect.hook";
import { useEffect } from "react";
import { debounce } from "../../utils/utils";
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
  const [mintStatus, setMintStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const connect = useAbi();
  const store = useStore();
  const onchange = (value) => {
    console.log(1);
    setChecked(value);
  };

  const handleDay = (value) => {
    setDayChecked(value);
  };

  const handleMint = useCallback(debounce(async() => {
    if (loading) return;
    setLoading(true);
    console.log(store.baseData.state.data.account);
    connect.getUserTokenNumber();
    try {
      if (dayChecked == 0) {
        await connect.OneMint.writeAsync()
      }else {
        await connect.TwoMint.writeAsync()
      }
    } catch (error) {
      
    } finally {
      setLoading(false);
    }
    
  }, 300), [store.baseData, dayChecked, checked, loading])

  
  return (
    <div className="home">
      <div className="card">
        <div className="z-10 relative">
          <p className="border-b title flex justify-between items-end">
            <span>全网质押</span>
            <span className="text-gray-50 subtitle number">剩余数量：0</span>
          </p>
          {/* 选择mint 价值500U的/1000U的 */}
          <div className="tabs border-b">
            <p className="px-2 pt-2 text-gray-50 subtitle">Mint数量:</p>
            <ul className="flex items-center w-full">
              <li className="item flex items-center justify-center" onClick={() => onchange(0)}>
                <input
                  type="radio"
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
          <button
            onClick={handleMint}
            className={`btn  w-full mx-auto mt-2 font-bold text-xl flex justify-center items-center ${
              mintStatus ? "btn-success" : "radio-primary btn-outline subtitle "
            }`}
          >
            { loading ? <span className="loading loading-dots loading-xs"></span> : null}
            {mintStatus ? "领取收益" : "Mint"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
