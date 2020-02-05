import { shallow,mount } from 'enzyme';
import * as React from 'react';
import LoginButton, { LoginLink, TwitterIcon } from '..';
import LoginConst from '../../../LoginConst';
import { adapter } from '../../../../../modules/testUtils';
adapter();

const buttonLabel = "ログイン";
const mockBasePath = "http://test.com";

describe("ログイン用ボタンのテスト", () => {
  const wrapper = shallow(<LoginButton href={mockBasePath}/>);
  const Link = wrapper.find(LoginLink);

  test("アイコンとラベルを含んだボタンが描画されている", () => {
    expect(Link.length).toBe(1);
    expect(Link.find(TwitterIcon).length).toBe(1);
    expect(Link.text()).toEqual(buttonLabel);
  });

  test("ボタンのリンク先がステートに応じてセットされている", () => {
    const linkProps :any = Link.props();
    expect(linkProps.href).toEqual(mockBasePath);
  });
});
