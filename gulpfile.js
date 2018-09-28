//プラグイン
var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant'),
	changed  = require('gulp-changed'),
	watch = require('gulp-watch');

// 画像の圧縮
gulp.task('image-min', function(){
	gulp.src('./src/*') // src/imagesにある画像を読み込み
	.pipe(changed('./dist/'))
	.pipe(imagemin([pngquant({quality: '60-80', speed: 1})])) // pngの圧縮サイズを指定
	.pipe(imagemin()) // おまじないでもう一回実行
	.pipe(gulp.dest('./dist/')); // 吐き出し先を指定
});

// watch 監視
gulp.task('watch', function () {
	return watch(['./src/*'], () => {
		return gulp.start(['image-min']);
	});
});