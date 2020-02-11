import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import TwAppsHeader from '../../organisms/TwAppsHeader';
import AppContent from '../../organisms/AppContent';
import TwAppsConst from '../../TwAppsConst';
import FrontDisplayContainer from '../../molecules/FrontDisplayContainer';
import { requestUserInfo } from '../../../../redux/reducers/resource/userInfo';
import { setBasePath, BasePath } from '../../../../redux/reducers/meta/basePath';
import { RootState } from '../../../../redux/reducers';

type Props = {
  basePath: BasePath,
}

const UserRequestSelector = (state :RootState) => state.userRequestStatus;
const MuteRequestSelector = (state :RootState) => state.muteRequestStatus;

const TwitterApps = ({ basePath }: Props) => {
  const muteRequestStatus = useSelector(MuteRequestSelector);
  const userRequestStatus = useSelector(UserRequestSelector);
  const isLoading = muteRequestStatus === TwAppsConst.REQUEST_STATUS_LOADING
    || userRequestStatus === TwAppsConst.REQUEST_STATUS_LOADING;

  const dispatch = useDispatch();
  useEffect(() => {
    // 利用者自身のユーザー情報を取得
    dispatch(requestUserInfo(basePath　+ TwAppsConst.USER_INFO_ENDPOINT));
    dispatch(setBasePath(basePath));
  },[])

  return (
    <div className="twitter-apps">
      <FrontDisplayContainer isLoading={isLoading}/>
      <TwAppsHeader />
      <AppContent />
    </div>
  );
}

export default TwitterApps;
