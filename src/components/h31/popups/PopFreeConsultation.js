/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Title1 from "../base/Title1";
// import LinkStyled1 from "../base/LinkStyled1";
import Text1 from "../base/Text1";
import LinkStyledExternalNoAction from "../base/LinkStyledExternalNoAction";

// Config
import _configSite from "../../_configSite";

// Components
import Form1 from "../forms/Form1";
import Title4 from "../base/Title4";

// Styled Components
const ContainerHours = styled.div`
  background: #A1D0E3;
  width: 100%;
  grid-column: span 2;
  
  padding 30px 60px 60px 60px;
  box-sizing: border-box;
  @media (max-width: ${_configSite.xs}px) {
    padding 15px;
  }
`

const ListHours = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0;
  list-style: none;
`

const ItemHours = styled.li`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #216789;
`

const TitleDay = styled(Title2)`
  font-size: 1.125rem;
  color: #216789;
  line-height: 1;
`

const ContainerForm = styled.div`
  background: #A1D0E3;
  width: 100%;
  grid-column: span 2;
  padding: 30px;

  box-sizing: border-box;

  @media(max-width: ${_configSite.md}px) {
    grid-column: span 1;
  }
  @media (max-width: ${_configSite.xs}px) {
    padding 15px;
  }
`


export default () => (
  <Container
    css={css`
      padding: 0;
      background: linear-gradient(
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.35) 10%,
        rgba(255, 255, 255, 0.35) 90%,
        rgba(255, 255, 255, 0) 100%
      );
    `}
  >
    <Wrapper
      css={css`
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 60px;
        background: #ffffff;
        max-width: 992px;

        padding: 60px 30px;

        @media(max-width: 992px) {
          grid-template-columns: 1fr;
        }
      `}
    >
      <div>
        <Title1 css={css`
          font-size: 3.3rem;
          margin-bottom: 30px;
          @media(max-width: ${_configSite.lg}px) {
            font-size: 2.75rem;
          }
          @media(max-width: ${_configSite.md}px) {
            font-size: 2.5rem;
          }
        `}
        >
        Free Consultation
        </Title1>

        <Title2 css={css`
          line-height: 1;
          font-size: 2rem;
          margin-bottom: 15px;
          @media(max-width: 1050px) {
            font-size: 1.5rem;
          }
        `}
        >
        Consultation Text
        </Title2>

        <Text1 css={css`
          text-align: justify;
        `}
        >
          Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology!
        </Text1>
      </div>

      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 30px;
        `}
      >
        <ContainerHours>
          <Title2 css={css`
            display: block;
            margin: 0 auto;
            color: #ffffff;
            margin-bottom: 30px;
          `}
          >
            Hours
          </Title2>
          <ListHours>
            {_configSite.hours.map(hour => (
              <ItemHours>
                <TitleDay>
                  {hour.day}
                </TitleDay>

                <Title4 css={css`
                  font-size: 1.125rem;
                `}
                >
                  {hour.start}
                  {' '}
                  -
                  {' '}
                  {hour.end}
                </Title4>
              </ItemHours>
            ))}
          </ListHours>
        </ContainerHours>

        <LinkStyledExternalNoAction href={`mailto:${_configSite.email}`}>
          Email
        </LinkStyledExternalNoAction>

        <LinkStyledExternalNoAction href={`tel:${_configSite.phone}`}>
          Phone
        </LinkStyledExternalNoAction>
      </div>

      <ContainerForm>
        <Title2 css={css`
          display: block;
          margin: 0 auto;
          color: #003E57;
          margin-bottom: 30px;
        `}
        >
          Email Us
        </Title2>
        <Form1 formName="Inquiry Form - Free Consultation" />
      </ContainerForm>
    </Wrapper>
  </Container>
);
