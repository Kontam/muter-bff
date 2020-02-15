import UserListComponent from "../UserList";
import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import {
  MutedUser,
} from "../../../../../redux/reducers/resource/mutedUsers";
import { createStore } from "redux";
import reducer from "../../../../../redux/reducers";
import { Provider } from "react-redux";

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
  title: "TwApps/molecules/UserList",
  decorators: [withKnobs]
};

const testMutedUsers: MutedUser[] = [{
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
        tweet_id: 1227046563693700,
        tweet_url:
            "https://twitter.com/801",
        tweet_text:
            "私が日光アレルギー無くて男だったら絶対海軍入ってた\n潜水艦乗りたかった",
        retweet_count: 0,
        favorite_count: 2,
        media_infos: []
        },
        {
        tweet_id: 12270465636937801,
        tweet_url:
            "https://twitter.com/772801",
        tweet_text:
            "テストツイートです",
        retweet_count: 0,
        favorite_count: 2,
        media_infos: []
        },
    ]
}];

const mockInitialState = {
    basePath: 'http://localhost:6006',
};
const store = createStore(reducer, mockInitialState);

// TODO: Providerで囲うことで子コンポーネントのuseSelectorに対応する
export const UserList = () => (
    <Provider store={store}>
      <UserListComponent
        mutedUsers={testMutedUsers}
        muted={[true]}
        isMuterMenuOpened={boolean("メニュー開閉状態", false)}
      />
    </Provider>
);
