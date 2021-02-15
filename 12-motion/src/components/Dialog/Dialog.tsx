import { css } from "@emotion/react";
import React, { MouseEventHandler, useCallback } from "react";
import DialogBody from "./components/DialogBody";
import DialogFooter from "./components/DialogFooter";
import DialogHeader from "./components/DialogHeader";

type DialogProps = {
  children?: React.ReactNode;
  onToggle?: () => void;
};

const Dialog = ({ onToggle, children }: DialogProps) => {
  const handleClick: MouseEventHandler<HTMLDivElement> = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  return (
    <div css={dialogStyle} onClick={handleClick}>
      <DialogHeader onToggle={onToggle} />
      <DialogBody>{children}</DialogBody>
      <DialogFooter />
    </div>
  );
};

const dialogStyle = css`
  display: flex;
  flex-direction: column;
`;

export default Dialog;
