import assert from 'power-assert';
import thunk, { ThunkDispatch } from 'redux-thunk';
import mutedUsers,{ requestMutedUsers, TweetsInfo, UserInfo, MutedUsers, ACTION_CHANGE_MUTED_USERS, setMutedUsers } from '../mutedUsers';
import requestToServer from '../../../../modules/requestToServer';
import configureStore from 'redux-mock-store';
import { AnyAction } from 'redux';
import { RootState } from '../..';
import { initialState } from '../../../store';
import { startMuteRequest, endMuteRequest } from '../../meta/muteRequestStatus';
import { setMuted } from '../muted';
import { setErrMessage } from '../../page/errMessage';

type DispatchExts = ThunkDispatch<RootState, void, AnyAction>;
const middlewares = [thunk];
const mockStore = configureStore<RootState, DispatchExts>(middlewares);

const mockMediaInfo = {
    media_url_https: "https://test.com",
    short_url: "https://short.com",
    type: "image",
};
const mockTweetsInfo :TweetsInfo = {
    tweet_id: 123,
    tweet_url: "test_url",
    tweet_text: "test_text",
    retweet_count: 12,
    favorite_count: 24,
    media_infos: [mockMediaInfo], 
};
const mockUserInfo: UserInfo = {
    user_id: 445,
    user_name: "test_name",
    screen_name: "test_screen",
    user_url: "test_user_url",
    profile_image_url_https: "https:image.com",
    muted: true,
}
const mockMutedUsers: MutedUsers = [{
    muted_user: mockUserInfo,
    tweets_info: [mockTweetsInfo],
}];

jest.mock('../../../../modules/requestToServer');

describe("mutedUsersのReducerテスト", () => {
    test("渡されたmutedUsersが正しくセットされる", () => {
        const InitialState = {} as MutedUsers;
        const mockAction = {
            type: ACTION_CHANGE_MUTED_USERS,
            payload: mockMutedUsers,
        };
        assert.deepEqual(mutedUsers(InitialState, mockAction), mockMutedUsers);
    });
});

describe("APIリソース送受信のテスト", () => {
    test("ミュートユーザーリクエスト処理 アクションか期待した順番で発行されている", async () => {
        (requestToServer as jest.Mock).mockResolvedValue({ data: mockMutedUsers });
        const store = mockStore(initialState);
        await store.dispatch(requestMutedUsers("http://mockEndpoint"));
        assert.deepStrictEqual(store.getActions()[0], startMuteRequest());
        assert.deepStrictEqual(store.getActions()[1], setMuted(Array(mockMutedUsers.length).fill(true)))
        assert.deepStrictEqual(store.getActions()[2], endMuteRequest());
        assert.deepStrictEqual(store.getActions()[3], setMutedUsers(mockMutedUsers));
    })

    test("エラーオブジェクトがレスポンスの内容だった時、エラーアクションが発行される", async () => {
        const mockErrorResponse = {
            data : [{
                code: "999",
                message: "テストエラーメッセージ",
            }]};
        (requestToServer as jest.Mock).mockResolvedValue(mockErrorResponse);
        const store = mockStore(initialState);
        await store.dispatch(requestMutedUsers("http://mockEndpoint") as any);
        assert.deepStrictEqual(store.getActions()[0], startMuteRequest());
        assert.deepStrictEqual(store.getActions()[1], setErrMessage(mockErrorResponse.data[0].message))
        assert.deepStrictEqual(store.getActions()[2], endMuteRequest());
    })
});