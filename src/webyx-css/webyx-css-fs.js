export default function webyxCSSFS ( fsc, fsdt, fsp, fsboff, fsofft, fsoffl, fsoffr, fsbce, fsbc ) {
  var webyxCssFS = '', 
      fscrgb     = `rgba(${fsc.rgb.r},${fsc.rgb.g},${fsc.rgb.b},${fsc.rgb.a})`,
      fsbcrgb    = `rgba(${fsbc.rgb.r},${fsbc.rgb.g},${fsbc.rgb.b},${fsbc.rgb.a})`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-left-outer{border-top-width:${fsdt};border-left-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-left-inner{border-bottom-width:${fsdt};border-right-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-right-outer{border-top-width:${fsdt};border-right-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-right-inner{border-bottom-width:${fsdt};border-left-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-left-outer{border-bottom-width:${fsdt};border-left-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-left-inner{border-top-width:${fsdt};border-right-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-right-outer{border-bottom-width:${fsdt};border-right-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-right-inner{border-top-width:${fsdt};border-left-width:${fsdt}}`;
  webyxCssFS += `.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-left-inner,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-left-outer,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-right-inner,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-bottom-right-outer,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-left-inner,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-left-outer,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-right-inner,.webyx-full-screen-button-wrapper .webyx-full-screen-button-part-top-right-outer{border-color:${fscrgb}}`;
  if ( fsboff ) {
    switch ( fsp ) {
      case 'left':
        webyxCssFS += `.webyx-full-screen-button-wrapper.webyx-full-screen-button-wrapper-left{top:${fsofft}px;left:${fsoffl}px}`;
        break;
      case 'right':
        webyxCssFS += `.webyx-full-screen-button-wrapper.webyx-full-screen-button-wrapper-right{top:${fsofft}px;right:${fsoffr}px}`;
        break;
    }
  }
  if ( fsbce ) {
    webyxCssFS += `.webyx-full-screen-button-wrapper-background-color{background-color:${fsbcrgb}}`;
  }
  return webyxCssFS;
}