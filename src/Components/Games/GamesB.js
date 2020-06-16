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
//import "../../themes/animate.css";
import "../../myThemes/global.css";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
//import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
//import active section
import { activeIndex } from "../../App";
//import image and media
import benGif from "../../images/gameImages/ben.gif";
import benPic from "../../images/gameImages/ben.png";
import vufPic from "../../images/gameImages/vuf.png";
import meshPic from "../../images/gameImages/mesh.png";
import tttPic from "../../images/gameImages/ttt.png";
//Links

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
      "& $media1": {
        backgroundImage: `url(${benGif}) !important`,
        transition: "background-image 0.3s ease-in-out 0.1s",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
      // "& $media2": {
      //   backgroundImage: `url(${blockGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
      // },
      // "& $media3": {
      //   backgroundImage: `url(${tdGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
      // },
      // "& $media4": {
      //   backgroundImage: `url(${shootGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
      // },
      // "& $media5": {
      //   backgroundImage: `url(${platGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
      // },
      // "& $media6": {
      //   backgroundImage: `url(${tankGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
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
      "linear-gradient(to right, #216998, #007b9d, #008b99, #2D959A, #5da683)",
    backgroundColor: "#393f47", //test color for firefox bug
    // background:
    //   "linear-gradient(to right, #406483, #42728f, #46809a, #4b8ea3, #539cac)", // lighter bluish grad
    // background:
    //   "linear-gradient(to right, #1f3f5b, #1e4e6c, #195e7d, #106f8d, #00809b)", //darker bluish grad
    // background: "linear-gradient(to right, #ee9ca7, #ffdde1)", //old light gradient
    padding: "5px",
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
    minWidth: "27%"
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
    // backgroundColor: "#f5f5f9",
    backgroundColor: "rgba(0, 0, 0, 1)",
    maxWidth: 250,
    // // maxHeight: 100,
    fontSize: theme.typography.pxToRem(14),
    // border: "1px solid #dadde9",
    // // transform: "translate(100px, 200px) rotate(50deg)"
    // // transform: "translate(50%,90%)"
    // marginLeft: "23vw",
    // marginTop: "90vh",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "30vh"
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
const benTi = "Benchmarking Tool";
const vufTi = "Vuforia AR";
const meshTi = "Mesh Particle Systems";
const tttTi = "TicTacToe AI";
// Descriptions
const benDes = "Physics and rendering techniques that attempt to stress the CPU and GPU.";
const vufDes = "A small AR experiment with Vuforia in Unity.";
const meshDes = "Custom mesh particle systems for performant, permanent decals, utilizing stencil buffers.";
const tttDes = "A tic tac toe game with a few AI options, ultizing the MiniMax recursive algorith, built for Android platforms.";
// Tooltip info
const benTT = "Made with Unity and VS.";
const assetTT = "";
const meshTT = "";
const tttTT = "";
// Play links
const benLi = "./webgl/benchTool/index.html";
const vufLi = "";
const meshLi = "./webgl/mesh/index.html";
const tttLi = "./webgl/ttt/index.html";
// Source links
const vufSo = "https://github.com/MysticQuest/Unity-AR_vuforia_project";
const benSo = "https://github.com/MysticQuest/Unity-Benchmarking_Tool_Mockup";
const meshSo = "https://github.com/MysticQuest/Unity-ProjectR";
const tttSo = "https://github.com/MysticQuest/Unity-TicTacToe";
//DLs
// const benWin = "https://www.dropbox.com/s/mmcaw5svih0bqfj/TanksWin.rar?dl=0";

const Games = () => {
  const classes = useStyles();
  if (activeIndex === 2) {
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
                  href={benLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media1}`}
                    image={benPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {benTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {benDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button target="_blank"
                  rel="noopener noreferrer"
                  // href={tankWin}
                  className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Windows Client"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button target="_blank"
                  rel="noopener noreferrer"
                  // href={tankLin} 
                  className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Linux Client"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button
                  href={benSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={benTT}
                  placement="bottom"
                >
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
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
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <Tooltip
                classes={{ tooltip: classes.toolTipsCard }}
                TransitionComponent={Zoom}
                title="View"
                placement="top"
              >
                <CardActionArea
                  target="_blank"
                  rel="noopener noreferrer"
                  href={meshLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    //   className={`${classes.media} ${classes.media1}`}
                    className={classes.media}
                    image={meshPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {meshTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {meshDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon className={classes.iconsTBA} icon={faLinux} />
                </Button>
                <Button
                  href={meshSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={meshTT}
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
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
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
                  href={tttLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    //   className={`${classes.media} ${classes.media1}`}
                    className={classes.media}
                    image={tttPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {tttTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {tttDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon className={classes.iconsTBA} icon={faLinux} />
                </Button>
                <Button
                  href={tttSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={tttTT}
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
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
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
                  href={vufLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    //   className={`${classes.media} ${classes.media1}`}
                    className={classes.media}
                    image={vufPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {vufTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {vufDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon className={classes.iconsTBA} icon={faLinux} />
                </Button>
                <Button
                  href={vufSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={assetTT}
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

export default Games;
