import React from 'react';
import styled from 'styled-components';

import { mediaQ } from '../../../commonModules/media';
import StyleConst from '../styles/define';
// import arrow_down from '../../../../../img/arrow_down.svg';
const arrow_down = require('../../../../img/arrow_down.svg');
// import Arrow_img from '../atoms/Arrow_img';

const ReadMore = () => (
  <Container >
    <Message>何のためのツール？</Message>
    <Arrow />
  </Container>
);

const Container = styled.div`
  background-color: ${StyleConst.muterGreen};
  text-align: center;
  ${mediaQ.pc}{
    height: ${StyleConst.pcReadmoreHeight};
    padding: 20px;
  }
`;
const Message = styled.div`
  color: ${StyleConst.basicWhite};
  font-size: .875rem;
  ${mediaQ.pc}{
    font-size: 1.5rem;
  }
`;
const Arrow = styled.div`
    background: url(${arrow_down}) center / contain no-repeat;
    height: 7px;
    margin-top: 5px;

    ${mediaQ.pc}{
      height: 15px;
      margin-top: 15px;
    }
`;

export default ReadMore;
