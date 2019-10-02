import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import ClientCards from "../components/h31/ClientCards";
import SectionTitle from "../components/h31/SectionTitle";
import PageWrapperFade from "../components/h31/PageWrapperFade";

const WebsitesPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Websites" subtitle="Our" />
      <ClientCards />
    </PageWrapperFade>
  );
};

export default WebsitesPage;
