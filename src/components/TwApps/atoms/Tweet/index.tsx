import React from 'react';
import styled from 'styled-components';

import { TweetsInfo } from '../../../../redux/reducers/resource/mutedUsers';
import { mediaQ } from '../../../../modules/styles/media';
import { resetAnchor, MyThemeProps, divIcon } from '../../../../modules/styles/theme';
const retweet_icon = require('../../../../../img/retweet_icon.svg');
const favorite_icon = require('../../../../../img/favorite_icon.svg')
const twitter_icon = require('../../../../../img/twitter_icon.svg')
const twitter_white_icon = require('../../../../../img/twitter_white_icon.svg')

const Container = styled.div`
  border-bottom: 1px solid ${({ theme }: MyThemeProps<{}>) => theme.colors.darkGray};;
  padding: 10px;
  white-space: pre-line;
  ${mediaQ.pc} {
    font-size: 1.25rem;
    line-height: 1.8rem;
    padding: 50px 100px 15px 250px;
  }
`;

const TweetText = styled.p`
  max-width: 1200px;
`;

const MediaList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 20px auto;
  max-height: 121px;
  max-width: 251px;
  overflow: hidden;
`;

const MediaItem = styled.li`
  align-items: center;
  display: flex;
  justify-content: center;
  max-height: 60px;
  max-width: 120px;
  overflow: hidden;
`;

const Media = styled.img`
  max-width: 250px;
`;

const TweetInfoContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 15px 30px 0;
  ${mediaQ.pc} {
    justify-content: flex-start;
    padding: 0;
  }
`;

const TweetCountInfo = styled.div`
  display: flex;
  ${mediaQ.pc} {
    line-height: 1;
    /* ユーザー名コンテナが420px
      ファボとRTで計２つの情報があるので、半分の横幅にするとTwitterボタンがミュートボタンと合う */
    width: 210px;
  }
`;

const RetweetIcon = styled.div`
  ${divIcon(retweet_icon)};
  margin-bottom: 3px;
  margin-right: 8px;
`;

const FavoriteIcon = styled.div`
  ${divIcon(favorite_icon)};
  margin-right: 8px;
`;

const FavoriteCount = styled.p`
  margin-top: 1px;
`;

const RetweetCount = styled.p`
  margin-top: 2px;
`;

const TwitterLink = styled.a`
  display: block;
  ${mediaQ.pc} {
    ${resetAnchor};
    align-items: center;
    background-color: ${({ theme }: MyThemeProps<{}>) => theme.colors.twitterBlue};
    border-radius: 5px;
    color: ${({ theme }: MyThemeProps<{}>) => theme.colors.basicWhite};;
    display: flex;
    font-size: 1rem;
    height: 25px;
    padding-left: 15px;
    width: 165px;
  }
`;

const TwitterIcon = styled.div`
  background: url(${twitter_icon}) center center / contain no-repeat;
  height: 22px;
  width: 26px;
  ${mediaQ.pc} {
    background: url(${twitter_white_icon}) center center / contain no-repeat;
    height: 18px;
    width: 25px;
  }
`;

const LabelForPc = styled.span`
    display: none;
    ${mediaQ.pc} {
      display: inline;
      margin-left: 10px;
    }
`;

type Props = {
  mutedTweet: TweetsInfo
};

/**
 * ユーザーのツイートを表すコンポーネント
 * @param {TweetsInfo} mutedTweet ツイート情報（１件）
 */
const Tweet: React.FC<Props> = ({ mutedTweet }: Props) => {
  return (
    <Container>
      <TweetText>{mutedTweet.tweet_text}</TweetText>
      <MediaList>
        {
          mutedTweet.media_infos.map(media => (
            <MediaItem
              key={media.media_url_https}
            >
              <Media alt="media" src={media.media_url_https} />
            </MediaItem>
          ))
        }
      </MediaList>
      <TweetInfoContainer>
        <TweetCountInfo>
          <FavoriteIcon/>
          <FavoriteCount>{mutedTweet.favorite_count}</FavoriteCount>
        </TweetCountInfo>
        <TweetCountInfo>
          <RetweetIcon />
          <RetweetCount>{mutedTweet.retweet_count}</RetweetCount>
        </TweetCountInfo>
        <TwitterLink href={mutedTweet.tweet_url} target="_blank" rel="noopener noreferrer" className="open-twitter-link">
          <TwitterIcon className="twitter-icon" />
          <LabelForPc className="pc-twitter-label">twitterで見る</LabelForPc>
        </TwitterLink>
      </TweetInfoContainer>
    </Container>
  );
};

export default Tweet;
