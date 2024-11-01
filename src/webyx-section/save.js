import { __ }                         from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save( { attributes } ) {
	const { sectionTitle, innerCount, continuousHorizontal, sectionTagName } = attributes,
	ElTag = sectionTagName,
	wrpElAttr = { 
		'data-stripe': sectionTitle, 
		className    : 'webyx-stripe' 
	};
	if ( continuousHorizontal ) {
		wrpElAttr[ 'data-loop' ] = '';
	}
	return (
		<ElTag { ...useBlockProps.save( wrpElAttr ) }>
			{
				innerCount ? 
					<InnerBlocks.Content /> 
					: 
					<div className = { 'webyx-side-page' } data-side-page = { 'slide-1' }>
						<div className="webyx-box">
							<div className="webyx-box-message">
								<div className="webyx-box-message-alert-icon">
									<div className="webyx-alert-symbol">{ '!' }</div>
								</div>
								<div className="webyx-box-message-text">{ __( 'You must at least add a Slide in this Section.' ) }</div>
							</div>
						</div>
					</div>
			}
		</ElTag>
	);
}
