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
//styles
import { makeStyles } from "@material-ui/core/styles";
//import "../../themes/animate.css";
import "../../themes/global.css";
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
// library.add(faCoffee);
//import images and media
import pic1 from "../../images/pic1.png";

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
      boxShadow: "8px 6px 15px rgba(0, 0, 0, 0.39)",
      top: "-15px",
      transition: ["boxShadow", "margin", "top"],
      transitionDuration: 300
    },
    display: "flex",
    flexFlow: "column",
    flexGrow: 1,
    borderRadius: "25px",
    marginLeft: "1vw",
    marginRight: "1vw",
    position: "relative",
    top: 0,
    transition: "top ease 0.5s"
    // flexDirection: "column",
    // justifyContent: "space-between",
    // alignItems: "stretch",
    // height: "100%"

    // maxWidth: "300px",
    // maxHeight: 345
    // boxShadow:
    //   "10px 10px 5px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.43)"
    // display: "block",
    // width: "100%",
  },
  media: {
    height: "auto",
    width: "100%",
    paddingTop: "56.25%",
    objectFit: "cover"
    // margin: "-70px auto 0",
    // width: "80%",
    // height: 140,
    // borderRadius: "4px",
    // boxShadow: "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23)",
    // position: "relative",
    // zIndex: 1000
  },
  content: {
    background: "linear-gradient(to bottom, #9abfe3, #e5e5be)",
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
    backgroundColor: "#003973"
  }
}));

var activateAnim = false;
const exitDuration = 1;

//Tooltip info
const rpgTT = "A time-based rpg created for a bachelor thesis";

const WebProjects = () => {
  const classes = useStyles();
  if (activeIndex === 1) {
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
                    <CardMedia className={classes.media} image={pic1} />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.contHead}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Game Title
                      </Typography>
                      <Typography
                        className={classes.contText}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a small string
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
                  <CardActionArea className={classes.CardActionArea}>
                    <CardMedia className={classes.media} image={pic1} />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.contHead}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Game Title
                      </Typography>
                      <Typography
                        className={classes.contText}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a game This is a game This is a game This is a
                        game This is a game This is a game This is a game This
                        is a game
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
                  <CardActionArea>
                    <CardMedia className={classes.media} image={pic1} />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.contHead}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Game Title
                      </Typography>
                      <Typography
                        className={classes.contText}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a game This is a game This is a game This is a
                        game This is a game This is a game This is a game This
                        is a game
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
                  <CardActionArea>
                    <CardMedia className={classes.media} image={pic1} />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.contHead}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Game Title
                      </Typography>
                      <Typography
                        className={classes.contText}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a game This is a game This is a game This is a
                        game This is a game This is a game This is a game This
                        is a game
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
                  <CardActionArea>
                    <CardMedia className={classes.media} image={pic1} />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.contHead}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Game Title
                      </Typography>
                      <Typography
                        className={classes.contText}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a game This is a game This is a game This is a
                        game This is a game This is a game This is a game This
                        is a game
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
                  <CardActionArea>
                    <CardMedia className={classes.media} image={pic1} />
                    <CardContent className={classes.content}>
                      <Typography
                        className={classes.contHead}
                        gutterBottom
                        variant="h5"
                        component="h2"
                      >
                        Game Title
                      </Typography>
                      <Typography
                        className={classes.contText}
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        This is a game This is a game This is a game This is a
                        game This is a game This is a game This is a game This
                        is a game
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

export default WebProjects;