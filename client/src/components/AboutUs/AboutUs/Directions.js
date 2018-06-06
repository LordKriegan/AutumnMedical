import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Directions extends Component {
    getDirs = () => {
        alert("Under Construction!");
    }
    render() {
        const mapCenter = { lat: 33.950027, lng: -118.005228 }
        const GMap = withScriptjs(withGoogleMap(props =>
            <GoogleMap
                defaultZoom={20}
                defaultCenter={mapCenter}
            >
                <Marker
                    position={mapCenter}
                />
            </GoogleMap>
        ));
        return (
            <div>
                <GMap
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDo8Q4pYGM8Mpba0MsvAs43l_pBM23iRE4"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <div id="dirContainer" className="text-center">
                    <div id="dirBox"></div>
                    <button className="btn btn-info" onClick={this.getDirs}>Get Directions!</button>
                </div>
            </div>
        );
    }
}

export default Directions