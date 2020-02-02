import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import TweetComponent from '../index';
// import { Welcome } from '@storybook/react/demo';

export default {
  title: 'atoms/Tweet',
  decorators: [withKnobs],
  component: TweetComponent,
  parameters :{
    componentSubtitle: "ツイッター",
  },
};

/**
 * わk
 */
export const Tweet = () => (
  <TweetComponent mutedTweet={
    {
      tweet_id: 123,
      tweet_url: text("ツイートURL", "https://twitter.com/cha_han5656"),
      tweet_text: text("ツイート本文", "ツイートの本文が表示されます"),
      retweet_count: number("リツイート数", 11),
      favorite_count: number("ファボの数", 10),
      media_infos: []
  }
  }>a</TweetComponent>
)

// toStorybook.story = {
//   name: 'to Storybook',
// };
