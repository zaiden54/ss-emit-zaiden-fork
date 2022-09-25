import React, {useState, useEffect} from "react"
import { EventsCard } from "./EventsCard"
import {useHttp} from '../hooks/http.hooks'

export const Events = () => {

    const [occasions, setOccasions] = useState([])
    const { loading, request, error, clearError } = useHttp()

    const displayEvents = (occasions) => {

        if (!occasions) {
            return(
                <div className="">пока нет событий</div> 
            )
        }

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
        const res = await request('/api/content/occasions')
        setOccasions(res)
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