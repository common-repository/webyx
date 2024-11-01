export default function webyxCSSIMWH ( msiwc, msiwbce, msiwbc ) {
  var webyxCssMW = '',
      msiwcrgb  = `rgba(${msiwc.rgb.r},${msiwc.rgb.g},${msiwc.rgb.b},${msiwc.rgb.a})`,
      msiwbcrgb = `rgba(${msiwbc.rgb.r},${msiwbc.rgb.g},${msiwbc.rgb.b},${msiwbc.rgb.a})`;
  if ( msiwbce ) {
    webyxCssMW += `.webyx-icon-scroll-wrapper .webyx-icon-scroll-wheel{background:${msiwcrgb}}.webyx-icon-scroll-mouse{background-color:${msiwbcrgb}}`
  }
  webyxCssMW += `.webyx-icon-scroll-wrapper .webyx-icon-scroll-mouse{border-color:${msiwcrgb}}`;
  return webyxCssMW;
}