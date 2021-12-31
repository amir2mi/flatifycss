import React from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import svg from "../svg";
import "./contribute.css";

export default function HomepageContribute() {
  const { isDarkTheme } = useThemeContext();

  return (
    <div className="homepage-contribute">
      <div className="contribute-texts flex-column-center">
        <h2 className="homepage-h2 text-center">Keep it breathing</h2>
        <p className="homepage-para size-2x text-center">We need your help to make it better than what it is!</p>
        <div className="flex-center">
          <a
            href="https://github.com/amir2mi/flatifycss"
            target="_blank"
            className={`button size-2x featured-button ${isDarkTheme ? "style-dark" : "style-light"}`}
          >
            Contribute
          </a>
          <a
            href="https://www.buymeacoffee.com/amir2mi"
            target="_blank"
            className="button size-2x style-accent featured-button"
          >
            Buy a coffee
          </a>
        </div>
      </div>
      <div className="contribute-icons">
        <div className="contributor-svg">{svg.contributor}</div>
        <div className="chain-svg">{svg.chain}</div>
      </div>
    </div>
  );
}
