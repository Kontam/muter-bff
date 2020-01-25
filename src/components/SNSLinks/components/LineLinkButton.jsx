import styled from 'styled-components';

import SNSLinkButton from './SNSLinkButton';

class LineLinkButton extends SNSLinkButton {
  constructor(props) {
    super(props);
    this.sns_name = 'Line'; // ログ出力用
    this.endPoint = 'https://social-plugins.line.me/lineit/share';
    this.href = `${this.endPoint}?url=${this.shareURL}`;
    // this.className = 'line-share-button';
    this.styledComponent = styled.button`
      ${this.commonStyle}
      background-color: #86F3B0;
    `;
    this.text = `${this.sns_name}で紹介`;
  }
}

export default LineLinkButton;
