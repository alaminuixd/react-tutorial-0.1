import React from "react";
// import CSS
import "./FooterEvent.css";

function FooterEvent() {
  return (
    <div className="event-request">
      <h3>Request to join upcoming event.</h3>
      <form action="#">
        <label htmlFor="youremail">Email: </label>
        <input type="text" name="yourmail" className="email" />
        <label htmlFor="message">Your message</label>
        <textarea name="message" id="message"></textarea>
        <button type="submit">Submit your email</button>
      </form>
    </div>
  );
}

export default FooterEvent;
