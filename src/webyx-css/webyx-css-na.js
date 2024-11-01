export default function webyxCSSNA ( mvnast, mvnatt, mvnac, mvnacl, mvnact, mvnaad, mvnaa, mvnaac, mvnaoc, mvnaot, mvnaor, mvnaob, mvnaol ) {
  var webyxCssNa = '',
      typeNa     = `${mvnast}-${mvnatt}`,
      mvnacrgba  = `rgba(${mvnac.rgb.r},${mvnac.rgb.g},${mvnac.rgb.b},${mvnac.rgb.a})`,
      mvnacorgba = `rgba(${mvnacl.rgb.r},${mvnacl.rgb.g},${mvnacl.rgb.b},${mvnacl.rgb.a})`,
      mvnaacrgba = `rgba(${mvnaac.rgb.r},${mvnaac.rgb.g},${mvnaac.rgb.b},${mvnaac.rgb.a})`;
  switch ( typeNa ) {
    case 'small-thin': 
      webyxCssNa += '.webyx-arrow-viewport-icon{width:10px;height:10px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-6px}.webyx-arrow-viewport-icon-borders{border-top-width:2px;border-right-width:2px}';
      break; 
    case 'medium-thin':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:20px;height:20px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-11px}.webyx-arrow-viewport-icon-borders{border-top-width:2px;border-right-width:2px}';
      break; 
    case 'large-thin':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:30px;height:30px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-16px}.webyx-arrow-viewport-icon-borders{border-top-width:2px;border-right-width:2px}';
      break; 
    case 'small-standard':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:10px;height:10px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-6px}.webyx-arrow-viewport-icon-borders{border-top-width:4px;border-right-width:4px}';
      break; 
    case 'medium-standard':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:20px;height:20px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-12px}.webyx-arrow-viewport-icon-borders{border-top-width:4px;border-right-width:4px}';
      break; 
    case 'large-standard':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:30px;height:30px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-16px}.webyx-arrow-viewport-icon-borders{border-top-width:4px;border-right-width:4px}';
      break; 
    case 'small-thick':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:10px;height:10px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-9px}.webyx-arrow-viewport-icon-borders{border-top-width:8px;border-right-width:8px}';
      break; 
    case 'medium-thick':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:20px;height:20px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-14px}.webyx-arrow-viewport-icon-borders{border-top-width:8px;border-right-width:8px}';
      break; 
    case 'large-thick':
      webyxCssNa += '.webyx-arrow-viewport-icon{width:30px;height:30px}.webyx-arrow-viewport-icon-bottom,.webyx-arrow-viewport-icon-top,.webyx-arrow-viewport-icon-left,.webyx-arrow-viewport-icon-right{margin-left:-19px}.webyx-arrow-viewport-icon-borders{border-top-width:8px;border-right-width:8px}';
      break;
  } 
  if ( mvnact ) {
    webyxCssNa += '.webyx-arrow-viewport-icon-borders{border-radius:20%}';
  }
  switch ( mvnaad ) {
    case 'small': 
      webyxCssNa += '.webyx-arrow-viewport{width:80px;height:50px}.webyx-arrow-viewport-top{margin-left:-40px}.webyx-arrow-viewport-right{right:-15px;margin-top:-25px}.webyx-arrow-viewport-bottom{margin-left:-40px}.webyx-arrow-viewport-left{left:-15px;margin-top:-25px}';
      break; 
    case 'medium':
      webyxCssNa += '.webyx-arrow-viewport{width:150px;height:70px}.webyx-arrow-viewport-top{margin-left:-75px}.webyx-arrow-viewport-right{right:-40px;margin-top:-35px}.webyx-arrow-viewport-bottom{margin-left:-75px}.webyx-arrow-viewport-left{left:-40px;margin-top:-35px}';
      break; 
    case 'large':
      webyxCssNa += '.webyx-arrow-viewport{width:300px;height:90px}.webyx-arrow-viewport-top{margin-left:-150px}.webyx-arrow-viewport-right{right:-105px;margin-top:-45px}.webyx-arrow-viewport-bottom{margin-left:-150px}.webyx-arrow-viewport-left{left:-105px;margin-top:-45px}';
      break;
  }
  if ( mvnaoc ) {
    webyxCssNa += `.webyx-arrow-viewport-top{margin-top:${mvnaot}px}.webyx-arrow-viewport-right{margin-right:${mvnaor}px}.webyx-arrow-viewport-bottom{margin-bottom:${mvnaob}px}.webyx-arrow-viewport-left{margin-left:${mvnaol}px}`;
  }
  if ( mvnaa ) {
    webyxCssNa += `.webyx-arrow-viewport-bkg-area-colour{background-color:${mvnaacrgba}}`;
  }
  webyxCssNa += `.webyx-arrow-viewport-icon-borders{border-top-color:${mvnacrgba};border-right-color:${mvnacrgba}}.webyx-arrow-viewport-icon-borders-fixed{border-top-color:${mvnacorgba};border-right-color:${mvnacorgba}}.webyx-arrow-viewport-icon-borders-visible{border-top-color:${mvnacrgba};border-right-color:${mvnacrgba}}`;
  return webyxCssNa;
}