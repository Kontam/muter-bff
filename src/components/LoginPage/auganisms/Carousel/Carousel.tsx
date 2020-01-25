import styled from 'styled-components';

import LoginConst from '../../LoginConst';
import CarouselArrow from '../../atoms/CarouselArrow'
import CarouselDot from '../../atoms/CarouselDot';

//画像のインポート
const firstSlide = require('../../../../../img/slides/muter-slide1.jpg');
const scondSlide = require('../../../../../img/slides/muter-slide2.jpg');
const thirdSlide = require('../../../../../img/slides/muter-slide3.jpg');
const fourthSlide = require('../../../../../img/slides/muter-slide4.jpg');
const arrowLeft = require('../../../../../img/slick/slick-arrow-left.svg');
const arrowRight = require('../../../../../img/slick/slick-arrow-right.svg');

export interface CarouselInfo {
  src: string;
  alt: string;
};

// カルーセルの情報
export const carouselInfos :CarouselInfo[]= [
  {
    src: firstSlide,
    alt: "Twitterのミュートを有効活用しましょう",
  },
  {
    src: scondSlide,
    alt: "あなたがミュートしたユーザーを一覧表示 その場でミュート解除もできます",
  },
  {
    src: thirdSlide,
    alt: "「チラ見」機能で、その人のツイートをいくつか見ることができます",
  },
  {
    src: fourthSlide,
    alt: "安全なアプリです。あなたのアカウントからツイートすることは決してありません",
  },
];

// react-slickの設定値
export const slickConfig = {
  infinite: true,
  dots: true,
  arrows: true,
  dragable: true,
  nextArrow: <CarouselArrow imgSrc={arrowLeft} direction={LoginConst.ARROW_DIRECTION_LEFT} />,
  prevArrow: <CarouselArrow imgSrc={arrowRight} direction={LoginConst.ARROW_DIRECTION_RIGHT} />,
  appendDots: (dots :any) => <DotList>{dots}</DotList>,
  customPaging: () => CarouselDot(),
  responsive: [{
    breakpoint: LoginConst.BREAKPOINT_TABLET,
    settings: {
      slideToShow: 1,
      slideToScroll: 1,
      arrows: false,
    },
  },
  {
    breakpoint: LoginConst.BREAKPOINT_SP,
    settings: {
      slideToShow: 1,
      slideToScroll: 1,
      fade: false,
      arrows: false,
    },
  }],
}

// ページネーションドットを囲むulタグ
const DotList = styled.ul`
  bottom: -50px;
  width: 100vw;
`;
