import React from "react";
import { css, Global } from "@emotion/core";
import styled from "@emotion/styled";
import TransitionLink from "gatsby-plugin-transition-link";

// Config
import _configSite from "../../_configSite";

// Images
import ImgLogo from "../../images/ImgLogo";
import MainLink from "../base/MainLink";
import MainLinkButton from "../base/MainLinkButton";
import AnimeSiteBackground from "../animations/AnimeSiteBackground";

// Styled Components
const MobileContainer = styled.div`
  display: none;
  justify-content: space-between;
  box-sizing: content-box;
  width: calc(100% - 60px);
  padding: 30px;

  @media (max-width: ${_configSite.md}px) {
    display: flex;
  }
  @media (max-width: 600px) {
    padding: 15px;
    width: calc(100% - 30px);
  }
`;

const MobileButtonOpen = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;
`;

const MobileButtonClose = styled.button`
  position: absolute;
  top: 30px;
  right: 30px;
  width: 40px;
  height: 40px;
  padding: 0 0 0 5px;
  margin: 0;
  border: none;
  background: none;
  cursor: pointer;

  @media (max-width: 600px) {
    top: 15px;
    right: 15px;
  }
`;

const Container = styled.nav`
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  background: linear-gradient(180deg, #0094d1 0%, #49e9ff 100%);

  padding: ${_configSite.padding}px;
  height: 100vh;
  width: 100vw;
  margin: 0 auto;

  box-sizing: border-box;
  transition: 0.5s;
`;

const WrapperLogo = styled(TransitionLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 300px;

  text-decoration: none;

  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;

const ListLinks = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  padding: 0;
  margin: 90px 0 0 0;
  @media (max-width: 700px) {
    margin: 30px 0 0 0;
  }
`;

const ItemLink = styled.li`
  display: flex;
  align-items: center;
  margin: 20px 0px;
`;

const ContainerClouds = styled.div`
  position: absolute;
  width: 100vw;
  height: 25vh;
  bottom: 0;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0,
    rgba(255, 255, 255, 0.85) 6vw,
    rgba(255, 255, 255, 0.8) 100%
  );

  @media (max-width: 992px) {
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0px,
      rgba(255, 255, 255, 0.85) 8vw,
      rgba(255, 255, 255, 0.8) 100%
    );
  }
  @media (max-width: 600px) {
    background: linear-gradient(
      rgba(255, 255, 255, 0) 0,
      rgba(255, 255, 255, 0.825) 12vw,
      rgba(255, 255, 255, 0.8) 100%
    );
  }
`;

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      menuVisible: false
    };

    this.hideMenu = this.hideMenu.bind(this);
  }

  hideMenu() {
    const { menuVisible } = this.state;
    this.setState({ menuVisible: !menuVisible });
  }

  render() {
    const { path } = this.props;
    const { menuVisible } = this.state;

    return (
      <MobileContainer>
        {menuVisible && (
          <Global
            styles={css`
              body {
                overflow: hidden;
              }
            `}
          />
        )}
        <WrapperLogo
          to="/"
          entry={{
            delay: 1.5,
            zIndex: 1
          }}
          exit={{
            length: 2,
            zIndex: 1
          }}
        >
          <div
            css={css`
              width: 125px;
              margin-bottom: 10px;
              @media (max-width: 992px) {
                width: 100px;
              }
              @media (max-width: 600px) {
                width: 75px;
              }
            `}
          >
            <ImgLogo />
          </div>
        </WrapperLogo>

        <MobileButtonOpen onClick={() => this.hideMenu()}>
          <svg
            width="32"
            height="32"
            viewBox="0 0 16 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 12H11V10H1V12ZM0.875 7H18.125V5H0.875V7ZM0.875 0V2H18.125V0H0.875Z"
              fill="white"
            />
          </svg>
        </MobileButtonOpen>

        <Container
          css={css`
            opacity: ${menuVisible ? "1" : "0"};
            pointer-events: ${menuVisible ? "normal" : "none"};
          `}
        >
          <WrapperLogo
            to="/"
            entry={{
              delay: 1.5,
              zIndex: 1
            }}
            exit={{
              trigger: () => this.hideMenu(),
              length: 2,
              zIndex: 1
            }}
          >
            <div
              css={css`
                position: absolute;
                top: 30px;
                left: 30px;
                width: 125px;
                margin-bottom: 10px;

                @media (max-width: 992px) {
                  width: 100px;
                }
                @media (max-width: 600px) {
                  width: 75px;
                  top: 15px;
                  left: 15px;
                }
              `}
            >
              <ImgLogo />
            </div>
          </WrapperLogo>

          <MobileButtonClose onClick={() => this.hideMenu()}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0 1.41421L12.1976 13.6118L13.6118 12.1976L1.41421 0L0 1.41421V1.41421ZM0.819097 12.391L2.23331 13.8052L14.4309 1.60757L13.0167 0.193359L0.819097 12.391Z"
                fill="white"
              />
            </svg>
          </MobileButtonClose>
          <ListLinks>
            {_configSite.mainNav.map(link => (
              <ItemLink>
                <MainLink
                  to={link.to}
                  activeClassName="current-page"
                  exit={{
                    trigger: () => this.hideMenu(),
                    length: path !== "/" ? 0.5 : 2,
                    zIndex: 1
                  }}
                  entry={{
                    delay: path !== "/" ? 0.5 : 1.5,
                    zIndex: 1
                  }}
                >
                  {link.name}
                </MainLink>
              </ItemLink>
            ))}

            <ItemLink>
              <MainLinkButton
                to="/free-consultation"
                activeClassName="current-page-free-consultation"
                entry={{
                  trigger: () => this.hideMenu(),
                  delay: path !== "/" ? 0.5 : 1.5,
                  zIndex: 1
                }}
                exit={{
                  length: path !== "/" ? 0.5 : 2,
                  zIndex: 1
                }}
              >
                Free Consultation
              </MainLinkButton>
            </ItemLink>
          </ListLinks>
          <ContainerClouds>
            <AnimeSiteBackground />
          </ContainerClouds>
        </Container>
      </MobileContainer>
    );
  }
}
