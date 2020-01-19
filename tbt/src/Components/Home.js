import React, { Component } from "react";
import { Alert, Carousel } from "react-bootstrap";
import Noida from '../others/Noida.jpg';
import KarolBagh from '../others/KarolBagh.jpg';
import SatyaNiketan from '../others/SatyaNiketan.jpg';
import '../styles/main.css';


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="warning">
          <Alert.Heading>Coming soon at:</Alert.Heading>
        </Alert>
        <Carousel className="Carousel-acc">
          <Carousel.Item>
            <img
              className="d-block w-100 CImg"
              src={Noida}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 className="CCaption">Noida</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 CImg"
              src={SatyaNiketan}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="CCaption">Satya Niketan</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 CImg"
              src={KarolBagh}
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 className="CCaption">Karol Bagh</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Home;
