/* eslint-disable prettier/prettier */
import React from "react";
import {css} from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Subtitle1 from "../base/Subtitle1";
import Container from "../layouts/Container";
import Text1 from "../base/Text1";
import Title2 from "../base/Title2";
import ImgAirplaneWindow from "../../images/_home/ImgAirplaneWindow";
import Wrapper from "../layouts/Wrapper";

const Grid = styled.section`
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 3fr 1fr;
  max-width: 992px;
  margin: 0 auto;
`

const Content = styled.div`
  display: grid;
  grid-column: 2;
`

export default () => (
  <Container>
    <Wrapper css={css`
      padding-top: 400px;
      padding-bottom: 275px;
    `}
    >
      <Grid>
        <Content>
          <Subtitle1>
          Our Mission
          </Subtitle1>
        
          <div css={css`margin-left: 60px;`}>
            <Title2>
            This is a test title area
            </Title2>
            <Text1>
            Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology!
            </Text1>
          </div>
        </Content>


        <ImgAirplaneWindow 
          cssProp={`
            grid-column: 4;
            max-height: 350px;
            border: 5px solid #313131;
            border-radius: 50%;
            box-shadow: 8px 8px 16px rgba(0,0,0,0.4);
          `}
        />
      </Grid>
    </Wrapper>
  </Container>
);
