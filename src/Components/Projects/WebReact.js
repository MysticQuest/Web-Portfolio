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
import "../../themes/global.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
//import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
//import active section
import { activeIndex } from "../../App";

//import images and media
import portPic from "../../images/projImages/port.png";
import recPic from "../../images/projImages/rec.png";
import tetrisPic from "../../images/projImages/tetris.png";
import tetrisGif from "../../images/projImages/tetris.gif";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // grid: { textAlign: "-webkit-center" },
  gridItem: {
    [theme.breakpoints.up("md")]: {
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
      "& $media2": {
        backgroundImage: `url(${tetrisGif}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
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
    marginLeft: "1vw",
    marginRight: "1vw",
    // position: "relative",
    // top: 0,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    transition: "box-shadow 0.3s ease-in-out",
    // maxWidth: "300px",
    maxHeight: "400px"
  },
  media: {
    height: "auto",
    width: "100%",
    paddingTop: "56.25%",
    objectFit: "cover",
    transition: "background-image 0.3s ease-in-out"

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
    // background:
    //   "linear-gradient(to right, #216998, #007b9d, #008b99, #2D959A, #5da683)",
    background:
      "linear-gradient(90deg, rgba(43,43,43,1) 0%, rgba(94,94,94,1) 50%, rgba(139,139,139,1) 100%)",
    backgroundColor: "#393f47", //test color for firefox bug
    // background:
    //   "linear-gradient(to right, #406483, #42728f, #46809a, #4b8ea3, #539cac)", // lighter bluish grad
    // background:
    //   "linear-gradient(to right, #1f3f5b, #1e4e6c, #195e7d, #106f8d, #00809b)", //darker bluish grad
    // background: "linear-gradient(to right, #ee9ca7, #ffdde1)", //old light gradient
    padding: "10px",
    // flexShrink: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
    // justifyContent: "space-between"
    // alignItems: "stretch",
    // height: "100%"
  },
  contHead: {
    color: "white",
    fontFamily: "Acme"
    // marginBottom: "3px"
  },
  contText: {
    color: "white"
  },
  buttonArea: {
    background: "linear-gradient(to right, #000000, #434343)",
    backgroundColor: "#393f47", //test color for firefox bug
    display: "block",
    padding: "0"
    // display: "flex", //card has flex by default
    // flexGrow: 1,
    // flexShrink: 1,
    // flexFlow: "wrap",
    // justifyContent: "center",
  },
  buttons: {
    // backgroundColor: "white",
    // flexGrow: 1,
    // flexShrink: 1,
    // padding: "0",
    // minHeight: "25px",
    marginLeft: "0 !important"
    // marginTop: "5px",
    // marginBottom: "5px"
  },
  icons: { color: "white", fontSize: "1.8rem" },
  iconsTBA: { color: "#9c7e82", fontSize: "1.3rem" },
  toolTips: {
    // backgroundColor: "#f5f5f9",
    backgroundColor: "rgba(0, 0, 0, 1)",
    maxWidth: 350,
    // // maxHeight: 100,
    fontSize: theme.typography.pxToRem(14),
    // border: "1px solid #dadde9",
    // // transform: "translate(100px, 200px) rotate(50deg)"
    // // transform: "translate(50%,90%)"
    // marginLeft: "23vw",
    // marginTop: "90vh",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "35vh"
    }
  },
  toolTipsCard: {
    fontSize: theme.typography.pxToRem(20),
    backgroundColor: "#c96b34",
    margin: "0"
  }
}));

var activateAnim = false;
const exitDuration = 1;

// const styles = {
//   media1: { backgroundImage: `url(${pic1}) !important` }
// };

// Titles
const portTi = "This Portfolio";
const recTi = "Face Recognition App";
const tetrisTi = "React Tetris";

// Descriptions
const portDes = "A casual-themed portfolio made with React and Material UI.";
const recDes =
  "An app that uses Clarifai's API to detect faces in pictures and sets - in the current iteration - a bordered box around them.";
const tetrisDes = "A tetris game solely made with ReactJs.";

// Tooltip info
const portTT = "";
const recTT = "";
const tetrisTT = "";

// Play links
const portLi = "";
const recLi = "";
const tetrisLi = "";

// Source links
const portSo = "https://github.com/MysticQuest/Web-Portfolio";
const recSo = "https://github.com/MysticQuest/Unity-Project_Thesis";
const tetrisSo = "https://github.com/MysticQuest/Unity-Block_Breaker";

const WebReact = () => {
  const classes = useStyles();
  if (activeIndex === 1) {
    activateAnim = true;
  }
  // else {
  //   activateAnim = false;
  // }

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <Tooltip
                classes={{ tooltip: classes.toolTipsCard }}
                TransitionComponent={Zoom}
                title="Play"
                placement="top"
              >
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href={portLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media1}`}
                    image={portPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {portTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {portDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button
                  href={portSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={portTT}
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
        </Zoom>
        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <Tooltip
                classes={{ tooltip: classes.toolTipsCard }}
                TransitionComponent={Zoom}
                title="Play"
                placement="top"
              >
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href={recLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media1}`}
                    image={recPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {recTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {recDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button
                  href={recSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={recTT}
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
        </Zoom>
        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "50ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
            <Card className={classes.card}>
              <Tooltip
                classes={{ tooltip: classes.toolTipsCard }}
                TransitionComponent={Zoom}
                title="Play"
                placement="top"
              >
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href={tetrisLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media2}`}
                    image={tetrisPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {tetrisTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {tetrisDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button
                  href={tetrisSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={tetrisTT}
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
        </Zoom>
      </Grid>
    </div>
  );
};

export default WebReact;
