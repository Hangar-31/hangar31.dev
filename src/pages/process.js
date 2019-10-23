import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";
import Processes from "../components/h31/sections/Processes";
import RequestConsultation from "../components/h31/sections/RequestConsultation";

const ProcessPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="An Easy Process For Making Websites" description="" />

      <SectionTitle title="Our Process" subtitle="About" />
      <Processes />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default ProcessPage;
