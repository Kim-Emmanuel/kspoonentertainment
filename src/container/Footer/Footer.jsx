import React from 'react';
import './Footer.css';

import { images } from '../../constants';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <ul className="footer__social">
          <li className="flex-center">
            <a href="https://www.facebook.com/yourusername">
              <img src={images.facebook} alt="Facebook" />
            </a>
          </li>
          <li className="flex-center">
            <a href="https://www.instagram.com/yourusername">
              <img src={images.instagram} alt="Instagram" />
            </a>
          </li>
          <li className="flex-center">
            <a href="https://twitter.com/yourusername">
              <img src={images.twitterx} alt="Twitter" />
            </a>
          </li>
        </ul>
        <p className="copyright">Copyright © 2023 KSpoon Entertainment. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
