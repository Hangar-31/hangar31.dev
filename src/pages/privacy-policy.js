import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";

const PrivacyPolicyPage = () => (
  <PageWrapperFade>
    <SEO
      title="Privacy Policy"
      description="Please review our privacy policy for using our website. Your information is secure, and will not be sold or given to any third-party for any reason."
    />

    <SectionTitle title="Privacy Policy" subtitle="Coming Soon" />
  </PageWrapperFade>
);

export default PrivacyPolicyPage;
