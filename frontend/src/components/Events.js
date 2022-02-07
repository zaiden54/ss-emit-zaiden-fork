import React from "react"
import { EventsCard } from "./EventsCard"
import occasions from "../testDB/occasions.json"

export const Events = () => {

    const displayEvents = (occasions) => {
        return (
            occasions.map( (item, index) => {
                return (
                    <a href=''>
                        <EventsCard  
                            key={index}
                            title={item.title}
                            date={item.date}
                            location={item.location}
                        />
                    </a>
                )
            })
        )
    }

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