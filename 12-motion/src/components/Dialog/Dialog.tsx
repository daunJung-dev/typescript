import { css } from "@emotion/react";
import { DialogHTMLAttributes, FC, useCallback, useState } from "react";

export type DialogType = FC<DialogHTMLAttributes<HTMLDialogElement>> & {};

const Dialog: DialogType = (props) => {
  const [isOpen, setOpen] = useState<boolean>(true);
  const handleClose = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);
  return (
    <dialog
      css={dialogStyle}
      open={isOpen}
      onKeyPress={(e) => e.key === "esc" && handleClose()}
    >
      {props.children}
    </dialog>
  );
};

const dialogStyle = css`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: rgba(0, 0, 0, 30%);
  &:not([open]) {
    display: none;
  }
`;

export default Dialog;
