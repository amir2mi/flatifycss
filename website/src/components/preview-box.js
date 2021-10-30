import React from "react";

export default function PreviewBox({ children, ...props }) {
	return <iframe width="100%" class="docus-preview-box" srcdoc={children} {...props}></iframe>;
}
