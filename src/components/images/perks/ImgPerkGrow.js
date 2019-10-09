import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "perks/perk-grow.png" }) {
          childImageSharp {
            fixed(width: 150) {
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
