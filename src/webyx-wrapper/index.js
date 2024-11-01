import edit  from './edit';
import save  from './save';
import attr  from './attributes';
import icons from '../icon/webyx-fg-icons';
import { __ } from '@wordpress/i18n';
export const name     = 'webyx-fg/webyx-wrapper';
export const settings = {
	apiVersion : 2,
	title      : __( 'Webyx for Gutenberg' ),
	description: __( 'Create cool fullscreen scrolling websites.' ),
	category   : 'design',
	icon       : icons.webyx,
	attributes : {
		...attr.templateDesign,
		...attr.slideDesign,
		...attr.slideEasing,
		...attr.navigationArrows,
		...attr.navigationBullets,
		...attr.fullScreeMode,
		...attr.mobileDevice,
		...attr.loaderSlide,
		...attr.customCss,
		...attr.scrollbar
	},
	supports: {
		multiple: false
	},
	example: {},
	edit,
	save,
};
