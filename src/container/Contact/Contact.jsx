import React, { useEffect } from 'react';
import './Contact.css';
import { formspreeUrl } from '../../lib/sanity.api';

const Contact = () => {
  useEffect(() => {
    // Get the form element
    const form = document.getElementById('myForm');

    // Set the action attribute to the Formspree URL
    form.action = formspreeUrl;

    // Add event listener for form submission
    form.addEventListener("submit", function () {
      setTimeout(function () {
        form.reset();
      }, 10);
    });
  }, []);

  return (
    <section id="contacts" className="contact">
      <div className="contact-content">
        <h3>CONTACT US TODAY</h3>
        <p>
          Feel free to use the contact form below, give us a call, or drop us an email. We're excited to hear from you and
          explore how KSpoon Entertainment
          can make your upcoming event an extraordinary success.Let's embark on a journey of entertainment excellence
          together.
        </p>
      </div>
      <div className="container">
        <div className="contactInfo">
          <div className="box">
            <div className="icon"><i className="fas fa-map-marker-alt" aria-hidden="true"></i></div>
            <div className="text">
              <h4>Address</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fas fa-envelope" aria-hidden="true"></i></div>
            <div className="text">
              <h4>Email</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className="box">
            <div className="icon"><i className="fas fa-phone" aria-hidden="true"></i></div>
            <div className="text">
              <h4>Phone</h4>
              <p>+254 704 272 414 or +254 725 920 534</p>
            </div>
          </div>
        </div>
        <div className="contactForm">
          <form id="myForm" method="post">
            <h6>Send Message</h6>
            <div className="inputBox">
              <input type="text" name="name" required />
              <span>Full Name</span>
            </div>
            <div className="inputBox">
              <input type="text" name="_replyto" required />
              <span>Email</span>
            </div>
            <div className="inputBox">
              <textarea name="message" required />
              <span>Your Message</span>
            </div>
            <div className="inputBox">
              <input type="submit" name="" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
