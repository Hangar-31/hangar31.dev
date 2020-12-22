/* eslint-disable prettier/prettier */
import React from "react";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Fade from "react-reveal";


// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title3 from "../base/Title3";
import Text1 from "../base/Text1";
import ImgContainer from "../base/ImgContainer";

// Images
import _configSite from "../../_configSite";
import ImgServiceAPI from "../../images/services/ImgServiceAPI";
import ImgServiceWebsites from "../../images/services/ImgServiceWebsites";
import ImgServiceWebApplications from "../../images/services/ImgServiceWebApplications";
// import ImgServiceIntegrations from "../../images/services/ImgServiceIntegrations";
import ImgServiceMemberApplications from "../../images/services/ImgServiceMemberApplications";
import ImgServiceTools from "../../images/services/ImgServiceTools";
import ImgServiceAutomations from "../../images/services/ImgServiceAutomations";
import ImgServiceDiscoveryAndStrategy from "../../images/services/ImgServiceDiscoveryAndStrategy";

// Styled Components
const Content = styled.section`
  display: grid;
  grid-column-gap: 60px;
  grid-template-columns: 2fr 1fr;
  @media (max-width: ${_configSite.md}px) {
    grid-template-columns: 5fr 1fr;
  }
  @media (max-width: ${_configSite.xs}px) {
    grid-template-columns: 1fr;
  }
`

const Title3Large = styled(Title3)`
  font-size: 2.25rem !important;
  @media (max-width: ${_configSite.xs}px) {
    grid-template-columns: 1fr;
  }
`

const Process = styled.section`
  margin-bottom: 120px;
  grid-column: 3 / span 8;

  @media (max-width: ${_configSite.md}px) {
    grid-column: 2 / span 10;
    margin-bottom: 120px;
  }
  @media (max-width: ${_configSite.xs}px) {
    margin-bottom: 60px;
    grid-column: 1 / span 12;
  }

  ${Text1} {
    grid-row: 2;
    grid-column: 1;
  }
  ${ImgContainer} {
    grid-row: 2;
    grid-column: 2;
    @media (max-width: ${_configSite.xs}px) {
      display: none;
    }
  }

  

  &:nth-of-type(even) {
    ${Content} {
      grid-template-columns: 1fr 2fr;
      @media (max-width: ${_configSite.xs}px) {
        grid-template-columns: 1fr;
      }
    }
    ${Title3Large} {
      grid-row: 1;
      grid-column: 2;
      @media (max-width: ${_configSite.xs}px) {
        grid-column: 1;
      }
    }
    ${Text1} {
      grid-row: 2;
      grid-column: 2;
      @media (max-width: ${_configSite.xs}px) {
        grid-column: 1;
      }
    }
    ${ImgContainer} {
      grid-row: 2;
      grid-column: 1;
    }
  }
`

// Data
const services = [
  {
    title: "Discovery and Strategy",
    text: "Our Discovery and Strategy service is an essential first step in any development process. The time and cost of this service varies based on the complexity of a proposed project, but the outcomes are instrumental in helping budget and plan a project. Our Discovery and Strategy service ultimately ends up with a project plan that clients keep, followed by a proposal from us to accomplish the plan that was formulated.",
    image: <ImgServiceDiscoveryAndStrategy />
  },
  {
    title: "Web Applications",
    text: "Web Applications are programs that are created for use within a web browser, and typically preform a wide variety of tasks and functions. Our company specializes in translating client needs into web applications. Because of how complex Web Applications can be, we plan and expect pivots during the course of the project, which allows us to work with you should different options arise during a project.",
    image: <ImgServiceWebApplications />
  },
  {
    title: "User Based Applications ",
    text: "User based applications can help in a variety of ways such as: Managing memberships, creating social spaces, allowing users to interface with your business, providing unique services, and so much more. Whatever your user needs are, we can help plan and build a system for your users that makes it easier to manage them through an online system. We can even upgrade your internal user databases to secure, cloud-based solutions that will help you manage your users remotely.",
    image: <ImgServiceMemberApplications />
  },
  {
    title: "Business or Personal Apps",
    text: "Need a simple app that checks stocks using your own custom metrics? Want a custom, private app that can control your entire home experience? We can build it! Let us know your idea, and we can build it as a web-based app for your own use. It could even be an app that has one big red button that opens your garage! Whatever the size and scale, we'd love to hear your idea and see how we can make it come to life through the web.",
    image: <ImgServiceTools />
  },
  {
    title: "Websites",
    text: "Our approach to websites is a lot different then most web designers and developers. Our focus for website development is to not only develop something custom to your needs, but also easy to use and performant. Because we can focus on making a quality site from the ground up, we are able to work with your marketing team to optimize SEO and write effective content that will make your website stand out among the competition.",
    image: <ImgServiceWebsites />
  },
  {
    title: "Automations",
    text: "No matter what size business you run, or project you are trying to complete, creating a way to automate repetitive tasks or business logic is essential for growth and scalability. We can develop a wide array of automations that incorporate many different factors, such as payments, location, time, statuses, or even custom factors specific to your industry.",
    image: <ImgServiceAutomations />
  },
  {
    title: "API Layers ",
    text: "APIs are very useful if you are looking to make business functions and resources available for other companies or users. Setting up an API layer can also be a strategic way to scale apps you develop, by centralizing all your business functions and logic into a company-wide API. From architecting to deployment, we can help you create an API that is secure and scalable",
    image: <ImgServiceAPI />
  }
  // {
  //   title: "Integrations",
  //   text: "",
  //   image: <ImgServiceIntegrations />
  // }
]

export default () => (
  <Container>
    <Wrapper>
      {services.map((service) => (
        <Process>
          <Fade duration={6000} bottom>
            <Content>
              <Title3Large>
                {service.title}
              </Title3Large>

              <Text1>
                {service.text}
              </Text1>

              <ImgContainer>
                {service.image}
              </ImgContainer>
            </Content>
          </Fade>
        </Process>
      ))}
    </Wrapper>
  </Container>
);
