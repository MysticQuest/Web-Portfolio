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
import "../../themes/global.css";
// import "./Games.css";
//import bender from "../../images/bender.png";
//import bender2 from "../../images/bender.svg";
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
//import pic1 from "../../images/pic1.png";
import gif1 from "../../images/tenor.gif";
import rpgGif from "../../images/rpg.gif";
import rpgPic from "../../images/rpg.png";
import blockPic from "../../images/block.png";
import blockGif from "../../images/block.gif";
import tdPic from "../../images/td.png";
import tdGif from "../../images/td.gif";
import shootPic from "../../images/shoot.png";
import shootGif from "../../images/shoot.gif";
import platPic from "../../images/plat.png";
import platGif from "../../images/plat.gif";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    flexShrink: 1
  },
  grid: { textAlign: "-webkit-center" },
  gridItem: {
    [theme.breakpoints.up("md")]: {
      padding: "24px !important"
    },
    flexShrink: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "stretch"
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
    flexShrink: 1,
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
    // justifyContent: "space-between",
  },
  card: {
    "&:hover": {
      "& $media1": {
        backgroundImage: `url(${rpgGif}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media2": {
        backgroundImage: `url(${blockGif}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media3": {
        backgroundImage: `url(${tdGif}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media4": {
        backgroundImage: `url(${shootGif}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media5": {
        backgroundImage: `url(${platGif}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media6": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      boxShadow: "-3px 3px 9px 0 rgba(0, 0, 0, 0.69)",
      transition: "box-shadow 0.3s ease-in-out"
      // filter: "grayscale(0%)"
    },
    // filter: "grayscale(50%)",
    display: "flex",
    flexFlow: "column",
    flexShrink: 1,
    flexGrow: 1,
    borderRadius: "20px",
    // marginLeft: "1vw",
    // marginRight: "1vw",
    position: "relative",
    top: 0,
    transition: "box-shadow 0.3s ease-in-out",
    maxWidth: "300px",
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
    background:
      "linear-gradient(to right, #216998, #007b9d, #008b99, #2D959A, #5da683)",
    // background:
    //   "linear-gradient(to right, #406483, #42728f, #46809a, #4b8ea3, #539cac)", // lighter bluish grad
    // background:
    //   "linear-gradient(to right, #1f3f5b, #1e4e6c, #195e7d, #106f8d, #00809b)", //darker bluish grad
    // background: "linear-gradient(to right, #ee9ca7, #ffdde1)", //old light gradient
    padding: "10px",
    flexGrow: 1,
    flexShrink: 1,
    display: "flex",
    flexDirection: "column"
    // justifyContent: "space-between"
    // alignItems: "stretch",
    // height: "100%"
  },
  contHead: {
    color: "white",
    marginBottom: "3px"
  },
  contText: {
    color: "white"
  },
  buttonArea: {
    background: "linear-gradient(to right, #000000, #434343)",

    // display: "flex", //card has flex by default
    flexGrow: 1,
    flexShrink: 1,
    flexFlow: "wrap",
    justifyContent: "center",
    padding: "0"
  },
  buttons: {
    // backgroundColor: "white",
    flexGrow: 1,
    flexShrink: 1,
    padding: "0",
    minHeight: "29px",
    marginLeft: "0 !important",
    marginTop: "5px",
    marginBottom: "5px"
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
    backgroundColor: "#c96b34"
  },
  extra: {
    // display: "inline-flex",
    // pointerEvents: "auto",
    // zIndex: "999 !important",
    textTransform: "none",
    textAlign: "end",
    // float: "right",
    // margin: "3vh",
    [theme.breakpoints.down("sm")]: {
      float: "none !important",
      margin: "5vh",
      textAlign: "center"
      // bottom: "calc(100px + 3vh);",
      // position: "sticky"
      // position: "fixed",
      // display: "flex"
      // marginTop: "calc(-80px - 8vh);"
    }
  }
}));

var activateAnim = false;
const exitDuration = 1;

// const styles = {
//   media1: { backgroundImage: `url(${pic1}) !important` }
// };

// Titles
const rpgTi = "Zulda";
const blockTi = "Block Breaker";
const tdTi = "Lane Defense";
const shootTi = "Generic Shooter";
const platTi = "Platformer";
// Descriptions
const rpgDes = "A time-based 12 minute rpg, created for a bachelor thesis.";
const blockDes = "The classic block breaker game, just a tad harder.";
const tdDes = "A tower/lane defense game. Only for TD veterans. ";
const shootDes = "A generic shoot-em-up game.";
const platDes = "Like Super Mario, but not really.";
// Tooltip info
const rpgTT = "Made with Unity and free assets.";
const blockTT = "Made with Unity and free assets.";
const tdTT = "Made with Unity and free assets.";
const shootTT = "Made with Unity and free assets.";
const platTT = "Made with Unity and free assets.";
// Play links
const rpgLi = "./webgl/rpgThesis/index.html";
const blockLi = "./webgl/block-breaker/index.html";
const tdLi = "./webgl/td/index.html";
const shootLi = "./webgl/shoot/index.html";
const platLi = "./webgl/plat/index.html";
// Source links
const rpgSo = "https://github.com/MysticQuest/Unity-Project_Thesis";
const blockSo = "https://github.com/MysticQuest/Unity-Block_Breaker";
const tdSo = "https://github.com/MysticQuest/Unity-Tower_Defense_V1";
const shootSo = "https://github.com/MysticQuest/Unity-Generic_Shmup";
const platSo = "https://github.com/MysticQuest/Unity-Platformer_Adventure";

const Projects = () => {
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
          <Grid className={classes.gridItem} item xs={12} sm={12} md={4} lg={4}>
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
                  href={rpgLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media1}`}
                    image={rpgPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {rpgTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {rpgDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button
                  href={rpgSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={rpgTT}
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
        </Zoom>{" "}
        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "50ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={4} lg={4}>
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
                  href={blockLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media2}`}
                    image={blockPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {blockTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {blockDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button
                  href={blockSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={blockTT}
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
          style={{ transitionDelay: activateAnim ? "100ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={4} lg={4}>
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
                  href={tdLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media3}`}
                    image={tdPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {tdTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {tdDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button
                  href={tdSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={tdTT}
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
          style={{ transitionDelay: activateAnim ? "150ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={4} lg={4}>
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
                  href={shootLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media4}`}
                    image={shootPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {shootTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {shootDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button
                  href={shootSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={shootTT}
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
          style={{ transitionDelay: activateAnim ? "200ms" : "0ms" }}
        >
          <Grid className={classes.gridItem} item xs={12} sm={12} md={4} lg={4}>
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
                  href={platLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media5}`}
                    image={platPic}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {platTi}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {platDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button
                  href={platSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={platTT}
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
        {/* <Grid
            className={classes.gridItem}
            item
            xs={12}
            sm={12}
            md={12}
            lg={12}
          >
            <div className={classes.extra}>
              <Button
                className={classes.extraButton}
                onClick={() => {
                  window.fullpage_api.moveSlideRight();
                }}
              >
                <p className="extra-text">Extras -></p>
              </Button>
            </div>
          </Grid> */}
      </Grid>
    </div>
  );
};

export default Projects;
