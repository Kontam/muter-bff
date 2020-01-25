import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { mediaQ } from '../../../../modules/styles/media';
import UnmuteButton from '../../atoms/UnmuteButton';
import ShowTweetsButton from '../../atoms/ShowTweetsButton';
import MutedTweetList from '../TweetList';
import TwAppsConst from '../../TwAppsConst';
import { requestUnmuteUser, MutedUser } from '../../../../redux/reducers/resource/mutedUsers';
import { MyThemeProps } from '../../../../modules/styles/theme';
import { RootState } from '../../../../redux/reducers';
import { setIsMuterMenuOpened } from '../../../../redux/reducers/page/isMuterMenuOpened';

const Item = styled.li<any>`
  list-style: none;
  width: 100%;
`;

const createTopContainer = (isMuted :boolean) => styled.div`
  align-items: center;
  background: ${isMuted
  ? ({ theme } : MyThemeProps<{}>) => theme.colors.basicWhite
  : ({ theme } : MyThemeProps<{}>) => theme.colors.unmutedUserBg
  };
  display: flex;
  height: 95px;
  transition: .5s;
  ${mediaQ.pc} {
    height: 190px;
  }
`;

const BottomContainer = styled.div`
  display: flex;
`;

const Icon = styled.img`
  border-radius: 50%;
  height: 70px;
  margin: 0 40px 0 10px;
  width: 70px;
  ${mediaQ.pc} {
    height: 140px;
    width: 140px;
    margin: 0 70px 0 40px;
  }
`;

const UserNameContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  font-weight: bold;
  height: 100%;
  justify-content: center;
  max-width: 70%;
  padding-top: 8px;
  ${mediaQ.pc} {
    width: 420px;
  }
`;

const UserName = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
  ${mediaQ.pc} {
    font-size: 1.5rem;
    margin-bottom: 17px;
    line-height: 1.9rem;
    padding-right: 30px;
  }
`;

type ListedUserProps = {
  mutedUserInfo: MutedUser
  index: number
  isUserMuted: boolean
};

export type ShowTweets = typeof TwAppsConst.SHOW_TWEETS_INITIAL
  | typeof TwAppsConst.SHOW_TWEETS_CLOSED
  | typeof TwAppsConst.SHOW_TWEETS_OPENED;

const stateSelector = (state: RootState) => state.basePath;

const ListedUser = ({ mutedUserInfo, index, isUserMuted } :ListedUserProps) => {
  let [showTweets, setShowTweets]:[ShowTweets, Function] = useState(TwAppsConst.SHOW_TWEETS_INITIAL);
  const baseUrl = useSelector(stateSelector);
  const mutedUser = mutedUserInfo.muted_user;
  const dispatch = useDispatch();
  const listedUserRef = React.createRef<HTMLElement>();

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

  const TopContainer = createTopContainer(isUserMuted);

    return (
      <Item ref={listedUserRef}>
        <TopContainer>
          <Icon src={mutedUser.profile_image_url_https} alt="icon" />
          <UserNameContainer>
            <UserName>{mutedUser.user_name}</UserName>
            <UserName>
              @
              {mutedUser.screen_name}
            </UserName>
          </UserNameContainer>
          <UnmuteButton
            isForMobile={false}
            muted={isUserMuted}
            onClick={() => { handleUnmuteClicked(); }}
          />
        </TopContainer>
        <MutedTweetList
          showTweets={showTweets}
          mutedTweets={mutedUserInfo.tweets_info}
        />
        <BottomContainer>
          <UnmuteButton
            muted={isUserMuted}
            onClick={() => { handleUnmuteClicked(); }}
          />
          <ShowTweetsButton
            showTweets={showTweets}
            onClick={() => { handleShowTweetsClicked(); }}
          />
        </BottomContainer>
      </Item>
    );
}

export default ListedUser;
