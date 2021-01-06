import React from "react"
import Image from "../../images"
import "./Hero.css"

const AboutHero = props => {
  return (
    <div>
      <div className="main">
        <div className="container">
            <div className="row p-5">
                <div className="col-md-7">
                <h1 className="heroheading">We are Committed to Your Care at Home</h1>
              <p className="hero-content_text">Our Goal is To provide our clients with excellent, dependable and affordable home care solutions.</p>
                </div>
                <div className="col-md-5">
                <Image alt='about' name='client.png' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
export default AboutHero
