/** @jsx jsx */
import styled from "@emotion/styled";
import _configBase from "./_configBase";
import _configSite from "../../_configSite";

export default styled.p`
  ${_configBase}
  margin-bottom: 30px;

  line-height: 2;
  font-size: 1rem;
  font-family: ${_configSite.fontSecondary};
  font-weight: lighter;

  color: ${_configSite.colorBlack};
`;
