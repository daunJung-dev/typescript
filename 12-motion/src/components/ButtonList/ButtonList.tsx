import { css, Theme } from "@emotion/react";
import { useCallback } from "react";
import { ItemType, ModalType } from "../../@types/types";
import useModal from "../../hooks/useModal";
import Button from "../Button";

const menuToModal: Record<ItemType, ModalType> = {
  image: "url",
  video: "url",
  note: "text",
  task: "text",
};

const menuList: ItemType[] = ["image", "video", "note", "task"];

const ButtonList = () => {
  const [, , onToggle, setModalType] = useModal();
  const handleButton = useCallback(
    (itemType: ItemType) => {
      setModalType(menuToModal[itemType]);
      onToggle();
    },
    [onToggle, setModalType]
  );
  return (
    <div css={buttonListStyle}>
      {menuList.map((item) => {
        return (
          <Button.Menu
            key={item}
            title={item}
            onClick={() => handleButton(item)}
          />
        );
      })}
    </div>
  );
};

const buttonListStyle = (them: Theme) => css`
  border: ;
`;

export default ButtonList;
