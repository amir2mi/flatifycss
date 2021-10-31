import React from "react";

export default function ColorIndicator({ color, title, inline, style, className }) {
	return (
		<div className={`docus-color-indicator flex-center-y ${inline ? "inline" : ""}`}>
			<div
				className={`docus-color${className ? " " + className : ""}`}
				style={{ backgroundColor: color, ...style }}
			/>
			<code>{title}</code>
		</div>
	);
}
