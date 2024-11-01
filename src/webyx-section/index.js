import { __ } from '@wordpress/i18n';
import edit   from './edit';
import save   from './save';
import attr   from './attributes';
import icons  from '../icon/webyx-fg-icons';
export const name     = 'webyx-fg/webyx-section';
export const settings = {
	apiVersion : 2,
	title      : __( 'Webyx Section' ),
	description: __( 'Sections are containers that can contain only Slides.' ),
	category   : 'design',
	icon       : icons.section,
	parent     : [ 'webyx-fg/webyx-wrapper' ],
	attributes: {
		...attr.section
	},
	edit,
	save,
};
