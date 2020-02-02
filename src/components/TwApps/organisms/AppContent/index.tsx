import React from 'react';
import { useSelector } from 'react-redux';

import MuterMenu from '../../molecules/MuterMenu';
import UserList from '../../molecules/UserList';
import FatalMessage from '../../molecules/FatalMessage';
import { RootState } from '../../../../redux/reducers';
import styled from 'styled-components';

const errMessageSelector = (state: RootState) => state.errMessage;
const basePathSelector = (state: RootState) => state.basePath;

export const Container = styled.div``;
/**
 * アプリ内のコンテンツをラップするコンテナ
 * 致命エラーがあるときはコンテンツではなくエラー画面を表示
 */
const AppContent = () => {
  const errMessage = useSelector(errMessageSelector);
  const basePath = useSelector(basePathSelector);

  return (
    <Container> 
      <MuterMenu />
        { errMessage
        ? <FatalMessage
            basePath={basePath}
            errMessage={errMessage}
         />
        : <UserList /> }
    </Container>
  );
}

export default AppContent;