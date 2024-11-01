import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save ( { attributes } ) {
	const { 
		slideTitle, 
		scrollable,
		bkgActive, 
		bkgColor, 
		imageBkgUrl, 
		imageBkgSize, 
		imageBkgPos, 
		imageBkgRpt, 
		imageBkgAttachment, 
		imageBkgOpacity,
		slideContPosActive, 
		slideContPos, 
		slideTagName, 
		slideWrapperCnt,
		slideWrapperCntCN 
	} = attributes,
	ElTag = slideTagName,
	wrpElAttr = { 
		'data-side-page': slideTitle, 
		className       : 'webyx-main-page webyx-side-page'
	}
	if ( scrollable ) {
		wrpElAttr[ 'data-scroll' ] = '';
		wrpElAttr.className += ' webyx-scrollbar webyx-ovw-scroll'
	}
	if ( bkgActive ) {
		if ( bkgColor.rgb ) {
			wrpElAttr.style = { ...{ backgroundColor: `rgba(${bkgColor.rgb.r},${bkgColor.rgb.g},${bkgColor.rgb.b},${bkgColor.rgb.a})` } };  
		}
		if ( imageBkgUrl ) {
			wrpElAttr.style = { ...{ 
				backgroundImage     : `url(${imageBkgUrl})`,
				backgroundSize      : imageBkgSize,
				backgroundPosition  : imageBkgPos,
				backgroundRepeat    : imageBkgRpt,
				backgroundAttachment: imageBkgAttachment,
				opacity             : imageBkgOpacity
			} };
		}
	}
	return (
		<ElTag { ...useBlockProps.save( wrpElAttr ) }>
			{
				slideContPosActive ?
					<div className = { 'webyx-table' } >
						<div className = { `webyx-table-cell-${slideContPos}` }>
							{
								slideWrapperCnt ?
									<div className = { `webyx-wrapper-slide-content ${slideWrapperCntCN}`.trim() }>
										<InnerBlocks.Content />
									</div>
								:
									<InnerBlocks.Content />
							}
						</div>
					</div>
				:
					slideWrapperCnt ?
						<div className = { `webyx-wrapper-slide-content ${slideWrapperCntCN}`.trim() }>
							<InnerBlocks.Content />
						</div>
					:
						<InnerBlocks.Content />
			}
		</ElTag>
	);
}