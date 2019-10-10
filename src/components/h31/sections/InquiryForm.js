/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title1 from "../base/Title1";
import Form1 from "../forms/Form1";
import ImgLogo from "../../images/ImgLogo";

const ContainerTitle = styled.section`
  display: flex;
  justify-content: space-between;
  
  margin-bottom: 45px;
  width: 100%;
  max-width: 768px;
`

export default () => (
  <Container
    css={css`
      background: linear-gradient(180deg, rgba(221, 235, 247, 0.68) 0%, #E6EEF5 95.83%);
      padding-bottom: 7vw;
      margin-bottom: -11vw;
    `}
  >
    <Wrapper
      css={css`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 992px;
      `}
    >
      <ContainerTitle>
        <Title1 css={css`
        font-size: 5.5rem;
        `}
        >
        Inquiry Form
        </Title1>

        <ImgLogo cssProp={`
          width: 180px;
        `} 
        />
      </ContainerTitle>

      <Form1 />
      
    </Wrapper>
  </Container>
);
