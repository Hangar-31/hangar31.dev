import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import PopFreeConsultation from "../components/h31/popups/PopFreeConsultation";

const IndexPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <PopFreeConsultation />
    </PageWrapperFade>
  );
};

export default IndexPage;
