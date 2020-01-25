import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { mediaQ } from '../../../commonModules/media.ts';
import sendLogData from '../../../commonModules/sendLogData';
import SNSLinksConst from '../SNSLinksConst';

class SNSLinkButton extends Component {
  constructor(props) {
    super(props);
    this.width = 800;
    this.height = 470;
    this.shareURL = props.shareUrl;
    this.href = ''; // リンク先
    this.text = ''; // ラベル
    this.styledComponent = styled.button``;
    // ボタンの共通スタイルを定義
    this.commonStyle = css`
      appearance: none;
      background-color: transparent;
      border: 0;
      padding: 0;

      &:focus {
        outline: 0;
      }

      border-radius: 5px;
      color: #fff;
      cursor: pointer;
      display: block;
      font-size: 1.25rem;
      font-weight: bold;
      height: 50px;
      margin: 40px auto 0;
      width: 180px;
      ${mediaQ.pc}{
        display: inline;
        margin: 0 50px;
      }
      ${mediaQ.tablet}{
        margin: 0 25px;
      }
    `;
  }

  makeLogParams() {
    const logParams = {};
    logParams[SNSLinksConst.LOG_FILENAME_KEY] = SNSLinksConst.LOG_SNS_FILENAME;
    logParams[SNSLinksConst.LOG_SNS_KEY_NAME] = this.sns_name;
    logParams[SNSLinksConst.LOG_SNS_KEY_SHARE_URL] = this.shareURL;

    return logParams;
  }

  handleClick() {
    const { logEndPoint } = this.props;
    window.open(
      encodeURI(decodeURI(this.href)),
      'sns-window',
      `width=${this.width},`
      + `height=${this.height},`
      + 'personalbar=0,'
      + 'toolbar=0,'
      + 'scrollbars=1,'
      + 'sizable=1',
    );
    // ログ送信先があればログ送信
    if (logEndPoint) {
      sendLogData(logEndPoint, this.makeLogParams());
    }
  }

  render() {
    return (
      <this.styledComponent
        type="button"
        onClick={() => { this.handleClick(); }}
      >
        {this.text}
      </this.styledComponent>
    );
  }
}

SNSLinkButton.propTypes = {
  logEndPoint: PropTypes.string,
};

SNSLinkButton.defaultProps = {
  logEndPoint: '',
};

export default SNSLinkButton;
