import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { setIsMuterMenuOpened, IsMuterMenuOpened } from '../../../../redux/reducers/page/isMuterMenuOpened';
import { resetButton } from '../../../../modules/styles/theme';
import { mediaQ } from '../../../../modules/styles/media';
import { RootState } from '../../../../redux/reducers';
const cross_icon = require('../../../../../img/cross_icon.svg');
const hambargar_icon = require('../../../../../img/hambargar_icon.svg');

export const Container = styled.div`
  display: none;
  ${mediaQ.pc} {
    display: block;
    text-align: right;
  }
`;

export const Icon = styled.img`
  ${mediaQ.pc} {
    font-size: 20px;
    height: 40px;
    width: 40px;
  }
`;

export const Button = styled.button`
  ${mediaQ.pc} {
    cursor: pointer;
    font-size: 20px;
    ${resetButton}
  }
`;

type Props = {
  onClick: React.MouseEventHandler,
  isMenuOpened: IsMuterMenuOpened,
}


/**
 * メニュー開閉状態をトグルするボタン
 * 状態に応じてアイコン画像を変える
 * @param {boolean} isMenuOpened 開いてるときはtrue
 * @param {function} onClick メニュー開閉処理
 */
const ToggleMuterMenuButton = ({ onClick, isMenuOpened }: Props) => {
  const imgUrl = isMenuOpened ? `${cross_icon}` : `${hambargar_icon}`;
  return (
    <Container>
      <Button
        onClick={onClick}
      >
        <Icon className="menu-toggle-icon" src={imgUrl} alt="close"/>
      </Button>
    </Container>
  );
}



export default ToggleMuterMenuButton;
