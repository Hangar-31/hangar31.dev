/* eslint-disable no-underscore-dangle */
/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Title4 from "../base/Title4";
import _configSite from "../../_configSite";

const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-row-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr;
`

const ListHours = styled.ul`
  width: 100%;
  padding: 0;
  list-style: none;
  grid-column: span 3;
`

const ItemHours = styled.li`
  display: flex;
  justify-content: space-between;
  
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #A1D0E3;
`

const TitleDay = styled(Title2)`
  color: #216789;
  line-height: 1;
`

const ContainerPhone = styled.section`
  display: grid;
  grid-row-gap: 30px;
  grid-column: span 1;
`

const PhoneLink = styled.a`
  ${Title4.__emotion_styles};
  text-decoration: none;

  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

const ContainerLocation = styled.section`
  display: grid;
  grid-row-gap: 30px;
  grid-column: span 2;

`

const Title2Edited = styled(Title2)`
  font-size: 2rem;
`

export default () => (
  <Container>
    <Wrapper
      css={css`
        padding-top: 90px;
        max-width: 992px;
        padding-bottom: 200px;
      `}
    >
      <Grid>
        <Title2Edited>
          Hours
        </Title2Edited>

        <ListHours>
          {_configSite.hours.map(hour => (
            <ItemHours>
              <TitleDay>
                {hour.day}
              </TitleDay>

              <Title4>
                {hour.start}
                {' '}
                -
                {' '}
                {hour.end}
              </Title4>
            </ItemHours>
          ))}
        </ListHours>

        <ContainerPhone>
          <Title2Edited>
            Phone
          </Title2Edited>

          <PhoneLink href={`tel:${_configSite.phone}`}>
            {_configSite.phone}
          </PhoneLink>
        </ContainerPhone>

        <ContainerLocation>
          <Title2Edited>
            Locations
          </Title2Edited>

          <Title4>
            {_configSite.location}
          </Title4>
        </ContainerLocation>
      </Grid>
    </Wrapper>
  </Container>
);
