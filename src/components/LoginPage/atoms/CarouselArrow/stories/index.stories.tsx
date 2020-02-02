import CarouselArrowComponent from '../';
import styled from 'styled-components';
import { withKnobs } from '@storybook/addon-knobs';
import LoginConst from '../../../LoginConst';
import { action } from '@storybook/addon-actions';
const arrowLeft = require('../../../../../../img/slick/slick-arrow-left.svg');
const arrowRight = require('../../../../../../img/slick/slick-arrow-right.svg');


export default {
    title: 'LoginPage/atoms/CarouselArrow',
    decorators: [withKnobs],
}

const Wrapper = styled.div`
    background-color: lightblue;
    height: 300px;
    width: 100%;
`;

export const CarouselArrowLeft = () => (
    <Wrapper>
        <CarouselArrowComponent
            imgSrc={arrowLeft}
            direction={LoginConst.ARROW_DIRECTION_LEFT}
            onClick={action("CarouselArrowLeftClicked")}
        />
    </Wrapper>
);

export const CarouselArrowRight = () => (
    <Wrapper>
        <CarouselArrowComponent
            imgSrc={arrowRight}
            direction={LoginConst.ARROW_DIRECTION_RIGHT}
            onClick={action("CarouselArrowRightClicked")}
        />
    </Wrapper>
);