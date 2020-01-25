import React from "react";
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ShowTweetButtonComponent from '../';
import TwAppsConst from "../../../TwAppsConst";

export default {
  title: 'atoms/ShowTweetButton',
  decorators: [withKnobs],
}

const showTweetsOptions = [
  TwAppsConst.SHOW_TWEETS_INITIAL,
  TwAppsConst.SHOW_TWEETS_OPENED,
  TwAppsConst.SHOW_TWEETS_CLOSED,
]

export const ShowTweetButton = () => (
  <ShowTweetButtonComponent
    showTweets={select("状態", showTweetsOptions, TwAppsConst.SHOW_TWEETS_INITIAL, "group1")}
    onClick={action('button-click')}
  />
);

