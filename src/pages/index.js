import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import OurMission from "../components/h31/sections/OurMission";
import Masthead from "../components/h31/sections/Masthead";
import WebsitePerks from "../components/h31/sections/WebsitePerks";
import RequestConsultation from "../components/h31/sections/RequestConsultation";

const IndexPage = () => {
  return (
    <PageWrapperFade>
      <SEO
        title="Custom Websites & Web Applications"
        description="We build custom web solutions that are tailored to your business's brand and needs. Get started with a Free Consultation today!"
      />

      <Masthead />
      <OurMission />
      <WebsitePerks />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default IndexPage;
