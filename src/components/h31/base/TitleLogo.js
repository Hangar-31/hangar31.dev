/** @jsx jsx */
import styled from "@emotion/styled";
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled.p`
  ${_configBase}

  line-height: 1;
  font-size: 1.5rem;
  font-family: ${_configSite.fontPrimary};
  font-weight: regular;
  text-transform: uppercase;
  white-space: nowrap;

  color: ${_configSite.colorWhite};
`;
