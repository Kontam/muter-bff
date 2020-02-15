import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { MyThemeProps } from '../../../../modules/styles/theme';
import { RootState } from '../../../../redux/reducers';

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
const userInfoSelector = (state:RootState) => state.userInfo;

/**
 * TwitterAppsの共通ヘッダ
 * 全アプリ感で共通のアイコン、メニューなどを提供する
 */
const TwAppsHeader:React.FC = () => {
    const userInfo = useSelector(userInfoSelector);
    const imgUrl = userInfo.profile_image_url_https;
    const imgIconDOM = imgUrl ? <ImgIcon src={imgUrl} alt="icon" /> : '';
    return (
      <Header>
        {imgIconDOM}
      </Header>
    );
  }


export default TwAppsHeader;
