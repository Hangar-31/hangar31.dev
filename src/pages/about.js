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
import ImgTeamAndrew from "../components/images/team/ImgTeamAndrew";
import ImgTeamRachel from "../components/images/team/ImgTeamRachel";

// Data
const bios = [
  {
    name: "Matthew Pezzente",
    title: "CEO / Project Manager",
    image: <ImgTeamMatthew />,
    intro:
      '"TIME IS VALUABLE, SO LET’S SPEND IT ON THE THINGS THAT MATTER MOST, LIKE THE PEOPLE AROUND US."',
    bio: [
      "Matthew is Hangar 31’s Co-Founder, Full-Stack Web Developer, and Project Manager. He loves helping people integrate technology into their needs and objectives, and often finds that one hour of listening can save weeks of misunderstandings."
    ]
  },
  {
    name: "Andrew Pezzente",
    title: "Design Lead",
    image: <ImgTeamAndrew />,
    intro: '"DREAMS BECOME REALITY WHEN PURSUED BEYOND THE HORIZON."',
    bio: [
      "Andrew is our In-House designer and one of the Co-Founders of Hangar 31. He comes with a background in fine arts, digital design, and an enthusiasm for seeing visions brought to reality!"
    ]
  },
  {
    name: "Rachel Higley",
    title: "Tech Lead",
    image: <ImgTeamRachel />,
    intro: '"Dream bigger than you think is possible."',
    bio: [
      "Rachel is our tech lead who takes everything that is beautiful and makes it a reality you can touch. With over 15 years in the industry she is able to bring to life even your biggest dreams."
    ]
  }
];

const AboutPage = () => {
  return (
    <PageWrapperFade>
      <SEO
        title="We Make Powerful, Custom, Exciting Websites"
        description="We make the online world easy to navigate, and explain it in a way that helps you make better decisions to succeed online."
      />

      <SectionTitle title="Hangar 31" subtitle="About" />
      <About />
      <Team bios={bios} />
      <RequestConsultation />
    </PageWrapperFade>
  );
};

export default AboutPage;
