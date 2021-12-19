import React from "react";
import "./quick-install.css";
import svg from "../svg";

export default function HomepageQuickInstall() {
	return (
		<div className="homepage-quick-install homepage-container">
			<h2 className="homepage-h2">Quick start</h2>
			<p className="homepage-para size-2x">
				Start a new project or add FlatifyCSS in less than a minute.
			</p>

			<div className="flex-center">
				<div className="quick-start-img">{svg.quickStart}</div>
				<div className="quick-install-item">
					<h3 className="homepage-h3">npm</h3>
					<p className="homepage-para">Install the package with one command.</p>
					<div className="quick-install-codes">
						<pre>npm install flatifycss</pre>
					</div>
					<h3 className="homepage-h3">CDN</h3>
					<p className="homepage-para">No worry about files, jsDelivr takes it over.</p>
					<div className="quick-install-codes">
						<pre>
							{`<link href="https://cdn.jsdelivr.net/npm/flatifycss/dist/css/flatify.min.css" rel="stylesheet" crossorigin="anonymous"/>`}
						</pre>
						<pre>
							{`<script src="https://unpkg.com/@popperjs/core@2" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/flatifycss/dist/js/flatify.min.js" crossorigin="anonymous"></script>`}
						</pre>
					</div>
				</div>
			</div>
		</div>
	);
}
