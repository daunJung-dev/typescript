import { css, Theme } from "@emotion/react";
import { ComponentProps, FC } from "react";
import { ItemType } from "../../@types/types";
import Button from "./Button";

interface MenuButtonProps extends ComponentProps<typeof Button> {
  title: ItemType;
}

const MenuButton: FC<MenuButtonProps> = ({ title, ...props }) => {
  return (
    <button css={menuButtonStyle} {...props}>
      {title.toUpperCase()}
    </button>
  );
};

const menuButtonStyle = (theme: Theme) => css`
  background: ${theme.color.primary};
  width: 6rem;
  color: white;
  height: 2rem;
  outline: none;
  border: 0;
  cursor: pointer;
  &:hover {
    color: ${theme.color.secondary};
    transition: color 0.5s;
  }
`;

export default MenuButton;
