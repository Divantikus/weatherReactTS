import { createPortal } from "react-dom";
import { ReactNode } from "react";
import style from "./modal.module.scss";
export const Modal = ({ children }: { children: ReactNode }) => {
  return createPortal(
    <dialog open className={style.dialogContainer}>
      {children}
    </dialog>,
    document.body
  );
};
