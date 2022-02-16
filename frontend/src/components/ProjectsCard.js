import React from 'react'


export const ProjectsCard = (props) => {

    const cardStyle = {
        background: 'url(' + props.image + ') 50% 50%/auto 100% no-repeat'
    }

    return (
        <div className="projects-content">
            <div className="projects-card">

            <div style={cardStyle} className="projects-thumb">
            </div>

            <div className="projects-text">
                <div className="projects-title">
                    {props.title}
                </div>

                <div className="projects-description">
                    {props.description}
                </div>

                <div className="projects-btn">
                    Узнать больше
                </div>
            </div>

        </div>
        </div>
        
    )
}