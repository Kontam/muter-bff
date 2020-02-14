import TwAppsHeaderComponent from "..";
import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { createStore } from "redux";
import reducer from "../../../../../redux/reducers";
import { Provider } from "react-redux";
import { UserInfo } from "../../../../../redux/reducers/resource/userInfo";

export default {
  title: "TwApps/organisms/TwAppsHeader",
  decorators: [withKnobs]
};

const mockInitialState: {userInfo: UserInfo} = {
    userInfo: {
        user_id: "123",
        user_name: "テストユーザー",
        profile_image_url_https: "https://pbs.twimg.com/profile_images/1058576678081851392/LdKwoFXJ.jpg",
        screen_name: "テストユーザー",
    }
};
const store = createStore(reducer, mockInitialState);

// TODO: Providerで囲うことで子コンポーネントのuseSelectorに対応する
export const TwAppsHeader = () => (
    <Provider store={store}>
      <TwAppsHeaderComponent />
    </Provider>
);
