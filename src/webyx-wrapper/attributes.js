export default {
  templateDesign: {
    ctt: { 
      type: 'boolean',
      default: false
    },
    cttfn: { 
      type: 'string',
      default: ''
    }
  },
  slideDesign: {
    vl: {
      type: 'boolean',
      default: false
    },
    cv: {
      type: 'boolean',
      default: false
    },
    pv: {
      type: 'boolean',
      default: false
    },
    pvo: {
      type: 'string',
      default: '40' 
    },
    ch: {
      type: 'boolean',
      default: false
    },
    ph: {
      type: 'boolean',
      default: false
    },
    pho: {
      type: 'string',
      default: '40'
    }
  },
  slideEasing: {
    vmsd: {
      type: 'number',
      default: 1000
    },
    vmcd: {
      type: 'string',
      default: 'cubic-bezier(0.64,0,0.34,1)'
    },
    hmsd: {
      type: 'number',
      default: 1000
    },
    hmcd: {
      type: 'string',
      default: 'cubic-bezier(0.64,0,0.34,1)'
    },
    vmsob: {
      type: 'number',
      default: 1000
    },
    vmeob: {
      type: 'string',
      default: 'easeout'
    }
  },
  navigationArrows: {
    av: {
      type: 'boolean',
      default: true
    },
    avf: {
      type: 'boolean',
      default: true
    },
    mvnac: {
      type: 'object',
			default: { 
        rgb: {
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1
        } 
      }
    },
    mvnacl: {
      type: 'object',
			default: { 
        rgb: {
          r: 0, 
          g: 0, 
          b: 0, 
          a: 0.4
        } 
      }
    },
    mvnaa: {
      type: 'boolean',
      default: false
    },
    mvnaac: {
      type: 'object',
			default: { 
        rgb: {
          r: 255, 
          g: 255, 
          b: 255, 
          a: 0
        } 
      }
    },
    mvnast: {
      type: 'string',
      default: 'medium' 
    },
    mvnatt: {
      type: 'string',
      default: 'standard' 
    },
    mvnaad: {
      type: 'string',
      default: 'large' 
    },
    mvnact: {
      type: 'boolean',
      default: false
    },
    nvvw: {
      type: 'boolean',
      default: true
    },
    avvd: {
      type: 'boolean',
      default: false
    },
    iwhf: {
      type: 'boolean',
      default: false
    },
    msiwc: {
      type: 'object',
			default: { 
        rgb: { 
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1 
        } 
      }
    },
    msiwbce: {
      type: 'boolean',
      default: false
    },
    msiwbc: {
      type: 'object',
			default: { 
        rgb: { 
          r: 255, 
          g: 255, 
          b: 255, 
          a: 0 
        } 
      }
    },
    mvnaoc: {
      type: 'boolean',
      default: false
    },
    mvnaot: {
      type: 'number',
      default: 0
    },
    mvnaor: {
      type: 'number',
      default: 0
    },
    mvnaob: {
      type: 'number',
      default: 0
    },
    mvnaol: {
      type: 'number',
      default: 0
    },
  },
  navigationBullets: {
    dv: {
      type: 'boolean',
      default: false
    },
    dvp: {
      type: 'string',
      default: 'right'
    },
    dtv: {
      type: 'boolean',
      default: false
    },
    dtvcp: {
      type: 'boolean',
      default: false
    },
    dh: {
      type: 'boolean',
      default: false
    },
    dhp: {
      type: 'string',
      default: 'bottom'
    },
    dhs: {
      type: 'boolean',
      default: false
    },
    dth: {
      type: 'boolean',
      default: false
    },
    dthcp: {
      type: 'boolean',
      default: false
    },
    mvndbst: {
      type: 'string',
      default: 'stroke'
    },
    mvndc: {
      type: 'object',
			default: { 
        rgb: { 
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1 
        } 
      }
    },
    mvndcl: {
      type: 'object',
			default: { 
        rgb: { 
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1 
        } 
      }
    },
    mvndttc: { 
      type: 'object',
			default: { 
        rgb: { 
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1 
        } 
      }
    },
    mvndttcl: { 
      type: 'object',
			default: { 
        rgb: { 
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1 
        } 
      }
    },
    mvndttace: {
      type: 'boolean',
      default: false
    },
    mvndttac: { 
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
    dbkgace: {
      type: 'boolean',
      default: false
    },
    dbkgac: {
      type: 'object',
			default: { 
        rgb: { 
          r: 255, 
          g: 255, 
          b: 255, 
          a: 0 
        } 
      }
    },
    dthoff: {
      type: 'boolean',
      default: false
    },
    dthoffdsk: {
      type: 'number',
      default: 0
    },
    dthoffmob: {
      type: 'number',
      default: 0
    },
    dtvoff: {
      type: 'boolean',
      default: false
    },
    dtvoffdsk: {
      type: 'number',
      default: 0
    },
    dtvoffmob: {
      type: 'number',
      default: 0
    },
  },
  fullScreeMode: {
    fsb: {
      type: 'boolean',
      default: false
    },
    fsp: {
      type: 'string',
      default: 'right'
    },
    fsdt: {
      type: 'string',
      default: 'thin'
    },
    fsboff: {
      type: 'boolean',
      default: false
    },
    fsofft: {
      type: 'number',
      default: 10
    },
    fsoffl: {
      type: 'number',
      default: 10
    },
    fsoffr: {
      type: 'number',
      default: 10
    },
    fsc: {
      type: 'object',
			default: { 
        rgb: { 
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1 
        } 
      }
    },
    fsbce: {
      type: 'boolean',
      default: false
    },
    fsbc: {
      type: 'object',
			default: { 
        rgb: { 
          r: 255, 
          g: 255, 
          b: 255, 
          a: 0 
        } 
      }
    }
  },
  navigationKey: {
    kn: {
      type: 'boolean',
      default: false
    }
  },
  horizontalScrolling: {
    mwh: {
      type: 'boolean',
      default: false
    }
  },
  mobileDevice: {
    vmsm: {
      type: 'number',
      default: 300
    },
    vmcm: {
      type: 'string',
      default: 'cubic-bezier(0.64,0,0.34,1)'
    },
    hmsm: {
      type: 'number',
      default: 300
    },
    hmcm: {
      type: 'string',
      default: 'cubic-bezier(0.64,0,0.34,1)'
    },
    swx: {
      type: 'boolean',
      default: true
    }
  },
  performance: {
    lzl: {
      type: 'boolean',
      default: false
    },
    lzp: {
      type: 'boolean',
      default: false
    },
    lzb: {
      type: 'boolean',
      default: false
    },
    lzm: {
      type: 'boolean',
      default: false
    }
  },
  loaderSlide: {
    ils: {
      type: 'boolean',
      default: true
    },
    ilst: {
      type: 'string',
      default: 'default'
    },
    ilsbc: {
      type: 'object',
			default: { 
        rgb: {
          r: 153, 
          g: 51, 
          b: 204, 
          a: 1
        } 
      }
    },
    ilssbc: {
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
    ilscmt: {
      type: 'string',
      default: ''
    },
    ilscmtc: {
      type: 'object',
			default: { 
        rgb: {
          r: 0, 
          g: 0, 
          b: 0, 
          a: 1
        } 
      }
    },
    ilscbc: {
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
    ilscbiurl: {
      type: 'string',
      default: ''
    },
    ilscbifn: {
      type: 'string',
      default: ''
    },
  },
  customCss: {
    ccss: { 
      type: 'boolean',
      default: false
    },
    ccssp: {
      type: 'string',
      default: '' 
    },
  },
  scrollbar: {
    scrlbd: { 
      type: 'boolean',
      default: false
    }
  }
}