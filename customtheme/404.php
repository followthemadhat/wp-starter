<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 */

get_header();
?>

<section class="section-404">
	<div class="container">
		<h1 class="h1"><?php esc_html_e( 'Page not found!', 'customtheme' ); ?></h1>
		<a href="<?php echo esc_url( home_url( '/' ) ); ?>">Back To Home</a>
	</div>
</section>

<?php
get_footer();
