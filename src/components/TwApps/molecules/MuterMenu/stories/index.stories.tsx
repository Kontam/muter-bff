import MuterMenuComponent from "../MuterMenu";
import React from "react";
import { withKnobs, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";

// next/linkがreact-test-rendererでエラーになるのでstoryshotsから外している
export default {
  title: "TwApps/molecules/MuterMenu",
  decorators: [withKnobs]
};  

export const MuterMenu = () => (
  <MuterMenuComponent
    isOpened={boolean("メニュー表示", true)}
    onMenuButtonClick={action("onMenuButtonClick")}
  />
);
