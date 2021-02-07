import React from "react";
import * as svg from "./svg";

export type TimIconType = keyof typeof svg;
export type TimIconProps = {
  name: TimIconType;
  className?: string;
  style?: React.CSSProperties;
};

function TimIcon({ name, className, style }: TimIconProps) {
  return React.createElement(svg[name], {
    className,
    style,
  });
}

export default TimIcon;
