import React from "react";
import "./style/contact.css";
// import formImg from "../assest/form.png"

function Contact() {
  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div className="backgroundBox">
          <div className="eclipse"></div>
        </div>
        <div className="writeUpContainer">
        
          <div className="contactWriteUp">
            <div className="contactHeader">
              <h3>We would love to hear from you</h3>
            </div>
            <div className="paragraph">
              <a href="#">
                <span>Phone Number:</span>+234 567 890 987
              </a>
              <a href="#">
                <span>Email: </span> Jrunservices@gmail.com
              </a>
            </div>
          </div>

          <div className="formContainer">
            <form action="post">
              <div className="fullname inputWrapper">
                {/* <label htmlFor="fullName">Full Name</label> */}
                <input type="text" placeholder="Full Name" name="fullName" />
              </div>
              <div className="email inputWrapper">
                {/* <label htmlFor="email">Email</label> */}
                <input type="text" placeholder="Email" name="email" />
              </div>
              <div className="phone inputWrapper">
                {/* <label htmlFor="phone">Phone</label> */}
                <input type="text" placeholder="Phone" name="phone" />
              </div>
              <div className="message inputWrapper">
                {/* <label htmlFor="message">Message</label> */}
                <textarea
                  name="message"
                  placeholder="Message"
                  id="message"
                  cols="30"
                  rows="10"></textarea>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
