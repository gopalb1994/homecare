import React from "react";
import "./Form.css";
const Form = () => {
  return (
    <div className="contact-form-container">
      <div className="container">
        <div className="innerwrap">
          <section className="section1 clearfix">
            <div className="textcenter mt-5">
              <h1>Contact Us</h1>
            </div>
          </section>
          <section className="section2 clearfix">
            <div className="col2 column1 first ">
              <div
                className="sec2map d-flex justify-content-center align-items-center address-info"
                style={{ overflow: "hidden", height: "550px", width: "100%" }}
                d-flex
                justify-content-center
                align-items-center
              >
                <div className="sec2innercont">
                  <div className="sec2addr">
                    <p>
                      45 BC, a Latin professor at Hampden-Sydney College in
                      Virginia
                    </p>
                    <p>
                      <span className="collig">Phone :</span> +91 976885083
                    </p>
                    <p>
                      <span className="collig">Email :</span>{" "}
                      vivek.mengu016@gmail.com
                    </p>
                    <p>
                      <span className="collig">Fax :</span> +91 9768850839
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col2 column2 last main-form">
              <div className="sec2contactform">
                <h3 className="sec2frmtitle">
                  Want to Know More?? Drop Us a Mail
                </h3>
                <form action>
                  <div className="clearfix">
                    <input
                      className="col2 first"
                      type="text"
                      placeholder="FirstName"
                    />
                    <input
                      className="col2 last"
                      type="text"
                      placeholder="LastName"
                    />
                  </div>
                  <div className="clearfix">
                    <input
                      className="col2 first"
                      type="Email"
                      placeholder="Email"
                    />
                    <input
                      className="col2 last"
                      type="text"
                      placeholder="Contact Number"
                    />
                  </div>
                  <div className="clearfix">
                    <textarea
                      name="textarea"
                      id
                      cols={30}
                      rows={7}
                      defaultValue={"Your message here..."}
                    />
                  </div>
                  <div className="clearfix">
                    <input type="submit" defaultValue="Send" />
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Form;
