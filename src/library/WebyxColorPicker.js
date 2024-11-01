import { ColorPicker } from '@wordpress/components';
import { useState }    from '@wordpress/element';
const onChangeWebyxColorPicker = ( attrName, attrValue, setAttributes ) => {
  setAttributes( { 
    [ attrName ]: { rgb: attrValue } 
  } );
}
export default function WebyxColorPicker ( { attrName, attrValue, label, setAttributes, disableAlpha } ) {
  const [ visible, toggleVisible ] = useState ( false );
  const rgb = attrValue.rgb;
  const handleOnClick = () => {
    toggleVisible( ! visible )
  }
  return (
    <div style = { { width: '100%' } }>
      <div className = { 'webyx-pickcolor-label-wrapper' }>
        <div className = { 'webyx-pickcolor-label' }>{ label }</div>
        <div
          className = { 'webyx-pickcolor-color-sample' } 
          onClick   = { handleOnClick }
          style     = { { backgroundColor: `rgb(${rgb.r},${rgb.g},${rgb.b},${rgb.a})` } }>
          <div className = { 'webyx-pickcolor-color-sample-background-opacity' }></div>
        </div>
      </div>
      {
        visible &&
          <ColorPicker
            color            = { attrValue.rgb }
            onChangeComplete = { ( value ) => {
              onChangeWebyxColorPicker( attrName, value.rgb, setAttributes )
            } }
            disableAlpha = { disableAlpha }
          />
      }
    </div>
  );
};