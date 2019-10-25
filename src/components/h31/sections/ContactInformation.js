/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Fade from "react-reveal";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Title4 from "../base/Title4";
import _configSite from "../../_configSite";

const Grid = styled.section`
  display: grid;
`;

const ListHours = styled.ul`
  width: 100%;
  padding: 0;
  margin: 0 0 15px 0;
  list-style: none;
  grid-column: span 3;
`;

const ItemHours = styled.li`
  display: flex;
  justify-content: space-between;

  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #a1d0e3;
`;

const TitleDay = styled(Title2)`
  color: #216789;
  line-height: 1;
`;

const ContainerPhone = styled.section`
  display: grid;
  grid-row-gap: 30px;
  grid-column: span 1;
  @media (max-width: ${_configSite.sm}px) {
    grid-row-gap: 15px;
  }
`;

const PhoneLink = styled.a`
  ${Title4.__emotion_styles};
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const ContainerLocation = styled.section`
  display: grid;
  grid-row-gap: 30px;
  grid-column: span 2;
  @media (max-width: ${_configSite.sm}px) {
    grid-row-gap: 15px;
  }
`;

const Title2Edited = styled(Title2)`
  font-size: 2rem;
  @media (max-width: ${_configSite.xs}px) {
    font-size: 1.25rem;
  }
`;

export default () => (
  <Container>
    <Wrapper
      css={css`
        display: block;
        padding-bottom: 120px !important;
        > ${Grid} {
          ${Wrapper.__emotion_styles}
          padding: 0 !important;
        }
      `}
    >
      <Grid
        css={css`
          > .react-reveal:nth-of-type(1) {
            grid-column: 3 / span 8;
            @media (max-width: ${_configSite.md}px) {
              grid-column: 2 / span 10;
            }
            @media (max-width: ${_configSite.xs}px) {
              grid-column: 1 / span 12;
            }
          }
          > .react-reveal:nth-of-type(2) {
            grid-column: 3 / span 8;
            @media (max-width: ${_configSite.md}px) {
              grid-column: 2 / span 10;
            }
            @media (max-width: ${_configSite.sm}px) {
              grid-row-gap: 15px;
            }
            @media (max-width: ${_configSite.xs}px) {
              grid-column: 1 / span 12;
            }
          }
          > .react-reveal:nth-of-type(3) {
            grid-column: 3 / span 3;
            @media (max-width: ${_configSite.md}px) {
              grid-column: 2 / span 3;
            }
            @media (max-width: ${_configSite.sm}px) {
              grid-row-gap: 15px;
            }
            @media (max-width: ${_configSite.xs}px) {
              grid-column: 1 / span 5;
              margin-bottom: 30px;
            }
          }
          > .react-reveal:nth-of-type(4) {
            grid-column: 6 / span 5;
            @media (max-width: ${_configSite.md}px) {
              grid-column: 5 / span 5;
            }
            @media (max-width: ${_configSite.sm}px) {
              grid-row-gap: 15px;
            }
            @media (max-width: ${_configSite.xs}px) {
              grid-column: 1 / span 12;
            }
          }
        `}
      >
        <Fade bottom>
          <Title2Edited>Hours (EST)</Title2Edited>
        </Fade>

        <Fade bottom>
          <ListHours>
            {_configSite.hours.map(hour => (
              <ItemHours>
                <TitleDay>{hour.day}</TitleDay>

                <Title4>
                  {hour.start} - {hour.end}
                </Title4>
              </ItemHours>
            ))}
          </ListHours>
        </Fade>

        <Fade bottom>
          <ContainerPhone>
            <Title2Edited>Phone</Title2Edited>

            <PhoneLink href={`tel:${_configSite.phone}`}>
              {_configSite.phone}
            </PhoneLink>
          </ContainerPhone>

          <ContainerLocation>
            <Title2Edited>Locations</Title2Edited>

            <Title4>{_configSite.location}</Title4>
          </ContainerLocation>
        </Fade>
      </Grid>
    </Wrapper>
  </Container>
);
