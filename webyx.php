<?php
/**
 * Plugin Name:       Webyx
 * Description:       Create amazing fullpage fullscreen scrolling websites with our fast, configurable and easy block for Gutenberg.
 * Requires at least: 5.7
 * Requires PHP:      7.2
 * Version:           1.6.7.3
 * Author:            Webineer Team
 * Author URI:        https://webyx.it/
 * License:           GPL-3.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:       webyx
 * @package           webyx
 */
  if ( ! defined( 'ABSPATH' ) ) {
    exit;
  }
  define( 'WEBYX_FG__FILE__', __FILE__ );
  define( 'WEBYX_FG_PATH', plugin_dir_path( WEBYX_FG__FILE__ ) );
  define( 'WEBYX_FG_WP_MIN_VERSION', '5.7' );
  define( 'WEBYX_FG_PHP_MIN_VERSION', '7.2' );
  define( 'WEBYX_FG_ASSET_MIN', TRUE );
  define( 'WEBYX_FG_REVIEW_THRESHOLD_DATE', '-7 days' );
  if ( ! version_compare( PHP_VERSION, WEBYX_FG_PHP_MIN_VERSION, '>=' ) ) {
		function webyx_fg_fail_php_version () {
			$message      = sprintf( esc_html__( 'Webyx for Gutenberg plugin requires PHP version %s+, plugin is currently NOT RUNNING.' ), WEBYX_FG_PHP_MIN_VERSION );
			$html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
			echo wp_kses_post( $html_message );
		}
		add_action( 'admin_notices', 'webyx_fg_fail_php_version' );
	} else if ( ! version_compare( get_bloginfo( 'version' ), WEBYX_FG_WP_MIN_VERSION, '>=' ) ) {
		function webyx_fg_fail_wp_version () {
			$message      = sprintf( esc_html__( 'Webyx for Gutenberg plugin requires WordPress version %s+. Because you are using an earlier version, the plugin is currently NOT RUNNING.' ), WEBYX_FG_WP_MIN_VERSION );
			$html_message = sprintf( '<div class="error">%s</div>', wpautop( $message ) );
			echo wp_kses_post( $html_message );
		}
		add_action( 'admin_notices', 'webyx_fg_fail_wp_version' );
	} else {
    if ( ! class_exists( 'Webyx_FG' ) ) {
      class Webyx_FG {
        private static $instance;
        protected $templates;
        public function __construct () {
          $this->templates = array( 
            'templates/page-webyx.php' => 'webyx'
          );
          if ( function_exists( 'register_block_type' ) ) {
            $this->webyx_fg_register_blocks();
            $this->webyx_fg_init_webyx_menu();
            $this->webyx_fg_remove_top_bar();
            $this->webyx_fg_init_page_template();
            $this->webyx_fg_handle_review();
            $this->webyx_fg_init_setting_admin_page();
          }
        }
        public static function webyx_fg_get_instance () {
          if ( null == self::$instance ) {
            self::$instance = new self();
          }
          return self::$instance;
        }
        public function webyx_fg_register_blocks () {
          add_action( 
            'init', 
            array( 
              $this, 
              'webyx_fg_register_block' 
            ) 
          );
          add_action( 
            'init', 
            array( 
              $this, 
              'webyx_fg_register_block_assets'
            ) 
          );
        }
        public function webyx_fg_init_webyx_menu () {
          add_action( 
            'after_setup_theme', 
            array( 
              $this, 
              'webyx_fg_register_menu' 
            ) 
          );
          add_filter( 
            'get_custom_logo', 
            array( 
              $this, 
              'webyx_fg_get_custom_logo' 
            )
          );
        }
        public function webyx_fg_remove_top_bar () {
          add_filter( 
            'show_admin_bar', 
            array( 
              $this, 
              'webyx_fg_remove_top_admin_bar_in_preview_page' 
            ) 
          );
        }
        public function webyx_fg_register_block_assets () {
          $asset_file = include( plugin_dir_path( __FILE__ ) . 'build/index.asset.php');
          wp_register_script(
            'webyx-fg-editor',
            plugins_url( 
              'build/index.js',
              __FILE__ 
            ),
            $asset_file[ 'dependencies' ],
            $asset_file[ 'version' ]
          );
          wp_register_style(
            'webyx-fg-editor',
            plugins_url( 
              'build/index.css', 
              __FILE__ 
            ),
            $asset_file[ 'version' ]
          );
        }
        public function webyx_fg_register_block () {
          register_block_type( 
            'webyx-fg/webyx-wrapper', 
            array(
              'api_version'   => 2,
              'editor_script' => 'webyx-fg-editor',
              'editor_style'  => 'webyx-fg-editor',
            ) 
          );
          register_block_type( 
            'webyx-fg/webyx-section', 
            array(
              'api_version'   => 2,
              'editor_script' => 'webyx-fg-editor',
              'editor_style'  => 'webyx-fg-editor'
            ) 
          );
          register_block_type( 
            'webyx-fg/webyx-slide', 
              array(
              'api_version'   => 2,
              'editor_script' => 'webyx-fg-editor',
              'editor_style'  => 'webyx-fg-editor'
            ) 
          );
        }
        public function webyx_fg_remove_top_admin_bar_in_preview_page ( $show_admin_bar ) {
          $page_id = get_queried_object_id();
          if ( 'page' === get_post_type( $page_id ) && 'templates/page-webyx.php' === get_page_template_slug( $page_id ) ) {
            return ! get_option( 'webyx_fg_hide_admin_top_bar', 'true' );
          } else {
            return $show_admin_bar;
          }
        }
        public function webyx_fg_enqueue_assets_core () {
          wp_enqueue_style( 
            'webyx-core-free', 
            plugins_url( 
              WEBYX_FG_ASSET_MIN ? '/assets/css/webyx.min.css' : '/assets/css/webyx.css',
              __FILE__ 
            ),
            array(),
            filemtime( 
              plugin_dir_path( __FILE__ ) . ( WEBYX_FG_ASSET_MIN ? '/assets/css/webyx.min.css' : '/assets/css/webyx.css' ) 
            )
          );
          wp_enqueue_style( 
            'webyx-menu-free', 
            plugins_url( 
              WEBYX_FG_ASSET_MIN ? '/assets/css/webyx-menu.min.css' : '/assets/css/webyx-menu.css',
              __FILE__ 
            ),
            array(),
            filemtime( 
              plugin_dir_path( __FILE__ ) . ( WEBYX_FG_ASSET_MIN ? '/assets/css/webyx-menu.min.css' : '/assets/css/webyx-menu.css' ) 
            )
          );
          wp_enqueue_script( 
            'webyx-core-free',
            plugins_url( 
              WEBYX_FG_ASSET_MIN ? '/assets/js/webyx.min.js' : '/assets/js/webyx.js', 
              __FILE__ 
            ),
            array(),
            filemtime( 
              plugin_dir_path( __FILE__ ) . ( WEBYX_FG_ASSET_MIN ? '/assets/js/webyx.min.js' : '/assets/js/webyx.js' ) 
            ),
            TRUE
          );
          wp_enqueue_script( 
            'webyx-menu-free', 
            plugins_url( 
              WEBYX_FG_ASSET_MIN ? 'assets/js/webyx-menu.min.js' : 'assets/js/webyx-menu.js', 
              __FILE__ 
            ),
            array(),
            filemtime( 
              plugin_dir_path( __FILE__ ) . ( WEBYX_FG_ASSET_MIN ? 'assets/js/webyx-menu.min.js' : 'assets/js/webyx-menu.js' ) 
            ),
            TRUE
          );
        }
        public function webyx_fg_init_page_template () {
          add_filter(
            'theme_page_templates', 
            array( 
              $this, 
              'webyx_fg_add_new_template' 
            )
          );
          add_filter(
            'wp_insert_post_data', 
            array( 
              $this, 
              'webyx_fg_register_project_templates' 
            ) 
          );
          add_filter(
            'template_include', 
            array( 
              $this, 
              'webyx_fg_view_project_template'
            ), 
            12
          );
          add_filter( 
            'wp_theme_json_data_default', 
            array( 
              $this, 
              'webyx_fg_wp_theme_json_data_defaults' 
            )
          );
        }
        public function webyx_fg_wp_theme_json_data_defaults ( $theme_json ) {
          if ( $theme_json && has_block( 'webyx-fg/webyx-wrapper' ) ) {
            add_action( 
              'wp_enqueue_scripts', 
              array( 
                $this, 
                'webyx_fg_enqueue_assets_core' 
              )
            );
          }
          return $theme_json;
        }
        public function webyx_fg_handle_review () {
          add_action( 
            'admin_init',
            array(
              $this,
              'webyx_fg_check_installation_time' 
            ) 
          );
          add_action( 
            'admin_init',
            array(
              $this, 
              'webyx_fg_spare_me'
            ), 5 
          );
          add_action( 
            'admin_enqueue_scripts',
            array(
              $this,
              'webyx_fg_admin_css' 
            )
          );
          register_activation_hook( 
            __FILE__, 
            array(
              $this,
              'webyx_fg_activation_time'
            ) 
          );
        }
        public function webyx_fg_add_new_template ( $posts_templates ) {
          $posts_templates = array_merge( $posts_templates, $this->templates );
          return $posts_templates;
        }
        public function webyx_fg_register_project_templates ( $atts ) {
          $cache_key = 'page_templates-' . md5( get_theme_root() . '/' . get_stylesheet() );
          $templates = wp_get_theme()->get_page_templates();
          if ( empty( $templates ) ) {
            $templates = array();
          } 
          wp_cache_delete( $cache_key , 'themes');
          $templates = array_merge( $templates, $this->templates );
          wp_cache_add( $cache_key, $templates, 'themes', 1800 );
          return $atts;
        }
        public function webyx_fg_view_project_template ( $template ) {
          global $post;
          $webyx_theme         = true;
          $template_webyx_page = WEBYX_FG_PATH . 'templates\page-webyx.php';
          if ( ! $post ) {
            if ( $webyx_theme ) {
              return $template_webyx_page;
            }
            $this->webyx_fg_enqueue_assets_core();
            return $template;
          }
          $blocks = parse_blocks( $post->post_content );
          if ( count( $blocks ) && 'webyx-fg/webyx-wrapper' === $blocks[ 0 ][ 'blockName' ] ) {
            $template_custom_redirect = isset( $blocks[ 0 ][ 'attrs' ][ 'ctt' ]   ) ? $blocks[ 0 ][ 'attrs' ][ 'ctt' ]   : false;
            $template_custom_fn       = isset( $blocks[ 0 ][ 'attrs' ][ 'cttfn' ] ) ? $blocks[ 0 ][ 'attrs' ][ 'cttfn' ] : '';
            if ( $template_custom_redirect && $template_custom_fn ) {
              $file = get_stylesheet_directory() . '/' . $template_custom_fn;
              if ( file_exists( $file ) ) {
                $this->webyx_fg_enqueue_assets_core();
                return $file;
              }
            }
          }
          $_wp_page_template = get_post_meta( $post->ID, '_wp_page_template', true );
          if ( $_wp_page_template ) {
            $file = WEBYX_FG_PATH . $_wp_page_template;
            if ( file_exists( $file ) ) {
              $this->webyx_fg_enqueue_assets_core();
              return $file;
            } 
          }
          return $template;
        }
        public function webyx_fg_register_menu () {
          remove_filter( 'walker_nav_menu_start_el', 'twenty_twenty_one_add_sub_menu_toggle', 10, 4 );
          $webyx_fg_menu = get_option( 'webyx_fg_menu', 'true' );
          if ( $webyx_fg_menu ) {
            register_nav_menu(
              'webyx-menu', __( 'Webyx Menu', get_template_directory() . '/languages' )
            );
          }
        }
        public function webyx_fg_get_custom_logo ( $html ) {
          $custom_logo_id = get_theme_mod( 'custom_logo' );
          $image = wp_get_attachment_image_src( $custom_logo_id , 'full' ); 
          if ( $image && has_block( 'webyx-fg/webyx-wrapper' ) ) {
            $html = sprintf( 
              '<div class="webyx-logo-wrapper"><a href="%1$s" class="webyx-logo-img-wrapper" rel="home" itemprop="url">%2$s</a></div>',
              esc_url( home_url( '/' ) ),
              wp_get_attachment_image( 
                $custom_logo_id, 
                'full', 
                false, 
                array(
                  'alt' => 'logo',
                  'class' => 'webyx-logo-img'
                )   
              )
            );
          }
          return $html;	
        }
        public function webyx_fg_activation_time () {
          $webyx_fg_activation_time = strtotime( 'now' );
          add_option( 'webyx_fg_activation_time', $webyx_fg_activation_time );
          return $webyx_fg_activation_time;
        }
        public function webyx_fg_check_installation_time () {   
          $webyx_fg_activation_time       = get_option( 'webyx_fg_activation_time', $this->webyx_fg_activation_time() );
          $webyx_fg_spare_me              = get_option( 'webyx_fg_spare_me' );
          $webyx_fg_review_threshold_date = strtotime( WEBYX_FG_REVIEW_THRESHOLD_DATE );
          if ( '1' !== $webyx_fg_spare_me && ( $webyx_fg_review_threshold_date >= $webyx_fg_activation_time ) ) {
            add_action( 
              'admin_notices',
              array(
                $this,
                'webyx_fg_display_admin_notice' 
              ) 
            );
          }
        }
        public function webyx_fg_display_admin_notice () {
          global $pagenow;
          if ( 'index.php' === $pagenow ){
            $dont_disturb = esc_url( get_admin_url() . '?spare_me=1' );
            $plugin_info  = get_plugin_data( __FILE__ , true, true );       
            $reviewurl    = esc_url( 'https://wordpress.org/support/plugin/'. sanitize_title( $plugin_info[ 'Name' ] ) . '/reviews/' );
            printf(
              __( '<div class="webyx-fg-review webyx-fg-wrp">
                    <p>You have been using <b>%s</b> for a while. We hope you liked it! Please give us a quick rating, it works as a boost for us to keep working on the plugin!</p>
                    <div class="webyx-fg-review-btn">
                      <a href="%s" class="button button-primary webyx-fg-rate-now" target="_blank">Rate Now!</a>
                      <a href="%s" class="webyx-fg-review-done">Already Done!</a>
                    </div>
                  </div>', $plugin_info[ 'TextDomain' ] ), 
              $plugin_info[ 'Name' ], 
              $reviewurl, 
              $dont_disturb 
            );
          }
        }
        public function webyx_fg_spare_me () {    
          if ( isset( $_GET[ 'spare_me' ] ) && ! empty( $_GET[ 'spare_me' ] ) ) {
            $spare_me = $_GET[ 'spare_me' ];
            if ( '1' === $spare_me ) {
              update_option( 'webyx_fg_spare_me' , 1 );
            }
          }
        }
        public function webyx_fg_admin_css () {
          global $pagenow;
          if( 'index.php' === $pagenow ) {
            wp_enqueue_style( 
              'webyx-fg-admin', 
              plugins_url( 
                WEBYX_FG_ASSET_MIN ? 'assets/css/webyx-fg-admin.min.css' : 'assets/css/webyx-fg-admin.css', 
                __FILE__ 
              ),
              array(),
              filemtime( 
                plugin_dir_path( __FILE__ ) . ( WEBYX_FG_ASSET_MIN ? 'assets/css/webyx-fg-admin.min.css' : 'assets/css/webyx-fg-admin.css' ) 
              )
            );
          }
        }
        public function webyx_fg_init_setting_admin_page () {
          add_action( 
            'init',
            array( 
              $this, 
              'webyx_fg_register_settings_admin_page' 
            ), 
            10 
          );
          add_action( 
            'admin_menu',
            array( 
              $this, 
              'webyx_fg_add_setting_admin_page' 
            ), 
            10 
          );
          add_action( 
            'admin_enqueue_scripts', 
            array(
              $this,
              'webyx_fg_enqueue_scripts_settings_admin_page'
            ),
            10
          );
          add_action( 
            'plugin_action_links_' . plugin_basename( __FILE__ ),
            array(
              $this,
              'webyx_fg_add_settings_link' 
            ),
            10 
          );
          add_filter( 
            'plugin_row_meta', 
            array(
              $this,
              'webyx_fg_append_support_and_faq_links' 
            ),
            10,
            4 
          );
        }
        public function webyx_fg_register_settings_admin_page () {
          register_setting(
            'webyx_fg_plugin_settings',
            'webyx_fg_hide_admin_top_bar',
            array(
              'default'      => 'true',
              'show_in_rest' => TRUE,
              'type'         => 'string',
            )
          );
          register_setting(
            'webyx_fg_plugin_settings',
            'webyx_fg_menu',
            array(
              'default'      => 'true',
              'show_in_rest' => TRUE,
              'type'         => 'string',
            )
          );
        }
        public function webyx_fg_add_setting_admin_page () {
          add_options_page(
            __( 'Webyx FG Settings', 'webyx' ),
            __( 'Webyx FG Settings', 'webyx' ),
            'manage_options',
            'webyx_fg_plugin_settings',
            array(
              $this,
              'webyx_fg_print_setting_admin_page'
            )
          );
        }
        public function webyx_fg_print_setting_admin_page () {
          echo '<div id="webyx-fg-settings"></div>';
        }
        public function webyx_fg_enqueue_scripts_settings_admin_page () {
          $dir = __DIR__;
          $script_asset_path = "$dir/build/admin.asset.php";
          if ( ! file_exists( $script_asset_path ) ) {
            throw new Error(
              'You need to run `npm start` or `npm run build` for the "webyx-fg-plugin" block first.'
            );
          }
          $admin_js     = 'build/admin.js';
          $script_asset = require( $script_asset_path );
          wp_enqueue_script(
            'webyx-fg-settings-admin-editor',
            plugins_url( $admin_js, __FILE__ ),
            $script_asset[ 'dependencies' ],
            $script_asset[ 'version' ]
          );
          $admin_css = 'build/admin.css';
          wp_enqueue_style(
            'webyx-fg-settings-admin-style',
            plugins_url( $admin_css, __FILE__ ),
            array( 'wp-components' ),
            filemtime( "$dir/$admin_css" )
          );
        }
        public function webyx_fg_append_support_and_faq_links ( $links_array, $plugin_file_name, $plugin_data, $status ) {
          if ( strpos( $plugin_file_name, basename(__FILE__) ) ) {
            $new_links = array(
              'Docs' => '<a href="https://webyx.it/" target="_blank">' . esc_html__( 'Docs', 'webyx' ) . '</a>',
              'FAQs' => '<a href="https://webyx.it/#faq" target="_blank">' . esc_html__( 'FAQs', 'webyx' ) . '</a>',
              'Video Tutorial' => '<a class="webyx-fg-go-pro" href="https://www.youtube.com/@webineerteam1909" target="_blank">' . esc_html__( 'Video Tutorial', 'webyx' ) . '</a>'
            );
            $links_array = array_merge( $links_array, $new_links );
          }
          return $links_array;
        }
        public function webyx_fg_add_settings_link ( $links ) {
          $new_links = array(
            'Settings' => '<a href="options-general.php?page=webyx_fg_plugin_settings">' . esc_html__( 'Settings', 'webyx' ) . '</a>',
            'Go to PRO' => '<a class="webyx-fg-go-pro" href="https://webineer.gumroad.com/l/webyx-for-gutenberg-pro" target="_blank">' . esc_html__( 'Go to PRO', 'webyx' ) . '</a>',
          );
          $links = array_merge( $links, $new_links );
          return $links;
        }
      }
      Webyx_FG::webyx_fg_get_instance();
    }
  }