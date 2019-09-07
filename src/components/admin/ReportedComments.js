import React, { Component } from 'react';
import Review from '../reviews/review';
import FixReportModal from './FixReportModal';
import { Col,
  Row,  } from 'reactstrap';

class ReportedComments extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };

        this.toggle = this.toggle.bind(this);
    }

    showReport(e){
        e.preventDefault();
        this.toggle();
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }
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
                    {name: "Davsdsid Pdsaul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                    status: "2"},
                    {name: "Davifadfad Paaaul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
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
                    {name: "Daavid Paaul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
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
                    {name: "Davifd Paufl", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                     status: "2"}, 
                ]
            },  
            {
                likeCount: 223,
                dislikeCount: 9, 
                reviewer: "James Jod",
                date: "23 June 2019",
                review: "The food just dey sha",
                reports: [
                    {name: "David Pafsaul", email:"peter@test.co", report: "These comments are false and to an extent defame the company's profile which to an extent defeats the whole purpose of this product",
                     status: "1"}, 
                ]
            }, 
        ]
        return (
            <React.Fragment>
                <h2 style={{textAlign: 'center', marginTop: '20px'}}>REPORTED COMMENTS</h2>
                <Row style={{margin: '15px'}}>
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
                                <h5 style={{marginTop: '20px'}}>Reports for this comment</h5> 
                                {
                                    review.reports.map(report => (
                                            <Reports 
                                                name={report.name}
                                                email={report.email}
                                                report={report.report}
                                                status={report.status}
                                                toggle={this.toggle}
                                                modal={this.state.modal}
                                                showReport={this.showReport} 
                                            />
                                    ))
                                } 
                            </Col>
                        ))
                    } 
                </Row>
            </React.Fragment>
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
        <div >    

            <div className="reviewCard" style={{backgroundColor: '#e9ecef'}}>  
                <Row>
                    <Col md={12}>
                        <div>
                            <h6 className="profileName">{props.name}</h6>  
                            <h6 className="profileName">{props.email}</h6>  
                        </div>  
                    </Col>
                    <Col md={12} >
                        <div>  
                            <h6 className="review">{props.report}</h6>
                            <span className="reviewDate">status: <b>{getstatus(props.status)}</b></span> 
                        </div>  
                        <div style={{float: "right"}}> 
                            <FixReportModal 
                                modal= {false}
                                nestedModal= {false}
                                closeAll= {false}
                            /> 
                        </div>
                    </Col>  
                </Row> 
            </div> 

        </div>
    )
}

export default ReportedComments;