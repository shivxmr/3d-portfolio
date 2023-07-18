import React from "react";
import "./AnimatedText.css"; // Stylesheet

const AnimatedText = ({ text }) => {
  return <span className="animation-gradient text-7xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">{text}</span>;
};

export default AnimatedText;
