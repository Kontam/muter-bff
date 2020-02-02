import assert from 'power-assert';
import basePath, { setBasePath } from '../basePath';

describe("アプリ基本URLのreducerテスト", () => {
    it("URLセットアクションのテスト", () => {
        const mockBasePath = "testBasePath";
        const mockBasePathAfter = "testBasePathAfter";

        const newState = basePath(mockBasePath, setBasePath(mockBasePath));
        assert.deepEqual(newState, mockBasePath);
        assert.deepEqual(basePath(newState, setBasePath(mockBasePathAfter)), mockBasePathAfter);
    });
})

