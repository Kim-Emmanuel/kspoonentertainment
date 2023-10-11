import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './About.css';
import { getAbout } from '../../lib/sanity.query';
import { urlFor } from '../../lib/sanity.image';

import {images} from '../../constants'

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });

    const fetchData = async () => {
      const data = await getAbout();
      setAbouts(data);
    };
    fetchData();
  }, []);

  return (
    <section id="about" className="about-us">
      <div className="vision-mission">
        <div className="vision">
          <div className="main-vision">
            <img src={images.vision} alt="vision" data-aos="fade-right" />
            <div className="vision-content" data-aos="fade-left">
              <h2>OUR VISION</h2>
              <p>
                At KSpoon Entertainment, our goal is to establish ourselves as a premier global lifestyle and
                entertainment company,
                dedicated to developing and providing customers with unmatched entertainment experiences that suit their
                various lifestyle requirements.
                By upholding the greatest standards of quality and client happiness, we strive to consistently innovate
                and push the limits of what is possible in the entertainment industry.
              </p>
            </div>
          </div>
        </div>
        <div className="mission">
          <div className="main-mission">
            <img src={images.mission} alt="mission" data-aos="fade-left" />
            <div className="mission-content" data-aos="fade-right">
              <h2>OUR MISSION</h2>
              <p>
                Our mission is to disrupt and transform the entertainment and lifestyle sector through our creative and
                innovative methods.
                Our aim is to offer entertaining experiences that are both high-quality and reasonably priced while
                utilizing the newest trends and technologies.
                Our mission is to make a lasting impact on the lives of our clients and to become known as an industry
                leader for our outstanding service.
              </p>
            </div>
          </div>
        </div>
      </div>

      {abouts.map(about => (
        <div className="aboutus" key={about._id}>
          <div className="main">
            <img src={urlFor(about.image).url()} alt="about" />
            <div className="about-text">
              <h1>{about.aboutText.header}</h1>
              <h3>{about.aboutText.subHeader}</h3>
              <p>
                {about.aboutText.description}
              </p>
              {/* The onClick function should be replaced with a function that navigates to the desired location */}
              <button type="button" className="cta-button" onClick={() => window.location.href = '#contacts'}> {about.aboutText.ctaButton}</button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default About;
