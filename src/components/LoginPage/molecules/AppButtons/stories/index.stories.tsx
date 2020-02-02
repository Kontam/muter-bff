import AppButtonsComponent from '..';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import TwAppsConst from '../../../../TwApps/TwAppsConst';

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
    title: "TwApps/molecules/AppButtons-DontTest",
    decorators: [withKnobs],
}

export const AppButtons = () => (
    <AppButtonsComponent
        appName={TwAppsConst.APPNAME_MUTER}
    />
);