/** @jsx jsx */
import styled from "@emotion/styled";
import _configSite from "../../_configSite";

export default styled.section`
  position: relative;
  padding: ${_configSite.padding * 4}px ${_configSite.padding}px;
  width: calc(100% - ${_configSite.padding * 2}px);
  max-width: 1440px;
  margin: 0 auto;
  @media (max-width: 1280px) {
    padding: ${_configSite.padding * 3}px ${_configSite.padding}px;
  }
  @media (max-width: 992px) {
    padding: ${_configSite.padding * 2}px ${_configSite.padding}px;
  }
`;
