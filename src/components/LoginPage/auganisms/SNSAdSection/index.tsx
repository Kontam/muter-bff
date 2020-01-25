import React from 'react';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';


import SNSLinks from '../../../SNSLinks/components/SNSLinks';
import StyleConst from '../../styles/define';
import { mediaQ } from '../../../../commonModules/media';

const SNSAdSection = ({ basePath }: {basePath: string}) => (
  <Container>
    <Head>気に入ってくださいましたら</Head>
    <FirstP>{'「あの人は今？チェッカー」は\r\n個人で開発されました'}</FirstP>
    <SecondP>{'たくさんのユーザーに利用されることが\r\n開発者の励みになります'}</SecondP>
    <ThirdP>{'あなたのお友達にもこのアプリを\r\nぜひご紹介ください'}</ThirdP>
    <SNSLinks shareUrl={basePath}/>
  </Container>
);

export default connect(
  (state:any) => ({
    basePath: state.basePath,
  })
)(SNSAdSection);

const Container = styled.div`
  padding: 150px 0;
  text-align: center;
  ${mediaQ.pc}{
    padding: 150px 0;
    text-align: center;
  }
`;

const Head = styled.h2`
  color: ${StyleConst.twitterBlue};
  font-size: 1.625rem;
  font-weight: bold;
  ${mediaQ.pc}{
    font-size: 3rem;
  }
`;

const Paragraph = css`
  color: ${StyleConst.lightLabelColor};
  font-size: 1.125rem;
  line-height: 2.5;
  white-space: pre-wrap;
  ${mediaQ.pc}{
    font-size: 1.25rem;
    line-height: 3;
    white-space: normal;
  }
`;

const FirstP = styled.p`
  ${Paragraph}
  margin-top: 30px;
  ${mediaQ.pc}{
    margin-top: 100px;
  }
`;

const SecondP = styled.p`
  ${Paragraph}
  margin-top: 45px;
  ${mediaQ.pc}{
    margin-top: 0;
  }
`;

const ThirdP = styled.p`
  ${Paragraph}
  margin-top: 45px;
  ${mediaQ.pc}{
    margin-top: 0;
  }
`;

