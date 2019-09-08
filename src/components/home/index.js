import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Header from "./Header";
import Search from "./search";
import Title from "./title"; 
import Categories from './categories';
import Trending from './trending'
import "./home.css";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }, 
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <React.Fragment>

      <div className={classes.root}>
        <Grid container className="background">
          <Grid item xs={12}>
            <Header />
          </Grid> 
          <Grid item xs={12}   className={classes.search}>
          <h3 className="findthebest">Find the best restaurants in Unilag</h3>
            <div className="searchParent">
              <Search />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} className="trending" >
          <div className="searchParent">
            <Title
              title="Trending Restaurants"
            />
          </div>
        </Grid> 
        <Trending />

        <Grid item xs={12}  className="categories pt-10"   >
          <div className="searchParent">
            <Title
              title="Categories"
            />
          </div>
        </Grid> 
        <Categories />
      </div>


    </React.Fragment>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CenteredGrid);
