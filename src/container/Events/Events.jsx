import { useEffect, useState } from 'react';
import { getEvents } from "../../lib/sanity.query";
import { urlFor } from '../../lib/sanity.image';
import './Events.css';
import tour from '../../assets/tour4.png'

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEvents();
      setEvents(data);
    };
    fetchData();
  }, []);

  return (
    <section id="events" className="event">
      <div className="event-heading">
        <h6>UPCOMING EVENTS</h6>
      </div>
      <div className="event-container">
        {events.map(event => (
          <div className="item-container" key={event._id}>
            <div className="img-container">
              <img src={urlFor(event.Poster).url() || tour} alt="event-img" />
            </div>

            <div className="body-container">
              <div className="overlay-event"></div>

              <div className="event-info">
                <p className="title">{event.title}</p>
                <div className="separator"></div>
                <p className="info">{event.location}</p>
                <p className="price">{event.price}</p>

                <div className="additional-info">
                  <p className="info-location">
                    <i className="fas fa-map-marker-alt"></i>
                    {event.location}
                  </p>
                  <p className="info">
                    <i className="fas fa-calendar-alt"></i>
                    {new Date(event.date).toLocaleDateString()}
                  </p>

                  <p className="info-description">
                    {event.description}
                  </p>
                </div>
              </div>
              {/* The onClick function should be replaced with a function that navigates to the desired location */}
              <a href={event.bookingUrl} className="action">Book</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Events;

