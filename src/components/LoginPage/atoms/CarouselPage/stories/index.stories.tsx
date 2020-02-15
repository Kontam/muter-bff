import React from "react";
import { withKnobs } from '@storybook/addon-knobs';
import CarouselPageComponent from '../index';

const firstSlide = require('../../../../../../img/slides/muter-slide1.jpg');

export default {
  title: 'LoginPage/atoms/CarouselPage-DontTest',
  decorators: [withKnobs],
}

const carouselInfo = {
        src: firstSlide,
        alt: "テストのalt属性1"
    };

export const ShowTweetButton = () => (
    <CarouselPageComponent
       carouselInfo={carouselInfo} 
    />
);

