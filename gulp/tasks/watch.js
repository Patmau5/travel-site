var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify: false, // Quita alerta de archivo guardado.
		server: {
			baseDir: "app"
		}
	});
	// auto-refresh de index.html
	watch('./app/index.html', function() {
		browserSync.reload();
	}); // cuando se actualiza cualquier archivo css, ejecuta cssInject
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptsRefresh');
	})
})

// auto-refresh de CSS
gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./app/temp/styles/styles.css')
	.pipe(browserSync.stream())
})

gulp.task('scriptsRefresh', ['scripts'], function() {
	browserSync.reload();
});