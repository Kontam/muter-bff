import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { setBasePath } from '../../../../redux/reducers/meta/basePath';
import { setAppName } from '../../../../redux/reducers/meta/appName';
import ApplicationTop from '../ApplicationTop';
import LoginConst from '../../LoginConst';


interface LoginPageProps {
  basePath? :string;
  setBasePath: Function;
  setAppName: Function;
  appName :typeof LoginConst.APPNAME_MUTER | typeof LoginConst.APPNAME_BLOCKER;
}

const LoginPage = ({ basePath, setBasePath, appName, setAppName } :LoginPageProps) :JSX.Element  => {
  useEffect(() :void => {
    setBasePath(basePath);
    setAppName(appName);
  },[]);

  return (
      <Container>
          <ApplicationTop />
      </Container>
  );
}

export default connect(
  () => ({}),
  { setBasePath, setAppName }
)(LoginPage);

const Container = styled.div`
    overflow-x: hidden;
`;
