import React from 'react';
// import Footer from './footer';
import './styles/Contact.css';

const Contact = () => (
  <>
    <div className="contact">
      <div className="mid-section">
        <div className="contact-div">
          <h2 className="contactme">CONTACT ME</h2>
          <p className="contact-info">
            If you have an application you are interested in developing,
            <br />
            a feature that you need built or a project that needs coding,
            <br />
            simple slide a message below.
          </p>
          <form
            action="https://formspree.io/f/xoqbekvb"
            method="POST"
            id="form"
            className="contact-form form-item"
          >
            <input
              className="contact_input one_line italic-placeholder"
              type="text"
              placeholder="Your name"
              name="Name"
              maxLength="30"
              required
            />

            <input
              className="contact_input one_line italic-placeholder"
              type="email"
              placeholder="Enter your email"
              name="Email"
              required
            />

            <textarea
              className="message contact_input italic-placeholder"
              placeholder="Write your message here"
              maxLength="500"
              name="Message"
              required
            />

            <button className="get-intouch btn1" type="submit">
              Get in touch
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
  </>
);

export default Contact;
