import React from "react";

// Components
// import Layout from "../components/layout";
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";

const ContactPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Contact" subtitle="Make" />
    </PageWrapperFade>
  );
};

export default ContactPage;
