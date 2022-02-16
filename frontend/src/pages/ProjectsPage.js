import { Navbar } from '../components/Navbar'
import React from 'react'
import { Footer } from '../components/Footer'
import { BannerLoop } from '../components/BannerLoop'
import projectsLoop from '../media/images/projectsLoop.svg'
import { ProjectsCard } from '../components/ProjectsCard'
import props from '../testDB/projects.json'


export const ProjectsPage = () => {

    const renderCards = (props) => {
        
        return (
            props.map( (item, index) => {
                const {title, description} = item
                return <ProjectsCard title={title} description={description} image='https://sun9-25.userapi.com/impf/c841639/v841639729/3c667/5w_9-0xZY9k.jpg?size=807x515&quality=96&sign=43bc05b1e9b823fa2034c7caf6005bf1&type=album' key={index} />
            })
        )
    }

    return(
        <div>
            <Navbar />
            <BannerLoop image={projectsLoop} />

            {renderCards(props)}

            <Footer />
        </div>
    )
}