import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Home from "./pages/Home";
import ProfileView from "./pages/ProfileView/ProfileView";
import Browse from "./pages/Browse";
import Signup from "./pages/Signup";


const App = () => (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Home} />
      <Route exact path="/user:id" component={ProfileView} />
      <Route exact path="/browse" component={Browse} />
      <Route path="/signup" component={Signup} />
    </div>
  </Router>
);

export default App;
