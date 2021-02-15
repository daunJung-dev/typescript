import { css } from "@emotion/react";
import useModal from "../../hooks/useModal";
import Dialog from "../Dialog";
import Form from "../Form";
import ModalImpl from "../Modal";

interface Props {}

const MainContent = (props: Props) => {
  const [isOpenModal, handleToggleModal] = useModal();
  return (
    <div css={mainContentStyle}>
      <ModalImpl isOpen={isOpenModal} onToggle={handleToggleModal}>
        <Dialog onToggle={handleToggleModal}>
          <Form />
        </Dialog>
      </ModalImpl>
    </div>
  );
};

const mainContentStyle = css`
  height: 100%;
  width: 100%;
`;

export default MainContent;
