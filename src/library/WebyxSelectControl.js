import { SelectControl } from '@wordpress/components';
import { opts }          from '../conf/options';
const onChangeWebyxSelect = ( attrName, attrValue, setAttributes ) => {
  setAttributes( { 
    [ attrName ]: attrValue 
  } );
};
export default function WebyxSelectControl ( { attrName, attrValue, setAttributes, label, disabled } ) {
  return (
    <SelectControl
      label         = { `${label}:` }
      disabled      = { disabled }
      labelPosition = { 'top' }
      value         = { attrValue } 
      onChange      = { ( attrValue ) => {
        onChangeWebyxSelect( attrName, attrValue, setAttributes );
      } }
      options = { opts[ attrName ] }
    />
  )
}