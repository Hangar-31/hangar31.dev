/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global, css } from "@emotion/core";

// Components
import MainNav from "./h31/sections/MainNav";
import AnimeSiteBackground from "./h31/animations/AnimeSiteBackground";
import Footer from "./h31/sections/Footer";

const Layout = ({ children, path = "" }) => {
  let layoutPaddingTop = 200;
  if (path === "/" || path === "/free-consultation/") {
    layoutPaddingTop = 0;
  }

  return (
    <>
      <Global
        styles={css`
          body {
            margin: 0;
            min-height: 100vh;
            background: linear-gradient(180deg, #0094d1 0%, #49e9ff 100%);
          }
          .tl-edges {
            overflow-x: visible;
          }
          .tl-wrapper {
            float: none;
          }
          .current-page {
            &:after {
              width: 100% !important;
            }
          }
          .current-page-free-consultation {
            background: #ffffff;
            color: #069bd5 !important;
          }
        `}
      />

      <MainNav path={path} />

      <div
        css={css`
          position: relative;
          margin-top: ${path === "/" ? "30vw" : "0"};
          padding-top: ${layoutPaddingTop}px;
          transition: 1.5s ease-in-out;

          @media (max-width: 1280px) {
            padding-top: ${layoutPaddingTop === 0
              ? 0
              : layoutPaddingTop - 75}px;
          }
          @media (max-width: 992px) {
            margin-top: ${path === "/" ? "40vw" : "0"};
          }

          &:after {
            display: block;
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;

            opacity: ${path !== "/free-consultation/" ? "1" : "0"};
            transition: 1s;

            background: linear-gradient(
              rgba(255, 255, 255, 0) 0,
              rgba(255, 255, 255, 0.9) 4vw,
              rgba(255, 255, 255, 0.8) 100%
            );
          }
        `}
      >
        <AnimeSiteBackground path={path} />
        {children}
      </div>
      <Footer path={path} />
    </>
  );
};

export default Layout;
