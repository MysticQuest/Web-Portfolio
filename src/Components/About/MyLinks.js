import React from "react";
//import icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import AlternateEmailIcon from "@material-ui/icons/AlternateEmail";
import GitHubIcon from "@material-ui/icons/GitHub";
//import themes
import "../../themes/animate.css";
import "../../themes/global.css";
import "./MyLinks.css";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
  LinkedIn: {
    fontSize: "3rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    top: "5px",
    right: "10px"
  },
  Mail: {
    fontSize: "3rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    top: "5px",
    right: "65px"
  },
  Git: {
    fontSize: "2.5rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    top: "9px",
    right: "125px"
  }
}));

const Icons = () => {
  const classes = useStyles();
  return (
    <div>
      <LinkedInIcon className={classes.LinkedIn} />
      <AlternateEmailIcon className={classes.Mail} />

      <a href="https://github.com/MysticQuest?tab=repositories">
        <GitHubIcon className={classes.Git} />
      </a>
    </div>
  );
};

export default Icons;
