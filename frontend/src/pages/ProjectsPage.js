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
                return <ProjectsCard title={title} description={description} image='https://sun9-11.userapi.com/impg/Z6HhCe-ruZ7sIcae-kD5Xjlsh5SM7UKV-1taYQ/pHN2WbFo9wA.jpg?size=2560x1707&quality=95&sign=bfe8cf8a33fe909463028a85b14dbc38&type=album' key={index} index={index}/>
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