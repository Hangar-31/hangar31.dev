import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";
import Processes from "../components/h31/sections/Processes";

const ProcessPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Our Process" subtitle="About" />
      <Processes />
    </PageWrapperFade>
  );
};

export default ProcessPage;
