import React, { useEffect, useState } from 'react';
import { getWork } from '../../lib/sanity.query';
import { urlFor } from '../../lib/sanity.image';
import './Work.css';

const Work = () => {
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getWork();
      setWorks(data);
    };
    fetchData();
  }, []);

  return (
    <section id="portfolios" className="portfolio">
      <div className="heading">
        <h3>WORK DONE</h3>
      </div>
      <div className="image-cards">
        {works.map(work => (
          work.imageCards.map((card, index) => (
            <div className="image-card" key={index}>
              <img src={urlFor(card.imageUrl).url()} alt="portfolio" />
              <div className="overlay">
                <h3>{card.overlayTitle}</h3>
                <p>{card.overlayDescription}</p>
              </div>
            </div>
          ))
        ))}
      </div>
    </section>
  )
}

export default Work;

