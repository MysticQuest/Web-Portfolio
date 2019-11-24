import React from "react";
//import themes
import "./About.css";
import "../../themes/global.css";
//mui components
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
//import Button from "@material-ui/core/Button";
//import Link from "@material-ui/core/Link";
import Zoom from "@material-ui/core/Zoom";
import Fade from "@material-ui/core/Fade";
//import active section
import { activeIndex } from "../../App";
//import icons or images
import GitHubIcon from "@material-ui/icons/GitHub";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import unity from "../../images/unity.png";
import {
  faHtml5,
  faJsSquare,
  faPython,
  faGitAlt,
  faCss3,
  faReact,
  faNodeJs
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

var activateAnim = false;
var permaAnim = false;
const link = "https://github.com/MysticQuest/Web-Portfolio";
const exitDuration = 1;

const Home = () => {
  if (activeIndex === 3) {
    activateAnim = true;
    permaAnim = activateAnim;
  } else {
    activateAnim = false;
  }
  if (activeIndex === 3) {
    permaAnim = true;
  }

  return (
    <div className="full-container-1">
      <div className="text-container-about">
        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <div className="tacky-container-1">
            <Fade
              timeout={{ enter: 1000, exit: exitDuration }}
              in={permaAnim}
              style={{ transitionDelay: permaAnim ? "300ms" : "0ms" }}
            >
              <div className="subtext-skills">
                <p className="mini-header-about">
                  The projects I've worked on include the following languages
                  and tools:
                </p>
                <br />
                <Grid container spacing={3}>
                  <Grid item xs={6} sm={4}>
                    <p className="about3 sharp">C#</p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faJsSquare} />
                      <span>&nbsp;</span>Javascript
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faPython} />
                      <span>&nbsp;</span>Python
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faHtml5} />
                      <span>&nbsp;</span>HTML
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faCss3} />
                      <span>&nbsp;</span>CSS
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <img
                        className="skill-image"
                        src={unity}
                        alt="unity"
                      ></img>
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faNodeJs} />
                      <span>&nbsp;</span>NodeJs
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faReact} />
                      <span>&nbsp;</span>ReactJs
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">Express</p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faPython} />
                      <span>&nbsp;</span>Anaconda
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faGitAlt} />
                      <span>&nbsp;</span>Git
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={4}>
                    <p className="about3">Blender</p>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faDatabase} />
                      <span>&nbsp;</span>MongoDB
                    </p>
                  </Grid>
                  <Grid item xs={6} sm={6}>
                    <p className="about3">
                      <FontAwesomeIcon icon={faDatabase} />
                      <span>&nbsp;</span>SQLite
                    </p>
                  </Grid>
                </Grid>
              </div>
            </Fade>
          </div>
        </Zoom>
        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "200ms" : "0ms" }}
        >
          <div className="tacky-container-2">
            <div className="subtext-info">
              <Grid container spacing={1}>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "800ms" : "0ms" }}
                >
                  <Grid item xs={12} sm={12}>
                    <p className="mini-header-about">
                      This site was built with:
                    </p>
                    <p className="about3">ReactJs</p>
                    <p className="about3">Material UI</p>
                  </Grid>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "2300ms" : "0ms" }}
                >
                  <Grid item xs={6} sm={6}>
                    <p className="mini-header-about">Plugins:</p>
                    <p className="about3">FullpageJs</p>
                    <p className="about3">ParticlesJs</p>
                  </Grid>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "2300ms" : "0ms" }}
                >
                  <Grid item xs={6} sm={6}>
                    <p className="mini-header-about">Icons:</p>
                    <p className="about3">Font Awesome</p>
                    <p className="about3">MUI</p>
                  </Grid>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "3300ms" : "0ms" }}
                >
                  <Grid item xs={6} sm={6}>
                    <p className="mini-header-about">Background art:</p>
                    <p className="about3">Firewatch</p>
                  </Grid>
                </Fade>
                <Fade
                  timeout={{ enter: 2000, exit: exitDuration }}
                  in={permaAnim}
                  style={{ transitionDelay: permaAnim ? "3300ms" : "0ms" }}
                >
                  <Grid item xs={6} sm={6}>
                    <p className="mini-header-about">Source code:</p>
                    <p className="about3">
                      <IconButton
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="source"
                        color="inherit"
                      >
                        <GitHubIcon />
                      </IconButton>
                    </p>
                  </Grid>
                </Fade>
              </Grid>
            </div>
          </div>
        </Zoom>
      </div>
    </div>
  );
};

export default Home;
