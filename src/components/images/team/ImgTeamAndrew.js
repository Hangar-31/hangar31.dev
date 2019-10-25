import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

export default ({ cssProp }) => (
  <StaticQuery
    query={graphql`
      query {
        placeholderImage: file(
          relativePath: { eq: "team/hangar-31-team-member-andrew-pezzente.jpg" }
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
        css={css`
          ${cssProp}
        `}
        alt="hangar 31 team member andrew pezzente, a fine looking gentleman who wants to make your website look amazing"
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
    )}
  />
);
