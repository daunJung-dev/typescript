import { css } from "@emotion/react";

interface ModalWrapperProps {
  isOpen: boolean;
  onToggle?: () => void;
  children?: React.ReactNode;
}

const ModalWrapper = ({ isOpen, onToggle, children }: ModalWrapperProps) => {
  return isOpen ? (
    <div tabIndex={-1} css={modalWrapperStyle(isOpen)} onClick={onToggle}>
      {children}
    </div>
  ) : null;
};

const modalWrapperStyle = (isOpen: boolean) => css`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1000;
  overflow: auto;
  outline: 0;
  display: ${isOpen ? "block" : "none"};
`;
export default ModalWrapper;
