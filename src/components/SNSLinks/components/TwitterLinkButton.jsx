import styled from 'styled-components';
import SNSLinkButton from './SNSLinkButton';

class TwitterLinkButton extends SNSLinkButton {
  constructor(props) {
    super(props);
    this.sns_name = 'Twitter'; // ログ出力用
    this.endPoint = 'http://twitter.com/share';
    this.shareText = 'Twitter連携アプリ｜あの人は今？チェッカー';
    this.href = `${this.endPoint}?text=${this.shareText}%0a&url=${this.shareURL}`;
    this.text = `${this.sns_name}で紹介`;
    this.styledComponent = styled.button`
      ${this.commonStyle}
      background-color: #58C6E8;
    `;
  }
}

export default TwitterLinkButton;
