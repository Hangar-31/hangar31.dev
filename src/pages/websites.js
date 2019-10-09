import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import WebsiteCards from "../components/h31/sections/WebsiteCards";
import SectionTitle from "../components/h31/sections/SectionTitle";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";

const WebsitesPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Websites" subtitle="Our" />
      <WebsiteCards />
    </PageWrapperFade>
  );
};

export default WebsitesPage;
