/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global, css } from "@emotion/core";

// Components
import MainNav from "./h31/sections/MainNav";
import AnimeSiteBackground from "./h31/animations/AnimeSiteBackground";
import Footer from "./h31/sections/Footer";

const Layout = ({ children, path = "" }) => {
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
        `}
      />

      <MainNav path={path} />

      <div
        css={css`
          position: relative;
          min-height: 500px;
          background: linear-gradient(
            rgba(255, 255, 255, 0) 0,
            rgba(255, 255, 255, 0.82) 4vw,
            rgba(255, 255, 255, 0.9) 100%
          );
          margin-top: ${path === "/" ? "30vw" : "0"};
          padding-top: ${path === "/" ? "0px" : "250px"};
          transition: 1.5s ease-in-out;
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
