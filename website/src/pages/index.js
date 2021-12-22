import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomepageHeader from "../components/homepage/header";
import HomepageFeatures from "../components/homepage/features";
import HomepageQuickInstall from "../components/homepage/quick-install";
import HomepageContribute from "../components/homepage/contribute";
import svg from "../components/svg";

const features = [
	{
		title: "Clean & cool",
		desc: "Whitespace plays a big role and borders result in the layout that is clean at the users' first sight.",
		className: "feature-1",
		svg: svg.eyesight,
	},
	{
		title: "Concise but powerful",
		desc: "With only ~15 kb gzip size, you can start a new project having just must-haves like components, helper classes, and so on.",
		className: "feature-2",
		svg: svg.artist,
	},
];

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
				<HomepageQuickInstall />
				<HomepageContribute />
			</main>
		</Layout>
	);
}
