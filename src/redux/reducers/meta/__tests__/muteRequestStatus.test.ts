import assert from 'power-assert';
import muteRequestStatus,{ startMuteRequest, endMuteRequest } from '../muteRequestStatus';
import TwAppsConst from '../../../../components/TwApps/TwAppsConst';

describe("アプリ基本URLのreducerテスト", () => {
    it("URLセットアクションのテスト", () => {
        const newState = muteRequestStatus(TwAppsConst.REQUEST_STATUS_COMPLETE, startMuteRequest());
        assert.deepEqual(newState, TwAppsConst.REQUEST_STATUS_LOADING);
        assert.deepEqual(muteRequestStatus(newState, endMuteRequest()), TwAppsConst.REQUEST_STATUS_COMPLETE);
    });
})

