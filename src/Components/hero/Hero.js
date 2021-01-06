import React from "react";
import { Link } from "gatsby";
import Image from "../images";
import BackgroundImages from "../BackgroundImage";
import Button from "../Buttons/Button";

import "./hero.css";

const Hero = ({ topText, largeHeading, buttonText, image }) => {
  return (
    <BackgroundImages class="hero" name={image}>
      <div class="hero-container overlay">
        <div className="container">
          <div className="row">
            <div className="col-md-9 col-12">
              <p class="animate fadeInLeft delay-400">
                <span>{topText}</span>
              </p>
              <h1 class="hero-title animate fadeInLeft delay-600">
                <span>{largeHeading}</span>
              </h1>
              <Button btnLink="/" btnClass="button-press" buttonText="About" />

              <Button
                btnLink="/"
                btnClass="button-contact"
                buttonText={"Contact"}
              />
            </div>
            <div className="col-md-3 col-12 my-auto 	d-none d-md-block">
              <Image name="dream" />
            </div>
          </div>
        </div>
      </div>
    </BackgroundImages>
  );
};

export default Hero;
