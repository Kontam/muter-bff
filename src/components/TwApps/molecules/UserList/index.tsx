import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled, {keyframes} from 'styled-components';

import { RootState } from '../../../../redux/reducers';
import TwAppsConst from '../../TwAppsConst';
import ListedUser from '../ListedUser';
import { requestMutedUsers,  MutedUser } from '../../../../redux/reducers/resource/mutedUsers';
import { UserInfo } from '../../../../redux/reducers/resource/userInfo';
import { MyThemeProps } from '../../../../modules/styles/theme';
import { mediaQ } from '../../../../modules/styles/media';
import { theme } from '../../../../modules/styles/theme';
import { Muted } from '../../../../redux/reducers/resource/muted';

const mute_icon = require('../../../../../img/mute_icon.svg');

const animationToLeft = keyframes`
    0% {
      padding-left: ${theme.sizes.muterMenuWidth}px;
    }
    100% {
      padding-left: ${theme.sizes.muterMenuWidth - theme.sizes.menuAmimationDistance}px;
    }
`;

const animationToRight = keyframes`
    0% {
      padding-left: ${theme.sizes.muterMenuWidth - theme.sizes.menuAmimationDistance}px;
    }
    100% {
      padding-left: ${theme.sizes.muterMenuWidth}px;
    }
`;

const Discription = styled.h2`
  background: ${({ theme }: MyThemeProps<{}>) => theme.colors.basicGray}
  url(${mute_icon}) center center / auto 70px no-repeat;
  color: ${({ theme }: MyThemeProps<{}>) => theme.colors.iconGray};
  font-size: 1.25rem;
  height: 80px;
  line-height: 80px;
  margin-top: 50px;
  text-align: center;
  width: 100%;
  ${mediaQ.pc} {
    font-size: 2.5rem;
    font-weight: bold;
    height: 120px;
    line-height: 120px;
  }
`;

const createList = (isMenuOpened: boolean) => styled.ul`
  padding-bottom: 50px;
  ${mediaQ.pc} {
    border-bottom: solid 2px ${({ theme }: MyThemeProps<{}>) => theme.colors.darkGray};
    border-top: solid 2px ${({ theme }: MyThemeProps<{}>) => theme.colors.darkGray};
    padding-bottom: 0;
    animation: ${isMenuOpened ? animationToRight : animationToLeft} .3s forwards;
  }
`;

type MutedUserListProps = {
  mutedUsers: MutedUser[],
  muted: Muted,
  basePath: string,
  isMuterMenuOpened: boolean,
  userInfo: UserInfo,
}

const stateSelector = (state: RootState) => ({
  mutedUsers: state.mutedUsers,
  muted: state.muted,
  basePath: state.basePath,
  isMuterMenuOpened: state.isMuterMenuOpened,
  userInfo: state.userInfo,
});

const UserList = () => {
  const {basePath, mutedUsers, muted, isMuterMenuOpened}: MutedUserListProps = useSelector(stateSelector);
  const dispatch = useDispatch();
  const List = createList(isMuterMenuOpened);

  useEffect(() => {
    requestMutedUsers(basePath + TwAppsConst.MUTED_USERS_ENDPOINT, dispatch);
  },[]);

  return (
    <div className="muter-content">
      <Discription>あなたがミュートしているユーザー</Discription>
      <List>
        {
          mutedUsers.map((mutedUserInfo, index) => (
            <ListedUser
              key={mutedUserInfo.muted_user.user_id}
              mutedUserInfo={mutedUserInfo}
              index={index}
              isUserMuted={muted[index]}
            />
          ))
        }
      </List>
    </div>
  );
}

export default UserList;
