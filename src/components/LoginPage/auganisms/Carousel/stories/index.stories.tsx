import React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import CarouselComponent from '../index';

// slickがwindowを参照していたりしてjest環境下で正しく動作していないようなので
// DontTestで回避する
export default {
  title: 'LoginPage/auganisms/Carousel-DontTest',
  decorators: [withKnobs],
}

// preview-head.htmlにcssを読み込ませないと動作しない
export const Carousel = () => (
    <div>
        <CarouselComponent />
    </div>
);

