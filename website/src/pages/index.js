import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/homepage/header";
import HomepageFeatures from "../components/homepage/features";
import HomepageQuickInstall from "../components/homepage/quick-install";
import HomepageContribute from "../components/homepage/contribute";
import { features, features_horizontal } from "../data/features-list";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - The web flat design framework`}
      description="Modern flat design framework for the web — inspired by Duolingo design system."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures items={features} />
        <HomepageFeatures items={features_horizontal} isSmall={true} />
        <HomepageQuickInstall />
        <HomepageContribute />
      </main>
    </Layout>
  );
}
