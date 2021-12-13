import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/homepage/header";

export default function Home() {
	const { siteConfig } = useDocusaurusContext();
	return (
		<Layout
			title={`Hello from ${siteConfig.title}`}
			description="Modern flat design framework for the web — inspired by Duolingo design system."
		>
			<HomepageHeader />
			<main>{/* <HomepageFeatures /> */}</main>
		</Layout>
	);
}
