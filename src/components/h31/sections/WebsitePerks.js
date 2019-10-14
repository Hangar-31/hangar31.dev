/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";
import styled from "@emotion/styled";

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

// Styled Components
const ListPerk = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 30px;
  grid-row-gap: 60px;
  list-style: none;
  padding: 0;
  margin: 0;
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
    text: "Our websites are developed using cutting edge technology, which allows us to build insanely performant websites and web applications. Trust us, you’ll see the difference!"
  },
  {
    img: <ImgPerkMobile />,
    title: "Incredibly Mobile",
    text: "As of 2017, mobile devices generate more than 50% of all website traffic. Its Important that your website be formatted and easy to view on any platform!"
  },
  {
    img: <ImgPerkScale />,
    title: "Scalable Hosting",
    text: "We want your website to grow, so we scale your cost! This ensures that hosting with us keeps your website budget freindly at every stage of growth."
  },
  {
    img: <ImgPerkSEO />,
    title: "SEO Optimizing",
    text: "Our websites are developed using cutting edge technology, which allows us to build insanely performant websites and web applications. Trust us, you’ll see the difference!"
  },
  {
    img: <ImgPerkGrow />,
    title: "Plan Your Course",
    text: "As of 2017, mobile devices generate more than 50% of all website traffic. Its Important that your website be formatted and easy to view on any platform!"
  },
  {
    img: <ImgPerk4D />,
    title: "Our 4D Process",
    text: <LinkStyled1 to="/process">Check it Out</LinkStyled1>
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
            {typeof perk.text === "string" && (
              <Text1
                css={css`
                  display: inline-block;
                  color: ${_configSite.colorOffWhite};
                `}
              >
                {perk.text}
              </Text1>
            )}
            {typeof perk.text !== "string" && (
              <div css={css`
                  width: 100%;
                  text-align: center;
                `}
              >
                {perk.text}
              </div>
            )}
          </ItemPerk>
        ))}
      </ListPerk>
    </Wrapper>
  </Container>
);
