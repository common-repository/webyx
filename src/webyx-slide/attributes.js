export default {
  slide: {
    slideTitle: {
			type: 'string',
			default: 'Slide'
		},
    scrollable: {
      type: 'boolean',
      default: false
    },
    bkgActive: {
      type: 'boolean',
      default: true
    },
    bkgHidden: {
      type: 'boolean',
      default: false
    },
    bkgColor: {
      type: 'object',
			default: { 
        rgb: { 
          r: 255, 
          g: 255, 
          b: 255, 
          a: 1 
        } 
      }
    },
    imageBkgUrl: {
      type: 'string',
      default: ''
    },
    imageBkgFN: {
      type: 'string',
      default: ''
    },
    imageBkgSize: {
      type: 'string',
      default: 'cover'
    },
    imageBkgPos: {
      type: 'string',
      default: 'center center'
    },
    imageBkgRpt: {
      type: 'string',
      default: 'no-repeat'
    },
    imageBkgAttachment: {
      type: 'string',
      default: 'scroll'
    },
    imageBkgOpacity: {
      type: 'number',
      default: 1
    },
    slideContPosActive: {
      type: 'boolean',
      default: true
    },
    slideContPos: {
      type: 'string',
      default: 'center'
    },
    slideTagName: {
      type: 'string',
      default: 'div'
    },
    slideWrapperCnt: {
      type: 'boolean',
      default: false
    },
    slideWrapperCntCN: {
      type: 'string',
      default: ''
    }
  }
}