import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import TwAppsHeader from '../../organisms/TwAppsHeader';
import AppContent from '../../organisms/AppContent';
import TwAppsConst from '../../TwAppsConst';
import FrontDisplayContainer from '../../molecules/FrontDisplayContainer';
import { requestUserInfo } from '../../../../redux/reducers/resource/userInfo';
import { setBasePath, BasePath } from '../../../../redux/reducers/meta/basePath';

type Props = {
  basePath: BasePath,
}

const TwitterApps = ({ basePath }: Props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    // 利用者自身のユーザー情報を取得
    /**
     * TODO: Axiosリクエスト系の処理はサーバーへのリクエストが２つ以上同時に走らないように
     * Loadingのステータスを見て発行を待ち合わせるようにする
     * ２つ以上同時に走ると少なくともfirebaseではセッションが維持できなくなる模様
     */
    requestUserInfo(basePath　+ TwAppsConst.USER_INFO_ENDPOINT, dispatch)
    dispatch(setBasePath(basePath));
  },[])

  return (
    <div className="twitter-apps">
      <FrontDisplayContainer />
      <TwAppsHeader />
      <AppContent />
    </div>
  );
}

export default TwitterApps;
