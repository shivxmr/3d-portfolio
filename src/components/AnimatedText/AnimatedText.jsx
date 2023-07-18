import React from "react";
import "./AnimatedText.css"; // Stylesheet

const AnimatedText = ({ text }) => {
  return <span className="animation-gradient">{text}</span>;
};

export default AnimatedText;
