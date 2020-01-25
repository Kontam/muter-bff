import * as React from 'react';
import styled from 'styled-components';

import { mediaQ } from '../../../../commonModules/media';
import { CarouselInfo } from "../../auganisms/Carousel/Carousel";

interface CarouselPageProps {
  carouselInfo :CarouselInfo;
}

const CarouselPage:React.FC<CarouselPageProps> = ({carouselInfo} :CarouselPageProps) => (
  <div>
    <Img
      src={carouselInfo.src}
      alt={carouselInfo.alt}
      className="loginCarousel__slideImg"
    />
  </div>
);

CarouselPage.displayName = "CarouselPage";

export default CarouselPage;

const Img = styled.img`
    max-height: 90vh;
    width: 100vw;
    ${mediaQ.pc}{
      margin: 0 auto;
      max-width: 1200px;
      width: auto;
    }
    ${mediaQ.tablet}{
      max-width: 90%;
    }
`;

Img.displayName = "Img";

export const StyledImg = Img;
