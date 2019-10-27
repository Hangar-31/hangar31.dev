import React from "react";
// import { css } from "@emotion/core";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";

const TermsOfServicePage = () => (
  <PageWrapperFade>
    <SEO
      title="Terms Of Service"
      description="By using our website, we agree that all of your data and any use of it will be a secure experience for you to browse, enter information, and access."
    />

    <SectionTitle title="Terms Of Service" subtitle="Coming Soon" />
  </PageWrapperFade>
);

export default TermsOfServicePage;
