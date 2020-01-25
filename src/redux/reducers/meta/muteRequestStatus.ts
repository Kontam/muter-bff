import TwAppsConst from "../../../components/TwApps/TwAppsConst";

export const ACTION_MUTE_REQUEST_START = "MUTE_REQUEST_START";
export const ACTION_MUTE_REQUEST_END = "MUTE_REQUEST_END";

export type StartMuteRequestAction = {
  type: typeof ACTION_MUTE_REQUEST_START;
};

export type EndMuteRequestAction = {
  type: typeof ACTION_MUTE_REQUEST_END;
};

export type MuteRequestStatusAction = StartMuteRequestAction | EndMuteRequestAction;
export type MuteRequestStatus =
  | typeof TwAppsConst.REQUEST_STATUS_COMPLETE
  | typeof TwAppsConst.REQUEST_STATUS_LOADING;

// ミュートAPIへのリクエストステータス
export const startMuteRequest = (): StartMuteRequestAction => ({
  type: ACTION_MUTE_REQUEST_START
});

// ミュートAPIへのリクエストステータス
export const endMuteRequest = (): EndMuteRequestAction => ({
  type: ACTION_MUTE_REQUEST_END
});

const muteRequestStatus = (
  state: MuteRequestStatus = TwAppsConst.REQUEST_STATUS_COMPLETE,
  action: MuteRequestStatusAction
) => {
  switch (action.type) {
    case ACTION_MUTE_REQUEST_START:
      return TwAppsConst.REQUEST_STATUS_LOADING;
    case ACTION_MUTE_REQUEST_END:
      return TwAppsConst.REQUEST_STATUS_COMPLETE;
    default:
      return state;
  }
};

export default muteRequestStatus;
