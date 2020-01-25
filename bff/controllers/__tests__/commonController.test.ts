import execRequest from '../../modules/execRequest';
import assert from 'power-assert';
import { UserInfo } from '../../../src/redux/reducers/resource/userInfo';
const commonController = require('../commonController');

jest.mock('../../modules/execRequest');

describe('ログインユーザー情報の取得処理', () => {
  test('正常終了時にユーザー情報のAPIリソースをクライアントに送信する', async () => {
    const req = { session :{ passport:{ user:{
        twitter_token: "test_token",
        twitter_token_secret: "test_token_secret",
      } } } };
    const res = { send: jest.fn().mockReturnThis() }
    const axiosResult: {data: UserInfo} = { data: {
      user_id: "test_id",
      user_name: "test_name",
      screen_name: "test_screen_name",
      profile_image_url_https: "https:xxxx/",
    } };
    (execRequest as any).mockReturnValue(axiosResult);

    await commonController.user_info(req, res);
    assert.deepStrictEqual(res.send.mock.calls[0][0], axiosResult.data);
  });
});
