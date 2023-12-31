import React from "react";
import { erc20ABI, useErc20Allowance } from "../generated";
import { usdtAddress } from "../config/config";
import { useAccount, useChainId, useContractWrite } from "wagmi";
import { translateAbiToken } from "../config/translate";
import { message } from "antd";
import { useState } from "react";
import { maxUint256 } from "viem";
import { useMemo } from "react";

function Anthorization(props) {
  const { address } = useAccount();
  const chainId = useChainId();
  const [authorizationed, setAuthorizationed] = useState(true);

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
      setAuthorizationed(false);
    },
  });

  const approve = useContractWrite({
    address: usdtAddress,
    abi: erc20ABI,
    functionName: "approve",
    args: [translateAbiToken, maxUint256],
  })

  const authorizationStatus = useMemo(() => {
    return Number(allowance.data) == 0 || !authorizationed;
  }, [allowance, authorizationed])

  const authorization = async() => {
    try {
        const res = await approve.writeAsync();
        allowance.refetch();
    } catch (error) {
        message.error(error.message);
    }
  }
  return <div>
    {
        authorizationStatus ? <button className="btn btn-primary flex items-center w-full mt-2" onClick={authorization}>授权</button> :props.children
    }
  </div>;
}

export default Anthorization;
