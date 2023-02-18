import React from "react";

export const ProjectsCard = (props) => {
    const isOdd = props.index % 2 !== 0;

    const cardStyle = (image) => {
        return {
            background: "url(" + image + ") 50% 50%/100% auto no-repeat",
        };
    };

    const rowReverse = {
        flexDirection: "row-reverse",
    };

    return (
        <div className="projects-content">
            <div className={"projects-card " + (isOdd ? "projects-card-reversed" : "")}>
                <div
                    style={cardStyle(props.image)}
                    className={"projects-thumb " + (isOdd ? "projects-thumb-reversed" : "")}
                ></div>

                <div className="projects-text" style={{ order: 1 }}>
                    <div className="projects-title">{props.title}</div>

                    <div className="projects-description">{props.description}</div>

                    <div className="projects-btn">Узнать больше</div>
                </div>
            </div>
        </div>
    );
};
