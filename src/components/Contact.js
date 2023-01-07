import React from 'react';
import './styles/Contact.css';

const Contact = () => (
  <>
    <div className="logo-img" />
    <div className="mid-section contact">
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
          action="https://formspree.io/f/form"
          method="post"
          id="form"
          className="contact-form form-item"
        >
          <input
            className="contact_input one_line"
            type="text"
            placeholder="username"
            name="username"
            maxLength="30"
            required
          />

          <input
            className="contact_input one_line"
            type="email"
            placeholder="Enter email"
            name="email"
            required
          />

          <textarea
            className="message contact_input"
            placeholder="Write your message here"
            maxLength="500"
            required
          />

          <button className="get-intouch btn1" type="submit">
            Get in touch
          </button>
        </form>
      </div>
    </div>
  </>
);

export default Contact;
