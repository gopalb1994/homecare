import React from "react";
import Image from "../images";
import "./SectionTitle.css";

const SectionTitle = () => {
  return (
    <div className="container my-4 p-3 section-container">
      <div className="row">
        <div class="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div class="section-title ">
            <h2>Our Mission</h2>
            <p>
              To provide our clients with excellent, dependable and affordable
              home care solutions. We will deliver respectful services and
              support in the comfort of their home. We are dedicated to
              maintaining the highest quality client care and employee
              satisfaction.
            </p>
          </div>
        </div>
        <div className="col-md-6 p-3 d-none d-lg-block">
          <div className="image">
            <Image name="mission" />
          </div>
        </div>
      </div>
      {/* Vision */}
      <div className="row py-5">
        <div class="col-lg-6 p-3 d-none d-lg-block">
          <div className="image">
            <Image name="vision" />
          </div>
        </div>
        <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center">
          <div class="section-title ">
            <h2>Our Vision</h2>
            <p>
              To deliver the highest degree of quality comprehensive patient and
              family centered care to all patients within the confines of
              available resources and services in order to attain and/or
              maintain the patient’s maximum level of independence and wellness
              in their homes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
