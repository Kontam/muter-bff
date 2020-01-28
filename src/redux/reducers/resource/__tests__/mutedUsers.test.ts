import assert from 'power-assert';
import mutedUsers,{ requestMutedUsers, TweetsInfo, UserInfo, MutedUsers, ACTION_CHANGE_MUTED_USERS } from '../mutedUsers';
import requestToServer from '../../../../modules/requestToServer';

jest.mock('../../../../modules/requestToServer');

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

describe("mutedUsersのReducerテスト", () => {
    test("mutedUsersが正しくセットされること", () => {
        const InitialState = {} as MutedUsers;
        const mockAction = {
            type: ACTION_CHANGE_MUTED_USERS,
            payload: mockMutedUsers,
        };
        assert.deepEqual(mutedUsers(InitialState, mockAction), mockMutedUsers);
    });
});

describe("APIリソース送受信のテスト", () => {
    test("ミュートユーザーリクエスト処理", () => {

    });
});