import { createGlobalStyle } from 'styled-components';

export const IconfontStyle = createGlobalStyle`
  @font-face 
  {
    font-family: "iconfont";
    src: url('./iconfont.eot?t=1560859902814'); /* IE9 */
    src: url('./iconfont.eot?t=1560859902814#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('data:application/x-font-woff2;charset=utf-8;base64,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') format('woff2'),
    url('./iconfont.woff?t=1560859902814') format('woff'),
    url('./iconfont.ttf?t=1560859902814') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
    url('./iconfont.svg?t=1560859902814#iconfont') format('svg'); /* iOS 4.1- */
  }

  .iconfont {
    font-family: "iconfont" !important;
    font-size: 16px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

