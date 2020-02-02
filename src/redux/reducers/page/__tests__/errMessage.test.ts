import assert from 'power-assert';
import errMessage, { setErrMessage } from '../errMessage';

describe("エラーメッセージReducerのテスト", () => {
    it("エラーメッセージセットActionのテスト", () => {
        const mockErrMessage = "testErrMessage";
        const mockErrMessageAfter = "testErrMessageAfter";

        const newState = errMessage(mockErrMessage, setErrMessage(mockErrMessage));
        assert.deepEqual(newState, mockErrMessage);
        assert.deepEqual(errMessage(newState, setErrMessage(mockErrMessageAfter)), mockErrMessageAfter);
    });
})

