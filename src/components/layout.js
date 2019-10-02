/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global, css } from "@emotion/core";

// Components
import MainNav from "./h31/MainNav";
import AnimeSiteBackground from "./h31/animations/AnimeSiteBackground";
import Footer from "./h31/Footer";

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

      <MainNav path={path} />

      {console.log(path)}

      <div
        css={css`
          position: relative;
          min-height: 500px;
          background: linear-gradient(
            transparent 0,
            transparent 3vw,
            rgba(255, 255, 255, 0.8) 5.5vw,
            rgba(255, 255, 255, 0.6) 100%
          );
          margin-top: ${path === "/" ? "30vw" : "0"};
          padding-top: 250px;
          padding-bottom: 12vw;
          margin-bottom: -11vw;
          transition: 1.5s ease-in-out;
        `}
      >
        <AnimeSiteBackground path={path} />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
