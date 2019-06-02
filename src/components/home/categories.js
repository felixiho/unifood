import React, { Component } from 'react' 
import { Card, CardImg, CardBody, CardTitle,  Row, Col } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css'; 
import './search.css'

const styles = {}; 

styles.margin1 = {
  marginTop: '20px',
  marginBottom: '10px'
  
};
styles.margin = {
  margin: '10px auto'
};
styles.owl = {
  touchAction: 'manipulation' //removes one bug in chrome
};


export default class Categories extends Component {
  render() {
    return (
      <div> 

         <Row style={{...styles.margin }} >
         <OwlCarousel 
              className="owl-theme"
              loop
              autoplay={true}
              lazyLoad={true}
              margin={0} 
              dotsEach = {true}   
              responsive = {res}
              style={{...styles.owl }}
          >
          <Cards 
            title="Noodles"
            category = {6}
          /> 
          <Cards 
            title="Swallow"
            category = {4}
          /> 
          <Cards 
            title="Spaghetti"
            category={1}
          />
          <Cards 
            title="Rice"
            category={2}
          />
          <Cards 
            title="Ice-Cream"
            category={3}
          />
          <Cards 
            title="Suya"
            category={5}
          />
          </OwlCarousel>          
         </Row>
        
      </div>
    )
  }
}

/**
 * 
 * Todo:
 * Create a Json file to map all categories with an image
 * then pass their unique ID as a prop and use when calling the category above
 * 
 */
const Cards =  (props) => (
    
  <Col md={12} sm={12} className="cardHover"> 
    <Card style={{...styles.card }}>
      <CardImg top src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/homemade-spaghetti-sauce-horizontal-1530890913.jpg" alt="Card image cap" />
      <CardBody className="notCardHover">
        <CardTitle><strong>{props.title}</strong></CardTitle>
      </CardBody>
    </Card> 
  </Col>
);

const res = {
  // breakpoint from 0 up
  0 : {
      items : 1,
  },
  // breakpoint from 480 up
  480 : {
    items : 2,
  },
  // breakpoint from 768 up
  768 : {
    items : 3,
  }
}