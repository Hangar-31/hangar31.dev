/** @jsx jsx */
import styled from "@emotion/styled";
import _configSite from "../../_configSite";

export default styled.section`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 15px;

  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 30px;
  box-sizing: border-box;

  @media (max-width: ${_configSite.xl}px) {
  }
  @media (max-width: ${_configSite.lg}px) {
  }
  @media (max-width: ${_configSite.md}px) {
    padding: 15px;
  }
  @media (max-width: ${_configSite.sm}px) {
  }
  @media (max-width: ${_configSite.xs}px) {
  }
`;
