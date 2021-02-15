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
  background: radial-gradient(circle, #64646413 0%, #363636e6 100%);
  border-radius: 10px;
  width: 4800px;
  max-width: 540px;
  top: 50%;
  transform: translateY(-50%);
  margin: 0 auto;
  padding: 1rem 1.25rem;
`;

export default ModalInner;
