import React from 'react'; 
import { withStyles } from '@material-ui/core/styles';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,  Row, Col } from 'reactstrap';   
import './search.css';
import Rank from '../general/rank';

const styles = {}; 

styles.margin1 = {
  marginTop: '20px',
  marginBottom: '10px'
  
};

styles.parentMargin = {
  margin: '0 auto'
}
 
styles.a = {
  marginBottom: '0',

};
  
styles.viewMore = {
  textAlign: 'right',
  margin: '0 15px',
}


class Trending extends React.Component { 
 

  render() { 

    return (
      <Row style={{...styles.parentMargin}}>
        <Cards />
        <Cards />
        <Cards /> 
      </Row>
    );
  }
}

 

const Cards =  (props) => (
    
  <Col md={4}> 
      <Card className="cardHover" >
        <CardImg   top src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3fMpLiSpzJ0ugsh8jKSc5AkSiIGqr4P3RGDh1AzR5pEwL9wl" alt="Restaurant Image" />
        <CardBody className="notCardHover">
          <CardTitle>
            <strong>Salado</strong>
            <Rank 
              rank={32}/>  
          </CardTitle> 
          <CardText style={{...styles.a }}>Unilag Lagos</CardText> 
        </CardBody>
      </Card> 
  </Col>
);

export default withStyles(styles)(Trending);
