import { css } from "@emotion/react";
import React from "react";
import { ModalType } from "../../@types/types";
import DialogBody from "./components/DialogBody";
import DialogFooter from "./components/DialogFooter";
import DialogHeader from "./components/DialogHeader";

type DialogProps = {
  modalType: ModalType;
  onToggle?: () => void;
};

const Dialog = ({ onToggle, modalType }: DialogProps) => {
  return (
    <div css={dialogStyle}>
      <DialogHeader onToggle={onToggle} />
      <DialogBody />
      <DialogFooter />
    </div>
  );
};

const dialogStyle = css`
  display: flex;
  flex-direction: column;
`;

export default Dialog;
