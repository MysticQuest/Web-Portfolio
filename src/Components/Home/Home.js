import React from "react";
//import themes
import "./Home.css";
import "../../themes/global.css";
//import Fade from "@material-ui/core/Fade";
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
        <div className="header-container">
          <Slide
            timeout={{ enter: 1000, exit: exitDuration }}
            direction="right"
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
          >
            <div>
              <p className="home1">Welcome</p>
              <p className="home-subhead">
                to my <span className="highlight">portfolio</span>
              </p>
            </div>
          </Slide>
        </div>
        <Slide
          timeout={{ enter: 1500, exit: exitDuration }}
          direction="right"
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <div className="readability-container">
            <p className="home3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tempor augue risus, ut tempor dolor tincidunt eu. Suspendisse
              hendrerit lacus enim, a tempus ante sollicitudin eu. Vivamus porta
              dapibus egestas.
            </p>
          </div>
        </Slide>
        <Slide
          timeout={{ enter: 2000, exit: exitDuration }}
          direction="right"
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <p className="home2">Site Contents:</p>
        </Slide>
        <Slide
          timeout={{ enter: 2500, exit: exitDuration }}
          direction="right"
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <div className="readability-container">
            <ul className="home3">
              <li>Section 1: Introduction</li>
              <li>Section 2: Web Projects etc etc etc</li>
              <li>Section 3: Game Projects with Unity3D</li>
              <li>Section 4: Information about myself and the site</li>
            </ul>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Home;
