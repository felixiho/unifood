import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid'; 
import Restaurant from './Restaurant'; 
import './home.css';

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  search:{  
  }
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className="header ">
      <Grid container className=""  >
        <h1> Trending Restaurants </h1>
      </Grid>
      <Restaurant /> 
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
