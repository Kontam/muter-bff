import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import UserListComponent from './UserList';
import { RootState } from "../../../../redux/reducers";
import TwAppsConst from "../../TwAppsConst";
import { requestMutedUsers } from "../../../../redux/reducers/resource/mutedUsers";

const mutedUsersSelector = (state: RootState) => state.mutedUsers;
const mutedSelector = (state: RootState) => state.muted;
const isMuterMenuOpenedSelector = (state: RootState) => state.isMuterMenuOpened;
const basePathSelector = (state:RootState) => state.basePath;

const UserList = () => {
  const basePath = useSelector(basePathSelector);
  const muted = useSelector(mutedSelector);
  const isMuterMenuOpened = useSelector(isMuterMenuOpenedSelector);
  const mutedUsers = useSelector(mutedUsersSelector);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(requestMutedUsers(basePath + TwAppsConst.MUTED_USERS_ENDPOINT));
  }, []);

  return (
    <UserListComponent
      mutedUsers={mutedUsers}
      muted={muted}
      isMuterMenuOpened={isMuterMenuOpened}
    />
  );
};

export default UserList;
