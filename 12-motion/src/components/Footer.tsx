import { css } from "@emotion/react";
import React from "react";

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <p>@Copyright by Timothy. All rights reserved</p>
    </footer>
  );
};

const footerStyle = css`
  width: 100%;
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
`;

export default Footer;
