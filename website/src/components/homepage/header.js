import React, { useEffect, useState } from "react";
import useThemeContext from "@theme/hooks/useThemeContext";
import Link from "@docusaurus/Link";
import "./header.css";

export default function HomepageHeader() {
  const { isDarkTheme } = useThemeContext();
  const [stableVersion, setStableVersion] = useState();

  useEffect(() => {
    async function fetchData() {
      await fetch("https://api.github.com/repos/amir2mi/flatifycss/releases", {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
      })
        .then((response) => response.json())
        .then((data) => (data ? setStableVersion(data[0].tag_name.replace("v", "")) : null));

      console.log(stableVersion);
    }
    fetchData();
  }, []);

  return (
    <div className="homepage-header">
      <h1 className="homepage-title">FlatifyCSS</h1>
      <p className="homepage-subtitle">
        Modern flat design framework for the web — inspired by Duolingo design system.
      </p>
      <span aria-hidden={true} className="animated-logo"></span>

      <Link
        to="docs/intro"
        className={`get-started-button button bordered size-2x${isDarkTheme ? " style-dark" : " style-light"}`}
      >
        Get Started
      </Link>
      <p className="opacity-60">
        {stableVersion && <span className="anim-fade-in"> Last stable release: {stableVersion}</span>}
      </p>
    </div>
  );
}
