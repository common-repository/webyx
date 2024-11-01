import { __ }                                       from '@wordpress/i18n';
import { InspectorControls, MediaUpload }           from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Button, Icon } from '@wordpress/components';
import WebyxToggleControl                           from '../library/WebyxToggleControl';
import WebyxTextControl                             from '../library/WebyxTextControl';
import WebyxSelectControl                           from '../library/WebyxSelectControl';
import WebyxColorPicker                             from '../library/WebyxColorPicker';
import attr                                         from './attributes';
const ALLOWED_MEDIA_TYPES = [ 'image' ];
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
export default function WebyxWrapperPanel ( { attributes, setAttributes } ) {
  const { 
    slideTitle, 
    scrollable,
    bkgActive, 
    bkgColor, 
    imageBkgUrl, 
    imageBkgFN,
    imageBkgSize, 
    imageBkgPos, 
    imageBkgRpt, 
    imageBkgAttachment, 
    slideContPosActive,
    slideContPos, 
    slideTagName, 
    slideWrapperCnt, 
    slideWrapperCntCN 
  } = attributes;
  return (
    <InspectorControls key = { 'setting' }>
      <div id = { 'webyx-fg-controls' }>
        <Panel>
          <PanelRow>
            <div className = { 'webyx-fg-doc' }>
              <Icon icon = { 'info' }/>
              <a className = { 'webyx-fg-doc-link' } href = { 'https://webyxforgutenberg.com/#slides' } target = { '_blank' } >{ 'how to use' }</a>
            </div>
          </PanelRow>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Slide' ) } initialOpen = { true }>
            <PanelRow>
              <WebyxTextControl
                placeholder   = { __( 'slide title' ) }
                disabled      = { false } 
                attrValue     = { getSecVal( 'slide', 'slideTitle', slideTitle ) } 
                attrName      = { 'slideTitle' } 
                label         = { __( 'Name:' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'IMPORTANT: you should give different titles for each Slide. (Please note that Slides within the same Section should be named differently, while between different Sections they could also have the same title).' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'slide', 'slideContPosActive', slideContPosActive ) } 
                attrName      = { 'slideContPosActive' } 
                label         = { __( 'Slide Content' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable content position management in the current Slide.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'slide', 'slideContPosActive', slideContPosActive ) &&
                <div>
                  <PanelRow>
                    <WebyxSelectControl 
                      disabled      = { false }
                      attrValue     = { getSecVal( 'slide', 'slideContPos', slideContPos ) } 
                      attrName      = { 'slideContPos' } 
                      label         = { __( 'Slide content position' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Select general content position in the current Slide.' ) }</div>
                  </PanelRow>
                </div>
            }
            <PanelRow>
              <WebyxSelectControl 
                disabled      = { false }
                attrValue     = { getSecVal( 'slide', 'slideTagName', slideTagName ) } 
                attrName      = { 'slideTagName' } 
                label         = { __( 'Tag type' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Select HTML tag name. This parameter changes the Slide HTML tag to the specified tag.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'slide', 'scrollable', scrollable ) } 
                attrName      = { 'scrollable' } 
                label         = { __( 'Scrolling content' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Viewport exceeding Slide content will be displayed through scrolling.' )}</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'slide', 'slideWrapperCnt', slideWrapperCnt ) } 
                attrName      = { 'slideWrapperCnt' } 
                label         = { __( 'Wrapper content' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable element wrapper for the Slide\'s content.' ) }</div>
            </PanelRow>
            {
              slideWrapperCnt &&
              <div>
                <PanelRow>
                  <WebyxTextControl
                    placeholder   = { __( 'class name' ) }
                    disabled      = { false } 
                    attrValue     = { getSecVal( 'slide', 'slideWrapperCntCN', slideWrapperCntCN ) } 
                    attrName      = { 'slideWrapperCntCN' } 
                    label         = { __( 'Wrapper Slide additional CSS class(es)' ) }
                    setAttributes = { setAttributes }/>
                </PanelRow>
                <PanelRow>
                  <div className = { 'webyx-fg-info-txt' }>{ __( 'Separate multiple classes with spaces.' ) }</div>
                </PanelRow>
              </div>
            }
          </PanelBody>
        </Panel>
        <Panel>
          <PanelBody title = { 'Background' } initialOpen = { false }>
          <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'slide', 'bkgActive', bkgActive ) } 
                attrName      = { 'bkgActive' } 
                label         = { __( 'Background' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enable Slide background.' ) }</div>
            </PanelRow>
            {
              getSecVal( 'slide', 'bkgActive', bkgActive ) &&
                <div>
                  <PanelRow>
                    <WebyxColorPicker 
                      attrValue     = { getSecVal( 'slide', 'bkgColor', bkgColor ) } 
                      attrName      = { 'bkgColor' } 
                      label         = { __( 'Background colour' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose background colour.' ) }</div>
                  </PanelRow>
                  <PanelRow>
                    <MediaUpload
                      title        = { __( 'Background image' ) } 
                      onSelect     = { ( image ) => { onUpdateMedia( image, 'imageBkgUrl', 'imageBkgFN', setAttributes ) } }
                      type         = { 'image' }
                      label        = { __( 'Background image' ) }
                      allowedTypes = { ALLOWED_MEDIA_TYPES }
                      value        = { getSecVal( 'slide', 'imageBkgUrl', imageBkgUrl ) }
                      render = { ( { open } ) => (
                        <Button
                          isSecondary
                          icon = { 'format-image' }
                          onClick = { open }>
                          { __( 'Upload Image' ) }
                          { getSecVal( 'slide', 'imageBkgUrl', imageBkgUrl ) && <span className = { 'dashicons dashicons-yes' }></span> }
                        </Button>
                      ) }
                    />
                    <Button
                      isSecondary 
                      icon    = { 'dismiss' } 
                      onClick = { 
                        () => {
                          dismissMedia( 'imageBkgUrl', 'imageBkgFN', setAttributes ) 
                        } 
                      }>
                    </Button>
                  </PanelRow>
                  {
                    imageBkgFN &&
                      <PanelRow>
                        <span className = { 'webyx-fgp-info-file-name' }>{ imageBkgFN }</span>
                      </PanelRow>
                  }
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Choose Section background image.' ) }</div>
                  </PanelRow>
                  <PanelRow>
                    <WebyxSelectControl 
                      disabled      = { false }
                      attrValue     = { getSecVal( 'slide', 'imageBkgSize', imageBkgSize ) } 
                      attrName      = { 'imageBkgSize' } 
                      label         = { __( 'Background image size' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Select image size.' ) }</div>
                  </PanelRow>
                  <PanelRow>
                    <WebyxSelectControl 
                      disabled      = { false }
                      attrValue     = { getSecVal( 'slide', 'imageBkgPos', imageBkgPos ) } 
                      attrName      = { 'imageBkgPos' } 
                      label         = { __( 'Background image position' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Select image position.' ) }</div>
                  </PanelRow>
                  <PanelRow>
                    <WebyxSelectControl 
                      disabled      = { false }
                      attrValue     = { getSecVal( 'slide', 'imageBkgRpt', imageBkgRpt ) } 
                      attrName      = { 'imageBkgRpt' } 
                      label         = { __( 'Background image repeat' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Select image repeat.' ) }</div>
                  </PanelRow>
                  <PanelRow>
                    <WebyxSelectControl 
                      disabled      = { false }
                      attrValue     = { getSecVal( 'slide', 'imageBkgAttachment', imageBkgAttachment ) } 
                      attrName      = { 'imageBkgAttachment' } 
                      label         = { __( 'Background image attachment' ) }
                      setAttributes = { setAttributes }/>
                  </PanelRow>
                  <PanelRow>
                    <div className = { 'webyx-fg-info-txt' }>{ __( 'Select image attachment.' ) }</div>
                  </PanelRow>
                </div>
            }
          </PanelBody>
        </Panel>
      </div>
    </InspectorControls>
  )
}