<?php
/**
 * Template part for displaying results in search pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 */

?>

<div class="col-12 col-lg-4">
	<div class="post">
		<a href="<?php echo the_permalink(); ?>">
			<h3 class="post-title"><?php echo the_title(); ?></h3>
		</a>
		<div class="post-meta">
			<span class="post-date"><?php echo get_the_date(); ?></span>
		</div>
		<div class="post-image">
			<?php if (has_post_thumbnail()) : ?>
				<a href="<?php echo the_permalink(); ?>">
					<img src="<?php echo get_the_post_thumbnail_url(); ?>" alt="<?php the_title(); ?>">
				</a>
			<?php endif; ?>
		</div>
		<div class="post-content">
			<p><?php echo get_the_excerpt(); ?></p>
			<a href="<?php echo the_permalink(); ?>" class="read-more">Read more >></a>
		</div>
	</div>
</div>
