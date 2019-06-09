import React, { Component, useRef, useEffect } from 'react'; 
import './view.css';
import Button from '../general/Button';
import Rank from '../general/Rank';
import Rate from '../general/Rate/AnimatedRater';
import Upload from '../general/Upload';
import Review from '../reviews/review';
import Footer from '../footer/footer';
import {
    Col,
    Row, Form, FormGroup, Label, Input
  } from "reactstrap";

class ViewRestaurant extends Component {
    render() {
        return (
            <div >
                <Row className="longRow">
                    <Col md={12} className="p-0" >
                        <img 
                            src="/images/spag1.jpg"
                            alt="restaurant"
                            className="headerImage"
                        />
                    </Col>
                    <Col md={{ size: 10, offset: 1 }}>
                        <Row>
                            <Col md="8" >
                                <Main /> 
                            </Col>
                            <Col md="4">
                                <Others />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Footer />
            </div>
        );
    }
}
 
const Main = () => {
    const rateRef = useRef(null);
    const scrollToRef = (ref) => {
        console.log(ref.current.offsetTop); //This is not working so I'm hardcoding 
        window.scrollTo({top:793, behavior: "smooth"})
    }     
    return (
        <React.Fragment>
            <Row>
                <Col md="10" >
                    <div>
                        <h2> Sir Chi</h2>
                    </div>
                    <div> 
                        <Button
                            float="left"
                            title="Review"
                            handleClick = {()=>scrollToRef(rateRef)} 
                        />  
                        <Button
                            float="left"
                            title="Rate"
                            handleClick = {()=>scrollToRef(rateRef)}
                        />
                    </div>
                </Col>
                <Col md="2" className="m-10" >
                    <div className="alignRank">
                        <Rank 
                            rank={3.2}
                        />
                    </div>
                    <div> 
                        <span> 43 Votes  </span>
                    </div>
                </Col>
            </Row>
            <hr  />
            <Row> 
                <Col md="6" >
                    <div > 
                        <h5> <strong>Contact</strong> </h5> 
                    </div>
                    <div className="m-10" >
                        <h6>+2389092201</h6>
                        <h6>
                            Block 26, Plot 10 Admiralty way, The Bridge Apartment, Lekki Phase 1, Lagos
                        </h6>
                    </div>
                    <div className=" " >
                        <h5> <strong>Description</strong> </h5>
                        <h6>
                            Here a litle description of the restaurant is displayed.
                            Like their major dishes. How affordable it is. POS options .You know 
                        </h6>
                    </div>
                </Col>
                <Col md="6" className="row2"> 
                    <div>  
                        <h5> <strong>Opening Hours</strong> </h5>
                        <h6>
                            Mon-Fri 10am - 11pm
                        </h6>
                    </div>
                    <div className="m-20">  
                        <h5> <strong>Most Popular Dish</strong> </h5>
                        <h6>
                            Spaghetti
                        </h6>
                    </div>
                    <div className="m-20">  
                        <h5> <strong>Menu</strong> </h5>
                        <h6>
                            Spaghetti, Beans, Bread, Yam and Egg, Jollof, Ofada, White Rice,
                            Jollof Spaghetti
                        </h6>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col  md="12">
                <Form >  
                    <h5 ref={rateRef}> <strong>Write a Review</strong> </h5>
                     
                    <FormGroup>  
                        <Label for="Rate"><strong>Rate</strong></Label>
                        <Rate />
                    </FormGroup>

                    <FormGroup> 
                        <Input 
                            type="textarea" 
                            name="review" 
                            placeholder="Write about a personal experience in the restaurant. " 
                            rows="6" 
                        />
                    </FormGroup>
                    <FormGroup>  
                        <Upload />
                    </FormGroup>
                    <FormGroup>  
                         
                        <Button
                        float="left"
                        title="Post Review"
                    />
                    </FormGroup>
                    
                    
                </Form>
                </Col>
            </Row>
            <div className="mt-40 mb-20">  
                <div> 
                    <h5> <strong>Reviews For Sir Chi Restaurant</strong> </h5> 
                </div>
                <Review />
                <Review />
                <Review />
            </div>
        </React.Fragment>
    );
};



const Others = () => {
    return (
        <div>
            <Row>
                <Col md={12}>
                    <div  >
                        <h4 className="m0"> Similar Restaurants</h4>
                        <hr className="m0"></hr>
                    </div>
                </Col>
                <Similar />
                <Similar />
                <Similar />
                <Similar />
                <Similar />
            </Row>
        </div>
    );
};

const Similar = () => {
    return(
        <a href="/" className="m-10 similar"> 
            <img alt="restaurant" src="/images/boy.svg" className="similarImage" />  
            <h5 className="similarName"> <strong>Shop 10(Glamore Bits) </strong> </h5>   
            <Rank 
                rank={3.2}
             />
             <hr className="m-10 lightLine"></hr>
        </a>
    )
}
 
export default ViewRestaurant;