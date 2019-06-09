import React from 'react';
import './footer.css';
import {
    Col,
    Row
  } from "reactstrap";

const Footer = () => {
    return (
        <Row className="footer longRow">
            <Col>
                CopyRight © 2019 UNIFOOD
            </Col>
        </Row>
    );
};

export default Footer;