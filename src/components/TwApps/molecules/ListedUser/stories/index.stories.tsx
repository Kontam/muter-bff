import ListedUserComponent from "../ListedUser";
import React from "react";
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import TwAppsConst from "../../../../TwApps/TwAppsConst";
import {
  MutedUser,
} from "../../../../../redux/reducers/resource/mutedUsers";
import { action } from "@storybook/addon-actions";

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
  title: "TwApps/molecules/ListedUser",
  decorators: [withKnobs]
};

const testMutedUser: MutedUser = {
    muted_user: {
        user_id: 980672195457294300,
        user_name: "くらら太郎",
        screen_name: "culalaTP",
        user_url: null,
        profile_image_url_https:
        "https://pbs.twimg.com/profile_images/1166011350981545990/VRiZCTi8.jpg",
        muted: true
    },
    tweets_info: [
        {
        tweet_id: 1227046563693772800,
        tweet_url:
            "https://twitter.com/culalaTP/status/1227046563693772801",
        tweet_text:
            "私が日光アレルギー無くて男だったら絶対海軍入ってた\n潜水艦乗りたかった",
        retweet_count: 0,
        favorite_count: 2,
        media_infos: []
        }
    ]
}

const showTweetsOptions = [
    TwAppsConst.SHOW_TWEETS_INITIAL,
    TwAppsConst.SHOW_TWEETS_OPENED,
    TwAppsConst.SHOW_TWEETS_CLOSED,
];
      

export const ListedUser = () => (
  <ListedUserComponent
    mutedUserInfo={testMutedUser}
    isUserMuted={boolean("ミュート状態", true)}
    handleUnmuteClicked={action("handleUnmuteClicked")}
    handleShowTweetsClicked={action("handleShowTweetsClicked")}
    showTweets={select("ツイート表示",showTweetsOptions, TwAppsConst.SHOW_TWEETS_INITIAL)}
  />
);
