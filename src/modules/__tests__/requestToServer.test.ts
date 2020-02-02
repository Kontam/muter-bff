import axios, { AxiosResponse, AxiosError } from 'axios';
import assert from 'power-assert';
import requestToServer from '../requestToServer';
import { UserInfo } from '../../redux/reducers/resource/userInfo';

jest.mock('axios');

describe("リクエストの成否に応じて期待した結果になることを確認する", () => {
    const mockUserInfo: UserInfo = {
        user_id: "12345",
        user_name: "test_userName",
        screen_name: "knon_game",
        profile_image_url_https:
            "https://pbsom/profile_images/10585/LdKwoFXJ.jpg"
        };
    const mockAxiosResponse: AxiosResponse<UserInfo> = {
        data: mockUserInfo,
        status: 200,
        statusText: "success",
        headers: {},
        config: {},
    };
    const mockAxiosErrorResponce: AxiosResponse<UserInfo> = {
        data: mockUserInfo,
        status: 500,
        statusText: "Internal Server Error",
        headers: {},
        config: {},
    };
    const mockAxiosError: AxiosError = {
        name: "a",
        message: "error_message",
        config: {} as any,
        code: "error code",
        response: mockAxiosErrorResponce,
        isAxiosError: false,
    }
    const mockEndpoint = "http://mockEndpoint.com";
    const mockParams = { param1: "param1" };

    test("axiosの引数が正しく、通信成功時にデータとステータスが返却される", async () => {
       (axios.get as jest.Mock).mockResolvedValue(mockAxiosResponse);
       const result = await requestToServer(mockEndpoint, mockParams)
       assert.deepStrictEqual(result, {
           data: mockAxiosResponse.data,
           status: mockAxiosResponse.status,
       });
       assert.deepEqual((axios.get as jest.Mock).mock.calls[0], [mockEndpoint, mockParams]);
    });
    
    // test("HTTPエラー時にAxiosエラー処理が実行される", async () => {
    //    (axios.get as jest.Mock).mockResolvedValue(mockAxiosError);
    //    const result = await requestToServer(mockEndpoint, mockParams)
    //    assert.deepStrictEqual(result, {
    //        data: mockAxiosErrorResponce.data,
    //        status: mockAxiosErrorResponce.status,
    //    });
    //    assert.deepEqual((axios.get as jest.Mock).mock.calls[0], [mockEndpoint, mockParams]);
    // });
});
