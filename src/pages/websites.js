import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import WebsiteCards from "../components/h31/sections/WebsiteCards";
import SectionTitle from "../components/h31/sections/SectionTitle";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import RequestConsultation from "../components/h31/sections/RequestConsultation";

const WebsitesPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="Our Website Portfolio" description="" />

      <SectionTitle title="Websites" subtitle="Our" />
      <WebsiteCards />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default WebsitesPage;
