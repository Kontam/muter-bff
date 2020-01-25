import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Link from 'next/link';

import { RootState } from '../../../../redux/reducers';
import { resetAnchor } from '../../../../modules/styles/theme';
import LoginConst from '../../LoginConst';
import { MyThemeProps } from '../../../../modules/styles/theme';

export type AppButtonsProps = {
  appName :string,
  store?: any,
};

const commonButton = styled.a`
  ${resetAnchor}
  width: 250px;
  height: 50px;
  color: ${({theme}: MyThemeProps<{}>) => theme.colors.basicWhite};
  font-weight: ${({theme}: MyThemeProps<{}>) => theme.fonts.fwBold};
  font-size: 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border-radius: 5px;
`;
export const MuterButton = styled(commonButton)<any>`
  background: ${({theme}: MyThemeProps<{}>) => theme.colors.muterLightGreen};
  opacity: ${(props) => props.appName !== LoginConst.APPNAME_MUTER ? 1 : .5};
`;
export const BlockerButton = styled(commonButton)<any>`
  background: ${({theme}: MyThemeProps<{}>) => theme.colors.blockerBlue};
  opacity: ${(props) => props.appName === LoginConst.APPNAME_MUTER ? 1 : .5};
  margin-top: 80px;
`;
export const List = styled.ul`
  margin-top: 80px;
`;

const AppButtons = ({ appName } :AppButtonsProps) => {

  return (
    <List>
      <li>
        <Link href={`/`} passHref>
          <MuterButton appName={appName}>
            ミュートリマインダー
          </MuterButton>
        </Link>
      </li>
      <li>
        <Link href={`/${LoginConst.APPNAME_BLOCKER}`}>
          <BlockerButton appName={appName}>
            ブロックリマインダー
          </BlockerButton>
        </Link>
      </li>
    </List>
  );
};

export default connect(
  (state :RootState) => ({
    appName: state.appName,
  }),
)(AppButtons);
