import React from "react";
import { Icon } from "./ContactElements";

const Contact = () => {
  return (
    <div>
      <Icon to="/">MentAr</Icon>

      <section className="contact-page">
        <article className="contact-form">
          <h3>Get in touch</h3>
          <form action="https://formspree.io/f/mbjpvvoy" method="POST">
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="name"
                className="form-control"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="email"
                className="form-control"
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="message"
                className="form-control"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn btn">
              Submit
            </button>
          </form>
        </article>
      </section>
    </div>
  );
};

export default Contact;
