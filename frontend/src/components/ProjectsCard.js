import React from 'react'


export const ProjectsCard = (props) => {
    const isOdd = props.index % 2 !== 0


    const cardStyle = () => {

        if (isOdd) {
            return ({
                background: 'url(' + props.image + ') 50% 50%/auto auto no-repeat',
                margin: '0 0 50px 100px'
            })
        }

        return ({
            background: 'url(' + props.image + ') 50% 50%/auto auto no-repeat',
        })
    }

   const rowReverse = {
    flexDirection: 'row-reverse'
   }


    return (
        <div className="projects-content">
            <div className="projects-card" style={isOdd ? rowReverse : null}>

            <div style={cardStyle()} className="projects-thumb" id="projects-thumb">
            </div>

            <div className="projects-text" style={{order: 1}}>
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