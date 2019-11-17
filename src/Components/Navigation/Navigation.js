import React from "react";
//import MUI components
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import Toolbar from "@material-ui/core/Toolbar";
import "./Navigation.css";
//import theming
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
//import ICONS
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
//my components
import NavList from "./NavList";
//my hooks
// import { useInterval } from "../hooks/useInterval";

const drawerWidth = 120;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    backgroundColor: "rgba(51, 4, 4, 0.01)",
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      display: "none"
    }
  },
  menuButton: {
    marginRight: theme.spacing(1),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,

  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    color: "white",
    flexGrow: 1,
    padding: "0 0 0 0"
  },
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
    paddingLeft: "0.5vh"
  },
  customActiveElement: {
    color: "brown",
    transform: "scale(1.5)",
    padding: "15vh",
    margin: "15vh",
    flexDirection: "row",
    maxWidth: "15px",
    textDecoration: "underline"
  }
}));

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  //cooldown timer
  // const coolDown = timer => {
  //   x = timer;
  //   const navClickCD = setInterval(function() {
  //     timer--;
  //     x = timer;
  //     if (timer <= 0) {
  //       clearInterval(navClickCD);
  //     }
  //     console.log(timer);
  //   }, 1000);
  //   return timer;
  // };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <NavList />
    </div>
  );

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            trash ui
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  container: PropTypes.instanceOf(
    typeof Element === "undefined" ? Object : Element
  )
};

export default ResponsiveDrawer;
