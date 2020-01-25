import styled from 'styled-components';

import SNSLinkButton from './SNSLinkButton';

class FacebookLinkButton extends SNSLinkButton {
  constructor(props) {
    super(props);
    this.sns_name = 'Facebook'; // ログ出力用
    this.endPoint = 'https://www.facebook.com/sharer/sharer.php?kid_directed_site=0&sdk=joey&display=popup&ref=plugin&src=share_button';
    this.href = `${this.endPoint}&u=${this.shareURL}`;
    this.className = 'facebook-share-button';
    this.text = `${this.sns_name}で紹介`;
    this.styledComponent = styled.button`
      ${this.commonStyle}
      background-color: #7EA7E5
    `;
  }
}

export default FacebookLinkButton;
