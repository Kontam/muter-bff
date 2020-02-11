import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TwAppsConst from '../../TwAppsConst';
import { requestUnmuteUser, MutedUser } from '../../../../redux/reducers/resource/mutedUsers';
import { RootState } from '../../../../redux/reducers';
import ListedUser from './ListedUser';

type ListedUserProps = {
  mutedUserInfo: MutedUser
  index: number
  isUserMuted: boolean
};

export type ShowTweets = typeof TwAppsConst.SHOW_TWEETS_INITIAL
  | typeof TwAppsConst.SHOW_TWEETS_CLOSED
  | typeof TwAppsConst.SHOW_TWEETS_OPENED;

const stateSelector = (state: RootState) => state.basePath;

const ListedUserContainer = ({ mutedUserInfo, index, isUserMuted } :ListedUserProps) => {
  let [showTweets, setShowTweets]:[ShowTweets, Function] = useState(TwAppsConst.SHOW_TWEETS_INITIAL);
  const baseUrl = useSelector(stateSelector);
  const dispatch = useDispatch();

  const handleUnmuteClicked = () => {
    const accessPath = isUserMuted ?
      TwAppsConst.UNMUTE_USER_ENDPOINT : TwAppsConst.MUTE_USER_ENDPOINT;

    // 対象ユーザーがミュートか非ミュートかでエンドポイントが変わる
    const endpoint = `${baseUrl}${accessPath}/${mutedUserInfo.muted_user.screen_name}`;
    requestUnmuteUser(endpoint, mutedUserInfo.muted_user.screen_name, index, dispatch);
  }

  /**
   * 「ツイートを見る」ボタンクリック時の動作
   * ユーザーのツイート数とツイートリストの高さをステートに保存する
   */
  const handleShowTweetsClicked = () => {
    if (showTweets === TwAppsConst.SHOW_TWEETS_OPENED) {
      setShowTweets(TwAppsConst.SHOW_TWEETS_CLOSED);
      return;
    }
    setShowTweets(TwAppsConst.SHOW_TWEETS_OPENED);
  }

    return (
      <ListedUser
        mutedUserInfo={mutedUserInfo}
        isUserMuted={isUserMuted}
        handleUnmuteClicked={handleUnmuteClicked}
        handleShowTweetsClicked={handleShowTweetsClicked}
        showTweets={showTweets}
      />
    )

}

export default ListedUserContainer;
