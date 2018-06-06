import React, { Component } from 'react';
import Page from '../components/Page'
import ComponentList from '../components/Staff/ComponentList'

class TheStaff extends Component {
  render() {
    return (
      <div className="row">
        <Page pageTitle="The Staff" componentList={ComponentList} />
      </div>
    );
  }
}

export default TheStaff;
