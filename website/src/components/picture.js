import React from "react";

export default function Picture({ src, alt, desc, spacing, background }) {
  const styles = {
    padding: spacing ? spacing : 0,
    background: background ? background : "transparent",
  };
  return (
    <figure>
      <img style={styles} src={src} alt={alt} />
      <figcaption className="text-center">{desc}</figcaption>
    </figure>
  );
}
