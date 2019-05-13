import React from 'react'; 
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase'; 
import IconButton from '@material-ui/core/IconButton'; 
import SearchIcon from '@material-ui/icons/Search'; 
import './search.css';

const styles = { 
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  },
};

function Search(props) {
  const { classes } = props;

  return (
    <Paper className='search'elevation={1}> 
      <InputBase className={classes.input} placeholder="Search Restaurants " />
      <IconButton className={classes.iconButton} aria-label="Search">
        <SearchIcon />
      </IconButton> 
    </Paper>
  );
}
 

export default withStyles(styles)(Search);
