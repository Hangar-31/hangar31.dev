import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "background/footer-layer-2.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        alt="cloud layer for background design"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
