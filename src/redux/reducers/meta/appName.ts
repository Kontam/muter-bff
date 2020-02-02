import TwAppsConst from "../../../components/TwApps/TwAppsConst";

export const SET_APPNAME = 'SET_APPNAME';

export type SetAppNameAction = {
  type : typeof SET_APPNAME;
  payload: AppName;
}

export type AppName = typeof TwAppsConst.APPNAME_MUTER
  | typeof TwAppsConst.APPNAME_BLOCKER;

export const setAppName = (appName :AppName): SetAppNameAction => ({type: SET_APPNAME, payload: appName});

const appName = (state :AppName = TwAppsConst.APPNAME_MUTER, action :SetAppNameAction) => {
  switch (action.type) {
    case SET_APPNAME:
      return action.payload;
    default:
      return state;
  };
};

export default appName;
