import { __ }                                                 from '@wordpress/i18n';
import { InspectorControls, MediaUpload }                     from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Button, Icon, TabPanel } from '@wordpress/components';
import WebyxToggleControl                                     from '../library/WebyxToggleControl';
import WebyxSelectControl                                     from '../library/WebyxSelectControl';
import WebyxColorPicker                                       from '../library/WebyxColorPicker';
import WebyxCSSCustomDialog                                   from '../library/WebyxCSSCustomDialog';
import WebyxTextControl                                       from '../library/WebyxTextControl';
import WebyxRangeControl                                      from '../library/WebyxRangeControl';
import attr                                                   from './attributes';
export default function WebyxWrapperPanel ( { attributes, setAttributes } ) {
  const { vmsd, vmcd, hmsd, hmcd, vmsob, vmeob } = attributes,
    { mvnast, mvnatt, mvnact, mvnac, mvnacl, mvnaa, mvnaac, mvnaad, mvnaoc, mvnaot, mvnaor, mvnaob, mvnaol } = attributes,
    { dv, dvp, dtv, dtvcp, dh, dhp, dhs, dth, dthcp, mvndbst, mvndc, mvndcl, mvndttc, mvndttcl, mvndttace, mvndttac, dbkgace, dbkgac, dtvoff, dtvoffdsk, dtvoffmob, dthoff, dthoffdsk, dthoffmob } = attributes,  
    { av, avf, nvvw, avvd, msiwc, msiwbce, msiwbc, iwhf } = attributes,
    { kn } = attributes,
    { fsb, fsp, fsc, fsdt, fsboff, fsofft, fsoffr, fsoffl, fsbce, fsbc } = attributes,
    { vmsm, vmcm, hmsm, hmcm } = attributes,
    { ils, ilst, ilsbc, ilssbc, ilscmt, ilscmtc, ilscbc, ilscbiurl, ilscbifn } = attributes,
    { ccss, ccssp } = attributes,
    { ctt    } = attributes,
    { cttfn  } = attributes,
    { scrlbd } = attributes;
  const ALLOWED_IMAGE_TYPES = [ 'image' ];
  const onUpdateMedia = ( media, attrUrl, attrFN, setAttributes ) => {
    setAttributes( {
      [ attrUrl ]: media.url,
      [ attrFN  ]: media.filename
    } );
  };
  const dismissMedia = ( attrUrl, attrFN, setAttributes ) => {
    setAttributes( {
      [ attrUrl ]: '',
      [ attrFN  ]: ''
    } );
  }
  const getSecVal = ( group, attrName, attrVal ) => {
    return typeof attrVal === 'undefined' ? attr[ group ][ attrName ][ 'default' ] : attrVal;
  }
  return ( 
    <InspectorControls key = 'setting'>
      <div id = 'webyx-fg-controls'>
        <Panel>
          <PanelRow>
            <div className = { 'webyx-fg-doc' }>
              <Icon icon = { 'info' }/>
              <a className = { 'webyx-fg-doc-link' } href = { 'https://webyxforgutenberg.com/#quick-users-guide' } target = { '_blank' } >{ __( 'how to use' ) }</a>
            </div>
          </PanelRow>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Template Design' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'templateDesign', 'ctt', ctt ) } 
                attrName      = { 'ctt' } 
                label         = { 'Custom template' }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable custom template.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'templateDesign', 'ctt', ctt ) &&
              <div className = { 'wp-block-webyx-fg-webyx-wrapper-group' }>
                <PanelRow>
                  <div style = { { position: 'relative' } }>
                    <WebyxTextControl
                      style         = { { paddingLeft: '12px' } }
                      placeholder   = { __( 'template-file-name.php' ) }
                      disabled      = { false } 
                      attrValue     = { getSecVal( 'templateDesign', 'cttfn', cttfn ) } 
                      attrName      = { 'cttfn' } 
                      label         = { __( 'Template file name:' ) }
                      setAttributes = { setAttributes }/>
                    <div style = { { position: 'absolute', top: 33, left: 10 } }>{ '\\' }</div>
                  </div>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'You can provide your own custom template, such as a modified version of the theme template. Put the template path here if you want to use your own. If left empty or if you write something that doesn\'t exist or it is wrong, the empty predefined page template will be used.' ) }</div>
                </PanelRow>
              </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Navigation Easings' ) } initialOpen = { false }>
          <TabPanel
            className      = { 'webyx-slide-easings-tab-panel' }
            activeClass    = { 'webyx-active-tab' }
            initialTabName = { 'vertical' }
            onSelect       = { () => {} }
            tabs           = { [
                {
                  name: 'vertical',
                  title: 'Vertical',
                  className: 'webyx-slide-tab-vertical',
                },
                {
                  name: 'horizontal',
                  title: 'Horizontal',
                  className: 'webyx-slide-tab-horizontal',
                },
            ] }>
            { 
              ( tab ) => (
                tab.name === 'vertical' ?
                  <div>
                    <PanelRow>
                      <WebyxRangeControl 
                        attrValue     = { getSecVal( 'slideEasing', 'vmsd', vmsd ) } 
                        attrName      = { 'vmsd' } 
                        min           = { 300 }
                        max           = { 1200 }
                        showTooltip   = { false }
                        label         = { __( 'Vertical speed' )}
                        setAttributes = { setAttributes }/>
                    </PanelRow>
                    <PanelRow>
                      <div className = { 'webyx-fg-info-txt' }>{ __( 'Speed for the vertical scrolling transition to Section in miliseconds (range from 300 to 1200 milliseconds with a step of 1).' ) }</div>
                    </PanelRow>
                    <PanelRow>
                      <WebyxSelectControl 
                        disabled      = { false }
                        attrValue     = { getSecVal( 'slideEasing', 'vmcd', vmcd ) } 
                        attrName      = { 'vmcd' } 
                        label         = { __( 'Vertical easing' ) }
                        setAttributes = { setAttributes }/>
                    </PanelRow>
                    <PanelRow>
                      <div className = { 'webyx-fg-info-txt' }>{ __( 'Set the vertical animation easing from a pre-estabilished set of curve types.' ) }</div>
                    </PanelRow>
                  </div>
                :
                  <div>
                    <PanelRow>
                      <WebyxRangeControl 
                        attrValue     = { getSecVal( 'slideEasing', 'hmsd', hmsd ) } 
                        attrName      = { 'hmsd' } 
                        min           = { 300 }
                        max           = { 1200 }
                        showTooltip   = { false }
                        label         = { __( 'Horizontal speed' ) }
                        setAttributes = { setAttributes }/>
                    </PanelRow>
                    <PanelRow>
                      <div className = { 'webyx-fg-info-txt' }>{ __( 'Speed for the horizontal scrolling transition to Slide in miliseconds (range from 300 to 1200 milliseconds with a step of 1).' ) }</div>
                    </PanelRow>
                    <PanelRow>
                      <WebyxSelectControl 
                        disabled      = { false }
                        attrValue     = { getSecVal( 'slideEasing', 'hmcd', hmcd ) } 
                        attrName      = { 'hmcd' } 
                        label         = { __( 'Horizontal easing' ) }
                        setAttributes = { setAttributes }/>
                    </PanelRow>
                    <PanelRow>
                      <div className = { 'webyx-fg-info-txt' }>{ __( 'Set the horizontal animation easing from a pre-estabilished set of curve types.' ) }</div>
                    </PanelRow>
                  </div>
              ) 
            }
          </TabPanel>
          <hr/> 
            <PanelRow>
              <WebyxRangeControl 
                attrValue     = { getSecVal( 'slideEasing', 'vmsob', vmsob ) } 
                attrName      = { 'vmsob' } 
                min           = { 300 }
                max           = { 1200 }
                showTooltip   = { false }
                label         = { __( 'Speed for IE9' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Speed in miliseconds for legacy browser IE9 (range from 300 to 1200 milliseconds with a step of 1).' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxSelectControl 
                disabled      = { false }
                attrValue     = { getSecVal( 'slideEasing', 'vmeob', vmeob ) } 
                attrName      = { 'vmeob' } 
                label         = { __( 'Easing for IE9' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Set the animation easing from a pre-estabilished set of curve types for legacy browser IE9.' ) }</div>
            </PanelRow>
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Navigation Arrows' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'navigationArrows', 'av', av ) } 
                attrName      = { 'av' } 
                label         = { __( 'Navigation arrows' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable navigation arrows on every Slide.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'navigationArrows', 'av', av ) &&
              <div className = { 'wp-block-webyx-fg-webyx-wrapper-group' }>
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'navigationArrows', 'avf', avf ) } 
                    attrName      = { 'avf' } 
                    label         = { __( 'Fixed arrows' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Makes arrows persistent. If disabled arrows will vanish and reapper on mouse hover.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxSelectControl 
                    disabled      = { false }
                    attrValue     = { getSecVal( 'navigationArrows', 'mvnast', mvnast ) } 
                    attrName      = { 'mvnast' } 
                    label         = { __( 'Arrows size' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation arrows size.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxSelectControl 
                    disabled      = { false }
                    attrValue     = { getSecVal( 'navigationArrows', 'mvnatt', mvnatt ) } 
                    attrName      = { 'mvnatt' } 
                    label         = { __( 'Arrows thickness' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation arrows thickness.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxSelectControl 
                    disabled      = { false }
                    attrValue     = { getSecVal( 'navigationArrows', 'mvnaad', mvnaad ) } 
                    attrName      = { 'mvnaad' } 
                    label         = { __( 'Arrows dimension area' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose arrows dimension area type in pixels.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxColorPicker 
                    attrValue     = { getSecVal( 'navigationArrows', 'mvnac', mvnac ) } 
                    attrName      = { 'mvnac' } 
                    label         = { __( 'Arrows colour' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation arrows colour.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxColorPicker 
                    attrValue     = { getSecVal( 'navigationArrows', 'mvnacl', mvnacl ) } 
                    attrName      = { 'mvnacl' } 
                    label         = { __( 'Arrows colour light' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation arrows colour light.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxToggleControl 
                  attrValue     = { getSecVal( 'navigationArrows', 'mvnact', mvnact ) } 
                  attrName      = { 'mvnact' } 
                  label         = { __( 'Arrows curvature' ) }
                  setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable a slight curvature to the navigation arrows aesthetics.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'templateDesign', 'mvnaa', mvnaa ) } 
                    attrName      = { 'mvnaa' } 
                    label         = { 'Arrows background area' }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable visible background area for every arrow.' ) }</div>
                </PanelRow>
                {
                  getSecVal( 'navigationArrows', 'mvnaa', mvnaa ) &&
                    <div>
                      <PanelRow>
                        <WebyxColorPicker 
                          attrValue     = { getSecVal( 'navigationArrows', 'mvnaac', mvnaac ) } 
                          attrName      = { 'mvnaac' } 
                          label         = { __( 'Arrows background area colour' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation arrows background area colour.' ) }</div>
                      </PanelRow>
                    </div>
                }
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'navigationArrows', 'mvnaoc', mvnaoc ) } 
                    attrName      = { 'mvnaoc' } 
                    label         = { __( 'Arrows custom offset' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable custom positioning for every arrow.' ) }</div>
                </PanelRow>
                {
                  getSecVal( 'navigationArrows', 'mvnaoc', mvnaoc ) &&
                    <div>
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'navigationBullets', 'mvnaot', mvnaot ) } 
                          attrName      = { 'mvnaot' } 
                          min           = { 0 }
                          max           = { 100 }
                          showTooltip   = { false }
                          beforeIcon    = { 'desktop' }
                          label         = { __( 'Arrow top position offset' )}
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a top offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                      </PanelRow>
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'navigationBullets', 'mvnaot', mvnaor ) } 
                          attrName      = { 'mvnaor' } 
                          min           = { 0 }
                          max           = { 100 }
                          showTooltip   = { false }
                          beforeIcon    = { 'desktop' }
                          label         = { __( 'Arrow right position offset' )}
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a right offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                      </PanelRow>
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'navigationBullets', 'mvnaot', mvnaob ) } 
                          attrName      = { 'mvnaob' } 
                          min           = { 0 }
                          max           = { 100 }
                          showTooltip   = { false }
                          beforeIcon    = { 'desktop' }
                          label         = { __( 'Arrow bottom position offset' )}
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a bottom offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                      </PanelRow>
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'navigationBullets', 'mvnaot', mvnaol ) } 
                          attrName      = { 'mvnaol' } 
                          min           = { 0 }
                          max           = { 100 }
                          showTooltip   = { false }
                          beforeIcon    = { 'desktop' }
                          label         = { __( 'Arrow left position offset' )}
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a left offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                      </PanelRow>
                    </div>
                }
              </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Navigation Bullets' ) } initialOpen = { false }>
            <TabPanel
              className      = { 'webyx-slide-easings-tab-panel' }
              activeClass    = { 'webyx-active-tab' }
              initialTabName = { 'vertical' }
              onSelect       = { () => {} }
              tabs           = { [
                  {
                    name: 'vertical',
                    title: 'Vertical',
                    className: 'webyx-slide-tab-vertical',
                  },
                  {
                    name: 'horizontal',
                    title: 'Horizontal',
                    className: 'webyx-slide-tab-horizontal',
                  },
              ] }>
              { 
                ( tab ) => (
                  tab.name === 'vertical' ?
                    <div>
                      <PanelRow>
                        <WebyxToggleControl 
                          attrValue     = { getSecVal( 'navigationBullets', 'dv', dv ) } 
                          attrName      = { 'dv' } 
                          label         = { __( 'Vertical bullets' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable vertical navigation bullets on every Slide.' ) }</div>
                      </PanelRow>
                      {
                        getSecVal( 'navigationBullets', 'dv', dv ) &&
                        <div className = { 'wp-block-webyx-fg-webyx-wrapper-group' }>
                          <PanelRow>
                            <WebyxSelectControl 
                              disabled      = { false }
                              attrValue     = { getSecVal( 'navigationBullets', 'dvp', dvp ) } 
                              attrName      = { 'dvp' } 
                              label         = { __( 'Vertical bullets position' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose vertical navigation bullets position.' ) }</div>
                          </PanelRow>
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dtvoff', dtvoff ) } 
                              attrName      = { 'dtvoff' } 
                              label         = { __( 'Vertical bullets offset' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable bullets offset.' ) }</div>
                          </PanelRow>
                          {
                            getSecVal( 'navigationBullets', 'dtvoff', dtvoff ) &&
                              <div>
                                <PanelRow>
                                  <WebyxRangeControl 
                                    attrValue     = { getSecVal( 'navigationBullets', 'dtvoffdsk', dtvoffdsk ) } 
                                    attrName      = { 'dtvoffdsk' } 
                                    min           = { 0 }
                                    max           = { 100 }
                                    showTooltip   = { false }
                                    beforeIcon    = { 'desktop' }
                                    label         = { __( 'Vertical bullet offset' ) +  ` ${ __( dvp ) }` }
                                    setAttributes = { setAttributes }/>
                                </PanelRow>
                                <PanelRow>
                                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a vertical offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                                </PanelRow>
                                <PanelRow>
                                  <WebyxRangeControl 
                                    attrValue     = { getSecVal( 'navigationBullets', 'dtvoffmob', dtvoffmob ) } 
                                    attrName      = { 'dtvoffmob' } 
                                    min           = { 0 }
                                    max           = { 100 }
                                    showTooltip   = { false }
                                    beforeIcon    = { 'smartphone' }
                                    label         = { __( 'Vertical bullet offset' ) +  ` ${ __( dvp ) }` }
                                    setAttributes = { setAttributes }/>
                                </PanelRow><PanelRow>
                                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a vertical offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                                </PanelRow>
                              </div>
                          }
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dtv', dtv ) } 
                              attrName      = { 'dtv' } 
                              label         = { __( 'Vertical bullet tooltips' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Displays vertical Section name on mouse hover.' ) }</div>
                          </PanelRow>
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dtvcp', dtvcp ) } 
                              attrName      = { 'dtvcp' } 
                              label         = { __( 'Vertical fixed bullet tooltips' )}
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Vertical bullet tooltips are now persistent.' ) }</div>
                          </PanelRow>
                        </div>
                      }
                    </div>
                  :
                    <div>
                      <PanelRow>
                        <WebyxToggleControl 
                          attrValue     = { getSecVal( 'navigationBullets', 'dh', dh ) } 
                          attrName      = { 'dh' } 
                          label         = { __( 'Horizontal bullets' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable horizontal navigation bullets on every Slide.' ) }</div>
                      </PanelRow>
                      {
                        getSecVal( 'navigationBullets', 'dh', dh ) &&
                        <div className = { 'wp-block-webyx-fg-webyx-wrapper-group' }>
                          <PanelRow>
                            <WebyxSelectControl 
                              disabled      = { false }
                              attrValue     = { getSecVal( 'navigationBullets', 'dhp', dhp ) } 
                              attrName      = { 'dhp' } 
                              label         = { __( 'Horizontal bullets position' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose horizontal navigation bullets position.' ) }</div>
                          </PanelRow>
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dthoff', dthoff ) } 
                              attrName      = { 'dthoff' } 
                              label         = { __( 'Horizontal bullets offset' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable bullets offset.' ) }</div>
                          </PanelRow>
                          {
                            getSecVal( 'navigationBullets', 'dthoff', dthoff ) &&
                              <div>
                                <PanelRow>
                                  <WebyxRangeControl 
                                    attrValue     = { getSecVal( 'navigationBullets', 'dthoffdsk', dthoffdsk ) } 
                                    attrName      = { 'dthoffdsk' } 
                                    min           = { 0 }
                                    max           = { 100 }
                                    showTooltip   = { false }
                                    beforeIcon    = { 'desktop' }
                                    label         = { __( 'Horizontal bullet offset' +  ` ${ __( dhp ) }` ) }
                                    setAttributes = { setAttributes }/>
                                </PanelRow>
                                <PanelRow>
                                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a horizontal offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                                </PanelRow>
                                <PanelRow>
                                  <WebyxRangeControl 
                                    attrValue     = { getSecVal( 'navigationBullets', 'dthoffmob', dthoffmob ) } 
                                    attrName      = { 'dthoffmob' } 
                                    min           = { 0 }
                                    max           = { 100 }
                                    showTooltip   = { false }
                                    beforeIcon    = { 'smartphone' }
                                    label         = { __( 'Horizontal bullet offset' ) +  ` ${ __( dhp ) }` }
                                    setAttributes = { setAttributes }/>
                                </PanelRow>
                                <PanelRow>
                                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a horizontal offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                                </PanelRow>
                              </div>
                          }
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dhs', dhs ) } 
                              attrName      = { 'dhs' } 
                              label         = { __( 'Horizontal solo bullet' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Displays a bullet in the case of a single horizontal Section.' ) }</div>
                          </PanelRow>
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dth', dth ) } 
                              attrName      = { 'dth' } 
                              label         = { __( 'Horizontal bullet tooltips' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Displays horizontal Section name on mouse hover.' ) }</div>
                          </PanelRow>
                          <PanelRow>
                            <WebyxToggleControl 
                              attrValue     = { getSecVal( 'navigationBullets', 'dthcp', dthcp ) }
                              attrName      = { 'dthcp' } 
                              label         = { __( 'Horizontal bullets fixed tooltips' ) }
                              setAttributes = { setAttributes }/>
                          </PanelRow>
                          <PanelRow>
                            <div className = { 'webyx-fg-info-txt' }>{ __( 'Horizontal bullet tooltips are now persistent.' ) }</div>
                          </PanelRow>
                        </div>
                      }
                    </div>
                )
              }
            </TabPanel>
            <hr/>
            <PanelRow>
              <WebyxSelectControl 
                disabled      = { false }
                attrValue     = { getSecVal( 'navigationBullets', 'mvndbst', mvndbst ) } 
                attrName      = { 'mvndbst' } 
                label         = { __( 'Bullets type' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets type.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxColorPicker 
                attrValue     = { getSecVal( 'navigationBullets', 'mvndc', mvndc ) } 
                attrName      = { 'mvndc' } 
                label         = { __( 'Bullets colour' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets colour.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxColorPicker 
                attrValue     = { getSecVal( 'navigationBullets', 'mvndcl', mvndcl ) } 
                attrName      = { 'mvndcl' } 
                label         = { __( 'Bullets colour light' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets colour light.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'navigationBullets', 'dbkgace', dbkgace ) }
                attrName      = { 'dbkgace' } 
                label         = { __( 'Bullets background area' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable bullets background area.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'navigationBullets', 'dbkgace', dbkgace ) &&
                <div>
                  <PanelRow>
                    <WebyxColorPicker 
                      attrValue     = { getSecVal( 'navigationBullets', 'dbkgac', dbkgac ) } 
                      attrName      = { 'dbkgac' } 
                      label         = { __( 'Bullets background area colour' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets background area colour.' ) }</div>
                  </PanelRow>
                </div>
            }
            <hr/>
            <PanelRow>
              <WebyxColorPicker 
                attrValue     = { getSecVal( 'navigationBullets', 'mvndttc', mvndttc ) } 
                attrName      = { 'mvndttc' } 
                label         = { __( 'Bullet tooltip colour' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets tooltip text colour.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxColorPicker 
                attrValue     = { getSecVal( 'navigationBullets', 'mvndttcl', mvndttcl ) } 
                attrName      = { 'mvndttcl' } 
                label         = { __( 'Bullet tooltip colour light' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets tooltip text colour light.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'navigationBullets', 'mvndttace', mvndttace ) }
                attrName      = { 'mvndttace' } 
                label         = { __( 'Bullet tooltip background area' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable bullet tooltip area.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'navigationBullets', 'mvndttace', mvndttace ) &&
                <div>
                  <PanelRow>
                    <WebyxColorPicker 
                      attrValue     = { getSecVal( 'navigationBullets', 'mvndttac', mvndttac ) } 
                      attrName      = { 'mvndttac' } 
                      label         = { __( 'Bullet tooltip area colour' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose navigation bullets tooltip area colour.' ) }</div>
                  </PanelRow>
                </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Navigation Mouse Wheel' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'navigationArrows', 'nvvw', nvvw ) } 
                attrName      = { 'nvvw' } 
                label         = { 'Mouse wheel' }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable vertical navigation with mouse wheel.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'navigationArrows', 'avvd', avvd ) &&
              <div>
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'navigationArrows', 'avvd', avvd ) } 
                    attrName      = { 'avvd' } 
                    label         = { __( 'Wheel icon' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'If mouse wheel icon fixed option is not enabled this icon will disappear after first vertical movement. WARNING: this icon will be shown ONLY if mouse wheel option is enabled.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxColorPicker 
                    attrValue     = { getSecVal( 'navigationArrows', 'msiwc', msiwc ) } 
                    attrName      = { 'msiwc' } 
                    label         = { __( 'Wheel icon colour' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow> 
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose mouse wheel icon colour.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'navigationArrows', 'msiwbce', msiwbce ) } 
                    attrName      = { 'msiwbce' } 
                    label         = { __( 'Wheel icon background' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable mouse wheel icon background.' ) }</div>
                </PanelRow>
                {
                  getSecVal( 'navigationArrows', 'msiwbce', msiwbce ) &&
                    <div>
                      <PanelRow>
                        <WebyxColorPicker 
                          attrValue     = { getSecVal( 'navigationArrows', 'msiwbc', msiwbc ) } 
                          attrName      = { 'msiwbc' } 
                          label         = { __( 'Wheel icon background colour' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow> 
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose mouse wheel icon background colour.' ) }</div>
                      </PanelRow>
                    </div>
                }
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'navigationArrows', 'iwhf', iwhf ) } 
                    attrName      = { 'iwhf' } 
                    label         = { __( 'Wheel icon fixed' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Makes wheel icon persistent if present.' ) }</div>
                </PanelRow>
              </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Navigation Keyboard' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'navigationKey', 'kn', kn ) } 
                attrName      = { 'kn' } 
                label         = { __( 'Keyboard navigation' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable website navigation with keyboard arrows.' ) }</div>
            </PanelRow>
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Full Screen Button' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'fullScreeMode', 'fsb', fsb ) } 
                attrName      = { 'fsb' } 
                label         = { __( 'Full screen button' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable a button to switch to full screen display.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'fullScreeMode', 'fsb', fsb ) &&
              <div className = { 'wp-block-webyx-fg-webyx-wrapper-group' }>
                <PanelRow>
                  <WebyxSelectControl 
                    disabled      = { false }
                    attrValue     = { getSecVal( 'fullScreeMode', 'fsp', fsp ) } 
                    attrName      = { 'fsp' } 
                    label         = { __( 'Button position' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose the position of the full screen button.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxSelectControl 
                    disabled      = { false }
                    attrValue     = { getSecVal( 'fullScreeMode', 'fsdt', fsdt ) } 
                    attrName      = { 'fsdt' } 
                    label         = { __( 'Button dimension thickness' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose full screen button dimension thickness.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'fullScreeMode', 'fsboff', fsboff ) } 
                    attrName      = { 'fsboff' } 
                    label         = { __( 'Button custom offset' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable custom positioning for the button.' ) }</div>
                </PanelRow>
                {
                  fsboff &&
                    <div> 
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'fullScreeMode', 'fsofft', fsofft ) } 
                          attrName      = { 'fsofft' } 
                          min           = { 0 }
                          max           = { 100 }
                          showTooltip   = { false }
                          beforeIcon    = { 'desktop' }
                          label         = { __( 'Button top offset' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a top offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                      </PanelRow>
                      {
                        fsp === 'left' ?
                          <div>
                            <PanelRow>
                              <WebyxRangeControl 
                                attrValue     = { getSecVal( 'fullScreeMode', 'fsoffl', fsoffl ) } 
                                attrName      = { 'fsoffl' } 
                                min           = { 0 }
                                max           = { 100 }
                                showTooltip   = { false }
                                beforeIcon    = { 'desktop' }
                                label         = { __( 'Button left offset' ) }
                                setAttributes = { setAttributes }/>
                            </PanelRow>
                            <PanelRow>
                              <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a top offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                            </PanelRow>
                          </div>
                        :
                          <div>
                            <PanelRow>
                              <WebyxRangeControl 
                                attrValue     = { getSecVal( 'fullScreeMode', 'fsoffr', fsoffr ) } 
                                attrName      = { 'fsoffr' } 
                                min           = { 0 }
                                max           = { 100 }
                                showTooltip   = { false }
                                beforeIcon    = { 'desktop' }
                                label         = { __( 'Button right offset' ) }
                                setAttributes = { setAttributes }/>
                            </PanelRow>
                            <PanelRow>
                              <div className = { 'webyx-fg-info-txt' }>{ __( 'Insert a value to apply a top offset (range from 0 to 100 pixels with a step of 1).' ) }</div>
                            </PanelRow>
                          </div>
                      }
                    </div> 
                }
                <PanelRow>
                  <WebyxColorPicker 
                    attrValue     = { getSecVal( 'fullScreeMode', 'fsc', fsc ) } 
                    attrName      = { 'fsc' } 
                    label         = { __( 'Button colour' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose button colour.' ) }</div>
                </PanelRow>
                <PanelRow>
                  <WebyxToggleControl 
                    attrValue     = { getSecVal( 'fullScreeMode', 'fsbce', fsbce ) } 
                    attrName      = { 'fsbce' } 
                    label         = { __( 'Button background' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable button background.' ) }</div>
                </PanelRow>
                {
                  getSecVal( 'fullScreeMode', 'fsbce', fsbce ) &&
                    <div>
                      <PanelRow>
                        <WebyxColorPicker 
                          attrValue     = { getSecVal( 'fullScreeMode', 'fsbc', fsbc ) } 
                          attrName      = { 'fsbc' } 
                          label         = { __( 'Button background colour' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose button background colour.' ) }</div>
                      </PanelRow>
                    </div>
                }
              </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Mobile Devices' ) } initialOpen = { false }>
            <TabPanel
              className      = { 'webyx-slide-easings-tab-panel' }
              activeClass    = { 'webyx-active-tab' }
              initialTabName = { 'vertical' }
              onSelect       = { () => {} }
              tabs           = { [
                  {
                    name: 'vertical',
                    title: 'Vertical',
                    className: 'webyx-slide-tab-vertical',
                  },
                  {
                    name: 'horizontal',
                    title: 'Horizontal',
                    className: 'webyx-slide-tab-horizontal',
                  },
              ] }>
              { 
                ( tab ) => (
                  tab.name === 'vertical' ?
                    <div>
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'mobileDevice', 'vmsm', vmsm ) } 
                          attrName      = { 'vmsm' } 
                          min           = { 300 }
                          max           = { 1200 }
                          showTooltip   = { false }
                          label         = { __( 'Vertical speed' )}
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Speed for the vertical scrolling transition to Section in miliseconds on mobile device (range from 300 to 1200 milliseconds with a step of 1).' ) }</div>
                      </PanelRow>
                      <PanelRow>
                        <WebyxSelectControl 
                          disabled      = { false }
                          attrValue     = { getSecVal( 'mobileDevice', 'vmcm', vmcm ) } 
                          attrName      = { 'vmcm' } 
                          label         = { __( 'Vertical easing' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Set the vertical animation easing from a pre-estabilished set of curve types on mobile device.' ) }</div>
                      </PanelRow>
                    </div>
                  :
                    <div>
                      <PanelRow>
                        <WebyxRangeControl 
                          attrValue     = { getSecVal( 'mobileDevice', 'hmsm', hmsm ) } 
                          attrName      = { 'hmsm' } 
                          min           = { 300 }
                          max           = { 1200 }
                          showTooltip   = { false }
                          label         = { __( 'Horizontal speed' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Speed for the horizontal scrolling transition to Section in miliseconds on mobile device (range from 300 to 1200 milliseconds with a step of 1).' ) }</div>
                      </PanelRow>
                      <PanelRow>
                        <WebyxSelectControl 
                          disabled      = { false }
                          attrValue     = { getSecVal( 'mobileDevice', 'hmcm', hmcm ) } 
                          attrName      = { 'hmcm' } 
                          label         = { __( 'Horizontal easing' ) }
                          setAttributes = { setAttributes }/>
                      </PanelRow>
                      <PanelRow>
                        <div className = { 'webyx-fg-info-txt' }>{ __( 'Set the horizontal animation easing from a pre-estabilished set of curve types on mobile device.' ) }</div>
                      </PanelRow>
                    </div>
                )
              }
            </TabPanel>
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Scrollbar' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'scrollbar', 'scrlbd', scrlbd ) } 
                attrName      = { 'scrlbd' } 
                label         = { 'Hide scrollbar' }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Hide browser\'s default scrollbar in the Slides when it should be present in the scrollable Slides.' ) }</div>
            </PanelRow>
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Loading Splash Screen' ) } initialOpen = { false }>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Here you can customize a standard initial loading splash screen.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'loaderSlide', 'ils', ils ) } 
                attrName      = { 'ils' } 
                label         = { 'Loading Splash Screen' }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable an initial loading splash screen.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'loaderSlide', 'ils', ils ) &&
                <div>
                  <PanelRow>
                    <WebyxSelectControl 
                      disabled      = { false }
                      attrValue     = { getSecVal( 'loaderSlide', 'ilst', ilst ) } 
                      attrName      = { 'ilst' } 
                      label         = { __( 'Splash screen type' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose splash screen type.' ) }</div>
                  </PanelRow>
                  <hr/>
                  {
                    'default' === getSecVal( 'loaderSlide', 'ilst', ilst ) ?
                      <div>
                        <PanelRow>
                          <WebyxColorPicker 
                            attrValue     = { getSecVal( 'loaderSlide', 'ilsbc', ilsbc ) } 
                            attrName      = { 'ilsbc' } 
                            label         = { __( 'Background colour' ) }
                            setAttributes = { setAttributes }/>
                        </PanelRow>
                        <PanelRow>
                          <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose splash screen background colour.' ) }</div>
                        </PanelRow>
                        <PanelRow>
                          <WebyxColorPicker 
                            attrValue     = { getSecVal( 'loaderSlide', 'ilssbc', ilssbc ) } 
                            attrName      = { 'ilssbc' } 
                            label         = { __( 'Spinner colour' ) }
                            setAttributes = { setAttributes }/>
                        </PanelRow>
                        <PanelRow>
                          <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose spinner background colour.' ) }</div>
                        </PanelRow>
                      </div>
                      : 
                      <div>
                        <PanelRow>
                          <div>
                            <WebyxTextControl
                              placeholder   = { __( 'message...' ) }
                              disabled      = { false } 
                              attrValue     = { getSecVal( 'loaderSlide', 'ilsmt', ilscmt ) } 
                              attrName      = { 'ilscmt' } 
                              label         = { __( 'Initial loading message:' ) }
                              setAttributes = { setAttributes }/>
                              <PanelRow>
                                <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose splash screen background colour.' ) }</div>
                              </PanelRow>
                          </div>
                        </PanelRow>
                        <PanelRow>
                          <WebyxColorPicker 
                            attrValue     = { getSecVal( 'loaderSlide', 'ilsmtc', ilscmtc ) } 
                            attrName      = { 'ilscmtc' } 
                            label         = { __( 'Message colour' ) }
                            setAttributes = { setAttributes }/>
                        </PanelRow>
                        <PanelRow>
                          <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose splash screen text colour.' ) }</div>
                        </PanelRow>
                        <PanelRow>
                          <WebyxColorPicker 
                            attrValue     = { getSecVal( 'loaderSlide', 'ilscbc', ilscbc ) } 
                            attrName      = { 'ilscbc' } 
                            label         = { __( 'Background colour' ) }
                            setAttributes = { setAttributes }/>
                        </PanelRow>
                        <PanelRow>
                          <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose splash screen background colour.' ) }</div>
                        </PanelRow>
                        <PanelRow>
                          <MediaUpload
                            title        = { __( 'Background image' ) } 
                            onSelect     = { ( image ) => { onUpdateMedia( image, 'ilscbiurl', 'ilscbifn', setAttributes ) } } 
                            type         = { 'image' }
                            label        = { __( 'Background image' ) }
                            allowedTypes = { ALLOWED_IMAGE_TYPES }
                            value        = { getSecVal( 'loaderSlide', 'ilscbiurl', ilscbiurl ) }
                            render = { ( { open } ) => (
                              <Button
                                isSecondary
                                icon = { 'format-image' }
                                onClick = { open }>
                                { __( 'Upload image' ) }
                                { getSecVal( 'loaderSlide', 'ilscbiurl', ilscbiurl ) && <span className = { 'dashicons dashicons-yes' }></span> }
                              </Button>
                            ) }
                          />
                          <Button
                            isSecondary 
                            icon    = { 'dismiss' } 
                            onClick = { 
                              () => {
                                dismissMedia( 'ilscbiurl', 'ilscbifn', setAttributes ) 
                              } 
                            }>
                          </Button>
                        </PanelRow>
                        {
                          getSecVal( 'loaderSlide', 'ilscbifn', ilscbifn ) &&
                            <PanelRow>
                              <span className = { 'webyx-fg-info-file-name' }>{ ilscbifn }</span>
                            </PanelRow>
                        }
                        <PanelRow>
                          <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose splash screen background image.' ) }</div>
                        </PanelRow>
                      </div>
                  }
                </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Custom CSS' ) } initialOpen = { false }>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'customCss', 'ccss', ccss ) } 
                attrName      = { 'ccss' } 
                label         = { __( 'Custom CSS' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Here you can add your custom CSS rules.' ) }</div>
            </PanelRow>
            { 
              getSecVal( 'customCss', 'ccss', ccss ) && 
                <WebyxCSSCustomDialog 
                  attrValue     = { getSecVal( 'customCss', 'ccssp', ccssp ) } 
                  attrName      = { 'ccssp' } 
                  label         = { __( 'Custom CSS' ) }
                  setAttributes = { setAttributes }/>
            }
          </PanelBody>
        </Panel>
      </div>
    </InspectorControls>
  )
}