import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import CVIcon from "@material-ui/icons/AssignmentIndRounded";
import { makeStyles } from "@material-ui/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";

const useStyles = makeStyles(theme => ({
    LinkedIn: {
        fontSize: "3rem",
        position: "fixed",
        zIndex: 10000,
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
        zIndex: 10000,
        color: "white",
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
        zIndex: 10000,
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
        zIndex: 10000,
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
    }
}));

const gitLink = "https://github.com/MysticQuest?tab=repositories";
const linLink = "https://www.linkedin.com/in/kmls/";
const cvLink = "https://drive.google.com/file/d/1X9f93hcL8eMQwYAkdxj7OTFcmipotRji/view?usp=share_link";

const Icons = () => {
    const classes = useStyles();

    return (
        <div>
            <a href={linLink} target="_blank" rel="noopener noreferrer">
                <Tooltip title="LinkedIn" placement="bottom" TransitionComponent={Zoom} classes={{ tooltip: classes.tooltip }}>
                    <LinkedInIcon className={classes.LinkedIn} />
                </Tooltip>
            </a>

            <a href="mailto:kirimns@gmail.com" target="_blank" rel="noopener noreferrer">
                <Tooltip title="Send me an E-Mail" placement="bottom" TransitionComponent={Zoom} classes={{ tooltip: classes.tooltip }}>
                    <EmailIcon className={classes.Mail} />
                </Tooltip>
            </a>

            <a href={gitLink} target="_blank" rel="noopener noreferrer">
                <Tooltip title="GitHub" placement="bottom" TransitionComponent={Zoom} classes={{ tooltip: classes.tooltip }}>
                    <GitHubIcon className={classes.Git} />
                </Tooltip>
            </a>

            <a href={cvLink} target="_blank" rel="noopener noreferrer">
                <Tooltip title="Download my CV" placement="bottom" TransitionComponent={Zoom} classes={{ tooltip: classes.tooltip }}>
                    <CVIcon className={classes.Cv} />
                </Tooltip>
            </a>
        </div>
    );
};

export default Icons;
