import assert from 'power-assert';
import isMuterMenuOpened, { setIsMuterMenuOpened } from '../isMuterMenuOpened';

describe("メニュー開閉状態のReducerテスト", () => {
    it("メニュー開閉Actionのテスト", () => {
        const newState = isMuterMenuOpened(true, setIsMuterMenuOpened(false));
        assert.deepEqual(newState, false);
        assert.deepEqual(isMuterMenuOpened(newState, setIsMuterMenuOpened(true)), true);
    });
})

