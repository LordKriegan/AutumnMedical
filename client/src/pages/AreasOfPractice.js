import React, { Component } from 'react';
import ComponentList from '../components/AreasOfPractice/ComponentList'
import Page from '../components/Page'

class AreasOfPractice extends Component {
  render() {
    console.log(ComponentList)
    return (
      <div className="row">
        <Page pageTitle="Areas of Practice"componentList={ComponentList} />
      </div>
    );
  }
}

export default AreasOfPractice;
