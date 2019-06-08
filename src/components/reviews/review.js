import React, { Component }  from 'react'; 
import './review.css';
import Rank from '../general/Rank';
import {
    Col,
    Row
  } from "reactstrap";
 
  
  class Review extends Component {
    constructor(props){
        super(props);
        this.state={
            like: false,
            likeCount: 38,
            dislikeCount: 338,
            dislike: false 
        }
        this.getImage = this.getImage.bind(this);
    }

    handleReaction(type){   
        if(type === 'dislike') { 
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
        if(type === 'like') {
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
      
    render() {
        return (
            <div className="reviewCard">  
                <Row>
                    <Col md={12}>
                        <div>
                            <img alt="profile" src="/images/boy.svg"  className= "profileImage"/> 
                            <h6 className="profileName">Jam Afolabi</h6> 
                            <Rank
                                rank="3.2" />
                        </div>  
                    </Col>
                    <Col md={12}>
                        <div> 
                            <span className="reviewDate">12 Sep 2019</span>  
                            <h6 className="review"> The food was quite empty. Environment was dirty as fuck and staff were rude</h6>
                        </div>  
                    </Col> 
                    <Col md={12}>
                        <div className="mt-20">   
                            <button className="reactionButton" onClick={e => this.handleReaction('dislike')}>
                                <img alt="Dislike" src={this.getImage('dislike')}  className="reactionImage"/>
                            </button> 
                            <span className="reactionCount">{this.state.dislikeCount}</span>

                            <button className="reactionButton" onClick={e => this.handleReaction('like')}>
                                <img alt="Like" src={this.getImage('like')}  className="reactionImage"/>
                            </button>  
                            <span className="reactionCount">{this.state.likeCount}</span>

                            <span className="reviewDate right">
                            <a href="/">Report</a> 
                            </span>   
                        </div>  
                    </Col>
                </Row>
            </div> 
        );
    }
}
  
   

export default Review;