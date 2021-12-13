import React from "react";
import "./header.css";

export default function HomepageHeader() {
	return (
		<div className="homepage-header">
			<h1 className="homepage-title">FlatifyCSS</h1>
			<p className="homepage-subtitle">
				Modern flat design framework for the web — inspired by Duolingo design system.
			</p>
			<span ariaHidden={true} className="animated-logo"></span>
            <button className="button size-2x">Get Started</button>
		</div>
	);
}
