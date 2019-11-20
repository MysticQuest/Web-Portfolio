import React from "react";
//MUI components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
//import theming
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import fontTheme1 from "../../themes/barFonts.js";
//import ICONS
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ListItemIcon from "@material-ui/core/ListItemIcon";
//import css
import "./NavList.css";
//active section function
//import { activeSection } from "../App";

const useStyles = makeStyles(theme => ({
  listItems: {
    margin: "0 0 0 0",
    padding: "3.5vh 0 1vh 0",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "6.5vh 0 2.5vh 0"
    }
  },
  listText: {
    padding: "0 0 3vh 0"
  },
  listIcons: {
    minWidth: "33px",
    color: "rgba(250, 250, 250, 0.4)",
    transform: "scale(1.5)",
    paddingLeft: "0.7vh",
    paddingBottom: "0.5vh"
  },
  videoGameIcon: {
    transform: "scale(1.1)"
  },
  toolTips: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 550,
    // maxHeight: 100,
    fontSize: theme.typography.pxToRem(16),
    border: "1px solid #dadde9",
    // transform: "translate(100px, 200px) rotate(50deg)"
    // transform: "translate(50%,90%)"
    marginLeft: "23vw",
    marginTop: "90vh"
  }
}));

const homeTT =
  "This the description for home This the description for home This the description for home This the description for home This the description for home ";

const NavList = () => {
  const classes = useStyles();
  // var coolDown = false;
  // console.log(coolDown);

  return (
    <ThemeProvider theme={fontTheme1}>
      <List id="menu">
        <Tooltip
          classes={{ tooltip: classes.toolTips }}
          TransitionComponent={Zoom}
          title={homeTT}
          placement="right"
        >
          <ListItem
            onClick={() => window.fullpage_api.moveTo("firstPage")}
            data-menuanchor={"firstPage"}
            className={classes.listItems}
            button
            key="1"
          >
            <ListItemIcon key="1a" className={classes.listIcons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText
              className={classes.listText}
              wrap="true"
              primary="Home"
            />
          </ListItem>
        </Tooltip>
        <Tooltip
          classes={{ tooltip: classes.toolTips }}
          TransitionComponent={Zoom}
          title={homeTT}
          placement="right"
        >
          <ListItem
            onClick={() => window.fullpage_api.moveTo("secondPage")}
            data-menuanchor={"secondPage"}
            className={classes.listItems}
            button
            key="2"
          >
            <ListItemIcon key="2a" className={classes.listIcons}>
              <AccountBalanceIcon />
            </ListItemIcon>

            <ListItemText
              className={classes.listText}
              wrap="true"
              primary={"Projects"}
            />
          </ListItem>
        </Tooltip>
        <Tooltip
          classes={{ tooltip: classes.toolTips }}
          TransitionComponent={Zoom}
          title={homeTT}
          placement="right"
        >
          <ListItem
            onClick={() => window.fullpage_api.moveTo("thirdPage")}
            data-menuanchor={"thirdPage"}
            className={classes.listItems}
            button
            key="3"
          >
            <ListItemIcon key="3a" className={classes.listIcons}>
              <VideogameAssetIcon className={classes.videoGameIcon} />
            </ListItemIcon>

            <ListItemText
              className={classes.listText}
              wrap="true"
              primary={"Games"}
            />
          </ListItem>
        </Tooltip>
        <Tooltip
          classes={{ tooltip: classes.toolTips }}
          TransitionComponent={Zoom}
          title={homeTT}
          placement="right"
        >
          <ListItem
            onClick={() => window.fullpage_api.moveTo("fourthPage")}
            data-menuanchor={"fourthPage"}
            className={classes.listItems}
            button
            key="4"
          >
            <ListItemIcon key="4a" className={classes.listIcons}>
              <InfoIcon />
            </ListItemIcon>

            <ListItemText
              className={classes.listText}
              wrap="true"
              primary={"About"}
            />
          </ListItem>
        </Tooltip>
      </List>
    </ThemeProvider>
  );
};

export default NavList;
