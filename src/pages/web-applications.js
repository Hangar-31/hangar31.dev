import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import SectionTitle from "../components/h31/sections/SectionTitle";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import RequestConsultation from "../components/h31/sections/RequestConsultation";
import WebAppCards from "../components/h31/sections/WebAppCards";

const WebApplicationsPage = () => {
  return (
    <PageWrapperFade>
      <SEO
        title="Web Applications"
        description="We develop a wide arrange of web applications from simple tools, to membership applications, using technologies such as: React, Next.js, Node, Express, GraphQL and PostgreSQL"
      />

      <SectionTitle title="Web Apps" subtitle="Our" />
      <WebAppCards />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default WebApplicationsPage;
