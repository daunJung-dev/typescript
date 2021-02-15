import { css } from "@emotion/react";
import React from "react";

type DialogBodyProps = {
  children?: React.ReactNode;
};

const DialogBody = ({ children }: DialogBodyProps) => {
  return <div css={dialogBodyStyle}>{children}</div>;
};

const dialogBodyStyle = css({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

export default DialogBody;
