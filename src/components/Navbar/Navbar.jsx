import React, { useEffect } from 'react';
import './Navbar.css';

import { images } from '../../constants';

const Navbar = () => {
  useEffect(() => {
    const toggleBtn = document.querySelector('.toggle_btn');
    const check = document.getElementById('check');
    const menu = document.querySelector('.menu');
    const menuItems = document.querySelectorAll('.menu > li'); // Select all menu items

    toggleBtn.addEventListener('click', function () {
      check.checked = !check.checked;
      updateIcon();
      updateMenu();
    });

    // Add click event listener to each menu item
    menuItems.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        check.checked = false; // Uncheck the checkbox
        updateIcon();
        updateMenu();
      });
    });

    function updateIcon() {
      const icon = toggleBtn.querySelector('i');
      if (check.checked) {
        icon.className = 'fas fa-times';
      } else {
        icon.className = 'fas fa-bars';
      }
    }

    function updateMenu() {
      if (check.checked) {
        menu.classList.add('open');
      } else {
        menu.classList.remove('open');
      }
    }

    updateIcon();
    updateMenu();

    window.addEventListener("scroll", function () {
      var header = document.querySelector(".header");
      header.classList.toggle("sticky", window.scrollY > 0);
    });

  }, []);

  return (
    <div className="header">
      <div className="logo">
        <a href="#home">
          <img src={images.logos} alt="Kspoon Entertainment" />
        </a>
      </div>
      <input type="checkbox" id="check" />
      <ul className="menu">
        <li><a href="#home"><i className="fas fa-home"></i> HOME</a></li>
        <li><a href="#about"><i className="fas fa-info-circle"></i> ABOUT US</a></li>
        <li><a href="#portfolios"><i className="fas fa-briefcase"></i> PORTFOLIO</a></li>
        <li><a href="#services"><i className="fas fa-cogs"></i> SERVICES</a></li>
        <li><a href="#events"><i className="fas fa-calendar-alt"></i> EVENTS</a></li>
        <li><a href="#contacts"><i className="fas fa-envelope"></i> CONTACT</a></li>
      </ul>
      <div className="toggle_btn">
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
