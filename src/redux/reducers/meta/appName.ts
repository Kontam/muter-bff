import { Dispatch } from 'redux';

export const SET_APPNAME = 'SET_APPNAME';

interface appNameAction {
  type :AppName;
  payload: string;
}

export type AppName = string

export const setAppName = (appName :AppName) => ({type: SET_APPNAME, payload: appName});

const appName = (state :AppName = "", action :appNameAction) => {
  switch (action.type) {
    case SET_APPNAME:
      return action.payload;
    default:
      return state;
  };
};

export default appName;
