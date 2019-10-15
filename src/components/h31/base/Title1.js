/** @jsx jsx */
import styled from "@emotion/styled";
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled.h1`
  ${_configBase}

  line-height: 1;
  font-size: 11.6rem;
  font-family: ${_configSite.fontPrimary};
  font-weight: bold;

  text-transform: uppercase;

  background: -webkit-linear-gradient(45deg, #00bedb 0%, #0094d1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  color: #00bedb;

  @media (max-width: 1100px) {
    font-size: 9rem;
  }
  @media (max-width: 880px) {
    font-size: 7rem;
  }
  @media (max-width: 630px) {
    font-size: 4rem;
  }
`;
