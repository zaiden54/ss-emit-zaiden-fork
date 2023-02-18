import React from "react";

export const EventsCard = (props) => {
	return (
		<div className="events-card">
			<div className="event-title">{props.title}</div>

			<div className="events-appointment">
				<div className="events-date">{props.date}</div>
				<div className="events-locaton">{props.location}</div>
			</div>
		</div>
	);
};
