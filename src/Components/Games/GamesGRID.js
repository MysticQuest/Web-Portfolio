import React from "react";
//mui components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//styles
import { makeStyles } from "@material-ui/core/styles";
import "../../themes/animate.css";
import "../../themes/global.css";
import bender from "../../images/bender.png";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%"
  },
  thumbs: {
    height: "50%",
    width: "50%"
  }
}));

const Games = () => {
  const classes = useStyles();

  return (
    <div className="full-container-2">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=12 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=12 sm=6 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=12 sm=6 Lorem ipsum dolor sit amet, consectetur adipiscing
              elit. Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=6 sm=3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=6 sm=3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=6 sm=3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              <img className={classes.thumbs} src={bender} alt="bender"></img>
              xs=6 sm=3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
          <Grid item xs={3} sm={3}>
            <Paper className={classes.paper}>
              xs=6 sm=3 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam tempor augue risus, ut tempor dolor tincidunt eu.
            </Paper>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Games;
