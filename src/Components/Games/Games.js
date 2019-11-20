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
//import Paper from "@material-ui/core/Paper";
//styles
import { makeStyles } from "@material-ui/core/styles";
import "../../themes/animate.css";
import "../../themes/global.css";
//import bender from "../../images/bender.png";
//import bender2 from "../../images/bender.svg";
import pic1 from "../../images/pic1.png";
//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { library } from "@fortawesome/fontawesome-svg-core";
import { faWindows } from "@fortawesome/free-brands-svg-icons";
//import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { faLinux } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

// library.add(faCoffee);

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grid: {},
  gridItem: {
    [theme.breakpoints.up("md")]: {
      padding: "48px !important"
    }
    // [theme.breakpoints.down("sm")]: {
    //   padding: theme.spacing(0)
    // }
  },
  card: {
    "&:hover": {
      // boxShadow:
      //   "0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(255, 255, 255, 0.23)",
      margin: "-10px auto 0",
      // transform: "scale(1.01)",
      boxShadow: "0px 4px 8px rgba(38, 38, 38, 0.2)",
      // top: "-4px",
      transition: ["transform", "boxShadow", "margin", "top", "border"],
      transitionDuration: 300
    }
    // maxWidth: 250,
    // maxHeight: 345,
    // boxShadow:
    //   "10px 10px 5px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.43)"
    // display: "block",
    // width: "100px"
    // transitionDuration: "0.3s",
    // height: "10vw"
  },
  media: {
    height: "auto",
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
    background: "linear-gradient(to right, #ee9ca7, #ffdde1)",
    padding: "10px"
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
    padding: 0,
    display: "block"
  },
  button: { backgroundColor: "white", padding: "0" },
  icons: { color: "white", fontSize: "1.8rem" },
  iconsTBA: { color: "#9c7e82", fontSize: "1.3rem" }
}));

const Games = () => {
  const classes = useStyles();

  return (
    <div className="full-container-2">
      <div className={classes.root}>
        <Grid className={classes.grid} container spacing={3}>
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Play Now!"
                />
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
                    This is a game This is a game This is a game This is a game
                    This is a game This is a game This is a game This is a game
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonArea}>
                <Button className={classes.buttons}>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faWindows}
                  />
                </Button>
                <Button>
                  <FontAwesomeIcon
                    title="Not Available Yet"
                    className={classes.iconsTBA}
                    icon={faLinux}
                  />
                </Button>
                <Button>
                  <FontAwesomeIcon className={classes.icons} icon={faGithub} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonArea}>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonArea}>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonArea}>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonArea}>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid className={classes.gridItem} item xs={12} sm={6} md={4} lg={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={pic1}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.content}>
                  <Typography gutterBottom variant="h5" component="h2">
                    Lizard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.buttonArea}>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Games;
