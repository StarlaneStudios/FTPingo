const {series, parallel, src, dest} = require('gulp');
const alias = require('gulp-ts-alias');
const ts = require('gulp-typescript');
const sm = require('gulp-sourcemaps');
const rimraf = require('rimraf');
const path = require('path');

const tsProject = ts.createProject('tsconfig.json');
const distDir = path.join(__dirname, 'dist');

// Cleaning the distribution files
function clean(cb) {
	rimraf(distDir, cb);
}

// Typescript source files
function typescript() {
	return tsProject.src()
		.pipe(alias(tsProject.config))
		.pipe(sm.init())
		.pipe(tsProject())
		.pipe(sm.write())
		.pipe(dest(distDir));
}

exports.default = series(
	clean,
	typescript
);