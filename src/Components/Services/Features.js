import React from "react";
import goals from "../../content/goals.json";
import { FaCheck } from "react-icons/fa";
import "./Features.css";
const Features = () => {
  return (
    <section class="section services-section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="section-title">
              <h2>Our Goals</h2>
            </div>
          </div>
        </div>
        <div class="row">
          {goals.map((goal) => (
            <div class="col-sm-6 col-lg-4" id={goal.id}>
              <div class="feature-box-1">
                <div class="icon">
                  <FaCheck />
                </div>
                <div class="feature-content">
                  {/* <h5>Unique design</h5> */}
                  <p>{goal.goal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
