import React  from 'react';
import {  Button  } from 'reactstrap';

const styles = {}; 

 
styles.button = {
  padding: '4px 19px',
  marginRight: '10px'
};

export default (props) => {
const bstyle = props.float === "right" ? {float:'right'} : {float: 'left'};
return <Button style={{...styles.button, ...bstyle }}>{ props.title }</Button>;

};