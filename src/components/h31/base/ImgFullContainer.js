/* eslint-disable prettier/prettier */
import styled from "@emotion/styled";

// Styled Components
export default styled.section`
  position: absolute;
  width: 100%;
  overflow-x: hidden;

  @media (max-width: 992px) {
    .gatsby-image-wrapper {
      width: 125%;
      left: -12.5%;
    }
  }
  @media (max-width: 600px) {
    .gatsby-image-wrapper {
      width: 175%;
      left: -37.5%;
    }
  }
`;
