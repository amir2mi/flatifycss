import React from "react";

export default function ColorIndicator({ color, title, inline }) {
	return (
		<div className={`docus-color-indicator flex-center-y ${inline ? 'inline':''}`}>
			<div className="docus-color" style={{ backgroundColor: color }} />
			<code>{title}</code>
		</div>
	);
}
