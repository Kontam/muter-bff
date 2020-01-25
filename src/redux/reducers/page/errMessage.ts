export const ACTION_CHANGE_ERR_MESSAGE = 'CHANG_ERR_MESSAGE';

export type SetErrMessageAction = {
  type: typeof ACTION_CHANGE_ERR_MESSAGE
  payload: string
}
export type ErrMessageAction = SetErrMessageAction;

export type ErrMessage = string;

// 致命的なエラーメッセージの指定
export const setErrMessage = (message: ErrMessage):SetErrMessageAction => ({ type: ACTION_CHANGE_ERR_MESSAGE, payload: message });


// 致命的なエラー発生時に表示するメッセージ
// 正常処理中は空文字列
const errMessage = (state = '', action: ErrMessageAction) => {
  switch (action.type) {
  case ACTION_CHANGE_ERR_MESSAGE:
    return action.payload;
  default:
    return state;
  }
};

export default errMessage;
