import React from 'react';
import * as AiIcons from 'react-icons/ai';
// import Footer from './footer';
import './styles/Contact.css';

const Contact = () => (
  <>
    <section id="contact" className="contact container-div">
      <div className="mid-section">
        <div className="banner">
          <AiIcons.AiOutlineMail size={40} className="head-icon" />
          <h2>Connect with me</h2>
        </div>
        <div className="line">
          <hr />
        </div>
        <br />
        <br />
        <div className="contact-div">
          <p className="contact-info">
            If you have an application you&apos;re eager to develop, a specific
            feature that requires expert implementation, or a coding project
            that needs attention, don&apos;t hesitate to drop a message below.
            I&apos;m here to bring your ideas to life and provide top-notch
            coding solutions tailored to your needs. Reach out now and
            let&apos;s discuss how can I help turn your vision into reality.
          </p>
        </div>
        <div>
          <form
            action="https://formspree.io/f/xoqbekvb"
            method="POST"
            id="form"
            className="contact-form form-item"
          >
            <input
              className="contact_input one_line italic-placeholder"
              type="text"
              placeholder="Your name here"
              name="Name"
              maxLength="30"
              autoComplete="on"
              required
            />

            <input
              className="contact_input one_line italic-placeholder"
              type="email"
              placeholder="Your email here"
              name="Email"
              autoComplete="on"
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
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </section>
    {/* <Footer /> */}
  </>
);

export default Contact;
