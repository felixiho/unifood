import React, { Component, useRef, useEffect } from 'react'; 
import './view.css';
import Button from '../general/Button';
import Rank from '../general/Rank';
import Rate from '../general/Rate/AnimatedRater';
import Upload from '../general/Upload';
import Review from '../reviews/review';
import Footer from '../footer/footer';
import { getRestaurant, getRateCount } from "../../api/restaurants.js";
import {
    Col,
    Row, Form, FormGroup, Label, Input
  } from "reactstrap";

class ViewRestaurant extends Component {
    constructor(props){
        super(props);
        let queryArray = this.props.location.pathname.split("/"); 
        this.state = {
            id: queryArray[queryArray.length-1],
            rateCount: 0,
            restaurant:[]
        }
    }
    componentDidMount(){
        /**
        *Todo: Add a loader while promise is pending
         */
        Promise.all([getRestaurant(this.state.id), getRateCount(this.state.id) ])
            .then(([restaurant, rateCount]) => { 
                this.setState({
                    restaurant: restaurant,
                    rateCount: rateCount
                })
            })
            .catch(error => {
                //redirect to error page
                console.log(error);
            })
    }
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
                                <Main 
                                    restaurant={this.state.restaurant}
                                    rate={this.state.rateCount}   
                                /> 
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
 
const Main = (props) => {
    const rateRef = useRef(null);
    const restaurant = props.restaurant; 
    const scrollToRef = (ref) => { 
        window.scrollTo({top:793, behavior: "smooth"})
    }     
    const reviewsFromApi = [
        {likeCount: 223, dislikeCount: 9, reviewer: "James Jod", date: "23 June 2019", review: "The food just dey sha"},
        {likeCount: 23, dislikeCount: 1, reviewer: "James Bay", date: "23 June 2019", review: "The food just dey sha"},
        {likeCount: 24, dislikeCount: 3239, reviewer: "James Bay", date: "23 June 2019", review: "The food just dey sha"},
        {likeCount: 3, dislikeCount: 10, reviewer: "James Bay", date: "23 June 2019", review: "The food just dey sha"},
        {likeCount: 0, dislikeCount: 9, reviewer: "James Bay", date: "23 June 2019", review: "The food just dey sha"}
    ]
    return (
        <React.Fragment>
            <Row>
                <Col md="10" >
                    <div>
                        <h2> {restaurant.name}</h2>
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
                            rank={restaurant.rating}
                        />
                    </div>
                    <div> 
                        <span> {props.rate.ratecount} Votes </span>
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
                       
                        {
                            restaurant.phone && 
                                restaurant.phone.map( phone => 
                                    <h6>{phone}</h6> 
                                )
                        } 
                        <br />
                        <h6>{restaurant.address}</h6>
                        <h6>{restaurant.location}</h6>
                    </div>
                    <div className=" " >
                        <h5> <strong>Description</strong> </h5>
                        <h6>{restaurant.description}</h6>
                    </div>
                </Col>
                <Col md="6" className="row2"> 
                    <div>  
                        <h5> <strong>Opening Hours</strong> </h5>
                        {
                            restaurant.openingHours && 
                                restaurant.openingHours.map( openHour => 
                                    <h6>{openHour}</h6> 
                                )
                        }  
                    </div>
                    <div className="m-20">  
                        <h5> <strong>Most Popular Dish</strong> </h5> 
                        <h6>
                             {
                            restaurant.popularDish && 
                                restaurant.popularDish.map( (popular, i, dishes) => 
                                   <span> {popular}{ i < dishes.length - 1  && ","} </span>
                                )
                        } 
                        </h6>
                    </div>
                    <div className="m-20">  
                        <h5> <strong>Menu</strong> </h5>
                        <h6>
                             {
                            restaurant.menu && 
                                restaurant.menu.map( (menu, i, menus) => 
                                   <span> {menu}{ i < menus.length - 1 && ","} </span>
                                )
                        } 
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
                {
                    reviewsFromApi.map(review => (
                        <Review
                            likeCount = {review.likeCount}
                            dislikeCount = {review.dislikeCount}
                            reviewer = {review.reviewer}
                            date = {review.date}
                            review = {review.review} 
                        />
                    ))
                } 
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