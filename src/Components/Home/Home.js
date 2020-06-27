import React from "react";
//import themes
import "./Home.css";
import "../../myThemes/global.css";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
//import active section
import { activeIndex } from "../../App";

var activateAnim = false;
var permaAnim = false;
const exitDuration = 1;

const Home = () => {
  if (activeIndex === 0) {
    activateAnim = true;
    permaAnim = activateAnim;
  } else {
    activateAnim = false;
  }

  return (
    <div className="full-container-1">
      <Fade
        timeout={{ enter: 1000, exit: exitDuration }}
        direction="right"
        in={activateAnim}
        style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
      >
        <div className="text-container-home">
          <div className="header-container">
            <Fade
              timeout={{ enter: 4000, exit: exitDuration }}
              direction="right"
              in={permaAnim}
              style={{ transitionDelay: permaAnim ? "0ms" : "0ms" }}
            >
              <div>
                <Slide
                  timeout={{ enter: 2500, exit: exitDuration }}
                  direction="right"
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "0ms" : "0ms" }}
                >
                  <p className="home1">Welcome</p>
                </Slide>
              </div>
            </Fade>
            <Fade
              timeout={{ enter: 4000, exit: exitDuration }}
              direction="right"
              in={permaAnim}
              style={{ transitionDelay: permaAnim ? "0ms" : "0ms" }}
            >
              <div>
                <Slide
                  timeout={{ enter: 2500, exit: exitDuration }}
                  direction="left"
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "0ms" : "0ms" }}
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
              in={permaAnim}
              style={{ transitionDelay: permaAnim ? "2500ms" : "0ms" }}
            >
              <div className="readability-container1">
                <p className="home3">
                  Hello, I am Kiriakos, a software developer who enjoys
                  bringing various projects into existence, including web pages,
                  applications and video games. <br></br>This site has been created with
                  ReactJs, Fullpage.js and MaterialUI.
                  It is currently a work in progress and not properly hosted yet.
                </p>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  direction="right"
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "3500ms" : "0ms" }}
                >
                  <p className="home3">
                    <br />
                    Visit the following sections to
                    view my projects
                    {/* Visit <span className="highlight">Section 2 & 3 </span> to
                    view my projects */}
                  </p>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  direction="right"
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "4000ms" : "0ms" }}
                >
                  <p className="home3">
                    Or the <span className="highlight">"About"</span> section to view a skill summary.
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
      </Fade>
    </div>
  );
};

export default Home;
