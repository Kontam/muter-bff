import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//@ts-ignore
import Slider from 'react-slick';

import CarouselPage from '../../atoms/CarouselPage';
import CarouselArrows from '../../molecules/CrouselArrows';
import StyleConst from '../../styles/define';

import { CarouselInfo, carouselInfos, slickConfig } from './Carousel';
import { mediaQ } from '../../../../modules/styles/media';

const Container = styled.div`
  background-color: ${StyleConst.muterGreen};
  padding: 50px 0 120px;
  position: relative;
  ${mediaQ.pc} {
    min-height: 110vh;
  }
`;

// =============================================
// slick-carouselを使用しているためstyled-component化できない部分がある
// headタグの中でCDNでcssをロードしてスタイルを当てている
// =============================================
const Carousel = () => {
    return (
      <Container>
        <Slider {...slickConfig}>
          {carouselInfos.map((carouselInfo :CarouselInfo, index) =>
            <CarouselPage carouselInfo={carouselInfo} key={index} />
          )}
        </Slider>
        <CarouselArrows />
      </Container>
    );
}

export default Carousel;
