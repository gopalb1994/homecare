import React from "react"
import Button from "../../Buttons/Button"
import Image from "../../images"
import "./aboutsection.css"

const AboutSection = () => {
  return (
    <>
      <div className="background_about_section">
        <div className="container">
          <div className="about_parent">
            <div className="image">
              <Image name="client-2" />
            </div>
            
            <div className="text">
            <h1 className="about-heading">About Us</h1>
              <p>
              To provide home healthcare clients with an unsurpassed level of personalized care by being dedicated to employee education and client satisfaction.

We know that the need for care varies from client to client – every situation is different. That’s why each one of our care plans is customized to fit the situation and can be changed as needs change. Whether you need immediate long-term 24-hour care or transportation to a doctor’s appointment, Dream Home Care can provide the service promptly and efficiently.
              </p>
              <button className="btn btn-warning">Make Appointment</button>

            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default AboutSection
