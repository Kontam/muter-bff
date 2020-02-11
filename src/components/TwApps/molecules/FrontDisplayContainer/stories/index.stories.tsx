import FrontDisplayContainerComponent from '..';
import React from 'react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
    title: "TwApps/molecules/FrontDisplayContainer",
    decorators: [withKnobs],
}

export const FrontDisplayContainer = () => (
    <FrontDisplayContainerComponent
        isLoading={boolean("isLoading", true)}
    />
);