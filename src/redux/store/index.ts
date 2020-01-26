import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer, { RootState } from '../reducers';
import TwAppsConst from '../../components/TwApps/TwAppsConst';
import LoginConst from '../../components/LoginPage/LoginConst';

export const initialState :RootState = {
  appName: LoginConst.APPNAME_MUTER,
  basePath: "",
  isMuterMenuOpened: true,
  userInfo :{},
  mutedUsers :[],
  muted :[],
  muteRequestStatus :TwAppsConst.REQUEST_STATUS_COMPLETE,
  userRequestStatus :TwAppsConst.REQUEST_STATUS_COMPLETE,
  errMessage :"",
  popUpMessage :"",
}

export function initializeStore() {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(thunk)),
  )
};
