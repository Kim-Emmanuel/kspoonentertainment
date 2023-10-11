import React, { useEffect } from 'react';
import Typed from 'typed.js';
import './Header.css';

const Header = () => {
  useEffect(() => {
    const options = {
      strings: ["the world of entertainment", "unmatched entertainment" , "opportunities"],
      typeSpeed: 150,
      backSpeed: 150,
      loop: true
    };

    const typed = new Typed(".auto-type", options);

    function autoType(element, text, delay) {
      const colors = ["white", "rgb(236, 207, 124)"];
      let charIndex = 0;
      let colorIndex = 0;
      let forward = true;

      function type() {
        if (charIndex >= 0 && charIndex <= text.length) {
          element.textContent = text.substr(0, charIndex);
          element.style.color = colors[colorIndex % colors.length];
          if (forward) {
            charIndex++;
          } else {
            charIndex--;
          }
          setTimeout(type, delay);
        } else {
          forward = !forward;
          charIndex = forward ? 0 : text.length;
          colorIndex++;
          setTimeout(type, 1000);
        }
      }

      type();
    }

    const h1Element = document.querySelector('.container h1');
    const textToType = "Your gateway to the world of entertainment";
    const typingDelay = 100;

    autoType(h1Element, textToType, typingDelay);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="home" className="banner">
      <div className="container">
        <h1><span className="auto-type"></span></h1>
      </div>
    </section>
  );
}

export default Header;
