import React from 'react';
import styled from 'styled-components';
import ToggleMuteButtonComponent from '..';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'TwApps/atoms/ToggleMenuButton',
  decorators: [withKnobs],
}

const Wrapper = styled.div`
  margin-top: 50px;
  width: 200px;
`;

export const ToggleMuteButton = () => (
  <Wrapper>
    <ToggleMuteButtonComponent
      isMenuOpened={boolean('メニュー表示中', true)}
      onClick={action('toggle Menu')}
    />
  </Wrapper>
);
