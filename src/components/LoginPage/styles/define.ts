import { css } from 'styled-components';

const StyleConst :{[key:string]: string | number} = {
  // Colors
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

  //font-weight
  fwBold: 700,
  fwMedium: 500,
  fwNormal: 400,
  fwLight: 300,

  //font-family
  engHeadFont: "'brush-script-std', sans-serif",

  // //numbers
  menuAmimationDistance: '220px',
  muterMenuWidth: '300px',
  pcHeaderHeight: '280px',
  pcReadmoreHeight: '100px',
};

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

export default StyleConst;
