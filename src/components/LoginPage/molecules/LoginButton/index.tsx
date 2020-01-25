import * as React from 'react';
import { connect } from 'react-redux'
import styled from 'styled-components';
import { RootState } from '../../../../redux/reducers';

import LoginConst from '../../LoginConst';
import StyleConst, { resetAnchor } from '../../styles/define';
import { mediaQ } from '../../../../commonModules/media';
const whiteTwitterIcon = require('../../../../../img/twitter_white_icon.svg')

// interface StateByProps {
//   basePath: string,
// }

type LoginButtonProps = {
  basePath: string,
  store?: any,
}

const LoginButton = ({ basePath } :LoginButtonProps):JSX.Element => {
  return (
    <LoginLink href={`${basePath}${LoginConst.LOGIN_SLAG}`}>
      ログイン
      <TwitterIcon src={whiteTwitterIcon} alt="twitter" />
    </LoginLink>
  );
};

export const LoginLink = styled.a`
  ${resetAnchor}
  align-items: center;
  background-color: ${StyleConst.twitterBlue};
  border-radius: 5px;
  box-shadow: 0 5px ${StyleConst.twitterShadowBlue};
  color: ${StyleConst.basicWhite};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 55px;
  justify-content: center;
  margin: 0 auto;
  text-align: center;
  transition: .2s;
  width: 280px;
  &:active {
      box-shadow: 0 0 ${StyleConst.twitterShadowBlue};
      transform: translateY(5px);
  }
  ${mediaQ.pc} {
    margin: 60px auto 0;
  }
`;

export const TwitterIcon = styled.img`
    margin-left: 15px;
    width: 40px;
`;

export default connect(
  (state :RootState) => ({ basePath: state.basePath, }),
  {})(LoginButton);
