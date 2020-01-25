import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset';
import { MyThemeProps } from './theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-display: replace;
    font-family: 'Noto Sans';
    font-weight: 700;
    src: url('../fonts/NotoSans_bold.woff');
  }

  @font-face {
    font-display: replace;
    font-family: 'Noto Sans';
    font-weight: 500;
    src: url('../fonts/NotoSans_medium.woff');
  }

  @font-face {
    font-display: replace;
    font-family: 'Noto Sans';
    font-weight: 400;
    src: url('../fonts/NotoSans_regular.woff');
  }

  body {
    color: ${({ theme } :MyThemeProps<{}>) => theme.colors.basicLabelColor};
    font-family: 'Noto Sans', 'Noto ヒラギノ角ゴ ProN', '游ゴシック Medium', 'YuGothic', 'YuGothicM', 'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', 'メイリオ', 'Meiryo', sans-serif;
  }
`;

export default GlobalStyle;
