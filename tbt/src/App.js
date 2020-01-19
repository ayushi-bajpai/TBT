import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import Services from './Components/Services';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component{
  render() {
    return (
      <BrowserRouter>
        <Route path="/" component = {Header} />
        <Route exact path="/" component = {Home} />
        <Route path="/home" component = {Home} />
        <Route path = "/aboutus" component = {About} />
        <Route path = "/contact" component = {ContactUs} />
        <Route path = "/services" component = {Services} />
      </BrowserRouter>
    )
  }
}

export default App;
