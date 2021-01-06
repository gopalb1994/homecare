import React from "react"
import "./Services.css"
import rocket from "../../../images/startup.png"

const Services = () => {
  return (
    <>
      <div className="background_services_section">
          <div className="container">
          <h2 className="text-center pt-5">Services</h2>
        <div className="services_parent">
            
          <div className="services_child">
            <img src={rocket} />
            <h3>Personal care</h3>
            <p>
            The provision of one or more services required by an individual in a residence or independent living environment:{" "}
            </p>
          </div>
          <div className="services_child">
            <img src={rocket} />
            <h3>Housekeeping Help</h3>
            <p>
            Keeping the home environment clean and tidy is definitely important . We At Dream Home Care LLC, can provide you with  housekeeping staff who can assist you.{" "}
            </p>
          </div>
          <div className="services_child">
            <img src={rocket} />
            <h3>Companionship</h3>
            <p>
            We will provide you or your loved one with friendly and passionate companions who can accompany you and also provide safety supervision.{" "}
            </p>
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Services;
