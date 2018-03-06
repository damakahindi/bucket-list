import React, { Component } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import '../../styles/Initial.css';

class InitialSignUp extends Component {
  // state = {  }
  render() {
    return (
      <div className="Layer">
        <Carousel>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://source.unsplash.com/j4PaE7E2_Ws/900x500" />
            <Carousel.Caption>
              <h3 className="Title">Dream </h3>
              <p>Add you various dream destinations.</p>
              <Button> Get Started </Button >
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="https://source.unsplash.com/j4PaE7E2_Ws/900x500" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img width={900} height={500} alt="900x500" src="/carousel.png" />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default InitialSignUp;
