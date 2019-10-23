/* eslint-disable react/no-unused-state */
/* eslint-disable react/jsx-wrap-multilines */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Global, css } from "@emotion/core";

// Components
import MainNav from "./h31/sections/MainNav";
import AnimeSiteBackground from "./h31/animations/AnimeSiteBackground";
import Footer from "./h31/sections/Footer";
import MainNavMobile from "./h31/sections/MainNavMobile";

// Config
import _configSite from "./_configSite";

class Layout extends React.Component {
  constructor() {
    super();

    this.state = {
      path: "/",
      siteLoaded: false
    };
  }

  componentDidMount() {
    this.setState({ siteLoaded: true });
  }

  componentWillReceiveProps({ path }) {
    this.setState({ path });
  }

  render() {
    const excludedPaths = ["/", "", "/free-consultation"];
    const { path, siteLoaded } = this.state;
    const { children } = this.props;

    console.log(path);

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

        <MainNavMobile path={path} />
        <MainNav path={path} />

        <div
          css={css`
            position: relative;
            margin-top: ${path === "/" ? "calc(80vh - 136px)" : "0px"};
            padding-top: ${excludedPaths.includes(path) ? "0px" : "175px"};
            transition: ${siteLoaded ? "1.5s ease-in-out" : "0s"};
            min-height: 60vh;
            padding-bottom: 200px;
            margin-bottom: -200px;

            &:after {
              display: block;
              position: absolute;
              content: "";
              top: 0;
              left: 0;
              height: 100%;
              width: 100%;

              opacity: ${path !== "/free-consultation" ? "1" : "0"};
              transition: ${siteLoaded ? "1s" : "0s"};

              background: linear-gradient(
                rgba(255, 255, 255, 0) 0,
                rgba(255, 255, 255, 0.85) 6vw,
                rgba(255, 255, 255, 0.8) 100%
              );
            }

            @media (max-width: ${_configSite.md}px) {
              padding-top: ${excludedPaths.includes(path) ? "0px" : "125px"};
              &:after {
                background: linear-gradient(
                  rgba(255, 255, 255, 0) 0px,
                  rgba(255, 255, 255, 0.85) 8vw,
                  rgba(255, 255, 255, 0.8) 100%
                );
              }
            }

            @media (max-width: ${_configSite.xs}px) {
              &:after {
                background: linear-gradient(
                  rgba(255, 255, 255, 0) 0,
                  rgba(255, 255, 255, 0.825) 12vw,
                  rgba(255, 255, 255, 0.8) 100%
                );
              }
            }
          `}
        >
          <AnimeSiteBackground path={path} />
          {children}
        </div>
        <Footer />
      </>
    );
  }
}

export default Layout;
