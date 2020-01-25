import { Request, Response, NextFunction } from 'express';
import BffConst from '../const';

import execRequest from '../modules/execRequest';
import { createParamsWithToken } from '../modules/createParams';
import { exec } from 'child_process';

export type MutedUserInfo = {
  user_id: string,
  user_name: string,
  screen_name: string,
  user_url: string,
  profile_image_url_https: string,
  muted: boolean,
}

export type MediaInfo = {
  media_url: string,
  short_url: string,
  type: string,
}

export type TweetInfo = {
  tweet_id: number
  tweet_url: string,
  tweet_text: string,
  retweet_count: number,
  favorite_count: number,
  media_infos: MediaInfo[],
}

export type MutedUsersAPIResource = {
  muted_user: MutedUserInfo,
  tweets_info: TweetInfo[],
}

/**
 * ミュートユーザー一覧を取得するAPI
 * @param {string} user_id DBにログを保存するためのキー
 */
exports.muter_muted_users = async function(req :Request,res: Response) {
  console.log("muterController",req.session);
  console.log("muterController",req.sessionID);
  const extraParams = {
    user_id: req!.session!.passport.user.id,
  }
  let params = {};
  if (req.session) {
    params = createParamsWithToken(req.session, extraParams);
  }
  const response = await execRequest(BffConst.API_MUTED_LIST_SLUG, { params });
  res.send(response.data);
}

/**
 * 特定のユーザー一人をミュート解除する
 * @param {string} screen_name　GETパラメータから取得する対象ユーザーの名前
 */
exports.muter_unmute_user = async function(req: Request, res: Response, next: NextFunction) {
  const extraParams = {};
  let params = {};
  if(req.session) {
    params = createParamsWithToken(req.session, extraParams);
  }
  const endPoint = BffConst.API_UNMUTE_USER_SLUG + `/${req.params.screen_name || ''}`;
  const response = await execRequest(endPoint, { params });
  res.send(response.data);
}

/**
 * 特定のユーザー一人をミュートにする
 * @param {string} screen_name　GETパラメータから取得する対象ユーザーの名前
 */
exports.muter_mute_user = async function(req: Request, res: Response, next: NextFunction) {
  const extraParams = {};
  let params = {};
  if(req.session) {
    params = createParamsWithToken(req.session, extraParams);
  }
  const endPoint = BffConst.API_MUTE_USER_SLUG + `/${req.params.screen_name || ''}`;
  const response = await execRequest(endPoint, { params });
  res.send(response.data);
}
