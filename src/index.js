import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import './editor.scss';
import * as webyxWrapper from './webyx-wrapper';
import * as webyxSection from './webyx-section';
import * as webyxSlide   from './webyx-slide';
const blocks = [
	webyxWrapper,
	webyxSection,
	webyxSlide
];
function registerBlock( block ) {
	const { name, settings } = block;
	registerBlockType( name, settings );
}
blocks.forEach( registerBlock );