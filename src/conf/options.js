const slideMoveSpeed = [
  { label: '300 ms',  value: '300'  }, 
  { label: '350 ms',  value: '350'  }, 
  { label: '400 ms',  value: '400'  },
  { label: '450 ms',  value: '450'  }, 
  { label: '500 ms',  value: '500'  }, 
  { label: '550 ms',  value: '550'  }, 
  { label: '600 ms',  value: '600'  }, 
  { label: '650 ms',  value: '650'  }, 
  { label: '700 ms',  value: '700'  }, 
  { label: '750 ms',  value: '750'  }, 
  { label: '800 ms',  value: '800'  }, 
  { label: '850 ms',  value: '850'  }, 
  { label: '900 ms',  value: '900'  }, 
  { label: '950 ms',  value: '950'  }, 
  { label: '1000 ms', value: '1000' }, 
  { label: '1050 ms', value: '1050' },
  { label: '1100 ms', value: '1100' },
  { label: '1150 ms', value: '1150' },
  { label: '1200 ms', value: '1200' }
];
const slideMoveEase = [
  { label: 'default',        value: 'cubic-bezier(0.64,0,0.34,1)' }, 
  { label: 'linear',         value: 'cubic-bezier(0,0,1,1)' }, 
  { label: 'ease',           value: 'cubic-bezier(0.25,0.1,0.25,1)' },
  { label: 'easein',         value: 'cubic-bezier(0.42,0,1,1)' }, 
  { label: 'easeout',        value: 'cubic-bezier(0,0,0.58,1)' }, 
  { label: 'easeinout',      value: 'cubic-bezier(0.42,0,0.58,1)' },
  { label: 'swing',          value: 'cubic-bezier(0.02,0.01,0.47,1)' },
  { label: 'arc',            value: 'cubic-bezier(0,0.5,0.5,1)' },
  { label: 'easeInSine',     value: 'cubic-bezier(0.12,0,0.39,0)' },
  { label: 'easeInCubic',    value: 'cubic-bezier(0.32,0,0.67,0)' },
  { label: 'easeInQuint',    value: 'cubic-bezier(0.64,0,0.78,0)' },
  { label: 'easeInCirc',     value: 'cubic-bezier(0.55,0,1,0.45)' },
  { label: 'easeInQuad',     value: 'cubic-bezier(0.11,0,0.5,0)' },
  { label: 'easeInQuart',    value: 'cubic-bezier(0.5,0,0.75,0)' },
  { label: 'easeInExpo',     value: 'cubic-bezier(0.7,0,0.84,0)' },
  { label: 'easeInBack',     value: 'cubic-bezier(0.36,0,0.66,-0.56)' },
  { label: 'easeOutSine',    value: 'cubic-bezier(0.61,1,0.88,1)' },
  { label: 'easeOutCubic',   value: 'cubic-bezier(0.33,1,0.68,1)' },
  { label: 'easeOutQuint',   value: 'cubic-bezier(0.22,1,0.36,1)' },
  { label: 'easeOutCirc',    value: 'cubic-bezier(0,0.55,0.45,1)' },
  { label: 'easeOutQuad',    value: 'cubic-bezier(0.5,1,0.89,1)' },
  { label: 'easeOutQuart',   value: 'cubic-bezier(0.25,1,0.5,1)' },
  { label: 'easeOutExpo',    value: 'cubic-bezier(0.16,1,0.3,1)' },
  { label: 'easeOutBack',    value: 'cubic-bezier(0.34,1.56,0.64,1)' },
  { label: 'easeInOutSine',  value: 'cubic-bezier(0.37,0,0.63,1)' },
  { label: 'easeInOutCubic', value: 'cubic-bezier(0.65,0,0.35,1)' },
  { label: 'easeInOutQuint', value: 'cubic-bezier(0.83,0,0.17,1)' },
  { label: 'easeInOutCirc',  value: 'cubic-bezier(0.85,0,0.15,1)' },
  { label: 'easeInOutQuad',  value: 'cubic-bezier(0.45,0,0.55,1)' },
  { label: 'easeInOutQuart', value: 'cubic-bezier(0.76,0,0.24,1)' },
  { label: 'easeInOutBack',  value: 'cubic-bezier(0.68,-0.6,0.32,1.6)' }
];
const slideCurveOldBrowser = [
  { label: 'linear',  value: 'linear' }, 
  { label: 'easeout', value: 'easeout' }, 
  { label: 'arc',     value: 'arc' }, 
  { label: 'quad',    value: 'quad' },
  { label: 'cube',    value: 'cube' }
];
const hzPos = [
  { label: 'left',  value: 'left' },
  { label: 'right', value: 'right' }
];
const vtPos = [
  { label: 'top',    value: 'top' },
  { label: 'bottom', value: 'bottom' }
];
const bulletsType = [
  { label: 'scale',        value: 'scale' },
  { label: 'stroke',       value: 'stroke' },
  { label: 'small stroke', value: 'small_stroke' },
  { label: 'fill in',      value: 'fill_in' },
  { label: 'fill up',      value: 'fill_up' },
  { label: 'fall',         value: 'fall' },
  { label: 'puff',         value: 'puff' }
];
const imageBkgSize = [
  { label: 'auto',    value: 'auto' },
  { label: 'cover',   value: 'cover' },
  { label: 'contain', value: 'contain' }
];
const arrowType = [
  { label: 'small',  value: 'small' },
  { label: 'medium', value: 'medium' },
  { label: 'large',  value: 'large' }
];
const arrowThickness = [
  { label: 'thin',     value: 'thin' },
  { label: 'standard', value: 'standard' },
  { label: 'thick',    value: 'thick' }
];
const arrowDimensionArea = [
  { label: 'small  (80x50)  pixels',  value: 'small' },
  { label: 'medium (150x70) pixels', value: 'medium' },
  { label: 'large  (300x90) pixels', value: 'large' }
]
const imageBkgPos = [
  { label: 'left top',      value: 'left top' },
  { label: 'left center',   value: 'left center' },
  { label: 'left bottom',   value: 'left bottom' },
  { label: 'right top',     value: 'right top' },
  { label: 'right center',  value: 'right center' },
  { label: 'right bottom',  value: 'right bottom' },
  { label: 'center top',    value: 'center top' },
  { label: 'center center', value: 'center center' },
  { label: 'center bottom', value: 'center bottom' }
];
const imageBkgRpt = [
  { label: 'repeat',    value: 'repeat' },
  { label: 'no-repeat', value: 'no-repeat' }
];
const imageBkgAttachment = [
  { label: 'scroll', value: 'scroll' },
  { label: 'fixed',  value: 'fixed' }
];
const verticalContPos = [
  { label: 'top',    value: 'top' },
  { label: 'middle', value: 'middle' },
  { label: 'bottom', value: 'bottom' }
];
const tagName = [
  { label: 'div',     value: 'div' },
  { label: 'section', value: 'section' },
  { label: 'article', value: 'article' },
  { label: 'aside',   value: 'aside' },
  { label: 'header',  value: 'header' },
  { label: 'footer',  value: 'footer' },
  { label: 'ul',      value: 'ul' },
  { label: 'ol',      value: 'ol' },
  { label: 'li',      value: 'li' },
];
const FSDimThickness = [
  { label: 'thin',     value: '2px' },
  { label: 'standard', value: '4px' },
  { label: 'thick',    value: '6px' }
];
const initialSS = [
  { label: 'default', value: 'default' },
  { label: 'custom',  value: 'custom' }
];
export const opts = {
  vmsd: slideMoveSpeed,
  vmcd: slideMoveEase,
  hmsd: slideMoveSpeed,
  hmcd: slideMoveEase,
  vmsob: slideMoveSpeed,
  vmeob: slideCurveOldBrowser,
  mvndbst: bulletsType,
  dvp: hzPos,
  dhp: vtPos,
  fsp: hzPos,
  fsdt: FSDimThickness,
  vmsm: slideMoveSpeed,
  vmcm: slideMoveEase,
  hmsm: slideMoveSpeed,
  hmcm: slideMoveEase,
  imageBkgSize: imageBkgSize,
  imageBkgPos: imageBkgPos,
  imageBkgRpt: imageBkgRpt,
  imageBkgAttachment: imageBkgAttachment,
  mvnast: arrowType,
  mvnatt: arrowThickness,
  mvnaad: arrowDimensionArea,
  slideContPos: verticalContPos,
  slideTagName: tagName,
  sectionTagName: tagName,
  ilst: initialSS
}