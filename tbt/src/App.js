import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import ContactUs from './Components/ContactUs';
import About from './Components/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Home />
      <ContactUs />
    </div>
  );
}

export default App;
