import React from "react";
import { Link } from "gatsby";
import "./buttons.css";
const Button = ({ btnClass, buttonText, btnLink }) => {
  return (
    <Link
      to={btnLink}
      className={`${btnClass} animate fadeInLeft delay-800`}
      title={buttonText}
    >
      {btnClass === "button-press" ? buttonText : <span>{buttonText}</span>}
    </Link>
  );
};

export default Button;
