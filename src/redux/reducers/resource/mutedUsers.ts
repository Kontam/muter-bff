import { Dispatch } from "redux";
import { setErrMessage, ErrInfo } from "../page/errMessage";
import { startMuteRequest, endMuteRequest } from "../meta/muteRequestStatus";
import { setMuted, Muted, ToggleMutedResult } from "./muted";
import { toggleMuted } from "./muted";
import requestToServer from "../../../modules/requestToServer";

export const ACTION_CHANGE_MUTED_USERS = "CHANGE_MUTED_USERS" as const;

export type TweetsInfo = {
  tweet_id: number;
  tweet_url: string;
  tweet_text: string;
  retweet_count: number;
  favorite_count: number;
  media_infos: MediaInfo[];
};

export type UserInfo = {
  user_id: number;
  user_name: string;
  screen_name: string;
  user_url: string;
  profile_image_url_https: string;
  muted: boolean;
};

export type MutedUser = {
  muted_user: UserInfo;
  tweets_info: TweetsInfo[];
};

export type MediaInfo = {
  media_url_https: string;
  short_url: string;
  type: string;
};

export type MutedUsers = MutedUser[];

export type SetMutedUsersAction = {
  type: typeof ACTION_CHANGE_MUTED_USERS;
  payload: MutedUsers;
};

type MutedUsersAction = SetMutedUsersAction;

export const setMutedUsers = (mutedUsers: MutedUsers) => ({
  type: ACTION_CHANGE_MUTED_USERS,
  payload: mutedUsers
});

/**
 * ミュートユーザー一覧APIにリクエストを発行し、結果をdispatchする
 * @param {string} endpoint APIエンドポイント
 * @param {Dispatch} dispatch
 * @param {object} params 追加で渡すパラメータ　デフォルトは{}
 */
export const requestMutedUsers = (
  endpoint: string,
  params = {}
) => (dispatch: Dispatch) => {
  dispatch(startMuteRequest());
  requestToServer<MutedUsers | ErrInfo[]>(endpoint, params).then((result) => {
    if (!result) return console.error("MutedUsers Request Error", result);
    const { data } = result;
    if ("code" in data[0]) {
      dispatch(setErrMessage(data[0].message));
      dispatch(endMuteRequest());
      return;
    }
    // 全てミュートフラグを立てた配列をミュートの初期値としてdispatch
    // ユーザーリストよりも先にこちらを作る（依存しているため）
    const initializedMuted: Muted = Array(data.length).fill(true);
    dispatch(setMuted(initializedMuted));
    dispatch(endMuteRequest());
    // ミュートユーザーをstoreに登録
    dispatch(setMutedUsers(data as MutedUsers));
  });
};

export const requestUnmuteUser = (
  endpoint: string,
  screenName: string,
  index: number,
  dispatch: Dispatch,
) => {
  dispatch(startMuteRequest());
  requestToServer<ToggleMutedResult>(endpoint, {}).then((result) => {
    if (!result) return console.error("ToggleMute Request Error", result);
    const { data } = result;
    // ミュート解除に成功した場合はユーザー情報objectが返される
    // スクリーンネームを照合して成否を確認する
    dispatch(endMuteRequest());
    if (data.screen_name === screenName) {
      dispatch(toggleMuted(index));
    }
  });
};

export const mutedUsers = (state: MutedUsers = [], action: MutedUsersAction) => {
  switch (action.type) {
    case ACTION_CHANGE_MUTED_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default mutedUsers;
