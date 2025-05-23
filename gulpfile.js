const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');

function scripts() {
    return gulp.src('./src/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}

function styles() {
    return gulp.src('./src/styles/*.scss') // ARQUIVO FONTE
        .pipe(sass({ outputStyle: 'compressed' })) // PARA O ARQUIVO JÁ VIR COMPRIMIDO
        .pipe(gulp.dest('./dist/css')); // ARQUIVO DE DESTINO
}

function images() {
    return gulp.src('./src/images/**/*') // ARQUIVOS FONTE
        .pipe(imagemin()) // PARA MINIFICAR AS IMAGENS
        .pipe(gulp.dest('./dist/images')); // PASTA DE DESTINO
}

exports.default = gulp.parallel(styles, images, scripts); // PARA EXECUTAR AS FUNÇÕES PARALELAMENTE

exports.watch = function() { // EXECUTAR A FUNÇÃO DE OBSERVADOR
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) // 'ARQUIVO' PARA OBSERVAR E A (FUNÇÃO) PARA EXECUTAR
    gulp.watch('./src/styles/*.js', gulp.parallel(scripts))
}