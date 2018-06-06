import React, { Component } from 'react';
import Page from '../components/Page';
import ComponentList from '../components/AboutUs/ComponentList';

class AboutUs extends Component {
  render() {
    return (
      <div className="row">
        <Page componentList={ComponentList} />
      </div>
    );
  }
}

export default AboutUs;
