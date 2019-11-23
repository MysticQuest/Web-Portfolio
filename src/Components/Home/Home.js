import React from "react";
//import themes
import "./Home.css";
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
      <div className="text-container-home">
        <div className="header-container">
          <Fade
            timeout={{ enter: 4000, exit: exitDuration }}
            direction="right"
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
          >
            <div>
              <Slide
                timeout={{ enter: 2500, exit: exitDuration }}
                direction="right"
                in={activateAnim}
                style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
              >
                <p className="home1">Welcome</p>
              </Slide>
            </div>
          </Fade>
          <Fade
            timeout={{ enter: 4000, exit: exitDuration }}
            direction="right"
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
          >
            <div>
              <Slide
                timeout={{ enter: 2500, exit: exitDuration }}
                direction="left"
                in={activateAnim}
                style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
              >
                <p className="home-subhead">
                  to my <span className="highlight">portfolio</span>
                </p>
              </Slide>
            </div>
          </Fade>
        </div>
        {/* <div className="subtext-container"> */}
        <div className="misc-text">
          <Fade
            timeout={{ enter: 2000, exit: exitDuration }}
            direction="right"
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "2500ms" : "0ms" }}
          >
            <div className="readability-container1">
              <p className="home3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                tempor augue risus, ut tempor dolor tincidunt eu. Suspendisse
                hendrerit lacus enim, a tempus ante sollicitudin eu. Vivamus
                porta dapibus egestas.
              </p>
              <Fade
                timeout={{ enter: 2000, exit: exitDuration }}
                direction="right"
                in={activateAnim}
                style={{ transitionDelay: activateAnim ? "3500ms" : "0ms" }}
              >
                <p className="home3">
                  <br />
                  Visit <span className="highlight">Section 2 & 3 </span> to
                  view my projects
                </p>
              </Fade>
              <Fade
                timeout={{ enter: 2000, exit: exitDuration }}
                direction="right"
                in={activateAnim}
                style={{ transitionDelay: activateAnim ? "4000ms" : "0ms" }}
              >
                <p className="home3">
                  Or <span className="highlight">Section 4</span> to learn more
                  about me
                </p>
              </Fade>
            </div>
          </Fade>
        </div>
        {/* <Slide
            timeout={{ enter: 2000, exit: exitDuration }}
            direction="right"
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "3000ms" : "0ms" }}
          >
            <div className="slider-bugfix">
              <p className="home2">Site Contents:</p>
            </div>
          </Slide>
          <Fade
            timeout={{ enter: 3000, exit: exitDuration }}
            direction="right"
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "4500ms" : "0ms" }}
          >
            <div className="readability-container2">
              <ul className="home3">
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  direction="right"
                  in={activateAnim}
                  style={{ transitionDelay: activateAnim ? "5000ms" : "0ms" }}
                >
                  <li>
                    <span className="highlight">Section 1</span>: This
                  </li>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  direction="right"
                  in={activateAnim}
                  style={{ transitionDelay: activateAnim ? "5500ms" : "0ms" }}
                >
                  <li>
                    <span className="highlight">Section 2</span>: Web Projects
                    etc etc etc
                  </li>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  direction="right"
                  in={activateAnim}
                  style={{ transitionDelay: activateAnim ? "6000ms" : "0ms" }}
                >
                  <li>
                    <span className="highlight">Section 3</span>: Game Projects
                    with Unity3D
                  </li>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  direction="right"
                  in={activateAnim}
                  style={{ transitionDelay: activateAnim ? "6500ms" : "0ms" }}
                >
                  <li>
                    <span className="highlight">Section 4</span>: Information
                    about myself
                  </li>
                </Fade>
              </ul>
            </div>
          </Fade> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
