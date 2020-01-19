import React, { Component } from "react";
import "../styles/main.css";
import caller from '../others/caller.png';
import emailer from '../others/emailer.png';
import addresser from '../others/addresser.png';
import LogoFull from "../others/LogoLong.jpg";

class ContactUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="finder">
          <h1>FIND US</h1>
          <div className="contactor">
            <div className="deta">
              <img src={caller} />
              <div className="data">
                <h5>CALL US</h5>
                <p>+XX XXXXX XXXXX</p>
              </div>
            </div>
            <div className="deta" style={{marginLeft: '90px', marginRight: '90px'}}>
              <img src={addresser} />
              <div className="data">
                <h5>ADDRESS</h5>
                <p>abc, def, ghj - XXX XXX</p>
              </div>
            </div>
            <div className="deta">
              <img src={emailer} />
              <div className="data">
                <h5>EMAIL</h5>
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer">
          <img src={LogoFull} />
          <div className="frames">
            <div className="rect">
              <i className="fa lala fa-facebook"></i>
            </div>
            <div className="rect">
              <i className="fa lala fa-twitter"></i>
            </div>
            <div className="rect">
              <i className="fa lala fa-behance"></i>
            </div>
            <div className="rect">
              <i className="fa lala fa-linkedin"></i>
            </div>
            <div className="rect">
              <i className="fa lala fa-pinterest"></i>
            </div>
          </div>
          <a href="#">© STAYRIFIC 2020.</a>
          <h5>Made with love for great people.</h5>
        </div>
      </React.Fragment>
    );
  }
}

export default ContactUs;
