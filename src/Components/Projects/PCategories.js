import React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Slide from "@material-ui/core/Slide";
//import my components
import WebReact from "./WebReact";
import WebBack from "./WebBack";
import WebMisc from "./WebMisc";
import Extras from "./Extras";
//import active section
import { preActiveIndex } from "../../App";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faFolderOpen } from "@fortawesome/free-solid-svg-icons";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <Fade
      timeout={{ enter: 500, exit: 500 }}
      in={Boolean(value === index)}
      style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
    >
      <Typography
        className={classes.tabPanel}
        component="div"
        role="tabpanel"
        // hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        <Box p={3}>{children}</Box>
      </Typography>
    </Fade>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    // [theme.breakpoints.up("md")]: {
    //   paddingLeft: "1vh",
    //   paddingRight: "1vh"
    // },
    // display: "table",
    // minHeight: "760px",
    // backgroundColor: theme.palette.background.paper,#003973 #E5E5BE
    // boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    // marginTop: "8vh",
    marginTop: "70px",
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    borderRadius: "5px 5px 5px 5px"
    // boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)"
    //0.5
  },
  tabPanel: {},
  panel: {
    backgroundColor: "rgba(0, 0, 0, 0.0)",
    // boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",

    // background:
    //   "linear-gradient(to bottom, rgba(0, 57, 115, 0.4), rgba(229, 229, 190, 0.2))",
    "&:after": {
      filter: "blur(2px)"
    }
  },
  tabBar: {
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    overflow: "hidden",
    // background:
    //   "linear-gradient(to bottom, rgba(0, 57, 115, 0.2), rgba(229, 229, 190, 0.2))",
    color: "white",
    borderRadius: "5px 5px 5px 5px"
  },
  tab: {},
  indicator: {
    backgroundColor: "rgba(255,255,255,0.07)",
    // backgroundColor: "rgba(255,252,76,0.07)",
    // background:
    //   "radial-gradient(circle, rgba(206,255,0,0.1) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
    // background:
    //   "radial-gradient(circle, rgba(0,219,255,0.25) 0%, rgba(0,0,0,0) 100%, rgba(0,0,0,0) 100%)",
    height: "100%"
    // filter: "drop-shadow(-6px 4px 2px black)"
  },
  tabContent: {
    // boxShadow: "0 1px 1px rgba(0,0,0,0.19), 0 1px 1px rgba(0,0,0,0.23)",
    fontSize: "calc(17px + 0.4vw)",
    fontFamily: "Acme",
    // fontStyle: "oblique",
    textTransform: "none !important",
    fontWeight: "bold",
    filter: "drop-shadow(-2px 2px 2px black)"
    // filter: "drop-shadow(-6px 4px 2px black)"
  }
}));

var activateAnim = false;

export default function ProjectCategories() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  if (preActiveIndex === 1) {
    activateAnim = true;
  } else {
    activateAnim = false;
  }

  return (
    <div className="full-container-projects">
      <Slide
        direction="left"
        timeout={{ enter: 900, exit: 900 }}
        in={activateAnim}
        style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
      >
        <div className={classes.root}>
          <AppBar className={classes.tabBar} position="static" color="default">
            <Tabs
              className={classes.tab}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              classes={{
                indicator: classes.indicator
              }}
              // textColor="primary"
              variant="fullWidth"
              aria-label="project categories"
            >
              <Tab
                className={classes.tabContent}
                label={
                  <span>
                    <FontAwesomeIcon icon={faReact} />
                    <span>&nbsp;</span>React
                  </span>
                }
                {...a11yProps(0)}
              />
              <Tab
                className={classes.tabContent}
                label={
                  <span>
                    <FontAwesomeIcon icon={faNodeJs} />
                    <span>&nbsp;</span>Node
                  </span>
                }
                {...a11yProps(1)}
              />
              <Tab
                className={classes.tabContent}
                label={
                  <span>
                    <FontAwesomeIcon icon={faHtml5} />
                    <span>&nbsp;</span>Web Misc
                  </span>
                }
                {...a11yProps(2)}
              />
              <Tab
                className={classes.tabContent}
                label={
                  <span>
                    <FontAwesomeIcon icon={faFolderOpen} />
                    <span>&nbsp;</span>Other
                  </span>
                }
                {...a11yProps(2)}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel
              className={classes.panel}
              value={value}
              index={0}
              dir={theme.direction}
            >
              <WebReact />
            </TabPanel>
            <TabPanel
              className={classes.panel}
              value={value}
              index={1}
              dir={theme.direction}
            >
              <WebBack />
            </TabPanel>
            <TabPanel
              className={classes.panel}
              value={value}
              index={2}
              dir={theme.direction}
            >
              <WebMisc />
            </TabPanel>
            <TabPanel
              className={classes.panel}
              value={value}
              index={3}
              dir={theme.direction}
            >
              <Extras />
            </TabPanel>
          </SwipeableViews>
        </div>
      </Slide>
    </div>
  );
}
