import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "processes/hangar-31-process-deploy.png" }
        ) {
          childImageSharp {
            fixed(width: 125) {
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
        alt="hangar 31 spaceship that launches powerfully like your website"
        fixed={data.placeholderImage.childImageSharp.fixed}
      />
    )}
  />
);
