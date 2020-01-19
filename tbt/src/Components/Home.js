import React, { Component } from "react";
import { Alert, Carousel } from "react-bootstrap";
import Noida from "../others/Noida.jpg";
import KarolBagh from "../others/KarolBagh.jpg";
import SatyaNiketan from "../others/SatyaNiketan.jpg";
import Team1 from "../others/Team1.jpg";
import TeamBG from "../others/TeamBG.png";
import "../styles/main.css";

class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="warning">
          <Alert.Heading>Coming soon at:</Alert.Heading>
        </Alert>
        <div style={{ display: "flex" }}>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={Noida}
                  alt="Avatar"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Noida City, <br />Uttar Pradesh</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={SatyaNiketan}
                  alt="Avatar"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Satya Niketan, New Delhi</h1>
              </div>
            </div>
          </div>
          <div class="flip-card">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={KarolBagh}
                  alt="Avatar"
                  style={{ width: "300px", height: "200px" }}
                />
              </div>
              <div class="flip-card-back">
                <h1>Karol Bagh, New Delhi</h1>
              </div>
            </div>
          </div>
        </div>
        {/* <Carousel className="Carousel-acc">
          <Carousel.Item>
            <img className="d-block w-100 CImg" src={Noida} alt="First slide" />
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
        </Carousel> */}
        <Alert variant="warning">
          <Alert.Heading>PRODUCTS : </Alert.Heading>
        </Alert>

        <div className="space"></div>

        <Alert variant="warning">
          <Alert.Heading>TEAM :</Alert.Heading>
        </Alert>

        <div style={{ display: "flex" }}>
          <div class="container" >
            <img src={Team1} alt="Avatar" class="image" />
            <div class="overlay">
              <p>AYUSHI BAJPAI</p>
              <p>Software Developer</p>
            </div>
          </div>
          
        </div>
        <div className="space"></div>

        <Alert variant="warning">
          <Alert.Heading>COMMUNITIES :</Alert.Heading>
        </Alert>

        <Carousel className="Carousel-acc">
          <Carousel.Item>
            <img className="d-block w-100 CImg" src={TeamBG} alt="First slide" />
            <Carousel.Caption>
              <h3 className="CCaption">
                Lorem ipsum dolor sit amet, consectetur adippisicing Lorem ipsum dolor sit amet, consectetur adippisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</h3>
                <br />
                <p style={{fontFamily: 'monospace', float: 'right', fontSize: '18px'}}>~ Richa Sharma</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 CImg" src={TeamBG} alt="First slide" />
            <Carousel.Caption>
              <h3 className="CCaption">
                Lorem ipsum dolor sit amet, consectetur adippisicing Lorem ipsum dolor sit amet, consectetur adippisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</h3>
                <br />
                <p style={{fontFamily: 'monospace', float: 'right', fontSize: '18px'}}>~ Aditya Narayan</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 CImg" src={TeamBG} alt="First slide" />
            <Carousel.Caption>
              <h3 className="CCaption">
                Lorem ipsum dolor sit amet, consectetur adippisicing Lorem ipsum dolor sit amet, consectetur adippisicing
                elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud</h3>
                <br />
                <p style={{fontFamily: 'monospace', float: 'right', fontSize: '18px'}}>~ Rama K Iyer</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </React.Fragment>
    );
  }
}

export default Home;
