import React, { Component } from 'react';
import DirectionsComponent from '../components/Directions';

class Directions extends Component {
  render() {
    return (
      <div className="row">
        <DirectionsComponent />
      </div>
    );
  }
}

export default Directions;