import React from 'react';
import styled, {css} from 'styled-components';
import { connect } from 'react-redux';

import { RootState } from '../../../redux/reducers';
import LoginConst from '../LoginConst';
import { mediaQ } from '../../../commonModules/media';
import StyleConst from '../styles/define';

interface HeadLabel {
  line1: string
  line2: string
  eng: string
}

interface propsByState {
  appName: string
}

interface propsByDispatch {
}

interface PageHeaderProps extends propsByState, propsByDispatch {
}

const PageHeader = ({ appName } :PageHeaderProps) => {

  const muterLabel :HeadLabel = {
    line1: 'あの人は今？',
    line2: 'チェッカー',
    eng: 'Mute Reminder',
  };
  const blockerLabel :HeadLabel = {
    line1: 'ブロック',
    line2: 'リマインダー',
    eng: 'Block Reminder',
  };
  const headLabel = appName === LoginConst.APPNAME_MUTER ? muterLabel : blockerLabel;

  const muterGradient = css`linear-gradient(to bottom right, #84FAB1, #8FD3F4)`;
  const blockerGradient = css`linear-gradient(to bottom right, #8FD3F4, #79DAE3)`;
  const ContainerBG = appName === LoginConst.APPNAME_MUTER ? muterGradient : blockerGradient;

  const PageHeadContainer = styled.div`
    color: #fff;
    background: ${ContainerBG};
    height: 200px;
    padding: 30px 35px 15px;
    width: 100%;
    ${mediaQ.pc}{
      height: ${StyleConst.pcHeaderHeight};
      padding: 25px 0;
    }
  `;

  return (
    <PageHeadContainer>
      <PageHead>
        <HeadLine1>{headLabel.line1}</HeadLine1>
        <HeadLine2>{headLabel.line2}</HeadLine2>
      </PageHead>
      <EnglishHead>{headLabel.eng}</EnglishHead>
    </PageHeadContainer>
  );
};

const PageHead = styled.h1`
    font-size: 2.125rem;
    font-weight: ${StyleConst.fwBold};
    margin: 0 auto;
    max-width: 350px;
    ${mediaQ.pc} {
      display: flex;
      font-size: 5.25rem;
      justify-content: center;
      line-height: 140px;
      max-width: none;
    }
    ${mediaQ.tablet}{
      font-size: 4rem;
    }
`;

const HeadLine1 = styled.div`
`;

const HeadLine2 = styled.div`
    margin-top: 17px;
    text-align: right;
    ${mediaQ.pc}{
      margin: 0;
    }
`;

const EnglishHead = styled.div`
    font-family: ${StyleConst.engHeadFont};
    font-size: 2.5rem;
    font-weight: ${StyleConst.fwMedium};
    text-align: center;
    margin-top: 25px;
    ${mediaQ.pc}{
      font-size: 5.25rem;
      margin: 0;
    }
`;

export default connect(
  (state :RootState) :propsByState => ({
    appName: state.appName,
  }),
)(PageHeader);
