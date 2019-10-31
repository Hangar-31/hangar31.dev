/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import Fade from "react-reveal";

// Components
import Container from "../layouts/Container";
import Title3 from "../base/Title3";
import Text1 from "../base/Text1";
import _configSite from "../../_configSite";
import Wrapper from "../layouts/Wrapper";

// Images
import ImgPerkSpeed from "../../images/perks/ImgPerkSpeed";
import ImgPerkMobile from "../../images/perks/ImgPerkMobile";
import ImgPerkScale from "../../images/perks/ImgPerkScale";
import ImgPerkSEO from "../../images/perks/ImgPerkSEO";
import ImgPerkGrow from "../../images/perks/ImgPerkGrow";
import ImgPerk4D from "../../images/perks/ImgPerk4D";
import LinkStyled1 from "../base/LinkStyled1";
import LinkInlineText from "../base/LinkInlineText";

// Styled Components
const ListPerk = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 60px;
  grid-row-gap: 60px;
  grid-column: span 12;
  
  list-style: none;
  padding: 120px 0;
  margin: 0;

  @media(max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media(max-width: 700px) {
    grid-template-columns: 1fr;
  }
`

const ItemPerk = styled.li`
`

const WrapperImage = styled.div`
  width: 200px;
  height: 125px;
  margin: 0 auto;
  text-align: center;
`

// Data
const data = [
  {
    img: <ImgPerkSpeed />,
    title: "Fast Performance",
    text: (
      <>
        Our websites are developed using cutting edge technology, which allows us to build insanely performant websites and web applications. Check out some of our work, and&nbsp;
        <LinkInlineText to="/websites">see the difference!</LinkInlineText>
      </>
    )
  },
  {
    img: <ImgPerkMobile />,
    title: "Incredibly Mobile",
    text: "As of 2019, mobile devices generate almost 50% of all website traffic. Our websites are made to meet the demands of mobile users through fast load times, and mobile UI designs that work for phones, tablets, and more!"
  },
  {
    img: <ImgPerkScale />,
    title: "Scalable Growth",
    text: "Never worry about your website shutting off or paying extra for resources you're not using again! All of our websites are hosted starting at only $10 a month, and that cost will only increase when you see your own business grow!"
  },
  {
    img: <ImgPerkSEO />,
    title: "SEO Value",
    text: "Being seen online takes a lot of effort, and we are here to help you get started. Each area of your website from content to accessibility are looked through to make sure your reaching your audience."
  },
  {
    img: <ImgPerkGrow />,
    title: "Plan Your Course",
    text: "No two websites are the same, and our goal is to work with you and find the right path forward for your vision to take flight! Whether its budget concerns, technical needs, or uncertainty we are here to help through the process."
  },
  {
    img: <ImgPerk4D />,
    title: "Our 4D Process",
    text: <LinkStyled1 name="4d process page link" to="/process">Check it Out</LinkStyled1>
  }
]

export default () => (
  <Container
    css={css`
      background-color: ${_configSite.colorWhite};
    `}
  >
    <Wrapper>
      <ListPerk>
        {data.map(perk => (
          <ItemPerk>
            <Fade left>
              <>
                <WrapperImage>
                  {perk.img}
                </WrapperImage>
                <Title3
                  css={css`
                  text-align: center;
                `}
                >
                  {perk.title}
                </Title3>
                {perk.title !== "Our 4D Process" && (
                  <Text1
                    css={css`
                      text-align: justify;
                      display: inline-block;
                      color: ${_configSite.colorOffWhite};
                      @media(max-width: 700px) {
                        display: block;
                        max-width: 500px;
                        margin: 0 auto;
                      }
                    `}
                  >
                    {perk.text}
                  </Text1>
                )}
                {perk.title === "Our 4D Process" && (
                  <div css={css`
                      width: 100%;
                      text-align: center;
                    `}
                  >
                    {perk.text}
                  </div>
                )}
              </>
            </Fade>
          </ItemPerk>
          ))}
      </ListPerk>
    </Wrapper>
  </Container>
);
