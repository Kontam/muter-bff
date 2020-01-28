import assert from 'power-assert';
import muted, { Muted, ToggleMutedAction, ACTION_TOGGLE_MUTED, SetMutedAction, ACTION_CHANGE_MUTED } from '../muted';

describe("UIのミュートステータスのreducerテスト", () => {
    it("ミュート配列を初期化するアクションの確認", () => {
        let mockInitialState: Muted = [];
        const mockMuted = [true, false, true];
        const mockSetMutedAction: SetMutedAction = {
            type: ACTION_CHANGE_MUTED,
            payload: mockMuted, 
        };
        // 上書きされることを確認するための２回目データ
        const mockMutedAfter = [false,true,false];
        const mockSetMutedActionAfter: SetMutedAction = {
            type: ACTION_CHANGE_MUTED,
            payload: mockMutedAfter, 
        };
        const newState = muted(mockInitialState, mockSetMutedAction);
        assert.deepEqual(newState, mockMuted);
        assert.deepEqual(muted(newState, mockSetMutedActionAfter), mockMutedAfter)
    });

    it("ミュート状況をtoggleするアクションの確認", () => {
        let mockState: Muted = [false,false,false];
        const mockToggleMutedAction: ToggleMutedAction = {
            type: ACTION_TOGGLE_MUTED,
            payload: 1,
        }

        assert.deepEqual(muted(mockState, mockToggleMutedAction), [false, true, false]);
        const newState = muted(mockState, mockToggleMutedAction);
        assert.deepEqual(muted(newState, mockToggleMutedAction), [false, false, false]);
    })
})

