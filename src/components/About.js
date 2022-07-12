import React from "react";
import { image } from "../data/data";
import {name, city} from "../data/data"

function About() {
  return (
  <div id="about">
    <h2>About Me</h2>
    <p>This is a trial JSX by {name} from {city}</p>
    <img src={image} alt = "I made this"/> 
  </div>
  );
}

export default About;
