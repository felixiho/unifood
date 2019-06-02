import React from 'react';  
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


export default () =>(
    <Button 
      variant="contained"
      color="primary"  
      disableRipple
      className={classNames(styles.margin, styles.bootstrapRoot)}>
      Login
    </Button>
);