import { css } from "@emotion/react";
import React from "react";

interface ModalOverlayProps {
  isOpen: boolean;
}

const ModalOverlay = ({ isOpen }: ModalOverlayProps) => {
  return <div css={modalOverlayStyle(isOpen)}></div>;
};

const modalOverlayStyle = (isOpen: boolean) => css`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
  display: ${isOpen ? "block" : "none"};
`;

export default ModalOverlay;
