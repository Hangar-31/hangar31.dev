/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";

// const Container = styled.section`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   grid-gap: 15px;

//   max-width: 992px;
//   margin: 0 auto;
//   padding: 15px 0;
// `;

const Card = styled.article`
  position: relative;
  height: 370px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

export default () => (
  <StaticQuery
    query={graphql`
      query {
        allMarkdownRemark {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                image {
                  childImageSharp {
                    fluid(maxWidth: 800) {
                      ...GatsbyImageSharpFluid
                    }
                  }            
                }
              }
            }
          }
        }
      }
    `}
    render={(data => {
      const articles = data.allMarkdownRemark.edges
      return (
        <Container>
          <Wrapper
            css={css`
              display: grid;
              grid-template-columns: 1fr 1fr 1fr;
              grid-gap: 15px;

              padding-top: 30px;
              max-width: 992px;
            `}
          >
            {articles.map(article => (
              <Link  
                css={css`
                  ${Card} .gatsby-image-wrapper {
                    position: absolute !important;
                    left: 0;
                    right: 0;
                    margin: 0 auto;
                    bottom: 0;

                    width: 100%;
                    height: calc(100% + 4px);
                    transition: 3s;
                    transition-timing-function: cubic-bezier(0.05, 0.68, 0, 1.01);
                  }
                  &:hover {
                    > ${Card} .gatsby-image-wrapper {
                      transform: scale(1.1) translateY(-4%);
                    }
                  }
                `}
                to={article.node.fields.slug}
              >
                <Card key={article.node.id}>
                  <Img fluid={article.node.frontmatter.image.childImageSharp.fluid} />
                </Card>
              </Link>
            ))}
          </Wrapper>
        </Container>
      )
    })}
  />
);
