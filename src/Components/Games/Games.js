import React from "react";
//mui components
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
//styles
import { makeStyles } from "@material-ui/core/styles";
import "../../themes/animate.css";
import "../../themes/global.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

const Games = () => {
  const classes = useStyles();

  return (
    <div className="full-container">
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={3}>
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
