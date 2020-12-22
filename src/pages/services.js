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
      <SEO
        title="Services"
        description="Our web development services focus on creating solutions that solve business problems. We leverage modern tech stacks to provide solutions ranging from automations, tools, membership portals and more."
      />

      <SectionTitle title="Our Services" subtitle="Discover" />
      <Processes />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default ProcessPage;
