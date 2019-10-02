/** @jsx jsx */
import styled from "@emotion/styled";
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled.p`
  ${_configBase}

  line-height: 1;
  font-size: 0.75rem;
  font-family: ${_configSite.fontSecondary};
  font-weight: regular;

  color: ${_configSite.colorWhite};
`;
