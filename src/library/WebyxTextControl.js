import { TextControl } from '@wordpress/components';
const onChangeWebyxTextControl = ( attrName, attrValue, setAttributes ) => {
  setAttributes( { 
    [ attrName ]: attrValue 
  } );
}
export default function  WebyxTextControl ( { attrName, attrValue, setAttributes, label, disabled, placeholder, style } ) {
  return (
    <TextControl
      style       = { style }
      label       = { `${label}` }
      placeholder = { placeholder }
      disabled    = { disabled }
      value       = { attrValue }
      onChange    = { ( attrValue ) => { 
        onChangeWebyxTextControl( attrName, attrValue, setAttributes ) 
      } }
    />
  )
}