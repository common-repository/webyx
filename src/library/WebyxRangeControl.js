import { RangeControl } from '@wordpress/components';
const onChangeWebyxRange = ( attrName, attrValue, setAttributes ) => {
  setAttributes( { 
    [ attrName ]: attrValue 
  } );
};
export default function WebyxRangeControl ( { attrName, attrValue, setAttributes, label, disabled, min, max, showTooltip, beforeIcon } ) {
  return (
    <RangeControl
      label       = { `${label}:` }
      value       = { attrValue }
      min         = { min }
      max         = { max }
      beforeIcon  = { beforeIcon }
      disabled    = { disabled }
      showTooltip = { showTooltip }
      onChange    = { ( attrValue ) => {
        onChangeWebyxRange( attrName, attrValue, setAttributes );
      } }
    />
  )
};