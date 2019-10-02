import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/PageWrapperFade";
import SectionTitle from "../components/h31/SectionTitle";

const IndexPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Aboard" subtitle="Welcome" />
    </PageWrapperFade>
  );
};

export default IndexPage;
