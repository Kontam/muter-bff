import React, { ReactText } from 'react';
import styled from 'styled-components';

import { mediaQ } from '../../../commonModules/media';
// import StyleConst from '../styles/define';
import LoginConst from '../LoginConst';
const house_white_icon = require('../../../../img/house_white_icon.svg');
const twitter_white_icon = require('../../../../img/twitter_white_icon.svg');

const OwnerInfo = () => (
  <Container>
    <OwnerHead>制作</OwnerHead>
    <OwnerName>コンコンタ</OwnerName>
    <List>
      <li>
        <OwnerLink href={LoginConst.OWNER_LINK} target="_blank" rel="noopener noreferrer">
          <HomeIcon src={house_white_icon} alt="home" className="footerOwnerInfo__homeIcon" />
        </OwnerLink>
      </li>
      <li>
        <OwnerLink href={LoginConst.OWNER_TWITTER_LINK} target="_blank" rel="noopener noreferrer">
          <TwitterIcon src={twitter_white_icon} alt="twitter" className="footerOwnerInfo__twitterIcon" />
        </OwnerLink>
      </li>
    </List>
  </Container>
);

export default OwnerInfo;

const Container = styled.div`
  ${mediaQ.pc}{
    align-items: flex-end;
    display: flex;
    justify-content: flex-end;
  }
`;
const OwnerHead = styled.h2`
  font-size: 1.125rem;
  ${mediaQ.pc}{
    font-size: 1.375rem;
    margin-right: 25px;
  }
`;
const OwnerName = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 10px;
  ${mediaQ.pc}{
    font-size: 1.375rem;
    margin-top: 0;
  }
`;
const List = styled.ul`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 10px;
    ${mediaQ.pc}{
      margin-top: 0;
    }
`;
const OwnerLink = styled.a<{href: string}>`
    margin: 0 12px;
    ${mediaQ.pc}{
      margin: 0 0 0 15px;
    }
`;

const HomeIcon = styled.img`
    width: 26px;
`;
const TwitterIcon = styled.img`
    width: 26px;
`;
