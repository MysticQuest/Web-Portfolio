import React from "react";
// import PropTypes from "prop-types";
// import AppBar from "@material-ui/core/AppBar";
// import CssBaseline from "@material-ui/core/CssBaseline";
//import Divider from "@material-ui/core/Divider";
// import Drawer from "@material-ui/core/Drawer";
// import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
// import Toolbar from "@material-ui/core/Toolbar";
import "./Navigation.css";
// import { activeSection } from "../App";
//import THEMES
// import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import fontTheme1 from "../themes/barFonts.js";
//import ICONS
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
// import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
// import MenuIcon from "@material-ui/icons/Menu";
// import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import ListItemIcon from "@material-ui/core/ListItemIcon";
//import css
import "./NavList.css";
//active function
import { activeSection } from "../App";

const useStyles = makeStyles(theme => ({
  listItems: {
    margin: "0 0 0 0",
    padding: "3.5vh 0 1vh 0",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
      padding: "7.5vh 0 3vh 0"
    }
  },
  listText: {
    padding: "0 0 3vh 0"
  },
  listIcons: {
    minWidth: "33px",
    color: "rgba(250, 250, 250, 0.4)",
    transform: "scale(1.5)",
    paddingLeft: "0.5vh",
    paddingBottom: "0.5vh"
  }
}));

const NavList = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={fontTheme1}>
      <List id="menu">
        <ListItem
          data-menuanchor={"firstPage"}
          className={classes.listItems}
          button
          key="1"
        >
          <ListItemIcon key="1a" className={classes.listIcons}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            id={"test"}
            className={classes.listText}
            wrap="true"
            primary="Home"
          />
        </ListItem>

        <ListItem
          data-menuanchor={"secondPage"}
          className={classes.listItems}
          button
          key="1b"
        >
          <ListItemIcon key={"test"} className={classes.listIcons}>
            <AccountBalanceIcon />
          </ListItemIcon>

          <ListItemText
            id={"test"}
            className={classes.listText}
            wrap="true"
            primary={"Projects"}
          />
        </ListItem>

        <ListItem
          data-menuanchor={"thirdPage"}
          className={classes.listItems}
          button
          key={"test"}
        >
          <ListItemIcon key={"test"} className={classes.listIcons}>
            <VideogameAssetIcon />
          </ListItemIcon>

          <ListItemText
            id={"test"}
            className={classes.listText}
            wrap="true"
            primary={"Games"}
          />
        </ListItem>

        <ListItem
          data-menuanchor={"fourthPage"}
          className={classes.listItems}
          button
          key={"test"}
        >
          <ListItemIcon key={"test"} className={classes.listIcons}>
            <InfoIcon />
          </ListItemIcon>

          <ListItemText
            id={"test"}
            className={classes.listText}
            wrap="true"
            primary={"About"}
          />
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

export default NavList;
