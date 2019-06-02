import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';  
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

const Title = (props) => { 

  return (
    <React.Fragment>
      <div className="header ">
        <Grid container className=""  >
          <h2> {props.title} </h2>
        </Grid>  
      </div>   
    </React.Fragment>
  );
}
 

export default withStyles(styles)(Title);

