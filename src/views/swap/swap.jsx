import React from "react";
import "./swap.scss";
import { useState , useRef, useMemo} from "react";
import Dialog from "../../components/diglog";
import useAbi from "../../hook/connect.hook";
import useTranslateAbi from "../../hook/translate.hook";
import { useEffect } from "react";
import { msToDay, parse18, sToDay, slepp, unParse18 } from "../../utils/utils";
import { message } from "antd";
import { useBlockNumber, useToken } from "wagmi";
import { erc20ABI, useErc20Allowance, useErc20ApprovalEvent, useErc20Approve, useErc20Read, usePrepareErc20Approve } from "../../generated";
import { useAccount } from "wagmi";
import { useChainId } from "wagmi";
import { maxUint256, parseUnits } from "viem";
import { useContractWrite } from "wagmi";
import { dkAddress, usdtAddress } from "../../config/config";
import { translateAbiToken } from "../../config/translate";
import Anthorization from "../../components/anthorization";
import { getCoin } from "../../service/service";
function Swap() {
  const [active, setActive] = useState(0);
  const [block, setBlock] = useState(0)
  const blockNumber = useBlockNumber({
    staleTime: 2_000,
    onBlock(blockNumber) {
      setBlock(Number(blockNumber))
    },}
  );
  const [tabList] = useState([{ name: "存款" }, { name: "借款" }]);
  const [saveValue, setSaveValue] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);
  const [redeem, setRedeem] = useState(false);
  const [giveValue, setGiveValue] = useState("");
  const [giveLoading, setGiveLoading] = useState(false);
  // 0.返回借usdt数量,1,质押DK数量,2.质押的DK区块高度数量,3.产生的利息
  const [interest, setInterest] = useState([0,0,0,0]);
  /** @type {import('react').RefObject<HTMLDivElement>} */
  const dialog = useRef(null)
  const abi = useAbi();
  const chainId = useChainId();
  const { address } = useAccount();
  const translateAbi = useTranslateAbi();
  const [authorizationed, setAuthorizationed] = useState(true);
    // 借钱输入框
  const [lendoutData, setLendoutData] = useState('');
  const timer = useRef();
  

  useEffect(() => {
    // createTimer();
    return () => {
      // clearInterval(timer.current);
    }
  }, [])

  const handleSubmit = () => {
    dialog.current.showModal();
  }

  

  const handleSaveInput = (value) => {
    const _current = value;
    setSaveValue(_current);
  }

  const allowance = useErc20Allowance({
    address: usdtAddress,
    args: [address, translateAbiToken],
    chainId,
    watch: true,
    onSuccess(v) {
      console.log(v, "授权状态");
    },
    onError(e) {
      console.log(e, "eee");
    }
  })

  const approve = useContractWrite({
    address: usdtAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [translateAbiToken, maxUint256],
  })

  const authorizationStatus = useMemo(() => {
    return Number(allowance.data) == 0 || !authorizationed;
  }, [allowance.data, authorizationed])


  const dkAllowance = useErc20Allowance({
    address: dkAddress,
    args: [address,translateAbiToken],
    chainId,
    onSuccess(v) {
      console.log(v);
    },
    onError(e) {
      console.log(e, "eee");
    }
  })

  const approveDK = useContractWrite({
    address: dkAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [translateAbiToken, maxUint256],
  })

  const authorizationDK = async() => {
    try {
      await approveDK.writeAsync({
      })
    } catch (error) {
      
    }finally {
      dkAllowance.refetch();
    }
  }

  const saveDisabled = useMemo(() => {
    return +saveValue < 100 || +saveValue > 5000;
  }, [saveValue])


  // 存入 
  const handelSave =async () => {
    // if (saveValue == "") {
    //   return;
    // }
    // const _value = Number(saveValue);
    // if ((+saveValue < -1 || isNaN(Number(saveValue))) && saveDisabled) {
    //   return;
    // }
    try {
      setSaveLoading(true);
      console.log(BigInt(+saveValue) , "BigInt(+saveValue) ");
      const res = await translateAbi.depositMoney.writeAsync({
        // args: [+saveValue]
        args: [parseUnits(saveValue, 18)]
      })
      
    } catch (error) {
      message.error({
        duration: 3,
        content: error.message
      })
    } finally {
      setSaveLoading(false);
    }
  }

  // 取出
  const handleGive = async() => {
    try {
      setGiveLoading(true);
      await translateAbi.withdrawMoney.writeAsync();
    } catch (error) {
      
    } finally {
      setGiveLoading(false)
    }
  }

  const handleConfirm = async() => {
    try {
      setRedeem(true)
      translateAbi.redeem_DK.writeAsync();
    } catch (error) {
      
    }finally {
      setRedeem(false)

    }
  }

  const handleSetActive = async(i) => {
    setActive(i)
    console.log(i, "iii");
    try {
      await translateAbi.getLoanUserInformation.refetch();
      setInterest(translateAbi.getLoanUserInformation.data.map(e => e.toString()))
      console.log(translateAbi.getLoanUserInformation.data, "res");
    } catch (error) {
      console.log(error);
    }
  }
  // 0.返回存款月化收益，1.邀请人的月化收益 2.以及贷款月化
  const getDepositIncomeData = useMemo(() => {
    if (!translateAbi.getInterestRate.data || !translateAbi.calculate.data) {
      return [0,0,0];
    }
    // 收益率
    const _ = Number(translateAbi.getInterestRate.data) / 10000 * Number(translateAbi.calculate.data[0])  / 10 ** 18; 
    return [_, 0,0]
  }, [translateAbi.getInterestRate.data, translateAbi.calculate.data])
  // [已存, 可提取]
  const drawConfig = useMemo(() => {
    if (!translateAbi.calculate.data) {
      return [0,0]
    }
    return translateAbi.calculate.data.map((e, i) => {
      if (i != 0) {
        return Number(e)
      }
      return unParse18(Number(e)) ;
    })
  }, [translateAbi.calculate.data])

  const authorization = async() => {
    try {
      await approve.writeAsync({
        
      });
      // await approveDK.writeAsync();
    } catch (error) {
      
    } finally {
      allowance.refetch();
      setAuthorizationed(Number(allowance.data) > 0)
    }
  }

  const lendout = async() => {
    await translateAbi.mortgage_DK.writeAsync({
      args: [parse18(lendoutData)]
    })
  }

  

  useEffect(() => {
    // init();
  }, [])

  return (
    <div className="swap flex flex-col mt-10">
      <div role="tablist" className=" tabs tabs-boxed  mt-2">
        {tabList.map((e, i) => (
          <a
            role="tab"
            onClick={() => handleSetActive(i)}
            className={`tab tabs-md text-white ${active == i ? "tab-active" : ""}`}
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
              <p className="px-2 pt-2 text-gray-50 subtitle mb-2 ">
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
                <span>{getDepositIncomeData[0]}(USDT)</span>
              </p>
            </div>
            {/* 存入按钮 */}
            <Anthorization>
              <button 
              //  saveDisabled || saveLoading
              className={`btn btn-primary  flex items-center w-full mt-2 ${ false? 'btn-disabled': ''}`} 
                onClick={handelSave}>
                {saveLoading && <span className="loading loading-dots loading-xs"></span>  }
                <span>存入</span>
              </button>
            </Anthorization>
            {/* { authorizationStatus ?  <button className="btn btn-primary flex items-center w-full mt-2" onClick={authorization}>授权</button> :  <button 
             className={`btn btn-primary  flex items-center w-full mt-2 ${ false? 'btn-disabled': ''}`} 
              onClick={handelSave}>
              {saveLoading && <span className="loading loading-dots loading-xs"></span>  }
               <span>存入</span>
            </button>} */}

            <div className="border-b my-2"></div>
            {/* 已存入的USDT */}
            <div className="px-1">
              <p className=" pt-2 text-gray-50 subtitle mb-2">
                已存(USDT):
              </p>
              <p className="font-bold text-xl">
                <span>{drawConfig[0]}</span>
              </p>
            </div>
            {/* 可提取的USDT */}
            <div className="px-1">
              <p className=" pt-2 text-gray-50 subtitle mb-2">
              可提取(USDT):
              </p>
              <p className="font-bold text-xl">
                <span>{drawConfig[1] + drawConfig[0]}</span>
              </p>
            </div>
            {/* 提取按钮 */}
            { drawConfig[1] + drawConfig[0] > 0 && <button className="btn btn-primary w-full mt-2" onClick={handleGive}>
              {giveLoading && <span className="loading loading-dots loading-xs"></span>  }
              <span>提取</span>
            </button>}
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
                value={lendoutData}
                onInput={(v) => setLendoutData(v.currentTarget.value)}
                className="input w-full input-bordered w-full "
              />
            </div>
            {/* 月化利息率 */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle ">
                月化利息(%):
              </p>
              <p className="font-bold text-xl pl-2">
                <span>5.5%</span>
              </p>
            </div>

            {/* 所需质押物( 动态计算所需质押多少本币） */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle ">
                质押物(DK):
              </p>
              <p className="font-bold text-xl pl-2">
                <span>{interest[1]}</span>
              </p>
            </div>

            {/* 借出按钮 先授权*/}
            {
              dkAllowance.data == 0 ? <button className="btn btn-primary flex items-center w-full mt-2" onClick={authorizationDK}>授权</button> : <button className="btn btn-primary w-full mt-2" onClick={lendout}>借出</button>
            } 
            <div className="border-b my-2"></div>

            {/* 赎回质押物 */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle ">
                赎回质押物(DK):
              </p>
              <p className="font-bold text-xl pl-2">
                <span>{+interest[1] + +interest[3]}</span>
              </p>
            </div>
            {/* 展示赎回剩余期限(自借出计起 30天未赎回 质押物自动卖放池子里) */}
            <div className="px-1 px-2 ">
              <p className="pt-2 text-gray-50 subtitle flex justify-between">
                <span>剩余期限(天):</span> 
                {/* <span className="number">赎回所需金额: 200USDT</span> */}
              </p>
              <p className="font-bold text-xl pl-2 mt-1">
                <span>{ interest[2] == 0 ?  0: 30 - Number(sToDay((block - interest[2]) * 3))  } 天</span>
              </p>
            </div>
            {
              +interest[1] + +interest[3] > 0 && <button className="btn btn-primary w-full mt-2" onClick={handleSubmit}>
                { redeem && <span className="loading loading-dots loading-xs"></span>}
                <span>赎回({interest[1] + interest[3]}DK)</span>
              </button>
            }
            
            
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
