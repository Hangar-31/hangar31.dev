/* eslint-disable prettier/prettier */
import React from "react";
import styled from "@emotion/styled";

// Components
import Title1 from "./base/Title1";
import Subtitle1 from "./base/Subtitle1";

const Container = styled.section`
  max-width: 768px;
  margin: 0 auto;
`;

export default ({title, subtitle}) => (
  <Container>
    <Subtitle1>
      {subtitle}
    </Subtitle1>
    <Title1>
      {title}
    </Title1>
  </Container>
);
