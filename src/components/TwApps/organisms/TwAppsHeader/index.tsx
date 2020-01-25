import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { MyThemeProps } from '../../../../modules/styles/theme';
import { UserInfo } from '../../../../redux/reducers/resource/userInfo';
import { RootState } from '../../../../redux/reducers';
import TwAppsConst from '../../TwAppsConst';

export const ImgIcon = styled.img`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

export const Header = styled.header`
  align-items: center;
  background-color: ${({ theme }: MyThemeProps<{}>) => theme.colors.basicGray};
  border-bottom: ${({ theme }: MyThemeProps<{}>) => theme.colors.darkGray} 1px solid;
  display: flex;
  height: 50px;
  justify-content: flex-end;
  padding: 5px;
  position: fixed;
  top: 0;
  width: 100%;
`;

type TwAppsHeaderProps = {
  userInfo : UserInfo;
}

type TwAppsHeaderState = {
  menu: typeof TwAppsConst.HEADER_MENU_INITIAL,
}

/**
 * TwitterAppsの共通ヘッダ
 * 全アプリ感で共通のアイコン、メニューなどを提供する
 */
class TwAppsHeader extends React.Component<any, TwAppsHeaderState> {
  constructor(props :any) {
    super(props);
    this.state = {
      menu: TwAppsConst.HEADER_MENU_INITIAL,
    };
  }

  render() {
    const imgUrl = this.props.userInfo.profile_image_url_https;
    const imgIconDOM = imgUrl ? <ImgIcon src={imgUrl} alt="icon" /> : '';
    return (
      <Header>
        {imgIconDOM}
      </Header>
    );
  }
}


export default connect(
  (state: RootState) => ({
    userInfo: state.userInfo,
  }),
)(TwAppsHeader);
