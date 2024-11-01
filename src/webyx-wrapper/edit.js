import { __ }                                        from '@wordpress/i18n';
import { useBlockProps, InnerBlocks, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton }               from '@wordpress/components';
import { useState }                                  from '@wordpress/element';
import WebyxButtonBlockAppender                      from '../library/WebyxButtonBlockAppender.js';
import WebyxWrapperPanel                             from './panel.js';
export default function edit ( { attributes, setAttributes, clientId, isSelected } ) {
	const [ widthAlign, setWidthAlign ] = useState( '' );
	const setWidthAlignHandler = ( widthAlign ) => {
		widthAlign === '' ? setWidthAlign( 'alignwide' ) : setWidthAlign( '' );
	}
	const ALLOWED_BLOCKS = [ 'webyx-fg/webyx-section' ],
		blockProps = useBlockProps( { 
			className: `wp-block-webyx-fg-webyx-wrapper ${widthAlign}`
		} );
	const getIconExpand = () => {
		return widthAlign === '' ?  'dashicons dashicons-editor-expand' : 'dashicons dashicons-editor-contract';
	}
	const getIconExpandLabel = () => {
		return widthAlign === '' ?  'expand' : 'contract';
	}
	return (
		<div { ...blockProps } >
			<BlockControls>
				<ToolbarGroup id = { 'webyx-toolabar-group-alignment' }>
					<ToolbarButton
						className = { 'webyx-prm-color' } 
						isActive  = { widthAlign === 'alignwide' } 
						onClick   = { () => { setWidthAlignHandler( widthAlign ) } } 
						icon      = { getIconExpand() } 
						label     = { __( getIconExpandLabel() ) }/>
				</ToolbarGroup>
			</BlockControls>
			<div className = { 'wp-block-webyx-fg-webyx-wrapper-header' }>{ 'WEBYX FOR GUTENBERG' }</div>
			<WebyxWrapperPanel attributes = { attributes } setAttributes = { setAttributes }/>
			<div>
				<div className = { 'wp-block-webyx-fg-btn-add-section-wrapper' }>
					<InnerBlocks
						allowedBlocks  = { ALLOWED_BLOCKS }
						renderAppender = { () => (
							isSelected &&
							<WebyxButtonBlockAppender
								rootClientId = { clientId } 
								slugComp     = { 'Section' }/>
						) }
					/>
				</div>
			</div>
		</div>
	)
}