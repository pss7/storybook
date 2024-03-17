import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{outline: 0; -webkit-box-sizing:border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

html{-webkit-touch-callout: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}

body{min-width: 320px; line-height: 1.5; word-wrap: break-word; word-break: break-all; -webkit-text-size-adjust: none;}

table {border-collapse: collapse; border-spacing: 0;}

body, input, textarea, select, button, table{font-family: 'Noto Sans KR', sans-serif; color: #000; font-size: 16px;}

fieldset, img{border:0;}

body, div, p, ul, ol, li, dl, dd, dt, h1, h2, h3, h4, h5, h6, table, tr, th, td,
form, select, textarea, fieldset, legend, figure, figcaption{margin: 0; padding: 0;}

ol, ul, li{list-style: none;}

a {text-decoration: none; color: #000;}

em, address {font-style: normal;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {display: block;}

.blind{position: absolute; clip: rect(0 0 0 0); width: 1px; height: 1px; margin: -1px; overflow: hidden;}
.clearfix::after,
.clearfix::before{content: ''; display: block; clear: both;}

`;

export default GlobalStyle;
