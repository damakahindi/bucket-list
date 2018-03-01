import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router';
import '../../styles/NotFound.css';


const NotFound = () =>
  (
    <div className="notFound">
      <div className="Layer">
        <h1 className="Title">404 </h1>
        <p className="App-intro">Page not found</p>
        <p>We are sorry but the page you are looking for does not exist.</p>
        <Link to="/"><Button bsSize="large" bsStyle="danger">Go home</Button></Link>
      </div>
    </div>
  );

export default NotFound;
