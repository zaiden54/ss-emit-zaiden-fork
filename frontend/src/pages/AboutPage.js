import React from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { BannerLoop } from "../components/BannerLoop";
import { ScrollMenu } from "../components/ScrollMenu";
import textLoop from "../media/images/textLoop.svg";

export const AboutPage = () => {
	return (
		<div className="">
			<Navbar />

			<BannerLoop image={textLoop} />
			<ScrollMenu />

			<Footer />
		</div>
	);
};
