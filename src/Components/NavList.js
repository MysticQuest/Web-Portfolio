import React from "react";
//MUI components
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
//import theming
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import fontTheme1 from "../themes/barFonts.js";
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

        <ListItem
          onClick={() => window.fullpage_api.moveTo("thirdPage")}
          data-menuanchor={"thirdPage"}
          className={classes.listItems}
          button
          key="3"
        >
          <ListItemIcon key="3a" className={classes.listIcons}>
            <VideogameAssetIcon />
          </ListItemIcon>

          <ListItemText
            className={classes.listText}
            wrap="true"
            primary={"Games"}
          />
        </ListItem>

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
      </List>
    </ThemeProvider>
  );
};

export default NavList;
