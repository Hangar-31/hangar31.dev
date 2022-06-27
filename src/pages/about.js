import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";
import About from "../components/h31/sections/About";
import Team from "../components/h31/sections/Team";
import RequestConsultation from "../components/h31/sections/RequestConsultation";

// Images
import ImgTeamMatthew from "../components/images/team/ImgTeamMatthew";

// Data
const bios = [
  {
    name: "Matthew Pezzente",
    title: "CEO / Project Manager",
    image: <ImgTeamMatthew />,
    intro:
      '"TIME IS VALUABLE, SO LET’S SPEND IT ON THE THINGS THAT MATTER MOST, LIKE THE PEOPLE AROUND US."',
    bio: [
      "My name is Matt, I am a Web Developer and Project Manager. I created Hangar 31 so I could use my skills and knowledge to help business succeed no matter what size or scale. One thing I enjoy most, is helping people make better businesses decisions by teaching them how to leverage web technology to achieve their goals.
    ]
  }
];

const AboutPage = () => {
  return (
    <PageWrapperFade>
      <SEO
        title="About Us"
        description="We leverage web technologies to create tools and solutions for businesses, orginizations and individuals. We also specialize in remote workflows for our development process in light of the Covid-19 pandemic."
      />

      <SectionTitle title="Hangar 31" subtitle="About" />
      <About />
      <Team bios={bios} />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default AboutPage;
