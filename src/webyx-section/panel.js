import { __ }                               from '@wordpress/i18n';
import { InspectorControls }                from '@wordpress/block-editor';
import { Panel, PanelBody, PanelRow, Icon } from '@wordpress/components';
import WebyxTextControl                     from '../library/WebyxTextControl';
import WebyxSelectControl                   from '../library/WebyxSelectControl';
import WebyxToggleControl                   from '../library/WebyxToggleControl';
import attr                                 from './attributes';
export default function WebyxWrapperPanel ( { attributes, setAttributes } ) {
  const { sectionTitle, continuousHorizontal, sectionTagName } = attributes;
  const getSecVal = ( group, attrName, attrVal ) => {
    return typeof attrVal === 'undefined' ? attr[ group ][ attrName ][ 'default' ] : attrVal;
  }
  return (
    <InspectorControls key = { 'setting' }>
      <div id = { 'webyx-fg-controls' }>
        <Panel>
          <PanelRow>
            <div className = { 'webyx-fg-doc' }>
              <Icon icon = { 'info' }/>
              <a className = { 'webyx-fg-doc-link' } href = { 'https://webyxforgutenberg.com/#sections' } target = { '_blank' } >{ __( 'how to use' ) }</a>
            </div>
          </PanelRow>
        </Panel>
        <Panel>
          <PanelBody title = { __( 'Section' ) } initialOpen = { true }>
            <PanelRow>
              <WebyxTextControl
                placeholder   = { __( 'section title' ) }
                disabled      = { false } 
                attrValue     = { getSecVal( 'section', 'sectionTitle', sectionTitle ) } 
                attrName      = { 'sectionTitle' } 
                label         = { __( 'Name:' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'IMPORTANT: you should give different titles for each Section otherwise some features may have problems.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxSelectControl 
                disabled      = { false }
                attrValue     = { getSecVal( 'section', 'sectionTagName', sectionTagName ) } 
                attrName      = { 'sectionTagName' } 
                label         = { __( 'Tag type' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Select HTML tag name. This parameter changes the Section HTML tag to the specified tag.' ) }</div>
            </PanelRow>
            <PanelRow>
              <WebyxToggleControl 
                attrValue     = { getSecVal( 'section', 'continuousHorizontal', continuousHorizontal ) } 
                attrName      = { 'continuousHorizontal' } 
                label         = { __( 'Continuous horizontal' ) }
                setAttributes = { setAttributes }/>
            </PanelRow>
            <PanelRow>
              <div className = { 'webyx-fg-info-txt' }>{ __( 'Enables the direct horizontal passage from the first to the last slide and vice versa.' ) }</div>
            </PanelRow>
          </PanelBody>
        </Panel>
      </div>
    </InspectorControls>
  )
}