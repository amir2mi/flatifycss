// Initial modules
const distFileName = "flatify";
const bumpVersionFiles = ["./package.json"];

const { src, dest, watch, series, parallel, task } = require("gulp");
const argv = require("yargs").argv;
const autoprefixer = require("autoprefixer");
const bump = require("gulp-bump");
const cssnano = require("cssnano");
const concat = require("gulp-concat");
const fs = require("fs");
const noop = require("gulp-noop");
const postcss = require("gulp-postcss");
const rename = require("gulp-rename");
const sass = require("gulp-sass")(require("sass"));
const semver = require("semver");
const sourcemaps = require("gulp-sourcemaps");
const uglify = require("gulp-uglify");
const webpack = require("webpack-stream");

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

function jsTask(file, fileName, minify = true, production = true, isLtr = true) {
	return src(file)
		.pipe(
			webpack({
				mode: production ? "production" : "development",
			})
		)
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

// bump version
function bumper(files, type = "patch", value) {
	// command gulp release --ver 1.0.0
	// OR
	// command gulp release --type major | minor | patch | prerelease
	const pkg = JSON.parse(fs.readFileSync(files[0], "utf8"));
	const newVer = semver.inc(pkg.version, argv.type || type);

	return src(files)
		.pipe(bump({ version: value || argv.ver || newVer }))
		.pipe(dest("./"));
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

const mainJsTask_dev = () => jsTask(files.jsMain, distFileName, false, false);
const mainJsTask_production = () => jsTask(files.jsMain, distFileName, false, true);
const mainJsTask__minified_production = () => jsTask(files.jsMain, distFileName, true, true);

const bumpVersionDefault = () => bumper(bumpVersionFiles, "prerelease");
const bumpVersionRelease = () => bumper(bumpVersionFiles, "patch");

// Watch
const defaultWatchTasks = () => watchTask([files.scssMain, files.jsMain], [mainScssTask__noprefix, mainJsTask_dev]);
exports.watch = series(parallel(mainScssTask__noprefix, mainJsTask_dev), defaultWatchTasks);

// Default
exports.default = series(
	parallel(
		bumpVersionDefault,
		// css
		mainScssTask__noprefix,
		mainScssTask__prefixed,
		mainScssTask__minified__noprefix,
		mainScssTask__minified__prefixed,
		// js
		mainJsTask_production,
		mainJsTask__minified_production
	)
);

// Release
exports.release = series(
	parallel(
		bumpVersionRelease,
		// css
		mainScssTask__noprefix,
		mainScssTask__prefixed,
		mainScssTask__minified__noprefix,
		mainScssTask__minified__prefixed,
		// js
		mainJsTask_production,
		mainJsTask__minified_production
	)
);

