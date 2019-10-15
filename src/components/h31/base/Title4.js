/** @jsx jsx */
import styled from "@emotion/styled";
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled.h4`
  ${_configBase}

  line-height: 1;
  font-size: 1.375rem;
  font-family: ${_configSite.fontSecondary};
  font-weight: 500;

  color: #216789;

  @media (max-width: 1100px) {
    font-size: 1.25rem;
  }
  @media (max-width: 880px) {
    font-size: 1.125rem;
  }
  @media (max-width: 630px) {
    font-size: 1rem;
  }
`;
