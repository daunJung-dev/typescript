import { css } from "@emotion/react";
import React, { useCallback, useState } from "react";
import { ModalType } from "../../@types/types";
import ModalImpl from "../Modal";

interface Props {}

const MainContent = (props: Props) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(true);
  const [modalType] = useState<ModalType>("url");
  const handleToggleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);
  return (
    <div css={mainContentStyle}>
      <ModalImpl
        isOpen={isOpenModal}
        onToggle={handleToggleModal}
        modalType={modalType}
      >
        {"test"}
      </ModalImpl>
    </div>
  );
};

const mainContentStyle = css`
  height: 100%;
  width: 100%;
`;

export default MainContent;
