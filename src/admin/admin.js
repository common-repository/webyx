import './admin.scss';
import { Fragment, render, Component }                    from '@wordpress/element';
import { __ }                                             from '@wordpress/i18n';
import api                                                from '@wordpress/api';
import webyxIcons                                         from '../icon/webyx-fg-icons';
import { Button, PanelBody, ToggleControl, SnackbarList } from '@wordpress/components';
import { dispatch, useDispatch, useSelect }               from '@wordpress/data';
import { store as noticesStore }                          from '@wordpress/notices';
const Notices = () => {
  const notices = useSelect(
    ( select ) =>
      select( noticesStore )
        .getNotices()
        .filter( ( notice ) => notice.type === 'snackbar' ),
    []
  );
  const { removeNotice } = useDispatch( noticesStore );
  return (
    <SnackbarList
      className = { 'webyx-fg-edit-site-notices' }
      notices   = { notices }
      onRemove  = { removeNotice }/>
  );
};
class Opts extends Component {
  constructor () {
    super( ...arguments );
    this.state = {
      webyx_fg_hide_admin_top_bar: true,
      webyx_fg_menu              : true,
      isAPILoaded                : false,
    };
    this._handleOnClick = this._handleOnClick.bind( this );
  }
  _handleOnClick () {
    const {
      webyx_fg_hide_admin_top_bar,
      webyx_fg_menu
    } = this.state;
    const settings = new api.models.Settings( {
      [ 'webyx_fg_hide_admin_top_bar' ]: webyx_fg_hide_admin_top_bar ? 'true' : '',
      [ 'webyx_fg_menu'               ]: webyx_fg_menu               ? 'true' : '',
    } );
    settings.save();
    dispatch( 'core/notices' ).createNotice(
      'success',
      __( 'Settings Saved', 'webyx' ),
      {
        type: 'snackbar',
        isDismissible: true,
      }
    );
  }
  render () {
    const {
      webyx_fg_hide_admin_top_bar,
      webyx_fg_menu, 
      isAPILoaded,
    } = this.state;
    if ( ! isAPILoaded ) {
      return (
        <div className = { 'webyx-fg-spinner-front-page' }>
          <div className = { 'webyx-fg-logo-container' }>
            <div className = { 'webyx-fg-circ-front-page' }></div>
            <span className = { 'webyx-fg-logo-icon' }>{ webyxIcons.webyx }</span>
          </div>
          <div className = { 'webyx-fg-txt-loader' }>{ 'LOADING' }</div>
        </div>
      );
    }
    return (
      <Fragment>
        <div className = { 'webyx-fg-header' } >
          <div className = { 'webyx-fg-container' }>
            <div className = { 'webyx-fg-title' }>
              <span className = { 'webyx-fg-icon-webyx' }>{ webyxIcons.webyx }</span>
              <h1>{ __( 'Webyx For Gutenberg Plugin Settings', 'webyx' ) }</h1>
            </div>
          </div>
        </div>
        <div className = { 'webyx-fg-main' }>
          <PanelBody
            initialOpen = { true }
            title       = { __( 'Hide WP admin top bar', 'webyx' ) }
            icon        = { 'admin-plugins' }>
            <ToggleControl
              checked  = { webyx_fg_hide_admin_top_bar }
              help     = { __( 'Hide WP admin top bar in Webyx pages preview', 'webyx' ) }
              label    = { __( 'Hide WP admin top bar', 'webyx' ) }
              onChange = { ( webyx_fg_hide_admin_top_bar ) => this.setState( { webyx_fg_hide_admin_top_bar } ) }/>
          </PanelBody>
          <PanelBody
            initialOpen = { true }
            title       = { __( 'Webyx menu', 'webyx' ) }
            icon        = { 'admin-plugins' }>
            <ToggleControl
              checked  = { webyx_fg_menu }
              help     = { __( 'Enable Webyx menu "Display location" in Appearance/Menus/Menu structure/Menu settings', 'webyx' ) }
              label    = { __( 'Enable Webyx menu', 'webyx' ) }
              onChange = { ( webyx_fg_menu ) => this.setState( { webyx_fg_menu } ) }/>
          </PanelBody>
          <Button className = { 'webyx-fg-save-settings-btn' } isPrimary isLarge onClick = { this._handleOnClick }>
            { __( 'Save Settings', 'webyx' ) }
          </Button>
        </div>
        <div className = { 'webyx-fg-notices' } >
          <Notices/>
        </div>
      </Fragment>
    )
  }
  componentDidMount () {
    api.loadPromise.then( () => {
      this.settings = new api.models.Settings();
      const { isAPILoaded } = this.state;
      if ( isAPILoaded === false ) {
        this.settings.fetch().then( ( response ) => {
          this.setState( {
            webyx_fg_hide_admin_top_bar: Boolean( response[ 'webyx_fg_hide_admin_top_bar' ] ),
            webyx_fg_menu              : Boolean( response[ 'webyx_fg_menu' ] ),
            isAPILoaded                : true,
          } );
        } );
      }
    } );
  }
}
document.addEventListener( 'DOMContentLoaded', () => {
  const rootEl = document.getElementById( 'webyx-fg-settings' );
  if ( rootEl ) {
    render(
      <Opts/>,
      rootEl
    );
  }
});