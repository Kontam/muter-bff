import React from 'react';
import styled from 'styled-components';

import { mediaQ } from '../../../../commonModules/media';
import StyleConst from '../../styles/define';
import OwnerInfo from '../../molecules/OwnerInfo';

const PageFooter = () => (
  <Footer>
    <Wrapper>
      <OwnerInfo />
      <Copyright>
        Copyright © Konkonta All right reserved
      </Copyright>
    </Wrapper>
  </Footer>
);

export default PageFooter;

const Footer = styled.footer`
  background-color: ${StyleConst.twitterBlue};
  color: ${StyleConst.basicWhite};
  padding: 10px;
  text-align: center;
  ${mediaQ.pc}{
    height: 150px;
    padding: 75px 0 8px;
    text-align: right;
  }
`;
const Wrapper = styled.div`
  ${mediaQ.pc}{
    margin: 0 auto;
    max-width: 1220px;
    padding-right: 20px;
  }
`;

const Copyright = styled.p`
    font-size: 12px;
    margin-top: 40px;
    ${mediaQ.pc}{
      font-size: 1.25rem;
      margin-top: 8px;
    }
`;
