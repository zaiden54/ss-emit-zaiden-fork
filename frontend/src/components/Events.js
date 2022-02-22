import React, {useState, useEffect} from "react"
import { EventsCard } from "./EventsCard"
import axios from 'axios'

export const Events = () => {

    const [occasions, setOccasions] = useState([])


    const displayEvents = (occasions) => {
        return (
            occasions.map( (item, index) => {

                const {title, date, time, location} = item

                return (
                    <a href=''>
                        <EventsCard  
                            key={index}
                            title={title}
                            date={date + " | " + time}
                            location={location}
                        />
                    </a>
                )
            })
        )
    }

    useEffect( async() => {
        const res = await axios.get('/api/content/occasions')
        setOccasions(res.data)
    }, [])

    return (
        <div className="events">

            <div className="events-title">события</div>

            <div className="events-cards">
                {displayEvents(occasions)}
            </div>

            <div className="events-other">
                <a href="/occasions"><p>Другие события</p></a>
            </div>
        </div>
    )
}