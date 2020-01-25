import React from 'react';
import styled,{ css } from 'styled-components';

import StyleConst, { resetAnchor } from '../../styles/define';
import LoginConst from '../../LoginConst';
const houseIcon = require('../../../../../img/house_icon.svg');

const OwnerLink = () => (
  <OwnerLinkText>
      <OwnerIcon src={houseIcon} alt="home" />
      <Anchor href={LoginConst.OWNER_LINK} target="_blank" rel="noopener noreferrer">制作者ホームページ</Anchor>
    </OwnerLinkText>
);

/**
 * slickのスタイルで一部styled-componentsで対応できないところがある
 * statuc/Carousel.cssで補う
 */
const OwnerLinkText = styled.div`
  text-align: right;
  padding: 0 10px;
  margin-bottom: 3px;
  cursor: pointer;
`;

const OwnerIcon = styled.img`
  margin-right: 3px;
  width: 12px;
`;

const Anchor = styled.a`
  ${resetAnchor}
  color: ${StyleConst.twitterBlue};
  font-size: 0.66rem;
  vertical-align: 1px;
`;


export default OwnerLink;
