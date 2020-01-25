import BffConst from '../../const';
import { AuthInfo } from '../loginController';
import execRequest from '../../modules/execRequest';
import assert from 'power-assert'
const loginController = require('../loginController');
const jwt = require('jsonwebtoken');

jest.mock('../../modules/execRequest');
jest.mock('jsonwebtoken');

describe('ログインチェック',() => {
  test('リクエストにトークンを含まない時はツイッターのログインページに遷移する',() => {
    const req = {　cookies:{}　}
    const res = {
      status: jest.fn().mockReturnThis(),
      redirect: jest.fn().mockReturnThis(),
    }
    loginController.login_check(req,res);

    expect(res.redirect.mock.calls[0][0]).toBe(BffConst.TWITTER_LOGIN_SLUG);
  })

  describe('トークンが存在する場合、トークンチェックにリダイレクトする',() => {
    beforeEach(() => {
      (execRequest as any).mockClear();
      jwt.verify.mockClear();
      jwt.sign.mockClear();
    })
    test('jwtトークンが正常な場合',(done) => {
      const req = {
        cookies:{
          token:"test token",
        },
        session: {}
      };
      const res = {
        redirect: jest.fn().mockReturnThis(),
      };
      const result :{data:AuthInfo} = { data: {
        user_id: "test",
        token: "test token",
        token_secret: "test_token_sectet"
      }};

      const jwtMockResult = "mock user_id";
      (execRequest as any).mockResolvedValue(result);
      jwt.verify.mockReturnValue(jwtMockResult);

      loginController.login_check(req, res).then(()=>{
        assert.strictEqual(res.redirect.mock.calls[0][0], BffConst.FRONT_MUTER_SLUG);
        done();
      });
    })
  })
});

describe('passportログイン後の処理', () => {
  const req = { session: { passport: { user: {
    id: '123456789',
  }}}};
  const res = {
    cookie: jest.fn().mockReturnThis(),
    redirect: jest.fn().mockReturnThis(),
  };
  const next = jest.fn().mockReturnThis();
  const jwtResult = "TEST_TOKEN";
  beforeEach(() => {
    res.cookie.mockClear();
    res.redirect.mockClear();
    next.mockClear();
  })

  test('jwtトークンをクッキーに埋めてログイン後画面にリダイレクトする',(done) => {
    const axiosResult = { data: "success" };
    (execRequest as any).mockResolvedValue(axiosResult);
    jwt.sign.mockReturnValue(jwtResult);
    loginController.login_success(req, res, next).then(() => {
      assert.strictEqual(res.cookie.mock.calls[0][1], jwtResult);
      assert.strictEqual(res.redirect.mock.calls[0][0], BffConst.FRONT_MUTER_SLUG);
      done();
    });
  })

  test('jwtトークンを処理した後、APIからログイン失敗のレスポンスがあった場合はログインページにリダイレクトする', (done) => {
    const axiosResult = "failure";
    (execRequest as any).mockResolvedValue(axiosResult);
    jwt.sign.mockReturnValue(jwtResult);
    loginController.login_success(req, res, next).then(() => {
      assert.strictEqual(next.mock.calls[0][0], BffConst.MSG_API_LOGIN_FAIL);
      assert.strictEqual(res.redirect.mock.calls[0][0], BffConst.TWITTER_LOGIN_SLUG);
      done();
    });
  });
});

  // jwtの検証エラー時の処理をテストするためモックを解除する
  // このテストのみモックを解除することができないのでいったんおき
  // jest.unmock("jsonwebtoken");
  // test('jwtトークンが不正な場合', (done) => {
  //   const req = {
  //     cookies:{
  //       token:"test token",
  //     },
  //     session: {}
  //   };
  //   const res = {
  //     redirect: jest.fn().mockReturnThis(),
  //   };
  //   const result :{data:AuthInfo} = { data: {
  //     user_id: "test",
  //     token: "test token",
  //     token_secret: "test_token_sectet"
  //   }};

  //   loginController.login_check(req, res).then((result: any) => {
  //     console.log(result);
  //     done();
  //   })
    // done();
  // });

