import { ButtonHTMLAttributes, FC } from "react";
import MenuButton from "./menu-button";

export type ButtonType = FC<ButtonHTMLAttributes<HTMLButtonElement>> & {
  Menu: typeof MenuButton;
};

export const Button: ButtonType = ({ children, ...props }) => {
  return <button {...props}>{children}</button>;
};

Button.Menu = MenuButton;

export default Button;
