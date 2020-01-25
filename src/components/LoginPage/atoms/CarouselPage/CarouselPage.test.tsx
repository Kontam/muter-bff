import { shallow } from 'enzyme';
import * as React from 'react';

import CarouselPage from '../CarouselPage';
import { CarouselInfo } from '../../auganisms/Carousel/Carousel';

import { adapter } from '../../../../modules/testUtils';
adapter();

const testCarouselInfo: CarouselInfo = {
  src: "img/slides/muter-slide1.jpg",
  alt: "Twitterのミュートを有効活用しましょう",
};
const wrapper = shallow(<CarouselPage carouselInfo={testCarouselInfo} />);


describe("カルーセルの内部画像テスト", () => {
  const CarouselImg = wrapper.find("Img");

  test('子コンポーネントが存在すること', () => {
    expect(CarouselImg.length).toBe(1);
  });

  const props = CarouselImg.props();
  test('srcがセットされていること', () => {
    expect(props.src).toEqual(testCarouselInfo.src);
  });

  test('altがセットされていること', () => {
    expect(props.alt).toEqual(testCarouselInfo.alt);
  });
});

