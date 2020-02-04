import React from "react";
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import CarouselDotComponent from '../index';

export default {
  title: 'LoginPage/atoms/CarouselDot',
  decorators: [withKnobs],
}

const Wrapper = styled.div`
    background-color: lightblue;
    height: 300px;
    padding: 50px;
    width: 100%;
`;

export const ShowTweetButton = () => (
  <Wrapper>
    <CarouselDotComponent />
  </Wrapper>
);

