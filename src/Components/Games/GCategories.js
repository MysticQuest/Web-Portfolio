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
//import my components
import Games from "./Games";
import Misc from "./Misc";
//import active section
import { activeIndex } from "../../App";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import //   faHtml5,
// faJsSquare,
// faPython,
// faGitAlt,
// faCss3,
//   faReact,
//   faNodeJs
"@fortawesome/free-brands-svg-icons";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import uniIcon from "../../images/uniIcon.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
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
    minHeight: "760px",
    // display: "table",
    // backgroundColor: theme.palette.background.paper,#003973 #E5E5BE
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    borderRadius: "0 0 10px 10px"
  },
  tabBar: {
    backgroundColor: "rgba(0, 0, 0, 0.01)",
    // background:
    //   "linear-gradient(to bottom, rgba(0, 57, 115, 0.2), rgba(229, 229, 190, 0.2))",
    color: "white"
  },
  tab: { textTransform: "none !important" },
  indicator: {
    backgroundColor: " rgba(5,45,129,0.6)"
    // filter: "drop-shadow(-6px 4px 2px black)"
  },
  tab1: {
    fontSize: "calc(17px + 0.4vw)",
    fontFamily: "Acme",
    // fontStyle: "oblique",
    textTransform: "none !important",
    fontWeight: "bold",
    filter: "drop-shadow(-2px 2px 2px black)"
    // filter: "drop-shadow(-6px 4px 2px black)"
  },
  tab2: {
    fontSize: "calc(17px + 0.4vw)",
    fontFamily: "Acme",
    fontStyle: "oblique",
    textTransform: "none !important",
    fontWeight: "bold",
    filter: "drop-shadow(-2px 2px 2px black)"
  },
  tab3: {
    fontSize: "calc(17px + 0.4vw)",
    fontFamily: "Acme",
    fontStyle: "oblique",
    textTransform: "none !important",
    fontWeight: "bold",
    filter: "drop-shadow(-2px 2px 2px black)"
  }
  //   uniIcon: { marginTop: "5px", height: "40px", width: "40px" }
}));

const exitDuration = 1;
var activateAnim = false;

export default function GameCategories() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = index => {
    setValue(index);
  };

  if (activeIndex === 2) {
    activateAnim = true;
  }

  return (
    <div className="full-container-projects">
      <Fade
        timeout={{ enter: 300, exit: exitDuration }}
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
                className={classes.tab1}
                label={
                  <span>
                    <img
                      className={uniIcon}
                      style={{
                        height: "calc(25px + 1vw)",
                        width: "calc(25px + 1vw)",
                        verticalAlign: "bottom"
                      }}
                      src={uniIcon}
                      alt="unity3d"
                    />
                    <span>&nbsp;</span>Unity
                  </span>
                }
                {...a11yProps(0)}
              />
              <Tab
                className={classes.tab2}
                label={
                  <span>
                    <FontAwesomeIcon icon={faPalette} />
                    <span>&nbsp;</span>Extras
                  </span>
                }
                {...a11yProps(1)}
              />
              {/* <Tab
                className={classes.tab3}
                label={
                  <span>
                    <FontAwesomeIcon icon={faHtml5} />
                    <span>&nbsp;</span>Web Misc
                  </span>
                }
                {...a11yProps(2)}
              /> */}
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <Games />
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
              <Misc />
            </TabPanel>
            {/* <TabPanel value={value} index={2} dir={theme.direction}>
              <Games />
            </TabPanel> */}
          </SwipeableViews>
        </div>
      </Fade>
    </div>
  );
}
