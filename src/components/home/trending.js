import React from 'react'; 
import { withStyles } from '@material-ui/core/styles';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,  Row, Col } from 'reactstrap';   
import './search.css'

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
        <CardImg top src="http://damiblog.com.ng/wp-content/uploads/2018/06/Philly4.jpeg" alt="event image" />
        <CardBody className="notCardHover">
          <CardTitle><strong>Sakamnje</strong></CardTitle>
          <CardSubtitle>
            12 Feb
          </CardSubtitle>
          <CardText style={{...styles.a }}>Unilag Lagos</CardText> 
        </CardBody>
      </Card> 
  </Col>
);

export default withStyles(styles)(Trending);
