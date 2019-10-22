/* eslint-disable no-undef */
import React from "react";
import ImgAirplaneWindow from "../../images/_home/ImgAirplaneWindow";
import _configSite from "../../_configSite";

export default class AnimeAirplaneWing extends React.Component {
  static windowScroll() {
    document.querySelector(
      ".airplane-wing-anime"
    ).style.transform = `translateX(${window.scrollY * 0.2}px)`;
  }

  componentDidMount() {
    if (typeof window !== "undefined" && window.innerWidth > 992) {
      window.addEventListener("scroll", this.constructor.windowScroll);
    }
  }

  componentWillUnmount() {
    if (typeof window !== "undefined") {
      window.removeEventListener("scroll", this.constructor.windowScroll);
    }
  }

  render() {
    return (
      <ImgAirplaneWindow
        cssProp={`
          display: block;
          z-index: -1;
          position: absolute !important;
          width: 1200px;
          bottom: -130px;
          right: -630px;
          transform: translateX(100px);
          @media (max-width: ${_configSite.md}px) {
            display: none;
          }
        `}
      />
    );
  }
}
