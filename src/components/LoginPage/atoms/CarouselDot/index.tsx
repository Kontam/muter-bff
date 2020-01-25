import React from "react";
import styled from "styled-components";

import { MyThemeProps } from "../../../../modules/styles/theme";

const CarouselDot = () => {
  return (
    <Dot />
  );
};

export default CarouselDot;

const Dot = styled.div<any>`
  :before {
    border: solid 3px ${({ theme }:MyThemeProps<{}>) => theme.colors.basicWhite};
    display: block;
    border-radius: 50%;
    content: '';
    height: 15px;
    opacity: 1;
    width: 15px;
  }
`;
