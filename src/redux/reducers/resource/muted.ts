export const ACTION_TOGGLE_MUTED = 'TOGGLE_MUTED' as const;
export const ACTION_CHANGE_MUTED = 'CHANGE_MUTED' as const;

export type Muted = boolean[];

type SetMutedAction = {
  type: typeof ACTION_CHANGE_MUTED
  payload: Muted
}

type ToggleMutedAction = {
  type: typeof ACTION_TOGGLE_MUTED
  payload: number
}

export type MutedAction = SetMutedAction | ToggleMutedAction;

// ユーザーごとにミュートされているかどうかのフラグ
export const setMuted = (muted :Muted): SetMutedAction => ({ type: ACTION_CHANGE_MUTED, payload: muted });

// インデックス番号で指定されたユーザーのミュートフラグをトグルする
export const toggleMuted = (index :number): ToggleMutedAction => ({ type: ACTION_TOGGLE_MUTED, payload :index });


const muted = (state: Muted = [], action: MutedAction) => {
  // stateのアドレスが変わらないとレンダリングがされない
  // 旧stateの値をコピーした変数を用意する
  const newMuted: Muted = state.concat();
  switch (action.type) {
  case ACTION_CHANGE_MUTED:
    return action.payload;
  case ACTION_TOGGLE_MUTED:
    newMuted[action.payload] = !state[action.payload];
    return newMuted;
  default:
    return state;
  }
};

export default muted;
