import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


//pages
import Home from './pages/Home'
import AreasOfPractice from './pages/AreasOfPractice'
import TheStaff from './pages/TheStaff'
import AboutUs from './pages/AboutUs'
import Err404Page from './pages/Err404Page'
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/areasofpractice" component={AreasOfPractice} />
              <Route exact path="/thestaff" component={TheStaff} />
              <Route exact path="/aboutus" component={AboutUs} />
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
