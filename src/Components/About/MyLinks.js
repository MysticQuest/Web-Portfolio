import React from "react";
//import icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
//import themes
//import "../../themes/animate.css";
import "../../themes/global.css";
import "./MyLinks.css";
import { makeStyles } from "@material-ui/styles";
//import active section
//import { activeIndex } from "../../App";

const useStyles = makeStyles(theme => ({
  LinkedIn: {
    fontSize: "3rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    top: "5px",
    right: "10px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "drop-shadow(0 1px 2px black)",
      color: "lightblue"
    }
  },
  Mail: {
    fontSize: "3rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    // mixBlendMode: "difference",
    // filter: "grayscale(1)",
    top: "5px",
    right: "65px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "drop-shadow(1px 1px 2px black)",
      color: "lightblue"
    }
  },
  Git: {
    fontSize: "2.5rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    top: "9px",
    right: "125px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "drop-shadow(1px 1px 2px black)",
      color: "lightblue"
    }
  },
  linkContainer: {
    // mixBlendMode: "difference",
    // zIndex: "999"
  }
}));

const gitLink = "https://github.com/MysticQuest?tab=repositories";

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={classes.linkContainer}>
      <LinkedInIcon className={classes.LinkedIn} />
      <AlternateEmailIcon className={classes.Mail} />

      <a target="_blank" rel="noopener noreferrer" href={gitLink}>
        <GitHubIcon className={classes.Git} />
      </a>
    </div>
  );
};

export default Icons;
