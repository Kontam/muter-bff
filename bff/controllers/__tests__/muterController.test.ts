import execRequest from '../../modules/execRequest';
import assert from 'power-assert';
import { MutedUsersAPIResource } from '../muterController';
import { exec } from 'child_process';
import BffConst from '../../const';
const muterController = require('../muterController');

jest.mock('../../modules/execRequest');

const req = {
  session: { passport:{ user:{
    twitter_token: "test_token",
    twitter_token_secret: "test_token_secret",
    id: "test_user_id",
  }}},
  query: {},
  params: {},
};
const res = { send: jest.fn().mockReturnThis() };
const next = jest.fn().mockReturnThis();

beforeEach(() => {
  res.send.mockClear();
  next.mockClear();
  (execRequest as jest.Mock).mockClear();
})

describe('ミュートユーザー一覧取得API', () => {
  test('正常終了時、APIリソースをレスポンスする', async () => {

    const axiosResult: { data: MutedUsersAPIResource } = { data:{
      muted_user: {
        user_id: "test_id",
        user_name: "test_name",
        screen_name: "test_screen_name",
        user_url: "test_url",
        muted: true,
        profile_image_url_https: "https:xxx",
      },
      tweets_info:[
        {
          tweet_id: 123,
          media_infos: [],
          tweet_text: "tweet_text",
          tweet_url: "tweet_url",
          favorite_count: 1,
          retweet_count: 2,
        }
      ] } };
    (execRequest as jest.Mock).mockResolvedValue(axiosResult);

    await muterController.muter_muted_users(req, res);
    assert.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
  });
});

describe('ミュートAPIのテスト', () => {
  test('正常系のテスト　アクセスURLの正当性、レスポンスの正当性', async () => {
    const exReq = Object.assign(req);
    const testScreenName = "test_screen_name";
    exReq.params.screen_name = testScreenName;
    const axiosResult : any = { data :{
        id: 2244994945,
        id_str: "2244994945",
        name: "Twitter Dev",
        screen_name: "test_screen_name",
      }};
    (execRequest as jest.Mock).mockResolvedValue(axiosResult);
    await muterController.muter_mute_user(exReq, res, next);

    assert.equal((execRequest as jest.Mock).mock.calls[0][0], BffConst.API_MUTE_USER_SLUG + `/${testScreenName}`)
    assert.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
  });
});
