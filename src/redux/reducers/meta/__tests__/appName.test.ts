import assert from 'power-assert';
import appName, { setAppName } from '../appName';
import TwAppsConst from '../../../../components/TwApps/TwAppsConst';

describe("表示中のアプリ名のreducerテスト", () => {
    it("アプリ名をセットするreducerのテスト", () => {
        const newState = appName(TwAppsConst.APPNAME_MUTER, setAppName(TwAppsConst.APPNAME_BLOCKER));
        assert.deepEqual(newState, TwAppsConst.APPNAME_BLOCKER);
        assert.deepEqual(appName(newState, setAppName(TwAppsConst.APPNAME_MUTER)), TwAppsConst.APPNAME_MUTER);
    });
})

