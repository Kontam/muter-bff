import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers';
import { mediaQ } from '../../../../modules/styles/media';
import { MyThemeProps, resetAnchor } from '../../../../modules/styles/theme';

const StateSelector = (state: RootState) => ({
  errMessage: state.errMessage,
  basePath: state.basePath,
});

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const Content = styled.div`
  text-align: center;
  width: 100%;
`;

export const Message = styled.h2`
  white-space: pre-wrap;
  color: ${({ theme }: MyThemeProps<{}>) => theme.colors.lightLabelColor};
  font-weight: bold;
  line-height: 2;
  width: 100%;
  ${mediaQ.pc} {
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const Link = styled.a`
  ${resetAnchor}
  border-radius: 5px;
  display: flex;
  margin: 30px auto 0;
  width: 50%;
  max-width: 200px;
  height: 40px;
  background-color: ${({ theme }: MyThemeProps<{}>) => theme.colors.twitterBlue};
  color: ${({ theme }: MyThemeProps<{}>) => theme.colors.basicWhite};
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px ${({ theme }: MyThemeProps<{}>) => theme.colors.twitterShadowBlue};
  transition: .3s;
  font-weight: bold;
  &:active {
    transform: translateY(5px);
    box-shadow: 0 0 ${({ theme }: MyThemeProps<{}>) => theme.colors.twitterShadowBlue};
  }
`;

const FatalMessage = () => {
  const { errMessage, basePath } = useSelector(StateSelector);
  return (
    <Container>
      <Content>
        <Message>{errMessage}</Message>
        <Link href={basePath} >Topへ戻る</Link>
      </Content>
    </Container>
    )
};

export default FatalMessage;
