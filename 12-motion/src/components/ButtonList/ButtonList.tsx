import { css, Theme } from "@emotion/react";
import { useCallback } from "react";
import { ItemType, FormType } from "../../@types/types";
import useModal from "../../hooks/useModal";
import Button from "../Button";

const menuToModal: Record<ItemType, FormType> = {
  image: "url",
  video: "url",
  note: "text",
  task: "text",
};

const menuList: ItemType[] = ["image", "video", "note", "task"];

const ButtonList = () => {
  const [, onToggle, , setFormType] = useModal();
  const handleButton = useCallback(
    (itemType: ItemType) => {
      setFormType(menuToModal[itemType]);
      onToggle();
    },
    [setFormType, onToggle]
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

const buttonListStyle = (them: Theme) => css``;

export default ButtonList;
