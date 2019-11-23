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
import "./Games.css";
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
import pic1 from "../../images/pic1.png";
import gif1 from "../../images/tenor.gif";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grid: {},
  gridItem: {
    [theme.breakpoints.up("md")]: {
      padding: "32px !important"
    },
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
  cardActionArea: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch"
    // justifyContent: "space-between",
  },
  card: {
    "&:hover": {
      "& $media1": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media2": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media3": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media4": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media5": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      "& $media6": {
        backgroundImage: `url(${gif1}) !important`,
        transition: "background-image 0.3s ease-in-out"
      },
      boxShadow: "-3px 3px 9px 0 rgba(0, 0, 0, 0.69)",
      // top: "-3px",
      transition: ["boxShadow", "top"],
      transitionDuration: 500
      // filter: "grayscale(0%)"
    },
    // filter: "grayscale(50%)",
    display: "flex",
    flexFlow: "column",
    flexGrow: 1,
    borderRadius: "20px",
    marginLeft: "1vw",
    marginRight: "1vw",
    position: "relative",
    top: 0,
    transition: ["boxShadow", "top"],
    transitionDuration: 500,
    "& a": {
      textDecoration: "none"
    }
  },
  media: {
    height: "auto",
    width: "100%",
    paddingTop: "56.25%",
    objectFit: "cover",
    transition: "background-image 0.3s ease-in-out"
    // background: { pic1 },
    // backgroundImage: "url(../../images/pic1.png)",
    // "&:hover": {
    //   background: "url('../../images/tenor.gif')"
    // }
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
    background: "linear-gradient(to bottom, #f5f5e4, #abb6c2)",
    // background: "linear-gradient(to right, #ee9ca7, #ffdde1)",
    padding: "10px",
    flexGrow: 1,
    display: "flex",
    flexDirection: "column"
    // justifyContent: "space-between"
    // alignItems: "stretch",
    // height: "100%"
  },
  contHead: {
    color: "black",
    marginBottom: "3px"
  },
  contText: {
    color: "black"
  },
  buttonArea: {
    background: "linear-gradient(to right, #000000, #434343)",

    // display: "flex", //card has flex by default
    flexFlow: "wrap",
    justifyContent: "center",
    padding: "0"
  },
  buttons: {
    // backgroundColor: "white",
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
  }
}));

var activateAnim = false;
const exitDuration = 1;

// const styles = {
//   media1: { backgroundImage: `url(${pic1}) !important` }
// };

// Descriptions
const rpgDes = "A time-based rpg created for a bachelor thesis";
// Tooltip info
const rpgTT = "This is the tooltip";
// Links
const rpgLi = "./webgl/rpgThesis/index.html";

const Games = () => {
  const classes = useStyles();
  if (activeIndex === 2) {
    activateAnim = true;
  }
  // else {
  //   activateAnim = false;
  // }

  return (
    <div className="full-container-2">
      <div className={classes.root}>
        <Grid className={classes.grid} container spacing={3}>
          <Zoom
            timeout={{ enter: 300, exit: exitDuration }}
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "0ms" : "0ms" }}
          >
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className={classes.card}>
                <Tooltip
                  classes={{ tooltip: classes.toolTipsCard }}
                  TransitionComponent={Zoom}
                  title="Play"
                  placement="top"
                >
                  <CardActionArea className={classes.cardActionArea}>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rpgLi}
                    >
                      <CardMedia
                        className={`${classes.media} ${classes.media1}`}
                        image={pic1}
                      />
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.contHead}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          RPG Thesis
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
                    </a>
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
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faGithub}
                    />
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
          </Zoom>
          <Zoom
            timeout={{ enter: 300, exit: exitDuration }}
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "50ms" : "0ms" }}
          >
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className={classes.card}>
                <Tooltip
                  classes={{ tooltip: classes.toolTipsCard }}
                  TransitionComponent={Zoom}
                  title="Play"
                  placement="top"
                >
                  <CardActionArea className={classes.cardActionArea}>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rpgLi}
                    >
                      <CardMedia
                        className={`${classes.media} ${classes.media1}`}
                        image={pic1}
                      />
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.contHead}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          RPG Thesis
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
                    </a>
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
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faGithub}
                    />
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
          </Zoom>
          <Zoom
            timeout={{ enter: 300, exit: exitDuration }}
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "100ms" : "0ms" }}
          >
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className={classes.card}>
                <Tooltip
                  classes={{ tooltip: classes.toolTipsCard }}
                  TransitionComponent={Zoom}
                  title="Play"
                  placement="top"
                >
                  <CardActionArea className={classes.cardActionArea}>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rpgLi}
                    >
                      <CardMedia
                        className={`${classes.media} ${classes.media1}`}
                        image={pic1}
                      />
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.contHead}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          RPG Thesis
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
                    </a>
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
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faGithub}
                    />
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
          </Zoom>
          <Zoom
            timeout={{ enter: 300, exit: exitDuration }}
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "150ms" : "0ms" }}
          >
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className={classes.card}>
                <Tooltip
                  classes={{ tooltip: classes.toolTipsCard }}
                  TransitionComponent={Zoom}
                  title="Play"
                  placement="top"
                >
                  <CardActionArea className={classes.cardActionArea}>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rpgLi}
                    >
                      <CardMedia
                        className={`${classes.media} ${classes.media1}`}
                        image={pic1}
                      />
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.contHead}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          RPG Thesis
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
                    </a>
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
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faGithub}
                    />
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
          </Zoom>
          <Zoom
            timeout={{ enter: 300, exit: exitDuration }}
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "200ms" : "0ms" }}
          >
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className={classes.card}>
                <Tooltip
                  classes={{ tooltip: classes.toolTipsCard }}
                  TransitionComponent={Zoom}
                  title="Play"
                  placement="top"
                >
                  <CardActionArea className={classes.cardActionArea}>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rpgLi}
                    >
                      <CardMedia
                        className={`${classes.media} ${classes.media1}`}
                        image={pic1}
                      />
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.contHead}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          RPG Thesis
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
                    </a>
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
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faGithub}
                    />
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
          </Zoom>
          <Zoom
            timeout={{ enter: 300, exit: exitDuration }}
            in={activateAnim}
            style={{ transitionDelay: activateAnim ? "250ms" : "0ms" }}
          >
            <Grid
              className={classes.gridItem}
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
            >
              <Card className={classes.card}>
                <Tooltip
                  classes={{ tooltip: classes.toolTipsCard }}
                  TransitionComponent={Zoom}
                  title="Play"
                  placement="top"
                >
                  <CardActionArea className={classes.cardActionArea}>
                    <a
                      className="card-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={rpgLi}
                    >
                      <CardMedia
                        className={`${classes.media} ${classes.media1}`}
                        image={pic1}
                      />
                      <CardContent className={classes.content}>
                        <Typography
                          className={classes.contHead}
                          gutterBottom
                          variant="h5"
                          component="h2"
                        >
                          RPG Thesis
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
                    </a>
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
                  <Button className={classes.buttons}>
                    <FontAwesomeIcon
                      className={classes.icons}
                      icon={faGithub}
                    />
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
          </Zoom>
        </Grid>
      </div>
    </div>
  );
};

export default Games;
