import React, { MouseEventHandler } from 'react';
import styled from 'styled-components';

import TwAppsConst from '../../TwAppsConst';
import { mobileMuteButton, theme, divIcon, pcDivIcon, pcShowButton } from '../../../../modules/styles/theme';
import { mediaQ } from '../../../../modules/styles/media';

const eye_icon = require('../../../../../img/eye_icon.svg');
const hide_icon = require('../../../../../img/hide_icon.svg');


export const createButton = (showTweets: ShowTweets) => {
  const bgColor = showTweets !== TwAppsConst.SHOW_TWEETS_OPENED
  ? theme.colors.showButtonColor : theme.colors.hideButtonColor;
  const labelColor = showTweets !== TwAppsConst.SHOW_TWEETS_OPENED
  ? theme.colors.buttonLabelColor : theme.colors.basicWhite;
  return styled.button`
    ${mobileMuteButton(bgColor, labelColor)}
    ${mediaQ.pc} {
      ${pcShowButton()}
    }
  `;
}

export const createIcon = (showTweets: ShowTweets) => {
  const imgUrl = showTweets !== TwAppsConst.SHOW_TWEETS_OPENED
  ? eye_icon : hide_icon;

  return styled.div`
    ${divIcon(imgUrl)};
    ${mediaQ.pc} {
      ${pcDivIcon(imgUrl)};
    }
  `;
}

export const LabelForPC = styled.span`
  display: none;
  ${mediaQ.pc} {
    display: inline;
  }
`;

type ShowTweets = typeof TwAppsConst.SHOW_TWEETS_OPENED | typeof TwAppsConst.SHOW_TWEETS_CLOSED | typeof TwAppsConst.SHOW_TWEETS_INITIAL;

type ShowTweetsButtonProps = {
  showTweets: ShowTweets
  onClick: MouseEventHandler
}

const ShowTweetsButton = ({ showTweets, onClick }: ShowTweetsButtonProps) => {
  const Button = createButton(showTweets);
  const Icon = createIcon(showTweets);
  return (
    <Button
      type="button"
      onClick={onClick}
    >
      <Icon />
      <LabelForPC>ツイートを</LabelForPC>
      {showTweets === TwAppsConst.SHOW_TWEETS_CLOSED ? 'チラ見' : '隠す'}
    </Button>
  );
};

export default ShowTweetsButton;
