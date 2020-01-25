import { combineReducers } from 'redux';
import userInfo, { UserInfo } from './resource/userInfo';
import mutedUsers, { MutedUsers } from './resource/mutedUsers';
import isMuterMenuOpened, { IsMuterMenuOpened } from './page/isMuterMenuOpened';
import muted, { Muted } from './resource/muted';
import muteRequestStatus, { MuteRequestStatus } from './meta/muteRequestStatus';
import userRequestStatus, { UserRequestStatus } from './meta/userRequestStatus';
import errMessage, { ErrMessage } from './page/errMessage';
import popUpMessage from './page/popUpMessage';
import basePath, { BasePath } from './meta/basePath';
import appName, { AppName } from './meta/appName';

export interface RootState {
  appName :AppName,
  basePath :BasePath,
  isMuterMenuOpened: IsMuterMenuOpened,
  userInfo :UserInfo,
  mutedUsers :MutedUsers,
  muted :Muted,
  muteRequestStatus :MuteRequestStatus,
  userRequestStatus :UserRequestStatus,
  errMessage :ErrMessage,
  popUpMessage :any,
}

export default combineReducers<RootState>({
  appName,
  basePath,
  isMuterMenuOpened,
  userInfo,
  mutedUsers,
  muted,
  muteRequestStatus,
  userRequestStatus,
  errMessage,
  popUpMessage,
});
