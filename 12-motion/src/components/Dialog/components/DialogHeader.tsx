import { css } from "@emotion/react";
import React from "react";
import TimIcon from "../../TimIcon";
type DialogHeaderProps = {
  onToggle?: () => void;
};
const DialogHeader = ({ onToggle }: DialogHeaderProps) => {
  return (
    <div css={dialogHeaderStyle}>
      <div onClick={onToggle}>
        <TimIcon name="close" css={closeStyle} />
      </div>
    </div>
  );
};

const closeStyle = css`
  cursor: pointer;
  & > path:first-child {
    fill: none;
  }
  & > path:last-child {
    fill: white;
  }
`;

const dialogHeaderStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default DialogHeader;
