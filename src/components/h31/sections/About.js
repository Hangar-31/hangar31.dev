/* eslint-disable prettier/prettier */
import React from "react";
import { css } from "@emotion/core";

// Components
import Container from "../layouts/Container";
import Wrapper from "../layouts/Wrapper";
import Title2 from "../base/Title2";
import Text1 from "../base/Text1";

export default () => (
  <Container>
    <Wrapper
      css={css`
        max-width: 992px;
        padding-bottom: 0;
      `}
    >
      <Title2>
        RAJDHANI REGULAR 30PT ALL CAPS - HEADERS
      </Title2>
      <Text1>
        Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit elementum diam iaculis imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pulvinar ultrices tortor, a tincidunt risus fermentum in. Nam maximus nunc quam. Pellentesque at posuere ipsum. Etiam volutpat faucibus eros, a sagittis nulla cursus sed. Mauris eget nisi vestibulum, feugiat lacus vitae, dictum nisl.
      </Text1>
      <div css={css`
          height: 300px;
          width: 100%;
          background: grey;
          margin-bottom: 30px;
        `}
      />
      <Text1>
        Turning personal visions into amazing digital experiences. Our goal is to bring you and your audience closer, through creatively personal design, and seriously powerful technology! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non velit elementum diam iaculis imperdiet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus pulvinar ultrices tortor, a tincidunt risus fermentum in. Nam maximus nunc quam. Pellentesque at posuere ipsum. Etiam volutpat faucibus eros, a sagittis nulla cursus sed. Mauris eget nisi vestibulum, feugiat lacus vitae, dictum nisl.
      </Text1>
    </Wrapper>
  </Container>
);
