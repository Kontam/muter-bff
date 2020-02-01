import assert from "power-assert";
import configureStore from "redux-mock-store";
import thunk, { ThunkDispatch } from "redux-thunk";
import requestToServer from '../../../../modules/requestToServer';
import userInfo, { UserInfoAction, UserInfo, requestUserInfo, setUserInfo } from "../userInfo";
import { RootState } from "../..";
import { AnyAction } from "redux";
import { AxiosResponse } from "axios";
import { initialState } from "../../../store";
import { startUserRequest, endUserRequest } from "../../meta/userRequestStatus";
import { ErrInfo, setErrMessage } from "../../page/errMessage";

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>
const middlewares = [thunk];
const mockStoreCreator = configureStore<RootState, DispatchExts>(middlewares);

jest.mock('../../../../modules/requestToServer');

const mockUserInfo: UserInfo = {
user_id: "12345",
user_name: "test_userName",
screen_name: "knon_game",
profile_image_url_https:
    "https://pbsom/profile_images/10585/LdKwoFXJ.jpg"
};

const mockAction: UserInfoAction = {
    type: "CHANGE_USER_INFO",
    payload: mockUserInfo,
};

describe("ユーザー情報reducerのテスト", () => {
  test("ユーザー情報保存Actionで渡されたユーザー情報が保存される", () => {
      const newState = userInfo(initialState, mockAction);
      assert.deepStrictEqual(newState, mockUserInfo);
  });
});

describe("thunk reducerのテスト", () => {
  test("順番に想定されたアクションが発行されること", async () => {
    const mockResponse: AxiosResponse<UserInfo> = {
      data: mockUserInfo,
    } as AxiosResponse<UserInfo>;
    (requestToServer as jest.Mock).mockResolvedValue(mockResponse);
    const store = mockStoreCreator(initialState);
    await store.dispatch(requestUserInfo("http://testendpoint.com"));

    assert.deepStrictEqual(store.getActions()[0], startUserRequest());
    assert.deepStrictEqual(store.getActions()[1], endUserRequest());
    assert.deepStrictEqual(store.getActions()[2], setUserInfo(mockResponse.data));
  })

  test("エラーオブジェクトが返された場合はエラーメッセージをセットする", async () => {
    const mockErrInfo: ErrInfo[] = [{
      code: 9,
      message: "test err message",
    }];
    const mockResponse: AxiosResponse<ErrInfo[]> = {
      data: mockErrInfo,
    } as AxiosResponse<ErrInfo[]>;
    (requestToServer as jest.Mock).mockResolvedValue(mockResponse);
    const store = mockStoreCreator(initialState);
    await store.dispatch(requestUserInfo("http://testendpoint.com"));

    assert.deepStrictEqual(store.getActions()[0], startUserRequest());
    assert.deepStrictEqual(store.getActions()[1], setErrMessage(mockResponse.data[0].message));
    assert.deepStrictEqual(store.getActions()[2], endUserRequest());
  })
})
