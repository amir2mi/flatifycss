import React from "react";
import svg from "../svg";
import "./contribute.css";

export default function HomepageContribute() {
	return (
		<div className="homepage-contribute">
			<div className="contribute-texts flex-column-center">
				<h2 className="homepage-h2 text-center">Keep it breathing</h2>
				<p className="homepage-para size-2x text-center">We need your help to make it better than what it is!</p>
				<a href="https://github.com/amir2mi/flatifycss" target="_blank" className="button size-2x style-accent featured-button">
					I want to help
				</a>
			</div>
			<div className="contribute-icons">
				<div className="contributor-svg">{svg.contributor}</div>
				<div className="chain-svg">{svg.chain}</div>
			</div>
		</div>
	);
}
