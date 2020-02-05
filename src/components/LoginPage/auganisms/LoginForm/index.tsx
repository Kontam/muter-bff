import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { mediaQ } from '../../../../modules/styles/media';
import StyleConst from '../../styles/define';
import LoginConst from '../../LoginConst';
import LoginButton from '../../molecules/LoginButton';
import OwnerLink from '../../molecules/OwnerLink';
import { RootState } from '../../../../redux/reducers';

const basePathSelector = (state: RootState) => state.basePath;

const LoginForm = () => {
  const basePath = useSelector(basePathSelector);
  return(
    <>
      <OwnerLink />
      <LoginContainer>
        <LoginButton href={basePath + LoginConst.LOGIN_SLAG}/>
        <LoginDescription>{LoginConst.DESCRIPTION_LOGIN_TWITTER}</LoginDescription>
      </LoginContainer>
    </>
  )
};

const LoginContainer = styled.div`
  background-color: ${StyleConst.muterGreen};
  color: ${StyleConst.basicWhite};
  padding: 70px 0 45px;
  width: 100%;

  ${mediaQ.pc}{
    display: flex;
    flex-direction: column-reverse;
    height: 340px;
    justify-content: flex-end;
    padding: 48px;
    max-width: 500px;
  }
`;

const LoginDescription = styled.p`
  color: ${StyleConst.basicWhite};
  font-size: 1.25rem;
  font-weight: ${StyleConst.fwBold};
  line-height: 2.5;
  margin-top: 50px;
  text-align: center;
  white-space: pre;
  ${mediaQ.pc}{
    font-size: 1.5rem;
    margin-top: 0;
  }
  ${mediaQ.tablet}{
    font-size: 1.25rem;
    min-width: 340px;
  }
`;

export default LoginForm;
