import React from "react";
import MuterMenuComponent from "./MuterMenu";;
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import { setIsMuterMenuOpened } from "../../../../redux/reducers/page/isMuterMenuOpened";

const isOpendSelector = (state: RootState) => state.isMuterMenuOpened;

const MuterMenu = () => {
  const isOpened = useSelector(isOpendSelector);
  const dispatch = useDispatch();
  const onMenuButtonClick = () => {
    isOpened
      ? dispatch(setIsMuterMenuOpened(false))
      : dispatch(setIsMuterMenuOpened(true));
  };

  return (
   <MuterMenuComponent
    isOpened={isOpened}
    onMenuButtonClick={onMenuButtonClick}
   />
  );
};

export default MuterMenu;
