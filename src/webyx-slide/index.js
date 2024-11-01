import { __ } from '@wordpress/i18n';
import edit from './edit';
import save from './save';
import attr from './attributes';
import icons from '../icon/webyx-fg-icons';
export const name = 'webyx-fg/webyx-slide';
export const settings = {
	apiVersion : 2,
	title      : __( 'Webyx Slide' ),
	description: __( 'Slides are elements inside Sections that can contain any type of content.' ),
	category   : 'design',
	icon       : icons.slide,
	parent     : [ 'webyx-fg/webyx-section' ],
	attributes : {
		...attr.slide
	},
	edit,
	save,
};