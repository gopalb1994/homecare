import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <section className="Material-contact-section section-padding section-dark">
      <div className="container ">
        <div className="row ">
          <div
            className="col-md-12 wow animated fadeInLeft"
            data-wow-delay=".2s"
          >
            <h1 className="section-title text-center contact-section-top">
              Love to Hear From You
            </h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-3 d-flex justify-content-center flex-column contact-widget-section2 wow animated fadeInLeft">
            <div className="find-widget">
              Address: <a href="#">4400 Linglestown rd, Harrisburg, PA 17112</a>
            </div>
            <div className="find-widget">
              Phone: <a href="#">717-204-3200</a>
            </div>
            <div className="find-widget">
              Website:{" "}
              <a href="https://dreamhomecare.net">www.dreamhomecare.net</a>
            </div>
            <div className="find-widget mb-5">
              Program: <a href="#">Mon to fri: 09:30 AM - 5:00PM</a>
            </div>
          </div>
          <div
            className="col-md-6 wow animated fadeInRight"
            data-wow-delay=".2s"
          >
            <form
              className="shake"
              role="form"
              method="post"
              id="contactForm"
              name="contact-form"
              data-toggle="validator"
            >
              <div className="form-group label-floating">
                <label className="control-label" htmlFor="name">
                  Name
                </label>
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  name="name"
                  required
                  data-error="Please enter your name"
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group label-floating">
                <label className="control-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  name="email"
                  required
                  data-error="Please enter your Email"
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group label-floating">
                <label className="control-label">Subject</label>
                <input
                  className="form-control"
                  id="msg_subject"
                  type="text"
                  name="subject"
                  required
                  data-error="Please enter your message subject"
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-group label-floating">
                <label htmlFor="message" className="control-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  rows={3}
                  id="message"
                  name="message"
                  required
                  data-error="Write your message"
                  defaultValue={""}
                />
                <div className="help-block with-errors" />
              </div>
              <div className="form-submit mt-5">
                <button
                  className="btn btn-primary"
                  type="submit"
                  id="form-submit"
                >
                  <i className="material-icons mdi mdi-message-outline" /> Send
                  Message
                </button>
                <div id="msgSubmit" className="h3 text-center hidden" />
                <div className="clearfix" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
