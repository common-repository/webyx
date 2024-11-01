import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import webyxCSSNA                     from '../webyx-css/webyx-css-na.js';
import webyxCSSNB                     from '../webyx-css/webyx-css-nb.js';
import webyxCSSFS                     from '../webyx-css/webyx-css-fs.js';
import webyxCSSIMWH                   from '../webyx-css/webyx-css-imwh.js';
import webyxCSSSC                     from '../webyx-css/webyx-css-sc.js';
import webyxCSSScrlb                  from '../webyx-css/webyx-css-scrlb.js';
export default function save( { attributes } ) {
	const { av, avf } = attributes;
	const { vmsob, vmeob, avvd, fsb, fsp, fsboff, fsofft, fsoffl, fsoffr, nvvw } = attributes;
	const { mvnast, mvnatt, mvnac, mvnacl, mvnact, mvnaa, mvnaac, mvnaad, mvnaoc, mvnaot, mvnaor, mvnaob, mvnaol } = attributes;
	const { kn } = attributes;
	const { fsc, fsdt, fsbce, fsbc } = attributes;
	const { msiwc, msiwbce, msiwbc, iwhf } = attributes;
	const { hmsd, hmcd, vmsd, vmcd, hmsm, hmcm, vmsm, vmcm } = attributes;
	const { ils, ilst, ilsbc, ilssbc, ilscmt, ilscmtc, ilscbc, ilscbiurl } = attributes;
	const { ccss, ccssp }	= attributes;
	const { dv, dvp, dtv, dtvcp, dh, dhp, dhs, dth, dthcp, dbkgace, dbkgac, dtvoff, dtvoffdsk, dtvoffmob, dthoff, dthoffdsk, dthoffmob } = attributes;
	const { mvndbst, mvndc, mvndcl, mvndttc, mvndttcl, mvndttace, mvndttac } = attributes;
	const { scrlbd } = attributes;
	const wbxSet    = { av, avf, vmsob, vmeob, avvd, kn, fsb, fsp, nvvw, dv, dvp, dtv, dtvcp, dh, dhp, dhs, dth, dthcp, iwhf };
	const wbxSetStr = JSON.stringify( wbxSet );
	const wrpElAttr = { className: 'webyx-webyx' };
	const getSS = () => {
		if ( ils ) {
			switch( ilst ) {
				case 'default':
					return(
						<div className = { 'webyx-splash' } style = { { zIndex: 10000, backgroundColor: `rgba(${ilsbc.rgb.r},${ilsbc.rgb.g},${ilsbc.rgb.b},${ilsbc.rgb.a})` } }>
							<div className = { 'webyx-spinner' } style = { { backgroundColor: `rgba(${ilssbc.rgb.r},${ilssbc.rgb.g},${ilssbc.rgb.b},${ilssbc.rgb.a})` } }></div>
						</div>
					);
				case 'custom':
					return(
						<div className = { 'webyx-splash' } style = { { zIndex: 10000, color: `rgba(${ilscmtc.rgb.r},${ilscmtc.rgb.g},${ilscmtc.rgb.b},${ilscmtc.rgb.a})`, backgroundColor: `rgba(${ilscbc.rgb.r},${ilscbc.rgb.g},${ilscbc.rgb.b},${ilscbc.rgb.a})` } }>
							{ ilscbiurl && <div className = { 'webyx-custom-splash-bkg-img' } style = { { backgroundImage: `url(${ilscbiurl})` } }></div> }
							<div className = { 'webyx-custom-splash-txt webyx-animate-flicker' }>{ ilscmt }</div>
						</div>
					);
			}
		} else {
			return(
				<div className = { 'webyx-splash' } style = { { zIndex: 10000, backgroundColor: `rgba(255,255,255,1)` } }></div>
			);
		}
	}
	return (
		<div { ...useBlockProps.save( wrpElAttr ) }>
			{ getSS() }
			<div className = { 'webyx-webyx-wrp' }>
				<InnerBlocks.Content />
			</div>
			<script>{ `var wbySet=${wbxSetStr}` }</script>
			<style>{ webyxCSSSC( hmsd, hmcd, vmsd, vmcd, hmsm, hmcm, vmsm, vmcm ) }</style>
			{ ccss && <style>{ ccssp }</style> }
			{ av && <style>{ webyxCSSNA( mvnast, mvnatt, mvnac, mvnacl, mvnact, mvnaad, mvnaa, mvnaac, mvnaoc, mvnaot, mvnaor, mvnaob, mvnaol ) }</style> }
			{ ( dv || dh ) && <style>{ webyxCSSNB( mvndbst, mvndc, mvndcl, mvndttc, mvndttcl, mvndttace, mvndttac, dbkgace, dbkgac, dvp, dtvoff, dtvoffdsk, dtvoffmob, dhp, dthoff, dthoffdsk, dthoffmob ) }</style> }
			{ fsb    && <style>{ webyxCSSFS( fsc, fsdt, fsp, fsboff, fsofft, fsoffl, fsoffr, fsbce, fsbc ) }</style> }
			{ avvd   && <style>{ webyxCSSIMWH( msiwc, msiwbce, msiwbc ) }</style> }
			{ scrlbd && <style>{ webyxCSSScrlb() }</style> }
		</div>
	);
}