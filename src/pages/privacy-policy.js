import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import PopFreeConsultation from "../components/h31/popups/PopFreeConsultation";

const PrivacyPolicyPage = () => (
  <PageWrapperFade>
    <SEO title="Privacy Policy" description="" />

    <PopFreeConsultation />
  </PageWrapperFade>
);

export default PrivacyPolicyPage;
