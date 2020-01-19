import React, { Component } from "react";
import "../styles/main.css";
import { Alert } from "react-bootstrap";

class Services extends Component {
  render() {
    return (
      <React.Fragment>
        <Alert variant="warning">
          <Alert.Heading>Services :</Alert.Heading>
        </Alert>
      </React.Fragment>
    );
  }
}

export default Services;
