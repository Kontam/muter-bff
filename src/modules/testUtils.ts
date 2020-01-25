import { createStore, Store, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import rootReducer, { RootState } from '../redux/reducers';
import { initialState } from '../redux/store';

export const adapter = () => { enzyme.configure({ adapter: new Adapter() }) };

/**
 *
 * @param initialState
 */



export type LoginPageStore = Store<RootState>
export const storeFactory = (state :RootState = initialState) => {
  return createStore(rootReducer, state, applyMiddleware(thunk),);
}

/**
 * 頻繁に使用するテスト用の初期ステート
 */
export const commonInitialState :RootState = {
  basePath: "https://basepath.com",
  appName: "MuteReminder",
  isMuterMenuOpened: true,
  userInfo :{},
  mutedUsers :[],
  muted :[],
  muteRequestStatus :"complete",
  userRequestStatus :"complete",
  errMessage :"",
  popUpMessage :"",
}



