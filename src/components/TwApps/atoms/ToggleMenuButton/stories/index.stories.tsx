import React from 'react';
import ToggleMuteButtonComponent from '..';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'atoms/ToggleMuteButton',
  decorators: [withKnobs],
}

export const ToggleMuteButton = () => (
  <ToggleMuteButtonComponent
    isMenuOpened={boolean('メニュー表示中', true)}
    onClick={action('toggle Menu')}
  />
);
