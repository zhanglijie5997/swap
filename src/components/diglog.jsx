import React from "react";
import { useMemo } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useRef } from "react";

/**
 * 
 * @param {import('../../global').DialogProps} props 
 * @param {*} ref 
 * @returns 
 */
function Dialog(props, ref) {
	const dialog = useRef(null);
	const show = () => {
		dialog.current.showModal();
	}
	const random = useMemo(() => Math.floor((Date.now() + Math.random()*100000)/1000) )
	useImperativeHandle(ref, () => ({
		showModal: show
	}), [])
  return (
    <div>
      {/* 二次确认弹窗 */}
      <dialog id={`model_${random}`} className="modal" ref={dialog}>
        <div className="modal-box">
          <h3 className="font-bold text-lg subtitle">{props.tip ?? '提示:'} </h3>
          <p className="py-4 font-bold text-md">{props.content}</p>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-outline mr-2">取消</button>
              <button className="btn btn-primary" onClick={() => props?.submit.call()}>确认</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default forwardRef(Dialog) ;
