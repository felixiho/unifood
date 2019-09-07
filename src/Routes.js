import React from 'react'; 
import App from './components/home/index';
import { Router, Link } from "@reach/router";
import Restaurant from './components/restaurant/View';
import Index from './components/admin/Index';
import ReportedComments from './components/admin/ReportedComments';

const Routes = () => {
    return (
        <Router>
            <App path="/" />
            <Restaurant path="/restaurant/:restaurantId" /> 
            <Index path="/admin/index" /> 
            <ReportedComments path="/admin/reported" /> 
        </Router>
    );
};

export default Routes;