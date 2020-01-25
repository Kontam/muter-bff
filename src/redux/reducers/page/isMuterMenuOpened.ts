export const ACTION_CHANGE_ISMUTERMENU_OPENED = 'CHANGE_ISMUTERMENU_OPENED';

export const setIsMuterMenuOpened = (isMuterMenuOpened: IsMuterMenuOpened): SetIsMuterMenuOpenedAction => ({ type: ACTION_CHANGE_ISMUTERMENU_OPENED, payload: isMuterMenuOpened });

export type SetIsMuterMenuOpenedAction = {
  type: typeof ACTION_CHANGE_ISMUTERMENU_OPENED,
  payload: IsMuterMenuOpened,
}
export type IsMuterMenuOpened = boolean;

// メニュー開閉状態
const isMuterMenuOpened = (state: IsMuterMenuOpened = false, action: SetIsMuterMenuOpenedAction) => {
  switch (action.type) {
  case ACTION_CHANGE_ISMUTERMENU_OPENED:
    return action.payload;
  default:
    return state;
  }
};

export default isMuterMenuOpened;
