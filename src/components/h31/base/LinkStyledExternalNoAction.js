import React from "react";
import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

// Configs
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

const Link = styled.a`
  ${_configBase}

  position: relative;
  display: inline-block;

  background: ${_configSite.colorPrimary};
  padding: 10px 8px;

  color: ${_configSite.colorWhite};
  line-height: 1;
  font-size: 1.625rem;
  font-family: ${_configSite.fontPrimary};
  font-weight: bold;
  text-decoration: none;
  text-transform: uppercase;

  text-align: center;

  * {
    transition: 1s;
  }
`;

const animeBreathe = keyframes`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.8;
  }

  100% {
    opacity: 1;
  }
`;

export default ({ href, children }) => (
  <Link
    href={href}
    css={css`
      &:hover {
        background: ${_configSite.colorQuintery};
        animation: ${animeBreathe} 1.5s cubic-bezier(0.65, 0.05, 0.36, 1) 0.5s
          infinite;
        path {
          fill: ${_configSite.colorPrimary};
          animation: ${animeBreathe} 1.5s cubic-bezier(0.65, 0.05, 0.36, 1) 0.5s
            infinite;
        }
      }
    `}
  >
    <span
      css={css`
        display: block;
        position: relative;
        z-index: 1;
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.15);
        min-width: 100px;
        padding: 15px;
      `}
    >
      {children}
    </span>
    <svg
      viewBox="0 0 90 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      css={css`
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        path {
          fill: ${_configSite.colorQuintery};
        }
      `}
    >
      <path d="M66 80H0V0H29L66 80Z" />
      <path d="M33 0L70 80H79.5L42.5 0H42.25H33Z" />
      <path d="M46 0L83 80H86.5L49.5 0H46Z" />
      <path d="M49 0L86 80H89.5L52.5 0H49Z" />
    </svg>
  </Link>
);
