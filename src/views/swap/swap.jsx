import React from "react";
import "./swap.scss";
import { useState } from "react";
import { useRef } from "react";
import Dialog from "../../components/diglog";
import useAbi from "../../hook/connect.hook";
import { useMemo } from "react";
import useTranslateAbi from "../../hook/translate.hook";
import { useEffect } from "react";
import { slepp } from "../../utils/utils";
function Swap() {
  const [active, setActive] = useState(0);

  const [tabList] = useState([{ name: "存款" }, { name: "借款" }]);
  const [saveValue, setSaveValue] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);

  const [giveValue, setGiveValue] = useState("");
  const [giveLoading, setGiveLoading] = useState(false);
  /** @type {import('react').RefObject<HTMLDivElement>} */
  const dialog = useRef(null)
  const abi = useAbi();
  const translateAbi = useTranslateAbi();
  const handleSubmit = () => {
    dialog.current.showModal();
  }

  const handleSaveInput = (value) => {
    const _current = value;
    setSaveValue(_current);
  }

  const saveDisabled = useMemo(() => {
    return +saveValue < 100 || +saveValue > 5000;
  }, [saveValue])

  // 存入 
  const handelSave =async () => {
    if (saveValue == "") {
      return;
    }
    if (+saveValue < -1 || +saveValue == NaN) {
      return;
    }
    try {
      setSaveLoading(true);
      await translateAbi.depositMoney.writeAsync({
        args: [+saveValue]
      })
    } catch (error) {
      
    } finally {
      setSaveLoading(false);
    }
  }

  // 取出
  const handleGive = async() => {
    try {
      setGiveLoading(true);
      await abi.withdraw.writeAsync({});
    } catch (error) {
      
    } finally {
      setGiveLoading(false)
    }
  }

  const handleConfirm = () => {
    console.log(11);
  }

  const init = async() => {
    try {
      await slepp(500)
      const res = await translateAbi.getLoanUserInformation.writeAsync();
      // console.log(res);
    } catch (error) {
      
    }
  }

  useEffect(() => {
    init();
  },[])
  return (
    <div className="swap flex flex-col">
      <div role="tablist" className=" tabs tabs-boxed  ">
        {tabList.map((e, i) => (
          <a
            role="tab"
            onClick={() => setActive(i)}
            className={`tab tabs-md ${active == i ? "tab-active" : ""}`}
            key={i}
          >
            {e.name}
          </a>
        ))}
      </div>

      <div className="card mt-2 ">
        {active == 0 && (
          <div className="z-50 pb-4">
            {/* 存入USDT （100-5000U） */}
            <div className="px-1">
              <p className="px-2 pt-2 text-gray-50 subtitle mb-2">
                存入(USDT):
              </p>
              <input
                type="number"
                placeholder="存入100U-5000U"
                min={100}
                max={5000}
                value={saveValue}
                onInput={(e) => handleSaveInput(e.currentTarget.value)}
                className="input w-full input-bordered w-full "
              />
            </div>
            {/* 月化收益率(调用第三方合约 计算是否有推广收益 如果有 再加1.5%) */}
            <div className="pt-2 px-2 ">
              <p className="pt-2 text-gray-50 subtitle mb-2">
                <span>月收益率(USDT):</span>
              </p>
              <p className="font-bold text-xl">
                <span>100(USDT)</span>
              </p>
            </div>
            {/* 存入按钮 */}
            <button 
              className={`btn btn-primary flex items-center w-full mt-2 ${saveDisabled || saveLoading ? 'btn-disabled': ''}`} 
              onClick={handelSave}>
              {saveLoading && <span className="loading loading-dots loading-xs"></span>  }
               <span>存入</span>
            </button>

            <div className="border-b my-2"></div>
            {/* 已存入的USDT */}
            <div className="px-1">
              <p className=" pt-2 text-gray-50 subtitle mb-2">
                已存(USDT):
              </p>
              <p className="font-bold text-xl">
                <span>100</span>
              </p>
            </div>
            {/* 可提取的USDT */}
            <div className="px-1">
              <p className=" pt-2 text-gray-50 subtitle mb-2">
              可提取(USDT):
              </p>
              <p className="font-bold text-xl">
                <span>100</span>
              </p>
            </div>
            {/* 提取按钮 */}
            <button className="btn btn-primary w-full mt-2" onClick={handleGive}>
              {giveLoading && <span className="loading loading-dots loading-xs"></span>  }
              <span>提取</span>
            </button>

            <div className="border-b my-2"></div>
            {/* 存入规则说明 */}
            <div className="px-1">
              <p className=" pt-2 text-gray-50 subtitle mb-2">
              存入规则:
              </p>
              <p className="text-md subtitle">
                <span>1.存入生息</span>
              </p>
            </div>
          </div>
        )}

        {
          active == 1 && <div className="z-50 pb-4">
            {/* 借出USDT(100-1000U) */}
            <div className="px-2">
              <p className=" pt-2 text-gray-50 subtitle mb-2">
                借出(USDT):
              </p>
              <input
                type="number"
                placeholder="借出100U-5000U"
                min={100}
                max={1000}
                className="input w-full input-bordered w-full "
              />
            </div>
            {/* 月化利息率 */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle ">
                月化利息(USDT):
              </p>
              <p className="font-bold text-xl pl-2">
                <span>100</span>
              </p>
            </div>

            {/* 所需质押物( 动态计算所需质押多少本币） */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle ">
                质押物(DOGE):
              </p>
              <p className="font-bold text-xl pl-2">
                <span>100</span>
              </p>
            </div>

            {/* 借出按钮 */}
            <button className="btn btn-primary w-full mt-2">借出</button>
            <div className="border-b my-2"></div>

            {/* 赎回质押物 */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle ">
                赎回质押物(DOGE):
              </p>
              <p className="font-bold text-xl pl-2">
                <span>100</span>
              </p>
            </div>
            {/* 展示赎回剩余期限(自借出计起 30天未赎回 质押物自动卖放池子里) */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle flex justify-between">
                <span>剩余期限(天):</span> 
                <span className="number">赎回所需金额: 200USDT</span>
              </p>
              <p className="font-bold text-xl pl-2 mt-1">
                <span>100 天</span>
              </p>
            </div>
            <button className="btn btn-primary w-full mt-2" onClick={handleSubmit}>赎回(200USDT)</button>
            
          </div>
        }
      </div>
      
      <Dialog ref={dialog} tip="提示:" content="确定赎回200USDT?确认后不可取消" submit={handleConfirm}/>
      {/* 二次确认弹窗 */}
      {/* <dialog id="my_modal_1" className="modal" ref={dialog}>
        <div className="modal-box">
          <h3 className="font-bold text-lg">提示:</h3>
          <p className="py-4">确定赎回200USDT?确认后不可取消</p>
          <div className="modal-action">
            <form method="dialog">
             
              <button className="btn btn-outline mr-2">取消</button>
              <button className="btn btn-primary">确认</button>
            </form>
          </div>
        </div>
      </dialog> */}
    </div>
  );
}

export default Swap;
