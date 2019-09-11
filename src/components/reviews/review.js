import React, { Component }  from 'react'; 
import './review.css';
import Rank from '../general/Rank';
import {
    Col,
    Row
  } from "reactstrap";
import ReportModal from './reportModal';
import { handleComment, } from "../../api/reviews.js";
 
  
  class Review extends Component {
    constructor(props){
        super(props);
        this.state={
            like: false,
            likeCount: props.likeCount,
            dislikeCount: props.dislikeCount,
            dislike: false,
            id:props.id
        }
        this.getImage = this.getImage.bind(this);
    }
    componentDidMount(){ 
    }

    handleReaction(type){    
        handleComment(type, this.state.id)
            .then(data => {
                this.setState({[type]: data.updatedComment[type]})
            })
        if(type === 'downvotes') { 
            if(this.state.like){
                this.setState( prevState => ({ 
                    like: !prevState.like, 
                    likeCount: prevState.likeCount - 1,
                    dislike: !prevState.dislike,
                    dislikeCount: prevState.dislikeCount + 1
                    })
                ); 
                return;
            }
            this.setState( prevState => ({ 
                dislike: !prevState.dislike,
                dislikeCount: prevState.dislike ? prevState.dislikeCount - 1 : prevState.dislikeCount + 1
            }) );  
            return;
        }
        if(type === 'upvotes') {
            if(this.state.dislike){
                this.setState( prevState => ({ 
                    dislike: !prevState.dislike, 
                    dislikeCount: prevState.dislikeCount - 1,
                    like: !prevState.like,
                    likeCount: prevState.likeCount + 1
                    })
                ); 
                return;
            }
            this.setState( prevState => ({ 
                like: !prevState.like ,
                likeCount: prevState.like ? prevState.likeCount - 1 : prevState.likeCount + 1
            }) );
            return;
        }
    }
 

    getImage(type){
        if(type === 'like') return !this.state.like ? "/images/like.svg?": "/images/liked.svg?";
        if(type === 'dislike') return !this.state.dislike ? "/images/dislike.svg?" : "/images/disliked.svg?"; 
    }

    handleReportClick(e){
        e.preventDefault();
        
    }
      
    render() {
        //this.setState({id: this.props.key})
        return (
            <div className="reviewCard">  
                <Row>
                    <Col md={12}>
                        <div>
                            <img alt="profile" src="/images/boy.svg"  className= "profileImage"/> 
                            <h6 className="profileName">{this.props.reviewer}</h6> 
                            <Rank
                                rank={this.props.rank} />
                        </div>  
                    </Col>
                    <Col md={12}>
                        <div> 
                            <span className="reviewDate">{this.props.date}</span>  
                            <h6 className="review"> {this.props.review}</h6>
                        </div>  
                    </Col> 
                    <Col md={12}>
                        <div className="mt-20">   
                            <button className="reactionButton" onClick={e => this.handleReaction('downvotes')}>
                                <img alt="Dislike" src={this.getImage('dislike')}  className="reactionImage"/>
                            </button> 
                            <span className="reactionCount">{this.state.dislikeCount}</span>

                            <button className="reactionButton" onClick={e => this.handleReaction('upvotes')}>
                                <img alt="Like" src={this.getImage('like')}  className="reactionImage"/>
                            </button>  
                            <span className="reactionCount">{this.state.likeCount}</span>

                            <span className="reviewDate right"> 
                                <ReportModal 
                                    modal= {false}
                                    nestedModal= {false}
                                    closeAll= {false}
                                /> 
                            
                            </span>   
                        </div>  
                    </Col>
                </Row>
                
            </div> 

        );
    }

    
}
  
   

export default Review;