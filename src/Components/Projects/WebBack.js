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
import blogPic from "../../images/projImages/blog.png";
import cryptoPic from "../../images/projImages/crypto.png";
import listPic from "../../images/projImages/list.png";
import newsPic from "../../images/projImages/news.png";
import whispPic from "../../images/projImages/whisp.png";
import wikiPic from "../../images/projImages/wiki.png";
import nemPic from "../../images/men.jpg";

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
        backgroundImage: `url(${blogPic}) !important`,
        transition: "background-image 0.3s ease-in-out",
        webkitTransition: "background-image 0.3s ease-in-out",
        mozTransition: "background-image 0.3s ease-in-out",
        oTransition: "background-image 0.3s ease-in-out"
      },
      "& $media2": {
        backgroundImage: `url(${newsPic}) !important`,
        transition: "background-image 0.3s ease-in-out 0.1s",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
      "& $media3": {
        backgroundImage: `url(${listPic}) !important`,
        transition: "background-image 0.3s ease-in-out 0.1s",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
      "& $media4": {
        backgroundImage: `url(${whispPic}) !important`,
        transition: "background-image 0.3s ease-in-out 0.1s",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
      "& $media5": {
        backgroundImage: `url(${cryptoPic}) !important`,
        transition: "background-image 0.3s ease-in-out 0.1s",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
      "& $media6": {
        backgroundImage: `url(${wikiPic}) !important`,
        transition: "background-image 0.3s ease-in-out",
        webkitTransition: "background-image 0.3s ease-in-out 0.1s",
        mozTransition: "background-image 0.3s ease-in-out 0.1s",
        oTransition: "background-image 0.3s ease-in-out 0.1s"
      },
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
    paddingTop: "33%",
    // objectFit: "cover",
    transition: "background-image 0.3s ease-in-out",
    [theme.breakpoints.up("xl")]: {
      paddingTop: "46.25%",
      width: "100%"
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "46.25%",
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
    // background:
    //   "linear-gradient(to right, #216998, #007b9d, #008b99, #2D959A, #5da683)",
    background:
      "linear-gradient(270deg, rgba(89,100,117,1) 0%, rgba(76,77,113,1) 34%, rgba(58,59,89,1) 69%, rgba(40,41,77,1) 100%)",
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
const blogTi = "Blog";
const newsTi = "Newsletter Sub";
const listTi = "To-Do List";
const whispTi = "Whisper App clone";
const wikiTi = "Wiki API";
const cryptoTi = "Crypto Converter";

// Descriptions
const blogDes = "A Blog with basic functionality.";
const newsDes = "A newsletter subscription service through Mailchimp's API.";
const listDes = "A simple to-do list.";
const whispDes =
  "An exercise on authentication using OAuth and local auth methods.";
const cryptoDes =
  "A cryptocurrency converter that uses the 'Bitcoin Average' API. ";
const wikiDes = "An exercise on RESTful APIs (without html).";

// Tooltip info
const blogTT = "With NodeJS, Express and MongoDB.";
const newsTT = "With NodeJS, Express and MongoDB.";
const listTT = "With NodeJS, Express and MongoDB.";
const whispTT = "With NodeJS, Express and MongoDB.";
const cryptoTT = "With NodeJS, Express.";
const wikiTT = "With NodeJS, Express and MongoDB.";

// Play links
const blogLi = "";
const newsLi = "";
const listLi = "";
const whispLi = "";
const cryptoLi = "";
const wikiLi = "";

// Source links
const blogSo = "https://github.com/MysticQuest/Web-Blog";
const newsSo = "https://github.com/MysticQuest/Web-Newsletter_Signup";
const listSo = "https://github.com/MysticQuest/Web-To_Do_List";
const whispSo = "https://github.com/MysticQuest/Web-Whisper_app_clone";
const cryptoSo = "https://github.com/MysticQuest/Web-Crypto_Converter";
const wikiSo = "https://github.com/MysticQuest/Web-Wiki_API";

const tba = "Host Pending";

const WebReact = () => {
  const classes = useStyles();
  // if (activeIndex === 1) {
  //   activateAnim = true;
  // }
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
              title={tba}
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={blogLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media1}`}
                  image={nemPic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {blogTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {blogDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={blogSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={blogTT}
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

        <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title={tba}
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={newsLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media2}`}
                  image={nemPic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {newsTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {newsDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={newsSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={newsTT}
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

        <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title={tba}
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={listLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media3}`}
                  image={nemPic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {listTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {listDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={listSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={listTT}
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

        <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title={tba}
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={whispLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media4}`}
                  image={nemPic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {whispTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {whispDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={whispSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={whispTT}
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

        <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title={tba}
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={cryptoLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media5}`}
                  image={nemPic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {cryptoTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {cryptoDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={cryptoSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={cryptoTT}
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

        <Grid className={classes.gridItem} item xs={12} sm={12} md={6} lg={4}>
          <Card className={classes.card}>
            <Tooltip
              classes={{ tooltip: classes.toolTipsCard }}
              TransitionComponent={Zoom}
              title={tba}
              placement="top"
            >
              <CardActionArea
                target="_blank"
                rel="noopener noreferrer"
                href={wikiLi}
                className={classes.cardActionArea}
              >
                <CardMedia
                  className={`${classes.media} ${classes.media6}`}
                  image={nemPic}
                />
                <CardContent className={classes.content}>
                  <Typography
                    className={classes.contHead}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    {wikiTi}
                  </Typography>
                  <Typography
                    className={classes.contText}
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {wikiDes}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Tooltip>
            <CardActions className={classes.buttonArea}>
              <Button
                href={wikiSo}
                target="_blank"
                rel="noopener noreferrer"
                className={classes.buttons}
              >
                <FontAwesomeIcon className={classes.icons} icon={faGithub} />
              </Button>

              <Tooltip
                classes={{ tooltip: classes.toolTips }}
                TransitionComponent={Zoom}
                title={wikiTT}
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
      </Grid>
    </div>
  );
};

export default WebReact;
