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
// import ImgPerk4D from "../../images/perks/ImgPerk4D";
import LinkStyled1 from "../base/LinkStyled1";
import ImgProcessDeploy from "../../images/processes/ImgProcessDeploy";
// import LinkInlineText from "../base/LinkInlineText";

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
    title: "Fast, Modern Technology",
    text: "We utilize modern frameworks like Next.js and Node to deliver faster applications that are  ready to scale. Keeping up on the latest web technology is essential not only for application preformance, but also for security and scalability."
  },
  {
    img: <ImgPerkMobile />,
    title: "Mobile Ready",
    text: "Thanks to advancements in browser caching technology, web applications can be utilized like native mobile applications through Progressive Web Apps (PWA). This means applications can be built faster for less money, and are easier to maintain than native mobile apps from the app store."
  },
  {
    img: <ImgPerkScale />,
    title: "Built To Scale",
    text: "From inception to enterprise, we can build apps ranging from personal use tools, to membership portals that host millions of users! We also commit to being agile in our approach, which allows us to adjust our development approach based on an applications scope and scale."
  },
  {
    img: <ImgProcessDeploy />,
    title: "Long Term Support",
    text: "We commit to supporting your application for the years to come through maintenance, feature planning, infrastructure updates, verion bumps, and more! We like to stay connected with our clients and support the apps we build for them!"
  },
  {
    img: <ImgPerkGrow />,
    full: true,
    title: "Check Out Our Apps!",
    text: <LinkStyled1 name="applications portfolio link" to="/web-applications">Applications</LinkStyled1>
  },
  {
    img: <ImgPerkSEO />,
    full: true,
    title: "Check Out Our Websites!",
    text: <LinkStyled1 name="websites portfolio link" to="/websites">Websites</LinkStyled1>
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
                {!perk.full && (
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
                {perk.full && (
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
