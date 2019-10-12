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
      <SEO title="" description="" />

      <Masthead />
      <OurMission />
      <WebsitePerks />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default IndexPage;
