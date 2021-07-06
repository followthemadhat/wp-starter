<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<aside id="aside" class="sibedar widget-area">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</aside>