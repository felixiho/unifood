import React, { Component } from 'react';
import Review from '../reviews/review';
import { Card, CardImg, CardBody,
  CardTitle, Button, Col,
  Row,  } from 'reactstrap';

class ReportedComments extends Component {
    

    render() {
        const CommentsfromApi = [
            {
                likeCount: 223,
                dislikeCount: 9, 
                reviewer: "James Jod",
                date: "23 June 2019",
                review: "The food just dey sha",
                reports: [
                    {name: "David Paul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                     status: "2"},
                    {name: "David Paul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                    status: "2"},
                    {name: "David Paul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                    status: "2"}
                ]
            }, 
            {
                likeCount: 223,
                dislikeCount: 9, 
                reviewer: "James Jod",
                date: "23 June 2019",
                review: "The food just dey sha",
                reports: [
                    {name: "David Paul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                     status: "2"},
                    {name: "Random Nigga", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                    status: "2"}
                ]
            }, 
            {
                likeCount: 223,
                dislikeCount: 9, 
                reviewer: "James Jod",
                date: "23 June 2019",
                review: "The food just dey sha",
                reports: [
                    {name: "David Paul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                     status: "2"}, 
                ]
            }, 
        ]
        return (
            <Row>
                {
                    CommentsfromApi.map(review => (
                        <Col md={4}>
                            <Review
                                likeCount = {review.likeCount}
                                dislikeCount = {review.dislikeCount}
                                reviewer = {review.reviewer}
                                date = {review.date}
                                review = {review.review} 
                            />
                            <h5>Reports for this comment</h5>
                            {
                                review.reports.map(report => (
                                    <div>
                                        <Reports 
                                            name={report.name}
                                            email={report.email}
                                            report={report.report}
                                            status={report.status}
                                        />
                                    </div>
                                ))
                            }
                        </Col>
                    ))
                } 
            </Row>
        );
    }
}

const Reports = (props) => { 
    const statuses = [
        {id :1, name: "Made"},
        {id: 2, name: "Recieved and Processing"},
        {id: 3, name: "Processed"}
    ]

    const getstatus = (statusKey) => {
       return statuses.find(status => status.id == statusKey).name;
    }
    return(
        <div>    
            <div className="reviewCard">  
                <Row>
                    <Col md={12}>
                        <div>
                            <h6 className="profileName">{props.name}</h6>  
                            <h6 className="profileName">{props.email}</h6>  
                        </div>  
                    </Col>
                    <Col md={12}>
                        <div>  
                            <h6 className="review">{props.report}</h6>
                            <span className="reviewDate">status: <b>{getstatus(props.status)}</b></span> 
                        </div>  
                    </Col>  
                </Row>
                
            </div> 
        </div>
    )
}

export default ReportedComments;