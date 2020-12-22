import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import PopFreeConsultation from "../components/h31/popups/PopFreeConsultation";

const IndexPage = () => {
  return (
    <PageWrapperFade>
      <SEO
        title="Free Consultation"
        description="Find out if we are the right fit for your development needs by scheduling a Free Consulation today! "
      />

      <PopFreeConsultation />
    </PageWrapperFade>
  );
};

export default IndexPage;
