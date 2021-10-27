// Initial modules
const distFileName = "flatify";
const { src, dest, watch, series, parallel } = require("gulp");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const noop = require("gulp-noop");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");

// File path variables
const files = {
	scssMain: "scss/**/*.scss",
	jsMain: "js/**/*js",
};

// Task creators
function scssTask(file, fileName, minify = true, prefixed = true) {
	let postcssPlugins = [];
	if (minify) {
		postcssPlugins.push(cssnano());
	}
	if (prefixed) {
		postcssPlugins.push(autoprefixer());
	}
	return src(file)
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(postcss(postcssPlugins))
		.pipe(
			rename((file) => {
				if (fileName) {
					file.basename = fileName;
				}
				if (!prefixed) {
					file.basename += "-noprefix";
				}
				if (minify) {
					file.basename += "-min";
				}
			})
		)
		.pipe(sourcemaps.write("../maps"))
		.pipe(dest("dist/css"));
}

function jsTask(file, fileName, minify = true) {
	return src(file)
		.pipe(sourcemaps.init())
		.pipe(concat(fileName))
		.pipe(minify ? uglify() : noop())
		.pipe(
			rename((file) => {
				if (minify) {
					file.basename += "-min";
				}
				file.extname = ".js";
			})
		)
		.pipe(sourcemaps.write("../maps"))
		.pipe(dest("dist/js"));
}

// Watch task
function watchTask(filesArr, tasksArr) {
	if (filesArr && tasksArr) {
		watch(filesArr, parallel(...tasksArr));
	}
}

// Tasks
const mainScssTask__noprefix = () => scssTask(files.scssMain, distFileName, false, false); // dev
const mainScssTask__prefixed = () => scssTask(files.scssMain, distFileName, false, true);
const mainScssTask__minified__noprefix = () => scssTask(files.scssMain, distFileName, true, false);
const mainScssTask__minified__prefixed = () => scssTask(files.scssMain, distFileName, true, true); // production

const mainJsTask = () => jsTask(files.jsMain, distFileName, false);
const mainJsTask__minified = () => jsTask(files.jsMain, distFileName, true);

// Watch
const defaultWatchTasks = () => watchTask([files.scssMain, files.jsMain], [mainScssTask__noprefix, mainJsTask]);

// Default
exports.default = series(parallel(mainScssTask__noprefix, mainJsTask), defaultWatchTasks);
exports.release = series(
	parallel(
		// css
		mainScssTask__noprefix,
		mainScssTask__prefixed,
		mainScssTask__minified__noprefix,
		mainScssTask__minified__prefixed,
		// js
		mainJsTask,
		mainJsTask__minified
	)
);
