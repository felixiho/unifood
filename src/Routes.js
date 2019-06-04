import React from 'react'; 
import App from './components/home/index';
import { Router, Link } from "@reach/router";
import Restaurant from './components/restaurant/View';

const Routes = () => {
    return (
        <Router>
            <App path="/" />
            <Restaurant path="/restaurant/:restaurantId" /> 
        </Router>
    );
};

export default Routes;