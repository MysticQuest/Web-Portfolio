import React from "react";
//import themes
import "./About.css";
import "../../themes/global.css";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
//import active section
import { activeIndex } from "../../App";
//import icons or images
import unity from "../../images/unity.png";

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
      <div className="text-container-about">
        <div className="tacky-container-1">
          <div className="subtext-skills">
            <p className="mini-header-about">
              The projects I've worked on include the following languages and
              tools:
            </p>
            <p className="about3">C#</p>
            <p className="about3">Javascript</p>
            <p className="about3">HTML</p>
            <p className="about3">CSS</p>
            <p className="about3">Python</p>
            <p className="about3">
              <img className="skill-image" src={unity} alt="unity"></img>
            </p>
            <p className="about3">NodeJs</p>
            <p className="about3">ReactJs</p>
            <p className="about3">Express</p>
            <p className="about3">Anaconda</p>
            <p className="about3">Git</p>
            <p className="about3">Blender</p>
            <p className="about3">MongoDB</p>
            <p className="about3">SQLite</p>
            <p className="about3">SQLite</p>
            <p className="about3">SQLite</p>
            <p className="about3">SQLite</p>
          </div>
        </div>
        <div className="tacky-container-2">
          <div className="subtext-info">
            <p className="mini-header-about">This site was built with:</p>
            <p className="about3">ReactJs</p>
            <p className="about3">Material UI</p>
            <p className="mini-header-about">Plugins:</p>
            <p className="about3">FullpageJs</p>
            <p className="about3">ParticlesJs</p>
            <p className="mini-header-about">Icons:</p>
            <p className="about3">MUI</p>
            <p className="about3">Font Awesome</p>
            <p className="mini-header-about">Background art:</p>
            <p className="about3">Firewatch</p>
            <p className="mini-header-about">Source code:</p>
            <p className="about3">Githubicon</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
