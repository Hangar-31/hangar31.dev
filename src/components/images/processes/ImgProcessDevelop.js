import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "processes/hangar-31-process-develop.png" }
        ) {
          childImageSharp {
            fixed(width: 250) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <Img
        css={css`
          ${cssProp}
        `}
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
);
