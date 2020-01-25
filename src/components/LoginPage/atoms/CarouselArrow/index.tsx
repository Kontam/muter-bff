import React from "react";
import styled from "styled-components";

import { resetButton } from "../../styles/define";
import { mediaQ } from "../../../../commonModules/media";
import LoginConst from "../../LoginConst";
import { MyThemeProps } from "../../../../modules/styles/theme";

type CarouselArrowProps = {
  imgSrc: string;
  direction:
    | typeof LoginConst.ARROW_DIRECTION_LEFT
    | typeof LoginConst.ARROW_DIRECTION_RIGHT;
  onClick?: Function;
  style?: any,
  className?: string
};

const CarouselArrow = ({
  imgSrc,
  onClick,
  direction = LoginConst.ARROW_DIRECTION_LEFT,
}: CarouselArrowProps) => {

  return (
    <Arrow data_js_slick={direction} onClick={onClick}>
      <ArrowImg src={imgSrc} alt={direction} />
    </Arrow>
  );
};

export default CarouselArrow;

const ArrowImg = styled.img`
  max-width: 50px;
`;

/**
 * react-slickの仕様の従ってonClickをパスする
 * 公式Docではstyle,classNameも渡しているがデフォルトのスタイルを使わないので不要
 */
const SlickArrow = ({
  className,
  data_js_slick,
  children,
  onClick,
}: {
  className: string;
  data_js_slick: string;
  children: JSX.Element;
  onClick?: any;
  style?: any;
}) => (
  <button onClick={onClick} data-js-slick={data_js_slick} className={className}>
    {children}
  </button>
);

/**
 * 左右共通スタイル
 */
const Arrow = styled(SlickArrow)<any>`
  ${mediaQ.pc} {
    ${resetButton};
    position: absolute;
    left: ${({ data_js_slick }:any) => data_js_slick === LoginConst.ARROW_DIRECTION_LEFT ? "50px" : "auto"};
    right: ${({ data_js_slick }:any) => data_js_slick === LoginConst.ARROW_DIRECTION_RIGHT ? "50px" : "auto"};
    top: calc(50% - 50px);
    cursor: pointer;
    z-index: ${({ theme } :MyThemeProps<{}>) => theme.z_index.ZI_carouselArrow}
  }
`;
