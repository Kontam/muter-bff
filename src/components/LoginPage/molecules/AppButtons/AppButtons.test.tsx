import { shallow } from 'enzyme';
import * as React from 'react';
import assert from 'power-assert';

import AppButtons, { List, MuterButton, BlockerButton } from '../AppButtons';

import { storeFactory, commonInitialState, adapter } from '../../../../modules/testUtils';
import LoginConst from '../../LoginConst';
adapter();

describe('アプリ切り替えボタンのテスト項目',() => {
  const store = storeFactory(commonInitialState);
  const wrapper = shallow(<AppButtons store={store} />).dive().dive();

  const StyledList = wrapper.find(List);
  const StyledMuterButton = wrapper.find(MuterButton).parent();
  const StyledBlockerButton = wrapper.find(BlockerButton).parent();

  test('エラー無く必要なコンポーネントが描画されている',()=>{
    expect(StyledList.length).toBe(1);
    expect(StyledMuterButton.length).toBe(1);
    expect(StyledBlockerButton.length).toBe(1);
  });

  test('ブロックリマインダーボタン：　正しいリンク先をhref属性にセットされている',()=>{
    assert.equal(StyledBlockerButton.props().href, LoginConst.BLOCKER_SLAG);
  });

  test('ミュートリマインダーボタン：　ボタンを押すとステートが切り替わる',()=>{
    assert.equal(StyledMuterButton.props().href, LoginConst.MUTER_SLAG);
  });

});
