import React from "react";
import ModalInner from "./components/ModalInner";
import ModalOverlay from "./components/ModalOverlay";
import ModalWrapper from "./components/ModalWrapper";

export interface Modal {
  isOpen: boolean;
  onToggle: () => void;
}

class ModalImpl extends React.Component<Modal> {
  constructor(props: Modal) {
    super(props);

    this.state = {};
  }

  render() {
    const { children, isOpen, onToggle } = this.props;
    return (
      <>
        <ModalOverlay isOpen={isOpen} />
        <ModalWrapper isOpen={isOpen} onToggle={onToggle}>
          <ModalInner>{children}</ModalInner>
        </ModalWrapper>
      </>
    );
  }
}
export default ModalImpl;
