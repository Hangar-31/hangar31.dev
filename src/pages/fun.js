import React from "react";

// Components
import { graphql, StaticQuery } from "gatsby";
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";

const IndexPage = () => {
  return (
    <PageWrapperFade>
      <SEO
        title="Free Website Consultation"
        description="Find out if we are the right fit for your business's online needs by scheduling a Free Consulation today! "
      />

      <StaticQuery
        query={graphql`
          query {
            contentfulPost {
              title
              description {
                content {
                  content {
                    value
                    nodeType
                  }
                }
              }
            }
          }
        `}
        render={({
          contentfulPost: {
            title,
            description: { content }
          }
        }) => {
          console.log(title);
          console.log(content[0].content[0].value);

          return (
            <>
              <h1>{title}</h1>
              {content.map(item => (
                <h2>{item.content[0].value}</h2>
              ))}
            </>
          );
        }}
      />
    </PageWrapperFade>
  );
};

export default IndexPage;
