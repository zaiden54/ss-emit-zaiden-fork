import React from "react";
import { Footer } from "../components/Footer";
import { BigTitle } from "../components/BigTitle";
import { Navbar } from "../components/Navbar";

export const PageInDevelopment = () => {
    return (
        <div>
            <Navbar />
            <BigTitle title="Данная страница находится в разработке" />
            <Footer />
        </div>
    );
};
