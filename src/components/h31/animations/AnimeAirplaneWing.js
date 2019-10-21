/* eslint-disable no-undef */
import React from "react";
import ImgAirplaneWindow from "../../images/_home/ImgAirplaneWindow";

export default class AnimeAirplaneWing extends React.Component {
  constructor(props) {
    super(props);

    this.airplaneRef = React.createRef();
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        document.querySelector(
          ".airplane-wing-anime"
        ).style.transform = `translateX(${window.scrollY * 0.2}px)`;
      });
    }
  }

  render() {
    return (
      <ImgAirplaneWindow
        cssProp={`
          transform: translateX(100px);
        `}
      />
    );
  }
}
