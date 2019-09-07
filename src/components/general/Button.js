import React  from 'react';
import {  Button  } from 'reactstrap';

const styles = {}; 

 
styles.button = {
  padding: '4px 19px',
  marginRight: '10px'
};



export default (props) => {
const bstyle = props.float === "right" ? {float:'right'} : {float: 'left'};
const bwidth = props.width ? {width: props.width} : {width: 'fit-content'};
return <Button onClick={props.handleClick} style={{...styles.button, ...bstyle, ...bwidth }}>{ props.title }</Button>;

};