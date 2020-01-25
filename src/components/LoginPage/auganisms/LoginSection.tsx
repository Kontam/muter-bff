import React from 'react';
import styled,{ css } from 'styled-components';

import { mediaQ } from '../../../commonModules/media';
import StyleConst from '../styles/define';
import LoginConst from '../LoginConst';
import LoginForm from './LoginForm';



interface LoginSectionProps {
  basePath: string;
};

const LoginSection = ({ basePath } :LoginSectionProps) => (
  <LoginContainer>
    <LoginDiscription>
      <Paragraph1>{LoginConst.DESCRIPTION_FIRST_MUTER}</Paragraph1>
      <Paragraph2>{LoginConst.DESCRIPTION_SECOND_MUTER}</Paragraph2>
    </LoginDiscription>
    <LoginRightColumn>
      <LoginForm />
    </LoginRightColumn>
  </LoginContainer>
);

const LoginContainer = styled.div`
  ${mediaQ.pc}{
    max-width: 1200px;
    margin: 0 auto;
    padding: 75px 0;
    align-items: center;
    display: flex;
    justify-content: center;
    min-height: 400px;
    height: calc(100vh - ${StyleConst.pcHeaderHeight} - ${StyleConst.pcReadmoreHeight});
  }
`;
const LoginDiscription = styled.div`
  padding: 44px 60px 35px;
  text-align: center;
  ${mediaQ.pc}{
    padding: 0;
    margin-right: 9%;
    text-align: left;
  }
`;

const ParagraphCommon = css`
  color: ${StyleConst.twitterBlue};
  font-size: 1.25rem;
  font-weight: ${StyleConst.fwMedium};
  line-height: 3;
  white-space: pre;
  ${mediaQ.pc}{
    font-size: 2rem;
    font-weight: ${StyleConst.fwMedium};
    line-height: 2;
  }
  ${mediaQ.tablet}{
    font-size: 1.25rem;
    margin-left: 5%;
    min-width: 260px;
  }
`;

const Paragraph1 = styled.p`
  ${ParagraphCommon}
`;
const Paragraph2 = styled.p`
  ${ParagraphCommon}
  margin-top: 14px;
  ${mediaQ.pc}{
    margin-top: 55px;
  }
`;

const LoginRightColumn = styled.div``;

export default LoginSection;
