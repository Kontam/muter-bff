import React, { useState, useEffect } from "react";
import styled from "styled-components";

import TwAppsConst from "../../TwAppsConst";
import MutedTweet from "../../atoms/Tweet";
import { ShowTweets } from "../ListedUser";
import { MyThemeProps } from "../../../../modules/styles/theme";
import { TweetsInfo } from "../../../../redux/reducers/resource/mutedUsers";

// 子コンポーネントの高さを取得するためにwapperで包む
const ItemWrapper = styled.li<{ref: any}>``;
const List = styled.ul<{visible: boolean, maxHeight: number}>`
  overflow: hidden;
  transition: .5s;
  max-height: ${({ maxHeight }: MyThemeProps<{maxHeight: number}>) => maxHeight}px;
  border-top: ${({ theme, visible }: MyThemeProps<{visible: boolean}>) => visible
  ? `1px solid ${theme.colors.darkGray}` : 'none'};
`;

type Props = {
  showTweets: ShowTweets;
  mutedTweets: TweetsInfo[];
};

/**
 * ツイートのリスト
 * 渡された開閉状態に応じてリストの内容のコンテンツ高さに応じた開閉アニメーションを行う
 * @param {ShowTweets} showTweets 開閉状態を示す定数値
 * @param {TweetsInfo[]} mutedTweets ツイート情報の配列
 */
const TweetList = ({ showTweets, mutedTweets, }: Props) => {
  const [maxHeight, setMaxHeight] = useState(0);
  const itemWrapperRefs: React.RefObject<HTMLElement>[] = [];
  mutedTweets.forEach(() => {
    itemWrapperRefs.push(React.createRef<HTMLElement>());
  })

  useEffect(() => {
    let height = 0;
    itemWrapperRefs.forEach((ref) => {
      height += ref.current.clientHeight;
    })
    setMaxHeight(height);
  },[showTweets])

  return (
    <List
      visible={showTweets === TwAppsConst.SHOW_TWEETS_OPENED}
      maxHeight={showTweets === TwAppsConst.SHOW_TWEETS_OPENED ? maxHeight : 0}
    >
      {mutedTweets.map((mutedTweet, index) => (
        <ItemWrapper
          ref={itemWrapperRefs[index]}
          key={mutedTweet.tweet_id}
        >
          <MutedTweet
            mutedTweet={mutedTweet}
          />
        </ItemWrapper>
      ))}
    </List>
  );
};

export default TweetList;
