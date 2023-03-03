import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "./style/contact.css";
import axios from "axios";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  function resetForm() {
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  }

  function submitEmail(e) {
    e.preventDefault();
    axios({
      method: "POST",
      url: "https://localhost:7000/send",
      data: formData
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  console.log(formData);
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);

  return (
    <div className="contact" id="contact">
      <div className="contactContainer">
        <div
          data-aos="slide-up"
          data-aos-offset="50"
          data-aos-easing="ease-in-out"
          data-aos-once="true"
          className="backgroundBox">
          <div className="eclipse"></div>
        </div>
        <div className="writeUpContainer">
          <div
            data-aos="slide-up"
            data-aos-offset="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="contactWriteUp">
            <div className="contactHeader">
              <h3>We would love to hear from you</h3>
            </div>
            <div className="paragraph">
              <a href="##">
                <span>Phone Number:</span>+234 567 890 987
              </a>
              <a href="##">
                <span>Email: </span> Jrunservices@gmail.com
              </a>
            </div>
          </div>

          <div
            data-aos="slide-up"
            data-aos-offset="50"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            className="formContainer">
            <form className="formMssg">
              <div className="fullname inputWrapper">
                <input
                  type="text"
                  name="Name"
                  placeholder="Name"
                  // value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="email inputWrapper">
                <input
                  type="text"
                  placeholder="  Email"
                  name="Email"
                  // value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="phone inputWrapper">
                <input type="text" placeholder="Phone" name="phone" />
              </div>

              <div className="message inputWrapper">
                <textarea
                  name="Message"
                  placeholder="Message"
                  id="message"
                  cols="30"
                  rows="10"
                  // value={formData.message}
                  onChange={handleChange}
                />
              </div>

              <button onSubmit={submitEmail} type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
