import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'; 
import Grid from '@material-ui/core/Grid';   
import Header from './Header'; 
import Search from './search';
import Popular from './popular';
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
    <div className={classes.root}>
      <Grid container className="background"  >
        <Grid item xs={12}>  
            <Header />
        </Grid> 
        <Grid item xs={12} className={classes.search}> 
            <div className="searchParent">
                <Search  />
            </div> 
        </Grid> 
      </Grid>
      <Grid item xs={12} className={classes.search}> 
          <div className="searchParent">
              <Popular  />
          </div> 
      </Grid> 
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
