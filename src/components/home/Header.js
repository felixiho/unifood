import React from 'react'; 
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles'; 
import logo from '../assets/unifood.png'
import { Button } from '@material-ui/core'; 
import classNames from 'classnames';
 

const styles = (theme) => ({
    
   button:{ 
       margin: theme.spacing.unit,
   },
   bootstrapRoot: {
    boxShadow: 'none', 
    textTransform: 'none',
    fontSize: 16,
    padding: '6px 12px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#28483d',
    borderColor: '#28483d',
    fontFamily: [ 
      'Nunito',
    'sans-serif',
    ].join(','),
    '&:hover': {
      backgroundColor: '#193e31',
      borderColor: '#193e31',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: '#193e31',
      borderColor: '#193e31',
    }
  }

});

function Header(props) {
  const { classes } = props;

  return ( 
    <Grid container> 
        <Grid item xs={12} >   
            <div className= "left" >
                <img src={logo} className="logo" alt="logo" />
            </div> 
            <div className=  "right"> 
                <Button 
                    variant="contained"
                    color="primary"  
                    disableRipple
                    className={classNames(classes.margin, classes.bootstrapRoot)}>
                    Login
                </Button>
            </div>
        </Grid>    
    </Grid>  
  );
} 

export default withStyles(styles)(Header);
