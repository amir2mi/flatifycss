import React from "react";
import "./features.css";

export default function HomepageFeatures({ items, isSmall }) {
  return (
    <div className={`homepage-features flex-column-center${isSmall ? "horizontal-features" : "vertical-features"}`}>
      {items.map((item, i) => (
        <div
          style={item.style}
          key={i}
          className={`feature-item flex-center${item.className ? " " + item.className : ""}`}
        >
          <div className="feature-media">
            {item.img && <img src={item.img} alt={item.title} />}
            {item.svg && item.svg}
          </div>
          <div className="feature-texts">
            <h2 className="feature-title">{item.title}</h2>
            <p className="feature-desc">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
