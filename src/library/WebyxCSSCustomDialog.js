import { __ }            from '@wordpress/i18n';
import { Button, Modal } from '@wordpress/components';
import { useState }      from '@wordpress/element';
import AceEditor         from 'react-ace';
import 'ace-builds/src-min-noconflict/mode-css';
import 'ace-builds/src-min-noconflict/theme-textmate';
import 'ace-builds/src-min-noconflict/ext-language_tools';
import 'ace-builds/src-min-noconflict/ext-spellcheck';
import 'ace-builds/src-min-noconflict/snippets/css';
import 'ace-builds/src-min-noconflict/ext-searchbox';
const ace = require( 'ace-builds/src-noconflict/ace' );
ace.config.set( 'basePath', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/' );
ace.config.setModuleUrl( 'ace/mode/css_worker', 'https://cdn.jsdelivr.net/npm/ace-builds@1.4.3/src-noconflict/worker-css.js' );
export default function WebyxCSSCustomDialog ( { attrName, attrValue, label, setAttributes } ) {
  const [ isOpen, setOpen ] = useState( false );
  const [ css, setCSS     ] = useState( attrValue );
  const openModal  = () => { 
    setOpen( true  );
  };
  const closeModal = () => {
    setAttributes( { 
      [ attrName ]: css 
    } );
    setOpen( false );
  };
  const onChangeValue = ( val ) => {
    setCSS( val );
  }
  return (
    <>
      <Button className = { 'webyx-btn' } onClick = { openModal }>
        { __( 'Custom CSS' ) }
      </Button>
      { isOpen && (
          <Modal bodyOpenClassName = { 'custom-css' } title = { __( 'Custom CSS' ) } onRequestClose = { closeModal }>
            <AceEditor
              mode        = { 'css' }
              theme       = { 'textmate' }
              placeholder = { 'add css property' }
              value       = { css }
              onChange    = { onChangeValue }
              height      = { '300px' }
              focus       = { true }
              name        = { 'custom-css-editor-tmc' }
              enableLiveAutocompletion = { true }/>
            <Button className = { 'webyx-btn-modal' } onClick = { closeModal }>
              { __( 'Save/Close' ) }
            </Button>
          </Modal>
        ) 
      }
    </>
  );
};