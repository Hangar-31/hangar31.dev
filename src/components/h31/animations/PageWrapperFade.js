import React from "react";
import posed from "react-pose";
import { TransitionState } from "gatsby-plugin-transition-link";

const Fade = posed.section({
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
});

// In a component that wraps your page contents
export default ({ children }) => (
  // We're using the TransitionState component here to provide the current transition status to our pose
  <TransitionState>
    {({ transitionStatus }) => (
      <Fade
        pose={
          ["entering", "entered"].includes(transitionStatus)
            ? "visible"
            : "hidden"
        }
      >
        {console.log(transitionStatus)}
        {children}
      </Fade>
    )}
  </TransitionState>
);
