import { css, Theme } from "@emotion/react";
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

const closeStyle = (theme: Theme) => css`
  cursor: pointer;
  & > path:first-of-type {
    fill: none;
  }
  & > path:last-of-type {
    fill: ${theme.color.secondary};
  }
`;

const dialogHeaderStyle = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export default DialogHeader;
