import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reducers';
import { MyThemeProps } from '../../../../modules/styles/theme';
import TwAppsConst from '../../TwAppsConst';

const loading_anim = require('../../../../../img/loading_anim.svg');

const StateSelector = (state :RootState) => ({
  muteRequestStatus: state.muteRequestStatus,
  userRequestStatus: state.userRequestStatus,
});

export const Container = styled.div`
  align-items: center;
  background-color: ${({theme} :MyThemeProps<{}>) => theme.colors.blackTransparent};
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  height: 80px;
  justify-content: center;
  left: calc(50% - 35px);
  position: fixed;
  top: 50%;
  width: 70px;
`;

export const Img = styled.img`
  height: 50px;
  width: 50px;
`;

export const Caption = styled.p`
  color: ${({theme} :MyThemeProps<{}>) => theme.colors.basicWhite};
  font-size: .8rem;
`;

/**
 *　画面の前面に出てくるエリア
 *　主にポップアップメッセージや、ロード画像の表示に使用する
 */
const FrontDisplayContainer = () => {
  const { userRequestStatus, muteRequestStatus } = useSelector(StateSelector);

  let style = {};
  // いずれかの要素がロード中の時は表示する
  if (
    muteRequestStatus === TwAppsConst.REQUEST_STATUS_COMPLETE
      && userRequestStatus === TwAppsConst.REQUEST_STATUS_COMPLETE
  ) {
    style = { display: 'none' };
  }


  // background-imageは表示の優先順位が低いらしいのでimgタグを使用する
  return (
    <Container style={style}>
      <Img src={loading_anim} alt="loading" />
      <Caption>loading...</Caption>
    </Container>
  );
};

export default FrontDisplayContainer;
