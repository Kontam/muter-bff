import { Dispatch, AnyAction } from 'redux';

import { startUserRequest, endUserRequest } from '../meta/userRequestStatus';
import requestToServer from '../../../modules/requestToServer';
import TwAppsConst from '../../../components/TwApps/TwAppsConst';

export const ACTION_CHANGE_USER_INFO = 'CHANGE_USER_INFO' as const;

export type UserInfo = {
  user_id: string
  user_name: string
  screen_name: string
  profile_image_url_https: string
} | {};

export type UserInfoAction = {
  type: typeof ACTION_CHANGE_USER_INFO,
  payload: UserInfo,
}

// ミュートユーザーのリストを取得し、ミュート状態のstateを初期化する
export const requestUserInfo = (
  endpoint: string,
  dispatch: Dispatch,
  ) => {
  dispatch(startUserRequest());
  requestToServer(endpoint)
    .then(({ data }) => {
      // console.log(data);
      const userInfo: UserInfo = data;
      // if ('code' in data[0]) {
      //   dispatch(setErrMessage(data[0].message));
      //   dispatch(endUserRequest());
      //   return;
      // }
      dispatch(endUserRequest());
      // ミュートユーザーをstoreに登録
      dispatch(setUserInfo(userInfo));
    });
};

export const setUserInfo = (userInfo:any): UserInfoAction => (
  { type: ACTION_CHANGE_USER_INFO, payload: userInfo }
);


const userInfo = (state = {}, action:any) => {
  switch (action.type) {
  case ACTION_CHANGE_USER_INFO:
    return action.payload;
  default:
    return state;
  }
};

export default userInfo;
