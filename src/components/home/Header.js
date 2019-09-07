import React from 'react'; 
import Grid from '@material-ui/core/Grid'; 
import logo from '../assets/unifood.png'
import CustomButton from './Button';
 

 

function Header(props) { 
  return ( 
    <Grid container> 
        <Grid item xs={12} >   
            <div className= "left" >
                <img src={logo} className="logo" alt="logo" />
            </div>  
        </Grid>    
    </Grid>  
  );
} 



export default Header;
