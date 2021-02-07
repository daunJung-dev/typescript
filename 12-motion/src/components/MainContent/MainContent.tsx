import { css } from "@emotion/react";
import useModal from "../../hooks/useModal";
import Dialog from "../Dialog";
import ModalImpl from "../Modal";

interface Props {}

const MainContent = (props: Props) => {
  const [isOpenModal, modalType, handleToggleModal] = useModal();
  return (
    <div css={mainContentStyle}>
      <ModalImpl isOpen={isOpenModal} onToggle={handleToggleModal}>
        <Dialog modalType={modalType} onToggle={handleToggleModal} />
      </ModalImpl>
    </div>
  );
};

const mainContentStyle = css`
  height: 100%;
  width: 100%;
`;

export default MainContent;
