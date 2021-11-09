// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/palenight");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "Flatify CSS",
	tagline: "Modern Flat Design Framework",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	url: "https://amir2mi.github.io",
	baseUrl: "/flatifycss/",
	organizationName: "amir2mi", // Usually your GitHub org/user name.
	projectName: "flatifycss", // Usually your repo name.
	trailingSlash: false,

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl: "https://github.com/amir2mi/flatifycss/tree/master/website",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl: "https://github.com/amir2mi/flatifycss/tree/master/website/blog",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "Flatify CSS",
				logo: {
					alt: "Flatify CSS logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Documentation",
					},
					{ to: "/blog", label: "Blog", position: "left" },
					{
						href: "https://github.com/amir2mi/FlatifyCSS",
						label: "GitHub",
						position: "right",
					},
				],
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
