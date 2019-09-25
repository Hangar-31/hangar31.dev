import React from "react";

// Components
import Layout from "../components/layout";
import SEO from "../components/seo";
import ClientCards from "../components/h31/ClientCards";
import SectionTitle from "../components/h31/SectionTitle";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="" description="" />

      <SectionTitle title="Websites" subtitle="About" />
      <ClientCards />
    </Layout>
  );
};

export default IndexPage;
