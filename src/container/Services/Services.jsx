import React from 'react';
import './Services.css';

import { images } from '../../constants';

const Services = () => {
  return (
    <section id="services" className="service">
      <h2 className="section-heading">OUR SERVICES</h2>
      <div className="line"></div>
      <h4 className="call">WHAT WE CAN DO FOR YOU</h4>
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={images.events} alt="Icon description" className="icon" />
            </div>
            <h3 className="head">Events and concert</h3>
            <p>
              Are you struggling to plan and organize the perfect event or concert? Fret no more, as KSpoon Entertainment
              is here to be your guiding light!
              We understand that creating flawless events and unforgettable concerts can be quite the challenge. That's
              why at KSpoon Entertainment, we specialize in turning your visions into reality.
              Our team of seasoned professionals is dedicated to curating experiences that leave a lasting impression on
              both you and your guests.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={images.booking} alt="Icon description" className="icon" />
            </div>
            <h3 className="head">Booking of artists</h3>
            <p>
              Experience Global Entertainment with KSpoon Entertainment - Your Premier Artist Booking Partner!
              Unlock the world of captivating performances and international talent with KSpoon Entertainment. As your
              trusted artist booking agency,
              we specialize in connecting you with exceptional artists from Africa and across the globe, ensuring your
              events resonate with a truly global rhythm.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={images.accommodation} alt="Icon description" className="icon" />
            </div>
            <h3 className="head">Accommodation and transport</h3>
            <p>
              Elevate Your Artist Experience with KSpoon Entertainment - Accommodation and Transport Solutions Tailored
              for International Artists!
              At KSpoon Entertainment, we go the extra mile to ensure that every facet of an artist's journey is
              seamlessly managed. Our comprehensive suite of services encompasses top-tier accommodation and transport
              arrangements,
              designed specifically to cater to the unique needs of international artists.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={images.agency} alt="Icon description" className="icon" />
            </div>
            <h3 className="head">Agency</h3>
            <p>
              Empower Your Artistic Journey with KSpoon Entertainment Agency - Your Bridge to Artistic Excellence Across
              Africa and Beyond!
              KSpoon Entertainment Agency stands as your beacon in the world of artistry, dedicated to connecting talented
              artists with opportunities that span the landscapes of Africa and international frontiers.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={images.fashion} alt="Icon description" className="icon" />
            </div>
            <h3 className="head">Fashion line (Dressing and styling)</h3>
            <p>
              Unveil Your Artistry with KSpoon Fashion Line - Elevating Performers' Presence Through Distinctive Dressing
              and Styling!
              KSpoon Fashion Line is your exclusive gateway to a world of captivating stage presence and exceptional
              style. As specialists in dressing and styling,
              we seamlessly fuse fashion and performance to create an unforgettable visual experience for artists during
              events, concerts, and club shows.
            </p>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="icon-wrapper">
              <img src={images.promotion} alt="Icon description" className="icon" />
            </div>
            <h3 className="head">Music promotion</h3>
            <p>
              Elevate Your Music's Reach with KSpoon Music Promotion - Unleash Your Sound to the World Through Strategic
              Media Tours and Electrifying Club Engagements!
              KSpoon Music Promotion is your ultimate partner in catapulting your music to new heights. With an arsenal of
              targeted media tours, TV and radio interviews, and dynamic club show bookings,
              we ensure your music resonates far and wide, captivating audiences across platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
