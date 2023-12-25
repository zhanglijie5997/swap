import { ReactNode } from "react";

export {};

export interface DialogProps {
  tip: string | ReactNode;
  content: string | ReactNode;
  submit?: Function;
}

export interface Store {
  state: {
    data: {
      account: string;
    };
  };
}
