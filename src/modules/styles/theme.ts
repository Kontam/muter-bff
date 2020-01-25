import { css, ThemedStyledProps } from 'styled-components';

export const theme = {
  colors: {
    basicWhite: '#ffffff',
    basicLabelColor: '#5D5D5D',
    lightLabelColor: '#7A7A7A',
    basicGray: '#ececec',
    darkGray: '#bcbcbc',
    iconGray: '#6E6E6E',
    blackTransparent: 'rgba(0, 0, 0, .5)',

    muterGreen: '#86F3B0',
    muterLightGreen: '#AFFFCE',
    blockerBlue: '#8DCAFF',
    unmutedUserBg: '#C7FFDF',
    buttonLabelColor: '#00535D',
    unmuteButtonColor: '#AAF9CC',
    muteButtonColor: '#FF5B62',
    showButtonColor: '#AAF9EE',
    hideButtonColor: '#FF91AB',
    twitterBlue: '#58C6E8',
    twitterShadowBlue: '#3D89A7',
    facebookBlue: '#7EA7E5',
  },
  fonts: {
    fwBold: 700,
    fwMedium: 500,
    fwNormal: 400,
    fwLight: 300,
    engHeadFont: "'brush-script-std', sans-serif",
  },
  sizes: {
    menuAmimationDistance: 220,
    muterMenuWidth: 300,
    pcHeaderHeight: '280px',
    pcReadmoreHeight: '100px',
  },
  z_index: {
    ZI_carouselArrow: 9999,
  }
} as const

export type MyThemeProps<T> = ThemedStyledProps<T,typeof theme>;

export const resetAnchor = css`
  color: inherit;
  text-decoration: none;
`;

export const resetButton = css`
  appearance: none;
  background-color: transparent;
  border: 0;
  padding: 0;

  &:focus {
    outline: 0;
  }
`;

export const divIcon = (iconUrl: string) => css`
  background: url(${iconUrl}) center center / contain no-repeat;
  flex-shrink: 0;
  height: 18px;
  margin-right: 3px;
  width: 25px;
`;

export const pcDivIcon = (iconUrl: string) => css`
  background: url(${iconUrl}) center center / contain no-repeat;
  height: 25px;
  margin-right: 5px;
  width: 35px;
`;

/**
 * ミュートもしくはミュート解除を行うモバイル用のボタン
 * @param bgColor ボタンの背景色
 * @param labelColor ボタン中のラベルの色　デフォルト値あり
 */
export const mobileMuteButton = (bgColor: string, labelColor: string = theme.colors.buttonLabelColor) => css`
    ${resetButton};
    background-color: ${bgColor};
    color: ${labelColor};
    display: flex;
    height: 30px;
    justify-content: center;
    white-space: nowrap;
    width: 50%;
`;

export const pcShowButton = () => css`
  cursor: pointer;
  font-size: 1.25rem;
  height: 50px;
  justify-content: flex-start;
  /* アイコン250px + 名前コンテナ420px + ミュートボタンのpaddingLeft15px - 微調整5px */
  padding-left: 680px;
  white-space: nowrap;
  width: 100%;
`;

export const pcMuteButton = (bgColor :string, labelColor: string) => css`
  ${resetButton}
  align-items: center;
  background-color: ${bgColor};
  color: ${labelColor};
  cursor: pointer;
  display: flex;
  font-size: 1.25rem;
  height: 50px;
  padding-left: 15px;
  padding-top: 5px;
  white-space: nowrap;
  width: 200px;
`;
