import React, { Component } from 'react'; 
import './view.css';
import Button from '../general/Button';
import Rank from '../general/Rank';
import Rate from '../general/Rate/AnimatedRater';
import Upload from '../general/Upload';
import Review from '../reviews/review';
import {
    Col,
    Row, Form, FormGroup, Label, Input
  } from "reactstrap";

class ViewRestaurant extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col md={12} >
                        <img 
                            src="https://files.ofadaa.com/uploads/restaurant_cover_image/file/4155/header_the-harvest-lagos-2.jpg"
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
            </div>
        );
    }
}
 
const Main = () => {
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
                        /> 
                        <Button
                            float="left"
                            title="Rate"
                        />
                    </div>
                </Col>
                <Col md="2" >
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
                <Col md="12">
                <Form>  
                    <h5> <strong>Write a Review</strong> </h5>
                     
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
            </div>
        </React.Fragment>
    );
};



const Others = () => {
    return (
        <div>
            John
        </div>
    );
};
 
export default ViewRestaurant;