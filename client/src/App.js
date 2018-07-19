import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer'


//pages
import Home from './pages/Home'
import TheStaff from './pages/TheStaff'
import ContactUs from './pages/ContactUs'
import Directions from './pages/Directions'
import Err404Page from './pages/Err404Page'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container" id="divMain">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/thestaff" component={TheStaff} />
              <Route exact path="/directions" component={Directions} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route component={Err404Page} />
            </Switch>
          </Router>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
