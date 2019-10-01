/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global, css } from "@emotion/core";

// Components
import Footer from "./h31/Footer";
import AnimeSiteBackground from "./h31/animations/AnimeSiteBackground";

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
        `}
      />

      <AnimeSiteBackground path={path} />

      {path === "/" && (
        <div
          css={css`
            position: relative;
            z-index: 1;
            height: 100vw;
          `}
        />
      )}
      {path !== "/" && (
        <div
          css={css`
            position: relative;
            z-index: 1;
            height: 20vw;
          `}
        />
      )}
      <div
        css={css`
          position: relative;
          z-index: 1;
          background: linear-gradient(
            transparent 0px,
            transparent 200px,
            rgba(255, 255, 255, 0.8) 201px,
            rgba(255, 255, 255, 0.7) 100%
          );
          padding-bottom: 12vw;
          margin-bottom: -11vw;
        `}
      >
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
