import React from 'react'; 
import { withStyles } from '@material-ui/core/styles';
import { Card, CardImg, CardText, CardBody, CardTitle, Row, Col , Button} from 'reactstrap';   
import './search.css';
import Rank from '../general/Rank'; 
import { Link }  from "@reach/router";
import { getTrending } from '../../api/index.js';


const styles = {}; 

styles.margin1 = {
  marginTop: '20px',
  marginBottom: '10px' 
  
};

styles.parentMargin = {
  margin: '0 auto', 
}
 
styles.a = {
  marginBottom: '0',

};
  
styles.viewMore = {
  textAlign: 'right',
  margin: '0 15px',
}


class Trending extends React.Component { 
  constructor(props){
    super(props);
    this.state = {
      trending : [],
      loading: true
    }
  }
  
  componentDidMount() {
    
    getTrending()
      .then( response => {   
        this.setState({
          trending: response,
          loading: false
        }); 
      })
      .catch( error => {
        console.log(error);
      })
  }
  
  render() { 
    const {trending, loading} = this.state; 
    return ( 
      <Row style={{...styles.parentMargin}} className="parentMargin"> 
        {
          loading ? (
            <div>Loading...</div>
          ) : (
            
            trending.map( trends => <Cards key={trends._id} trends={trends} />)
            
          )
        }
        <Col md={12} style={{...styles.margin1}}>  
          <Link to='/restaurants/all'> <b>View All restaurants </b></Link>
        </Col>
      </Row>
    )
     
  }
}

 

const Cards =  (props) => ( 
  <Col md={4} style={{...styles.margin1}}> 
    <Link to={`/restaurant/${props.trends._id}`}>
      <Card className="cardHover" >
        <CardImg top src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY3fMpLiSpzJ0ugsh8jKSc5AkSiIGqr4P3RGDh1AzR5pEwL9wl" alt="Restaurant Image" />
        <CardBody className="notCardHover">
          <CardTitle>
            <strong>{props.trends.name}</strong>
            <Rank 
              rank={props.trends.rating}/>  
          </CardTitle> 
          <CardText style={{...styles.a }}>{props.trends.location}</CardText> 
        </CardBody>
      </Card> 
      </Link>
  </Col>
);

export default withStyles(styles)(Trending);
