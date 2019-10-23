// eslint-disable-next-line
import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";

const NotFoundPage = () => (
  <PageWrapperFade>
    <SEO
      title="404 - Sorry, No Page Found"
      description="There is currently nothing located on this page, please try navigating to a different page."
    />

    <SectionTitle title="Not Found" subtitle="404" />
  </PageWrapperFade>
);

export default NotFoundPage;
