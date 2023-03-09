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
import adventuredemoimg from "../../images/gameImages/adventuredemo.png";
import adventuredemogif from "../../images/gameImages/adventuredemo.gif";
import stealthimg from "../../images/gameImages/stealth.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  // grid: { textAlign: "-webkit-center" },
  gridItem: {
    [theme.breakpoints.up("xl")]: {
      padding: "24px !important"
    },
  },
  gridItemHidden: {
    [theme.breakpoints.up("xl")]: {
      padding: "24px !important"
    },
    visibility: "hidden"
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
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
      // },
      // "& $media2": {
      //   backgroundImage: `url(${blockGif}) !important`,
      //   transition: "background-image 0.3s ease-in-out 0.1s",
      //   webkitTransition: "background-image 0.3s ease-in-out 0.1s",
      //   mozTransition: "background-image 0.3s ease-in-out 0.1s",
      //   oTransition: "background-image 0.3s ease-in-out 0.1s"
      // },
          "& $media3": {
              backgroundImage: `url(${adventuredemogif}) !important`,
         transition: "background-image 0.3s ease-in-out 0.1s",
         webkitTransition: "background-image 0.3s ease-in-out 0.1s",
         mozTransition: "background-image 0.3s ease-in-out 0.1s",
         oTransition: "background-image 0.3s ease-in-out 0.1s"
       },
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
    // "linear-gradient(180deg, #977d9c, #856b8a, #7a5e80, #7f5586, #66406c)", //for ping bg
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
const stealthTi = "WIP";
const adventuredemoTI = "Adventure Demo";
const rpgTi = "12-minute RPG";
const blockTi = "Block Breaker";
const shootTi = "Generic Shooter";
const platTi = "Platformer";
// Descriptions
const stealthDes = "Design and development of a multiplayer stealth game level using layered materials.";
const advdemoDes = "A short adventure game focused on lighting, C++ and basic UE functionality.";
const rpgDes = "";
const blockDes = "The classic block breaker game.";
const shootDes = "A generic shoot-em-up game using Scriptable Ojects and object pooling for enemy waves.";
const platDes = "A short platform game.";
// Tooltip info
const stealthTT = "";
const adventuredemoTT = "To lower the graphics use the gameusersettings.ini in the game directory, which is generated after launching the game once.";
const rpgTT =
  "Made with Unity, VS and free assets. Music by Theodore Konstantinides. Use the 'Backspace' key to enable 'Cheat Mode'.";
const blockTT = "Made with Unity, VS, and free assets.";
const shootTT = "Made with Unity, VS, and free assets.";
const platTT = "Made with Unity, VS, and free assets.";
// Play links
const stealthLi = "";
const adventuredemoLi = "";
const rpgLi = "./webgl/rpgThesis/index.html";
const blockLi = "./webgl/block-breaker/index.html";
const shootLi = "./webgl/shoot/index.html";
// const platLi = "./webgl/plat/index.html";
// Source links
const stealthSo = "https://github.com/MysticQuest/Unreal-StealthProj";
const adventuredemoSo = "https://github.com/MysticQuest/unreal-adventuredemo";
const blockSo = "https://github.com/MysticQuest/Unity-Block_Breaker";
const shootSo = "https://github.com/MysticQuest/Unity-Generic_Shmup";
const platSo = "https://github.com/MysticQuest/Unity-Platformer_Adventure";
//DLs
const stealthWin = "";
const stealthLin = "";
const adventuredemoWin = "https://drive.google.com/file/d/1PM-0S-NtYQpTX5nVEsaL2jJcJf2Vfsh9/view?usp=share_link";

const UGames = () => {
  const classes = useStyles();
  if (activeIndex === 3) {
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
          style={{ transitionDelay: activateAnim ? "100ms" : "0ms" }}
        >
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
                  href={adventuredemoLi}
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media3}`}
                    image={adventuredemoimg}
                  />
                  <CardContent className={classes.content}>
                    <Typography
                      className={classes.contHead}
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {adventuredemoTI}
                    </Typography>
                    <Typography
                      className={classes.contText}
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {advdemoDes}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Tooltip>
              <CardActions className={classes.buttonArea}>
                <Button
                    href={adventuredemoWin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Windows Client"
                    className={classes.icons}
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
                  href={adventuredemoSo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={classes.buttons}
                >
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>

                <Tooltip
                  classes={{ tooltip: classes.toolTips }}
                  TransitionComponent={Zoom}
                  title={adventuredemoTT}
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
                                  href={stealthLi}
                                  className={classes.cardActionArea}
                              >
                                  <CardMedia
                                      className={`${classes.media} ${classes.media6}`}
                                      image={stealthimg}
                                      alt="loading..."
                                  />
                                  <CardContent className={classes.content}>
                                      <Typography
                                          className={classes.contHead}
                                          gutterBottom
                                          variant="h5"
                                          component="h2"
                                      >
                                          {stealthTi}
                                      </Typography>
                                      <Typography
                                          className={classes.contText}
                                          variant="body2"
                                          color="textSecondary"
                                          component="p"
                                      >
                                          {stealthDes}
                                      </Typography>
                                  </CardContent>
                              </CardActionArea>
                          </Tooltip>
                          <CardActions className={classes.buttonArea}>
                              <Button target="_blank"
                                  rel="noopener noreferrer" href={stealthWin} className={classes.buttons}>
                                  <FontAwesomeIcon
                                      title="Windows Client"
                                      className={classes.iconsTBA}
                                      icon={faWindows}
                                  />
                              </Button>
                              <Button target="_blank"
                                  rel="noopener noreferrer" href={stealthLin} className={classes.buttons}>
                                  <FontAwesomeIcon
                                      title="Linux Client"
                                      className={classes.iconsTBA}
                                      icon={faLinux}
                                  />
                              </Button>
                              <Button
                                  href={stealthSo}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className={classes.buttons}
                              >
                                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                              </Button>

                              <Tooltip
                                  classes={{ tooltip: classes.toolTips }}
                                  TransitionComponent={Zoom}
                                  title={stealthTT}
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
              </Zoom>{" "}


        <Zoom
          timeout={{ enter: 300, exit: exitDuration }}
          in={activateAnim}
          style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
        >
          <Grid className={classes.gridItemHidden} item xs={12} sm={12} md={6} lg={4}>
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
                    image=""
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
                  href=""
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
          <Grid className={classes.gridItemHidden} item xs={12} sm={12} md={6} lg={4}>
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
                    image=""
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
          style={{ transitionDelay: activateAnim ? "150ms" : "0ms" }}
        >
          <Grid className={classes.gridItemHidden} item xs={12} sm={12} md={6} lg={4}>
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
                    image=""
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
          <Grid className={classes.gridItemHidden} item xs={12} sm={12} md={6} lg={4}>
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
                  href=""
                  className={classes.cardActionArea}
                >
                  <CardMedia
                    className={`${classes.media} ${classes.media5}`}
                    image=""
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
                <Button
                  className={classes.buttons}
                >
                  <FontAwesomeIcon
                    title="Not available yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not available yet"
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
        {/* <Grid className={classes.gridItem} item xs={12} sm={12} md={12} lg={12}>
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

export default UGames;
