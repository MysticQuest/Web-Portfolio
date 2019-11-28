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
//import { activeIndex } from "../../App";
//import image and media
//import pic1 from "../../images/pic1.png";
//import gif1 from "../../images/tenor.gif";
import mapPic1 from "../../images/gameImages/map.png";
import mapPic2 from "../../images/gameImages/map2.png";
import uniGif from "../../images/gameImages/uni.gif";
import vufPic from "../../images/gameImages/vuf.png";

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
      "& $media1": {
        backgroundImage: `url(${mapPic2}) !important`,
        transition: "background-image 0.3s ease-in-out 0.1s",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
      //   "& $media2": {
      //     backgroundImage: `url(${blockGif}) !important`,
      //     transition: "background-image 0.3s ease-in-out"
      //   },
      //   "& $media3": {
      //     backgroundImage: `url(${tdGif}) !important`,
      //     transition: "background-image 0.3s ease-in-out"
      //   },
      //   "& $media4": {
      //     backgroundImage: `url(${shootGif}) !important`,
      //     transition: "background-image 0.3s ease-in-out"
      //   },
      //   "& $media5": {
      //     backgroundImage: `url(${platGif}) !important`,
      //     transition: "background-image 0.3s ease-in-out"
      //   },
      //   "& $media6": {
      //     backgroundImage: `url(${gif1}) !important`,
      //     transition: "background-image 0.3s ease-in-out"
      //   },
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
    maxHeight: "400px",
    backgroundColor: "black"
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
    backgroundColor: "#c96b34"
  }
}));

// var activateAnim = false;
// const exitDuration = 1;

// const styles = {
//   media1: { backgroundImage: `url(${pic1}) !important` }
// };

// Titles
const mcTi = "Custom Voxel Terrain";
const assetTi = "Unity Assets";
const vufTi = "Vuforia AR";

// Descriptions
const mcDes =
  "A custom voxel fantasy-themed world, created for a private server in 'Minecraft'. Made with World Machine, Terrain Control, Voxelizer, Blender and Photoshop.  ";
const assetDes =
  "A collection of assets made with Blender, Unity Shader Graph and Aseprite.";
const vufDes = "A small AR experiment with Vuforia in Unity.";

// Tooltip info
const mcTT = "";
const assetTT = "";

// Play links
const mcLi = "https://imgur.com/a/PTY27";
const assetLi = "";
const vufLi = "";

// Source links

const vufSo = "https://github.com/MysticQuest/Unity-AR_vuforia_project";

const Misc = () => {
  const classes = useStyles();

  // if (activeIndex === 2) {
  //   activateAnim = true;
  // }
  // // else {
  // //   activateAnim = false;
  // // }

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title="View Album"
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={mcLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media1}`}
                  image={mapPic1}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {mcTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {mcDes}
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
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.iconsTBA} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={mcTT}
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
                href={assetLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  //   className={`${classes.media} ${classes.media1}`}
                  className={classes.media}
                  image={uniGif}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {assetTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {assetDes}
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
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.iconsTBA} icon={faGithub} />
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

        {/* <Grid className={classes.gridItem} item xs={12} sm={12} md={12} lg={12}>
          <div className={classes.extra}>
            <Button
              className={classes.extraButton}
              onClick={() => {
                window.fullpage_api.moveSlideRight();
              }}
            >
              <p className="extra-text">Back</p>
            </Button>
          </div>
        </Grid> */}
      </Grid>
    </div>
  );
};

export default Misc;
