import React from "react";
//import themes
import "./About.css";
import "../../themes/global.css";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
//import active section
import { activeIndex } from "../../App";

var activateAnim = false;

const exitDuration = 1;

const Home = () => {
  if (activeIndex === 0) {
    activateAnim = true;
  } else {
    activateAnim = false;
  }
  return (
    <div className="full-container-1">
      <div className="text-container">
        <div className="tacky-container-1"></div>
        <div className="tacky-container-2"></div>
      </div>
    </div>
  );
};

export default Home;
