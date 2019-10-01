import React from "react";
import { css, keyframes } from "@emotion/core";

// Components
import ImgFullContainer from "../ImgFullContainer";

// Images
import ImgLayer1 from "../../images/background/ImgLayer1";
import ImgLayer2 from "../../images/background/ImgLayer2";
import ImgLayer3 from "../../images/background/ImgLayer3";
import ImgLayer4 from "../../images/background/ImgLayer4";

const layer1Anime = keyframes`
  0% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(10px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const layer2Anime = keyframes`
  0% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(10px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const layer3Anime = keyframes`
  0% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(10px);
  }
  80% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const layer4Anime = keyframes`
  0% {
    transform: translateY(0px);
  }
  30% {
    transform: translateY(14px);
  }
  80% {
    transform: translateY(-14px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export default ({ path }) => (
  <>
    <ImgFullContainer
      css={css`
        top: ${path === "/" ? "calc(9vw + 400px)" : "9vw"};
        animation: ${layer1Anime} 18s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
      `}
    >
      <ImgLayer1 />
    </ImgFullContainer>
    <ImgFullContainer
      css={css`
        top: ${path === "/" ? "calc(8vw + 400px)" : "8vw"};
        animation: ${layer2Anime} 15s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
      `}
    >
      <ImgLayer2 />
    </ImgFullContainer>
    <ImgFullContainer
      css={css`
        top: ${path === "/" ? "calc(12vw + 400px)" : "12vw"};
        animation: ${layer3Anime} 13s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
      `}
    >
      <ImgLayer3 />
    </ImgFullContainer>
    <ImgFullContainer
      css={css`
        top: ${path === "/" ? "calc(26vw + 400px)" : "26vw"};
        animation: ${layer4Anime} 8s cubic-bezier(0.65, 0.05, 0.36, 1) infinite;
      `}
    >
      <ImgLayer4 />
    </ImgFullContainer>
  </>
);
