import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../redux/reducers';
import StyleConst from '../../styles/define';
import LoginConst from '../../LoginConst';
import AppButtons from '../../molecules/AppButtons';

const appNameSelector = (state: RootState) => state.appName;

const SwitchSection = () :JSX.Element => {
  const appName = useSelector(appNameSelector);

  const backgroundColor = appName === LoginConst.APPNAME_MUTER ?
    StyleConst.muterGreen : StyleConst.blockerBlue;

  const Container = styled.div`
    font-size: 26px;
    font-weight: ${StyleConst.fwBold};
    color: ${StyleConst.basicWhite};
    background: ${backgroundColor};
    padding: 50px 0 100px;
    text-align: center;
    transition: .3s;
  `;
  const Head = styled.h2``;


  return (
    <Container>
      <Head>他のアプリもお試しください</Head>
      <AppButtons
        appName={appName}
      />
    </Container>
  );
};

export default SwitchSection;
