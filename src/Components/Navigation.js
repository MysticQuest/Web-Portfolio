import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
//import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./Navigation.css";
//import THEMES
import fontTheme1 from "../Themes/barFonts.js";
//import ICONS
import VideogameAssetIcon from "@material-ui/icons/VideogameAsset";
import MailIcon from "@material-ui/icons/Mail";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";

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
    color: "rgba(250, 250, 250, 0.6)",
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

// const activeIndex = window.fullpage_api.getActiveSection().index;
// const currentIndex = 3;

// const detectActive = ({ classes }) => {
//   if (activeIndex === currentIndex) {
//     classes.listText = {
//       textAlign: "left"
//     };
//   } else {
//     classes.listText = {
//       textAlign: "right"
//     };
//   }
// };

// console.log(activeIndex);

// function activeSection() {
//   const activeIndex = window.fullpage_api.getActiveSection().index;
//   console.log(activeIndex);
//   //var activeDoc = document.getElementById(index);
//   //console.log(activeDoc);
//   // activeIndex === index
//   //   ? activeSection()
//   //   : console.log("Index does not match section");
//   //activeDoc.className += classes.customActiveElement;
// }
// activeSection();

function pickIcon(text) {
  switch (text) {
    case "Home":
      return <HomeIcon />;
    case "About":
      return <InfoIcon />;
    case "Games":
      return <VideogameAssetIcon />;
    case "Projects":
      return <AccountBalanceIcon />;
    default:
      return <MailIcon />;
  }
}

function ResponsiveDrawer(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <ThemeProvider theme={fontTheme1}>
        <List id="menu">
          {["Home", "Projects", "Games", "About"].map((text, index) => (
            <div>
              <ListItem
                data-menuanchor="firstPage"
                className={classes.listItems}
                button
                key={text}
                onClick={() => {
                  window.fullpage_api.moveTo(index + 1);
                }}
              >
                <ListItemIcon key={index} className={classes.listIcons}>
                  {pickIcon(text)}
                </ListItemIcon>

                <ListItemText
                  id={index}
                  className={classes.listText}
                  wrap="true"
                  primary={text}
                />
              </ListItem>
            </div>
          ))}
        </List>
      </ThemeProvider>
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
