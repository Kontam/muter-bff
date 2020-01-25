export const ACTION_CHANGE_POPUP_MESSAGE = 'CHANGE_POPUP_MESSAGE';

// ポップアップ表示するメッセージの設定
export const setPopUpMessage = (message: string) => (dispatch: any) => {
  dispatch({ type: ACTION_CHANGE_POPUP_MESSAGE, message });
};

// ユーザーに通知する小さなメッセージ
// なにもない場合はから文字列
const popUpMessage = (state = '', action:any) => {
  switch (action.type) {
  case ACTION_CHANGE_POPUP_MESSAGE:
    return action.message;
  default:
    return state;
  }
};

export default popUpMessage;
