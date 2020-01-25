import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
//@ts-ignore
import Slider from 'react-slick';

import CarouselPage from '../../atoms/CarouselPage';
import CarouselArrows from '../../molecules/CrouselArrows';
import StyleConst from '../../styles/define';

import { CarouselInfo, carouselInfos, slickConfig } from './Carousel';


// =============================================
// slick-carouselを使用しているためstyled-component化できない部分がある
// 後の課題として、ひとまずscssファイルとクラス名付きのjsxを残す
// =============================================
const Carousel = () => {
    const [hidden, setHidden] = useState(true);

    // slickのカルーセル化の処理が終わるまで隠す
    useEffect(() => {
      setHidden(false);
    },[]);



    return (
      <Container hidden={hidden}>
        <Slider {...slickConfig}>
          {carouselInfos.map((carouselInfo :CarouselInfo, index) =>
            <CarouselPage carouselInfo={carouselInfo} key={index} />
          )}
        </Slider>
        <CarouselArrows />
      </Container>
    );
}

const Container = styled.div`
  background-color: ${StyleConst.muterGreen};
  padding: 50px 0 120px;
  position: relative;
`;



export default Carousel;
