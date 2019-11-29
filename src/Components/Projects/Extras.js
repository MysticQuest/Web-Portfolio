import React from "react";
//mui components
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Zoom from "@material-ui/core/Zoom";
//import Fade from "@material-ui/core/Fade";
//styles
import { makeStyles } from "@material-ui/core/styles";
import "../../myThemes/global.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
//import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
//import active section
//import { activeIndex } from "../../App";

//import images and media
import pricePic from "../../images/projImages/price.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // grid: { textAlign: "-webkit-center" },
  gridItem: {
    [theme.breakpoints.up("xl")]: {
      padding: "24px !important"
    }
    // flexShrink: 1,
    // flexGrow: 1,
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "stretch"
    // height: "100%",
    // flexWrap: "wrap"
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "stretch"
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(0)
    // }
  },
  gridItemMenu: {},
  cardActionArea: {
    // flexShrink: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
    // justifyContent: "space-between",
  },
  card: {
    "&:hover": {
      // "& $media1": {
      //   backgroundImage: `url(${rpgGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out",
      //   webkitTransition: "background-image 0.3s ease-in-out",
      //   mozTransition: "background-image 0.3s ease-in-out",
      //   oTransition: "background-image 0.3s ease-in-out"
      // },
      // "& $media2": {
      //   backgroundImage: `url(${tetrisGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out"
      // },
      // "& $media3": {
      //   backgroundImage: `url(${tdGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out"
      // },
      // "& $media4": {
      //   backgroundImage: `url(${shootGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out"
      // },
      // "& $media5": {
      //   backgroundImage: `url(${platGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out"
      // },
      // "& $media6": {
      //   backgroundImage: `url(${gif1}) !important`,
      //   transition: "background-image 0.3s ease-in-out"
      // },
      boxShadow: "-3px 3px 9px 0 rgba(0, 0, 0, 0.69)",
      transition: "box-shadow 0.3s ease-in-out"
      // filter: "grayscale(0%)"
    },
    // filter: "grayscale(50%)",
    // flexShrink: 1,
    // flexGrow: 1,
    borderRadius: "20px",

    // position: "relative",
    // top: 0,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "box-shadow 0.3s ease-in-out",
    marginLeft: "1vw",
    marginRight: "1vw",
    backgroundColor: "black"
  },
  media: {
    height: "auto",
    paddingTop: "43%",
    // objectFit: "cover",
    transition: "background-image 0.3s ease-in-out",
    [theme.breakpoints.up("xl")]: {
      paddingTop: "56.25%",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "56.25%",
      width: "100%"
    }

    // background: { pic2 }
    // margin: "-70px auto 0",
    // width: "80%",
    // height: 140,
    // borderRadius: "4px",
    // boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    // position: "relative",
    // zIndex: 1000
  },
  media1: {},
  media2: {},
  media3: {},
  media4: {},
  media5: {},
  media6: {},

  content: {
    background:
      "linear-gradient(270deg, rgba(89,100,117,1) 0%, rgba(76,77,113,1) 34%, rgba(58,59,89,1) 69%, rgba(40,41,77,1) 100%)",
    backgroundColor: "#393f47", //test color for firefox bug
    padding: "5px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
  },
  contHead: {
    color: "white",
    fontFamily: "Acme",
    fontSize: "calc(18px + 0.5vh)",
    marginBottom: "0",
    [theme.breakpoints.up("xl")]: {
      marginBottom: "5px",
      marginTop: "5px"
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "5px",
      marginTop: "5px"
    }
  },
  contText: {
    color: "white",
    fontSize: "calc(10px + 0.5vh)"
  },
  buttonArea: {
    background: "linear-gradient(to right, #000000, #434343)",
    backgroundColor: "#393f47", //test color for firefox bug
    // display: "block",
    padding: "0",
    flexShrink: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  },
  buttons: {
    marginLeft: "0 !important",
    minWidth: "50%"
  },
  icons: {
    color: "white",
    fontSize: "1.3rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.8rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem"
    }
  },
  iconsTBA: {
    color: "#9c7e82",
    fontSize: "1rem",
    [theme.breakpoints.up("xl")]: {
      fontSize: "1.3rem"
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.3rem"
    }
  },
  toolTips: {
    backgroundColor: "rgba(0, 0, 0, 1)",
    maxWidth: 350,
    fontSize: theme.typography.pxToRem(14),
    [theme.breakpoints.down("sm")]: {
      marginBottom: "35vh"
    }
  },
  toolTipsCard: {
    fontSize: theme.typography.pxToRem(20),
    backgroundColor: "#496dfc",
    margin: "0"
  }
}));

// var activateAnim = false;
// const exitDuration = 1;

// const styles = {
//   media1: { backgroundImage: `url(${pic1}) !important` }
// };

// Titles
const priceTi = "ML Price Predictor";

// Descriptions
const priceDes =
  "An exercise on neural networks, using Python and Jupyter notebook.";

// Tooltip info
const priceTT = "";

// Play links
const priceLi = "";

// Source links
const priceSo = "https://github.com/MysticQuest/MLearningVM_V1";

const Extras = () => {
  const classes = useStyles();
  //   if (activeIndex === 1) {
  //     activateAnim = true;
  //   }
  // else {
  //   activateAnim = false;
  // }

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title=""
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={priceLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media1}`}
                  image={pricePic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {priceTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {priceDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={priceSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={priceTT}
                placement="bottom"
              >
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    className={classes.iconsTBA}
                    icon={faInfoCircle}
                  />
                </Button>
              </Tooltip>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default Extras;
