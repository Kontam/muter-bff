import assert from 'power-assert';
import userRequestStatus,{ startUserRequest, endUserRequest } from '../userRequestStatus';
import TwAppsConst from '../../../../components/TwApps/TwAppsConst';

describe("アプリ基本URLのreducerテスト", () => {
    it("URLセットアクションのテスト", () => {
        const newState = userRequestStatus(TwAppsConst.REQUEST_STATUS_COMPLETE, startUserRequest());
        assert.deepEqual(newState, TwAppsConst.REQUEST_STATUS_LOADING);
        assert.deepEqual(userRequestStatus(newState, endUserRequest()), TwAppsConst.REQUEST_STATUS_COMPLETE);
    });
})

