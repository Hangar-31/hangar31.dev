/* eslint-disable prettier/prettier */
import React from "react";
import styled from "@emotion/styled";

// Components
import Title1 from "./base/Title1";
import Subtitle1 from "./base/Subtitle1";

const Container = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`;

const Wrapper = styled.div`
  display: inline-block;
`

export default ({title, subtitle}) => (
  <Container>
    <Wrapper>
      <Subtitle1>
        {subtitle}
      </Subtitle1>
      <Title1>
        {title}
      </Title1>
    </Wrapper>
  </Container>
);
