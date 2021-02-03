import { css, jsx } from "@emotion/react";
import BlackBackground from "../../assets/images/bg.jpg";
export type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return <div css={layoutStyle}>{children}</div>;
}

const layoutStyle = css`
  background-image: url(${BlackBackground});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  height: 100%;
`;

export default Layout;
