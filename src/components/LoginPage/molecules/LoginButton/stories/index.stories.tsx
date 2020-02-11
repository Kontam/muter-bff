import LoginButtonComponent from '..';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import LoginConst from '../../../LoginConst';

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
    title: "LoginPage/molecules/LoginButton-DontTest",
    decorators: [withKnobs],
}

export const LoginButton = () => (
    <LoginButtonComponent
        href={"http://localhost:6006" + LoginConst.LOGIN_SLAG}
    />
);