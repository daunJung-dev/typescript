import { css } from "@emotion/react";

export const globalStyles = css`
  html,
  body,
  #root {
    height: 100%;
    margin: 0;
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 100;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2)
        format("woff2"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff)
        format("woff"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf)
        format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 300;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2)
        format("woff2"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff)
        format("woff"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf)
        format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2)
        format("woff2"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff)
        format("woff"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf)
        format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 500;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2)
        format("woff2"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff)
        format("woff"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf)
        format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2)
        format("woff2"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff)
        format("woff"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf)
        format("opentype");
  }
  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 900;
    src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2)
        format("woff2"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff)
        format("woff"),
      url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf)
        format("opentype");
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  input,
  textarea,
  select {
    font-family: "Noto Sans KR", sans-serif;
  }

  h1 {
    font-size: 3rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 2rem;
  }
  h4 {
    font-size: 1.8rem;
  }
  h5 {
    font-size: 1.6rem;
  }
  h6 {
    font-size: 1.4rem;
  }
  input,
  p,
  textarea,
  select {
    font-size: 1rem;
  }
`;
