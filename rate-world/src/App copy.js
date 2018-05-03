import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
=======
import './App.css';
>>>>>>> 53631a6c585775f0a522b165ba25932d0d48e086
import Footer from './components/Footer';
import Card from './components/Card';
import Wrapper from './components/Wrapper';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  state = {
    card: [],
  };

render() {
    return (
<<<<<<< HEAD
      <div>
        <Nav />
        <Jumbotron />
          <Container>
            <Row>
              <Col size="md-12">



              </col>
            </Row> 
          </Container>
        </div>
=======
      <Wrapper>
        <Navbar />
        <Jumbotron />
        <Card />
        <Footer />
      </Wrapper>
    );
  }
}
>>>>>>> 53631a6c585775f0a522b165ba25932d0d48e086

export default App;

// const App = () => (
//   <Router>
//     <div>
//       <Navbar/>
//       <Switch>
//         <Route exact path="/" component={Home} />
//         <Route exact path="/profile" component={} />
//         <Route exact path="/signup" component={} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>
// );

//     onData(res) {
//       const result = {
//       image: "https://www.enterprise.com/content/dam/global-vehicle-images/cars/FORD_FOCU_2012-1.png",
//       title: res.name,
//       subtitle: res.subtitle,
//       rating: res.rating,
//       desc: res.description,
//       user: res.user,
//       posts: res.posts,
//     };
//     return result;
//   }


//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }


