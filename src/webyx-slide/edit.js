import { __ }                                        from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, BlockControls } from '@wordpress/block-editor';
import { ToolbarGroup, ToolbarButton }               from '@wordpress/components';
import { image }                                     from '@wordpress/icons';
import { useState }                                  from '@wordpress/element';
import WebyxWrapperPanel                             from './panel.js';
export default function edit ( { attributes, setAttributes, clientId, isSelected } ) {
	// const [ bkgActive, setBkgActive ] = useState( true );
	// const setBkgActiveHandler = () => {
	// 	setBkgActive( ! bkgActive );
	// }
	const setTogAttr = ( attrName, attrValue ) => {
		setAttributes( { 
			[ attrName ]: ! attrValue 
		} );
	}
	const bgkSectionWrp = isSelected ? ' wp-block-webyx-fg-slide-wrapper-active' : '',
		bgkSectionHeader  = isSelected ? ' wp-block-webyx-fg-slide-header-active'  : '',
		{ slideTitle, bkgActive, bkgHidden, bkgColor, imageBkgUrl, imageBkgSize, imageBkgPos, imageBkgRpt, slideTagName } = attributes,
		blockProps = useBlockProps( { 
			className: `wp-block-webyx-fg-slide-wrapper${bgkSectionWrp}`
		} );
	if ( bkgActive ) {
		if ( ! bkgHidden && bkgColor.rgb ) {
			blockProps.style = { ...{ backgroundColor: `rgba(${bkgColor.rgb.r},${bkgColor.rgb.g},${bkgColor.rgb.b},${bkgColor.rgb.a})` } };  
		} 
		if ( ! bkgHidden && imageBkgUrl ) {
			blockProps.style = { ...{ 
				backgroundImage   : `url(${imageBkgUrl})`,
				backgroundSize    : imageBkgSize,
				backgroundPosition: imageBkgPos,
				backgroundRepeat  : imageBkgRpt
			} };
		}
	}
	const ALLOWED_BLOCKS = [
		'core/paragraph',
		'core/image',
		'core/heading',
		'core/gallery',
		'core/list',
		'core/quote',
		'core/shortcode',
		'core/archives',
		'core/audio',
		'core/button',
		'core/buttons',
		'core/calendar',
		'core/categories',
		'core/code',
		'core/columns',
		'core/column',
		'core/cover',
		'core/embed',
		'core/file',
		'core/group',
		'core/freeform',
		'core/html',
		'core/media-text',
		'core/latest-comments',
		'core/latest-posts',
		'core/missing',
		'core/more',
		'core/nextpage',
		'core/preformatted',
		'core/pullquote',
		'core/rss',
		'core/search',
		'core/separator',
		'core/block',
		'core/social-links',
		'core/social-link',
		'core/spacer',
		'core/subhead',
		'core/table',
		'core/tag-cloud',
		'core/text-columns',
		'core/verse',
		'core/video'
	];
	return (
		<div { ...blockProps }>
			<BlockControls>
				<ToolbarGroup>
					<ToolbarButton
						className = { 'webyx-prm-color' } 
						isActive  = { ! bkgHidden } 
						onClick   = { () => { setTogAttr( 'bkgHidden', bkgHidden ) } } 
						icon      = { image } 
						label     = { __( 'hide/show background in editor' ) } 
					/>
				</ToolbarGroup>
			</BlockControls>
			<div className = { `wp-block-webyx-fg-slide-header${bgkSectionHeader}` }>
				<span>{ slideTitle !== '' ? slideTitle : __( 'Slide' ) }</span>
				<span className = { 'wp-block-webyx-fg-slide-header-html-tag' }>{ slideTagName }</span>
			</div>
			<WebyxWrapperPanel attributes = { attributes } setAttributes = { setAttributes }/>
			<div className = { 'wp-block-webyx-fg-slide-innerblock-wrapper' }>
				<InnerBlocks allowedBlocks = { ALLOWED_BLOCKS } />
			</div>
		</div>
	)
}