import { Express } from 'express';

type ParamsWithToken = {
  twitter_token: string
  twitter_token_secret: string
}

/**
 * APIへのリクエストで共有に含めるトークンをマージしたparamsを返す
 * @param {object} req.session
 * @param {object} 個別に指定するパラメータ
 */
export const createParamsWithToken = (session :Express.Session, params = {}) => {
  const accessToken: ParamsWithToken = {
    twitter_token: session.passport.user.twitter_token,
    twitter_token_secret: session.passport.user.twitter_token_secret
  }

  return Object.assign(accessToken, params);
}


