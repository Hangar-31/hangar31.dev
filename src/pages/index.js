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
        title="Web Application Development"
        description="We assist companies, organizations and individuals develop web solutions that save time, scale for growth, and solve business problems. We accomplish this by translating visions and ideas into tailored, web based tools that utilize cutting-edge technology. Get started today a free consultation!"
      />

      <Masthead />
      <OurMission />
      <WebsitePerks />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default IndexPage;
