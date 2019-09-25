/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global, css } from "@emotion/core";

// Background Layers
import Imglayer1 from "../images/background/layer-1.png";
import Imglayer2 from "../images/background/layer-2.png";
import Imglayer3 from "../images/background/layer-3.png";
import Imglayer4 from "../images/background/layer-4.png";
import Imglayer5 from "../images/background/layer-5.png";
import Footer from "./h31/Footer";

const Layout = ({ children, path = "" }) => {
  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            min-height: 100vh;
            background: url(${Imglayer5}) no-repeat center
                ${path === "/" ? "calc(26vw + 400px)" : "26vw"} / cover,
              url(${Imglayer4}) no-repeat center
                ${path === "/" ? "calc(26vw + 400px)" : "26vw"} / contain,
              url(${Imglayer3}) no-repeat center
                ${path === "/" ? "calc(12vw + 400px)" : "12vw"} / contain,
              url(${Imglayer2}) no-repeat center
                ${path === "/" ? "calc(8vw + 400px)" : "8vw"} / contain,
              url(${Imglayer1}) no-repeat center
                ${path === "/" ? "calc(9vw + 400px)" : "9vw"} / contain,
              linear-gradient(180deg, #0094d1 0%, #49e9ff 100%);
          }
        `}
      />
      {path === "/" && (
        <div
          css={css`
            height: 50vw;
            max-height: 800px;
          `}
        />
      )}
      {path !== "/" && (
        <div
          css={css`
            height: 26vw;
            max-height: 325px;
          `}
        />
      )}
      {children}
      <Footer />
    </>
  );
};

export default Layout;
