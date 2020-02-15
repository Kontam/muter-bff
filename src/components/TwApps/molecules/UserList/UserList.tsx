import React from "react";
import styled from "styled-components";

import ListedUser from "../ListedUser";
import { MutedUser } from "../../../../redux/reducers/resource/mutedUsers";
import { MyThemeProps } from "../../../../modules/styles/theme";
import { mediaQ } from "../../../../modules/styles/media";
import { Muted } from "../../../../redux/reducers/resource/muted";

const mute_icon = require("../../../../../img/mute_icon.svg");

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

const List = styled.ul<{ isMenuOpened: boolean }>`
  padding-bottom: 50px;
  ${mediaQ.pc} {
    border-bottom: solid 2px
      ${({ theme }: MyThemeProps<{}>) => theme.colors.darkGray};
    border-top: solid 2px
      ${({ theme }: MyThemeProps<{}>) => theme.colors.darkGray};
    padding-bottom: 0;
    padding-left: ${({
      theme,
      isMenuOpened
    }: MyThemeProps<{ isMenuOpened: boolean }>) =>
      isMenuOpened
        ? theme.sizes.muterMenuWidth
        : theme.sizes.muterMenuWidth - theme.sizes.menuAmimationDistance}px;
    transition: 0.3s;
  }
`;

type Props = {
  mutedUsers: MutedUser[];
  muted: Muted;
  isMuterMenuOpened: boolean;
};

const UserList: React.FC<Props> = ({
    mutedUsers,
    muted,
    isMuterMenuOpened
}) => {

  return (
    <>
      <Discription>あなたがミュートしているユーザー</Discription>
      <List isMenuOpened={isMuterMenuOpened as any}>
        {mutedUsers.map((mutedUserInfo, index) => (
          <ListedUser
            key={mutedUserInfo.muted_user.user_id}
            mutedUserInfo={mutedUserInfo}
            index={index}
            isUserMuted={muted[index]}
          />
        ))}
      </List>
    </>
  );
};

export default UserList;
