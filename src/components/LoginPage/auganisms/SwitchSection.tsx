import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { RootState } from '../../../redux/reducers';
import StyleConst from '../styles/define';
import LoginConst from '../LoginConst';
import AppButtons from '../molecules/AppButtons';

interface PropsByState {
  appName: string;
}
interface PropsByDispatch {
}
interface SwitchSectionProps extends PropsByState, PropsByDispatch{};

const SwitchSection = ({ appName } :SwitchSectionProps) :JSX.Element => {

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
      <AppButtons />
    </Container>
  );
};

export default connect(
  (state :RootState) :PropsByState => ({
    appName: state.appName,
  }),
)(SwitchSection);
