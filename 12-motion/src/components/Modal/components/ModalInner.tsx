import { css } from "@emotion/react";
import React from "react";

interface ModalInnerProps {
  children?: React.ReactNode;
}

const ModalInner = ({ children }: ModalInnerProps) => {
  return <div css={modalInnerStyle}>{children}</div>;
};

const modalInnerStyle = css`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  background-color: #fff;
  border-radius: 10px;
  width: 360px;
  max-width: 480px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 40px 20px;
`;

export default ModalInner;
