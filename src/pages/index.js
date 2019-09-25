import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = props => {
  const { path } = props;
  return (
    <Layout path={path}>
      <SEO title="" description="" />
    </Layout>
  );
};

export default IndexPage;
