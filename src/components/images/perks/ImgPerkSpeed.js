import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(relativePath: { eq: "perks/perk-speed.png" }) {
          childImageSharp {
            fixed(width: 120) {
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
        alt="hangar 31 power meter showing performance of your website"
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
);
