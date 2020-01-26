import React from 'react';
import { useSelector } from 'react-redux';

import MuterMenu from '../../molecules/MuterMenu';
import UserList from '../../molecules/UserList';
import FatalMessage from '../../molecules/FatalMessage';
import { RootState } from '../../../../redux/reducers';
import styled from 'styled-components';
import { mediaQ } from '../../../../modules/styles/media';

const selector = (state :RootState) => state.errMessage;
export const Container = styled.div``;
/**
 * アプリ内のコンテンツをラップするコンテナ
 * 致命エラーがあるときはコンテンツではなくエラー画面を表示
 */
const AppContent = () => {
  const errMessage = useSelector(selector);

  return (
    <Container> 
      <MuterMenu />
        { errMessage ? <FatalMessage /> : <UserList /> }
    </Container>
  );
}

export default AppContent;