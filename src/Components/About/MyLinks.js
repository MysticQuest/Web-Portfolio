import React from "react";
//import icons
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import CVIcon from "@material-ui/icons/AssignmentIndRounded";

// import VerticalAlignBottomIcon from "@material-ui/icons/VerticalAlignBottom";
//import mui
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

//import "../../themes/animate.css";
import "../../myThemes/global.css";
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
  Cv: {
    fontSize: "3rem",
    position: "fixed",
    zIndex: "1",
    color: "white",
    top: "6px",
    right: "175px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      filter: "drop-shadow(1px 1px 2px black)",
      color: "lightblue"
    }
  },
  tooltip: {
    fontSize: 16,
    backgroundColor: "#496dfc"
    // margin: "0"
  },

  linkContainer: {
    // mixBlendMode: "difference",
    // zIndex: "999"
  }
}));

const gitLink = "https://github.com/MysticQuest?tab=repositories";
const linLink = "https://www.linkedin.com/in/kmls/";
const cvLink = "https://drive.google.com/file/d/1GEegzZSThiPIX-iTFTFkymN3W7Yy9qsV/view?usp=share_link"

const Icons = () => {
  const classes = useStyles();

  return (
    <div className={classes.linkContainer}>
      <a target="_blank" rel="noopener noreferrer" href={linLink}>

        <LinkedInIcon className={classes.LinkedIn} />

      </a>

      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:kirimns@gmail.com"
      >
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          TransitionComponent={Zoom}
          title="Send me an E-Mail"
          placement="bottom"
        >
          <EmailIcon className={classes.Mail} />
        </Tooltip>
      </a>

      <a target="_blank" rel="noopener noreferrer" href={gitLink}>

        <GitHubIcon className={classes.Git} />

      </a>

      <a target="_blank" rel="noopener noreferrer" href={cvLink}>
        <Tooltip
          classes={{ tooltip: classes.tooltip }}
          TransitionComponent={Zoom}
          title="Download my CV"
          placement="bottom"
        >
          <CVIcon className={classes.Cv} />
        </Tooltip>
      </a>
    </div>
  );
};

export default Icons;
