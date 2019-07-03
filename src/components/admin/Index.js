import React, { Component } from 'react';
import { Card, CardImg, CardBody,
  CardTitle, Button, Col,
  Row,  } from 'reactstrap';
import {navigate} from '@reach/router';

class Index extends Component {
    render() {
        const admincardsInfo = [
            {'title': 'Reported Comments', 'link' : '/admin/reported' },
            {'title': 'Add New Restaurants', 'link' : '/admin/addNew' },
            {'title': 'Edit Restaurants', 'link' : '/admin/edit' }, 
        ]
        return (
            <div>
                <Row>
                    {admincardsInfo.map(admincard => 
                        <Col md="4" >
                            <AdminCard 
                                title={admincard.title}
                                location={admincard.link}  
                            />
                        </Col>
                    )}
                </Row>
                
            </div>
        );
    }
}

const AdminCard = (props) => {
    const handleClick  = (e,location) => {
        e.preventDefault();
        navigate(location);
    }
    return (
      <div>
        <Card>
          <CardImg top width="100%" src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/04/26/09/mcdonalds-bigvegants.jpg" alt="Card image cap" />
          <CardBody>
            <CardTitle>{props.title}</CardTitle>  
            <Button outline color="warning" size="large" onClick={(e) => handleClick(e,props.location)}>{props.title}</Button>
          </CardBody>
        </Card>
      </div>
    );
  };

export default Index;