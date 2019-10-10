import React from "react";
import { css, keyframes } from "@emotion/core";

// Components
import ImgFullContainer from "../base/ImgFullContainer";

// Images
import ImgFooterLayer1 from "../../images/background/ImgFooterLayer1";
import ImgFooterLayer2 from "../../images/background/ImgFooterLayer2";

const layer1Anime = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-40px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const layer2Anime = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export default () => (
  <>
    <ImgFullContainer
      css={css`
        top: 0;
        animation: ${layer2Anime} 12s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
        pointer-events: none;
      `}
    >
      <ImgFooterLayer2 />
    </ImgFullContainer>
    <ImgFullContainer
      css={css`
        top: 5vw;
        animation: ${layer1Anime} 8s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
        pointer-events: none;
      `}
    >
      <ImgFooterLayer1 />
    </ImgFullContainer>
  </>
);
