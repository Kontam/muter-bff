import React from 'react';
import UnmuteButtonComponent from '../';
import { action } from '@storybook/addon-actions';
import { withKnobs, boolean } from '@storybook/addon-knobs';

export default {
  title: 'atoms/UnmuteButton',
  decorators: [withKnobs],
}

export const PC = () => (
  <>
    <h2>SPサイズでは何も表示されない</h2>
    <UnmuteButtonComponent
      onClick={action('UnmuteButton Clicked')}
      muted={boolean("ミュート中", false)}
      isForMobile={false}
    />
  </>
)

export const Mobile = () => (
  <>
    <h2>PCサイズでは何も表示されない</h2>
    <UnmuteButtonComponent
      onClick={action('UnmuteButton Clicked')}
      muted={boolean("ミュート中", true)}
    />
  </>
)
