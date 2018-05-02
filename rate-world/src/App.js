import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import Card from './components/Card';
import Navbar from './components/Navbar';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <Card />
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
