import { __ } 											  from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import WebyxButtonBlockAppender       from '../library/WebyxButtonBlockAppender.js';
import WebyxWrapperPanel              from './panel.js';
import { select }                     from '@wordpress/data';
export default function edit( { attributes, setAttributes, clientId, isSelected } ) {
	const innerCount = select('core/block-editor').getBlocksByClientId( clientId )[0].innerBlocks.length,
		ALLOWED_BLOCKS   = [ 'webyx-fg/webyx-slide' ],
		bgkSectionWrp    = isSelected ? ' wp-block-webyx-fg-section-wrapper-active' : '',
		bgkSectionHeader = isSelected ? ' wp-block-webyx-fg-section-header-active'  : '',
		blockProps       = useBlockProps( { 
			className: `wp-block-webyx-fg-section-wrapper${bgkSectionWrp}`
		} ),
		{ sectionTitle, sectionTagName } = attributes;
	setAttributes( { innerCount } );
	return (
		<div { ...blockProps }>
			<WebyxWrapperPanel attributes = { attributes } setAttributes = { setAttributes }/>
			<div className = { `wp-block-webyx-fg-section-header${bgkSectionHeader}` }>
				<span>{ sectionTitle !== '' ? sectionTitle : __( 'Section' ) }</span>
				<span className = { 'wp-block-webyx-fg-section-header-html-tag' }>{ sectionTagName }</span>
			</div>
			{ ! innerCount && <div className = { 'wp-block-webyx-fg-webyx-section-placeholder' }>{ __( 'You must at least add a Slide' ) }</div> }
			<div className = { 'wp-block-webyx-fg-btn-add-slide-wrapper' }>
				<InnerBlocks
					allowedBlocks  = { ALLOWED_BLOCKS }
					renderAppender = { () => (
						isSelected &&
							<WebyxButtonBlockAppender 
								rootClientId = { clientId } 
								slugComp     = { 'Slide' } 
							/>
					) }
				/>
			</div>
		</div>
	)
}