import { Navbar } from "../components/Navbar";
import React from "react";
import { Footer } from "../components/Footer";
import { BannerLoop } from "../components/BannerLoop";
import projectsLoop from "../media/images/projectsLoop.svg";
import { ProjectsCard } from "../components/ProjectsCard";
import props from "../testDB/projects.json";

export const ProjectsPage = () => {
	const renderCards = (props) => {
		return props.map((item, index) => {
			const { title, description, image } = item;
			return <ProjectsCard title={title} description={description} image={image} key={index} index={index} />;
		});
	};

	return (
		<div>
			<Navbar />
			<BannerLoop image={projectsLoop} />

			{renderCards(props)}

			<Footer />
		</div>
	);
};
