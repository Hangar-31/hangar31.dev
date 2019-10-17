/* eslint-disable prettier/prettier */
import React from "react";
// import { css } from "@emotion/core";
import styled from "@emotion/styled";


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

// Styled Components
const Content = styled.section`
  display: grid;
  grid-column-gap: 60px;
  grid-template-columns: 2fr 1fr;
`

const Title3Large = styled(Title3)`
  font-size: 2.25rem;
`

const Process = styled.section`
  margin-bottom: 200px;
  grid-column: 3 / span 8; 

  ${Text1} {
    grid-row: 2;
    grid-column: 1;
  }
  ${ImgContainer} {
    grid-row: 2;
    grid-column: 2;
  }

  &:nth-of-type(even) {
    ${Content} {
      grid-template-columns: 1fr 2fr;
    }
    ${Title3Large} {
      grid-row: 1;
      grid-column: 2;
    }
    ${Text1} {
      grid-row: 2;
      grid-column: 2;
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
    text: "Our Website Discovery is the foundation for any website - This is a vitally important step that gives us an opportunity to go over your vision in-depth, establish clear and achievable goals, assess necessary functions and features, review your online presence and improvement opportunities, and reveal any unforeseen obstacles. We then go to work to deliver you a high level sitemap and clearly addressed action plan that lays the ground work for creating a powerful and effective website.",
    image: <ImgProcessDesign />
  },
  {
    title: "3. Develop",
    text: "Our Website Discovery is the foundation for any website - This is a vitally important step that gives us an opportunity to go over your vision in-depth, establish clear and achievable goals, assess necessary functions and features, review your online presence and improvement opportunities, and reveal any unforeseen obstacles. We then go to work to deliver you a high level sitemap and clearly addressed action plan that lays the ground work for creating a powerful and effective website.",
    image: <ImgProcessDevelop />
  },
  {
    title: "4. Deploy",
    text: "Our Website Discovery is the foundation for any website - This is a vitally important step that gives us an opportunity to go over your vision in-depth, establish clear and achievable goals, assess necessary functions and features, review your online presence and improvement opportunities, and reveal any unforeseen obstacles. We then go to work to deliver you a high level sitemap and clearly addressed action plan that lays the ground work for creating a powerful and effective website.",
    image: <ImgProcessDeploy />
  }
]

export default () => (
  <Container>
    <Wrapper>
      {processes.map((process) => (
        <Process>
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
        </Process>
      ))}
    </Wrapper>
  </Container>
);
