import TweetListComponent from "..";
import React from "react";
import { withKnobs, select } from "@storybook/addon-knobs";
import TwAppsConst from "../../../../TwApps/TwAppsConst";
import { TweetsInfo } from "../../../../../redux/reducers/resource/mutedUsers";

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
  title: "TwApps/molecules/TweetList",
  decorators: [withKnobs]
};

const tweets_info: TweetsInfo[] = [
    {
        tweet_id: 122746563693772800,
        tweet_url:
            "http://localhost:6006",
        tweet_text:
            "私が日光アレルギー無くて男だったら絶対海軍入ってた\n潜水艦乗りたかった",
        retweet_count: 0,
        favorite_count: 2,
        media_infos: []
    },
    {
        tweet_id: 12270465636972801,
        tweet_url:
            "http://localhost:6006",
        tweet_text:
            "ツイートのテスト文章です",
        retweet_count: 0,
        favorite_count: 2,
        media_infos: []
    }
];

const showTweetsOptions = [
    TwAppsConst.SHOW_TWEETS_INITIAL,
    TwAppsConst.SHOW_TWEETS_OPENED,
    TwAppsConst.SHOW_TWEETS_CLOSED,
];
      

export const TweetList = () => (
  <TweetListComponent
    showTweets={select("ツイート表示",showTweetsOptions, TwAppsConst.SHOW_TWEETS_OPENED)}
    mutedTweets={tweets_info}
  />
);
