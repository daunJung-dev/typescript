import { css, Theme } from "@emotion/react";
import { ItemType } from "../../@types/types";
import Button from "../Button";

const menuList: ItemType[] = ["image", "video", "note", "task"];

const ButtonList = () => {
  return (
    <div css={buttonListStyle}>
      {menuList.map((item) => {
        return <Button.Menu key={item} title={item} />;
      })}
    </div>
  );
};

const buttonListStyle = (them: Theme) => css`
  border: ;
`;

export default ButtonList;
