/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

// Components
import Text1 from "../base/Text1";
import Title2 from "../base/Title2";

// Images
import ImgFullContainer from "../base/ImgFullContainer";
import _configSite from "../../_configSite";

// Styled Components
const ListTeam = styled.ul`
  list-style: none;
  padding: 0;
  grid-column: 3 / span 8;
  @media (max-width: ${_configSite.md}px) {
    grid-column: 2 / span 10; 
  }
  @media (max-width: ${_configSite.xs}px) {
    grid-column: 1 / span 12;
  }
`

const ItemTeam = styled.li`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 400px;
  overflow: hidden;
  box-shadow: 2px 4px 4px rgba(0,0,0,0.8);
  margin-bottom: 30px;
`

const ImageTeam = styled.div`
  position: relative;
  padding: 15px;
`

const BioTeam = styled.div`
  position: relative;
  padding: 30px 30px 0 30px;
  background: #ffffff;
`

export default ({ bios }) => (
  <ListTeam>
    {bios.map(bio => (
      <ItemTeam>
        <ImageTeam>
          <ImgFullContainer css={css`
            top: 0;
            left: 0;
            .gatsby-image-wrapper {
              width: 100%;
              height: 100%;
            }    
          `}
          >
            {bio.image}
          </ImgFullContainer>

          <Title2 css={css`margin-bottom: -10px; line-height: 1;`}>
            {bio.name}
          </Title2>

          <Title2 css={css`
              font-size: 1rem;
            `}
          >
            {bio.title}
          </Title2>
        </ImageTeam>

        <BioTeam>
          <Title2>
            {bio.intro}
          </Title2>

          {bio.bio.map(text => (
            <Text1>
              {text}
            </Text1>
          ))}
        </BioTeam>
      </ItemTeam>
    ))}
  </ListTeam>
);
