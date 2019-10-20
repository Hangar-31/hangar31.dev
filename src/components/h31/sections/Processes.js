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
import ImgProcessDiscovery from "../../images/processes/ImgProcessDiscovery";
import ImgProcessDesign from "../../images/processes/ImgProcessDesign";
import ImgProcessDevelop from "../../images/processes/ImgProcessDevelop";
import ImgProcessDeploy from "../../images/processes/ImgProcessDeploy";
import _configSite from "../../_configSite";

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
  margin-bottom: 200px;
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
const processes = [
  {
    title: "1. Discover",
    text: "Our Website Discovery is the foundation for any website - This is a vitally important step that gives us an opportunity to go over your vision in-depth, establish clear and achievable goals, assess necessary functions and features, review your online presence and improvement opportunities, and reveal any unforeseen obstacles. We then go to work to deliver you a high level sitemap and clearly addressed action plan that lays the ground work for creating a powerful and effective website.",
    image: <ImgProcessDiscovery />
  },
  {
    title: "2. Design",
    text: "This is where we visually establish your website according to our research and your personal vision. When it comes to design we want your website to soar above the field. So we take great consideration for each project and work to create a compelling and intuitive design that sets your website apart while letting your users engage with your content effectively. We will work with you to establish a strong Layout, make consistent identifying color and font choices, and select or create distinctive imagery and graphics.",
    image: <ImgProcessDesign />
  },
  {
    title: "3. Develop",
    text: "The designs for our site have been drafted, and now it’s time to bring it to life! The development process begins with the writing of code, setting up of 3rd party-integrations, incorporating A11y accessibility standards, creating back-end solutions, and much more. Testing is also a critical aspect of this process. Your website should work for you, and so we’ll work with you during this process to make sure it does just that. Whether it’s setting up your B2B integrations, your blogging platform, or a custom Web Application, we’ll work closely with you until we reach the right solution that works for you!",
    image: <ImgProcessDevelop />
  },
  {
    title: "4. Deploy",
    text: "We are cleared for take off, which for your website, means we have a lot of people to reach! In order to reach them, we’ll use a solution that takes your website not just to a server in New York, but across a distributed infrastructure of cloud servers around the globe! This makes your website faster, more secure, and accessible to every one of your visitors, all for a low rate, that scales as you grow!",
    image: <ImgProcessDeploy />
  }
]

export default () => (
  <Container>
    <Wrapper>
      {processes.map((process) => (
        <Process>
          <Fade duration={6000} bottom>
            <Content>
              <Title3Large>
                {process.title}
              </Title3Large>

              <Text1>
                {process.text}
              </Text1>

              <ImgContainer>
                {process.image}
              </ImgContainer>
            </Content>
          </Fade>
        </Process>
      ))}
    </Wrapper>
  </Container>
);
