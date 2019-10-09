import React from "react";

// Components
import SEO from "../components/seo";
import PageWrapperFade from "../components/h31/animations/PageWrapperFade";
import SectionTitle from "../components/h31/sections/SectionTitle";
import About from "../components/h31/sections/About";
import Team from "../components/h31/sections/Team";

// Images
import ImgAirplaneWindow from "../components/images/_home/ImgAirplaneWindow";

// Data
const bios = [
  {
    name: "Matthew Pezzente",
    title: "CEO / Developer",
    image: <ImgAirplaneWindow />,
    intro: "RAJDHANI REGULAR 30PT ALL CAPS",
    bio: [
      "Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology!",
      "Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology!"
    ]
  },
  {
    name: "Andrew Pezzente",
    title: "Designer",
    image: <ImgAirplaneWindow />,
    intro: "RAJDHANI REGULAR 30PT ALL CAPS",
    bio: [
      "Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology!",
      "Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology!"
    ]
  }
];

const AboutPage = () => {
  return (
    <PageWrapperFade>
      <SEO title="" description="" />

      <SectionTitle title="Hangar 31" subtitle="About" />
      <About />
      <Team bios={bios} />
    </PageWrapperFade>
  );
};

export default AboutPage;
