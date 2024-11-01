import { ToggleControl } from '@wordpress/components';
const onChangeWebyxToggle = ( attrName, attrValue, setAttributes ) => {
  setAttributes( { 
    [ attrName ]: ! attrValue 
  } );
};
export default function WebyxToggleControl ( { attrName, attrValue, setAttributes, label } ) {
  return (
    <ToggleControl
      label    = { `${label}` }
      checked  = { attrValue }
      onChange = { () => { 
        onChangeWebyxToggle( attrName, attrValue, setAttributes ) 
      } }
    />
  )
};