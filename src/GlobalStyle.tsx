import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

*{outline: 0; -webkit-box-sizing:border-box; -moz-box-sizing: border-box; box-sizing: border-box; }

html{-webkit-touch-callout: none; -webkit-tap-highlight-color: rgba(0, 0, 0, 0);}

body{letter-spacing: -1px;}
body{min-width: 320px; line-height: 1.5; word-wrap: break-word; word-break: break-all; -webkit-text-size-adjust: none;}

table {border-collapse: collapse; border-spacing: 0;}

body, input, textarea, select, button, table{font-family: 'Noto Sans KR', sans-serif; color: #3f3f3f; font-size: 16px;}

fieldset, img{border:0;}

body, div, p, ul, ol, li, dl, dd, dt, h1, h2, h3, h4, h5, h6, table, tr, th, td,
form, select, textarea, fieldset, legend, figure, figcaption{margin: 0; padding: 0;}

ol, ul, li{list-style: none;}

a {text-decoration: none; color: #3f3f3f;}

em, address {font-style: normal;}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {display: block;}

.blind{position: absolute; clip: rect(0 0 0 0); width: 1px; height: 1px; margin: -1px; overflow: hidden;}
.clearfix::after,
.clearfix::before{content: ''; display: block; clear: both;}

@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 100;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Thin.otf) format('opentype');}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 300;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Light.otf) format('opentype');}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 400;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf) format('opentype');}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 500;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Medium.otf) format('opentype');}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 700;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Bold.otf) format('opentype');}
@font-face {font-family: 'Noto Sans KR';font-style: normal;font-weight: 900;src: url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff2) format('woff2'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.woff) format('woff'),url(//fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Black.otf) format('opentype');}

a.textHover{
    position: relative;
    &::before {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 0;
        height: 1px;
        background-color: #000;
        transition: all .5s;
      }
      &:hover::before{
        content: '';
        width: 100%;
        height: 1px;
      }
}

a.imgHover{
  position: relative;
  .imgBox{
    overflow:hidden;
    img{
      transition: all .5s;
    }
  &:hover{
      img{
        transform:scale(1.2);
      }
    }
   }
 }

`;

export default GlobalStyle;
