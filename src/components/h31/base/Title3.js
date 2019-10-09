/** @jsx jsx */
import styled from "@emotion/styled";
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled.h3`
  ${_configBase}

  line-height: 2;
  font-size: 1.5rem;
  font-family: ${_configSite.fontPrimary};
  font-weight: bold;

  text-transform: uppercase;
  color: ${_configSite.colorTertiary};
`;
