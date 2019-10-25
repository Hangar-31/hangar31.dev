import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "perks/perk-4d.png" }) {
          childImageSharp {
            fixed(width: 140) {
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
        alt="hangar 31 4d process for making websites"
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
);
