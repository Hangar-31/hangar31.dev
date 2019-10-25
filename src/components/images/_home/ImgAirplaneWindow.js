import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "_home/airplane-wing.png" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        className="airplane-wing-anime"
        css={css`
          ${cssProp}
        `}
        alt="hangar 31 airplane wing that moves as you scroll"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
