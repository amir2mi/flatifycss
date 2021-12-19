import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import Link from "@docusaurus/Link";
import "./header.css";

export default function HomepageHeader() {
	const { isDarkTheme } = useThemeContext();
	return (
		<div className="homepage-header">
			<h1 className="homepage-title">FlatifyCSS</h1>
			<p className="homepage-subtitle">
				Modern flat design framework for the web — inspired by Duolingo design system.
			</p>
			<span aria-hidden={true} className="animated-logo"></span>

			<Link
				to="docs/intro"
				className={`get-started-button button bordered size-2x${isDarkTheme ? " style-dark" : " style-light"}`}
			>
				Get Started
			</Link>
		</div>
	);
}
