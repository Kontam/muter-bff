import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer, { RootState } from '../reducers';
import TwAppsConst from '../../components/TwApps/TwAppsConst';

export const initialState :RootState = {
  appName: "",
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
