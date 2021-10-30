import React from "react";

export default function PreviewBox({ children, ...props }) {
	return <iframe width="100%" className="docus-preview-box" srcDoc={children} {...props}></iframe>;
}
