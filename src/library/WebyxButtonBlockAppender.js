import { __ }       from '@wordpress/i18n';
import { Inserter } from '@wordpress/block-editor';
import { Button }   from '@wordpress/components';
export default function WebyxButtonBlockAppender ( { rootClientId, slugComp } ) {
	return (
		<Inserter
			rootClientId = { rootClientId }
			renderToggle = { ( { onToggle, disabled } ) => (
				<Button
					className = { `wp-block-webyx-fg-btn-add-${slugComp.toLowerCase()}` }
					onClick   = { onToggle }
					disabled  = { disabled }
					icon      = { 'plus' }
					isPrimary >
					<span className = { `wp-block-webyx-fg-btn-add-${slugComp.toLowerCase()}-text` }>
						{ `${__( 'Add' )} ${slugComp}` }
					</span>
				</Button>
			) }
			isAppender
		/>
	);
}