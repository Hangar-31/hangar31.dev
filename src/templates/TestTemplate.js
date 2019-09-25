// /* eslint-disable no-underscore-dangle */
// import PropTypes from "prop-types";
// import { graphql } from "gatsby";

// /** @jsx jsx */
// import { jsx } from "@emotion/core";

// // H31 Components
// import Layout from "../components/layout";
// import SEO from "../components/seo";

// const NewsAndEvents = ({ data }) => {
//   const { markdownRemark } = data;
//   const { frontmatter /* ,  html */ } = markdownRemark;

//   return (
//     <Layout>
//       <SEO title={frontmatter.title} description={markdownRemark.excerpt} />
//     </Layout>
//   );
// };

// NewsAndEvents.defaultProps = {
//   data: {}
// };

// NewsAndEvents.propTypes = {
//   data: PropTypes.objectOf(PropTypes.object)
// };

// export default NewsAndEvents;

// export const pageQuery = graphql`
//   query($path: String!) {
//     markdownRemark(fields: { path: { eq: $path } }) {
//       id
//       excerpt
//       html
//       frontmatter {
//         title
//         date
//         image
//       }
//     }
//   }
// `;
