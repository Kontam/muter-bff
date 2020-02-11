import styled from "styled-components";
import { MyThemeProps } from "../../../../modules/styles/theme";
import { MutedUser } from "../../../../redux/reducers/resource/mutedUsers";
import React from "react";
import { mediaQ } from "../../../../modules/styles/media";
import UnmuteButton from "../../atoms/UnmuteButton";
import ShowTweetsButton from "../../atoms/ShowTweetsButton";
import MutedTweetList from "../TweetList";
import { ShowTweets } from ".";

const Item = styled.li<any>`
  list-style: none;
  width: 100%;
`;

const createTopContainer = (isMuted: boolean) => styled.div`
  align-items: center;
  background: ${isMuted
    ? ({ theme }: MyThemeProps<{}>) => theme.colors.basicWhite
    : ({ theme }: MyThemeProps<{}>) => theme.colors.unmutedUserBg};
  display: flex;
  height: 95px;
  transition: 0.5s;
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

type Props = {
  mutedUserInfo: MutedUser;
  isUserMuted: boolean;
  showTweets: ShowTweets;
  handleUnmuteClicked: Function;
  handleShowTweetsClicked: Function;
};

const ListedUser = ({
  mutedUserInfo,
  isUserMuted,
  showTweets,
  handleUnmuteClicked,
  handleShowTweetsClicked,
}: Props) => {
  const TopContainer = createTopContainer(isUserMuted);
  const listedUserRef = React.createRef<HTMLElement>();
  const mutedUser = mutedUserInfo.muted_user;

  return (
    <Item ref={listedUserRef}>
      <TopContainer>
        <Icon src={mutedUser.profile_image_url_https} alt="icon" />
        <UserNameContainer>
          <UserName>{mutedUser.user_name}</UserName>
          <UserName>@{mutedUser.screen_name}</UserName>
        </UserNameContainer>
        <UnmuteButton
          isForMobile={false}
          muted={isUserMuted}
          onClick={() => {
            handleUnmuteClicked();
          }}
        />
      </TopContainer>
      <MutedTweetList
        showTweets={showTweets}
        mutedTweets={mutedUserInfo.tweets_info}
      />
      <BottomContainer>
        <UnmuteButton
          muted={isUserMuted}
          onClick={() => {
            handleUnmuteClicked();
          }}
        />
        <ShowTweetsButton
          showTweets={showTweets}
          onClick={() => {
            handleShowTweetsClicked();
          }}
        />
      </BottomContainer>
    </Item>
  );
};

export default ListedUser;
