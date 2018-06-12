/* eslint-disable no-undef */
/* odd glitch with google supposedly being undefined */
import React, { Component } from 'react';
import { compose, withProps, lifecycle } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';
const mapCenter = { lat: 33.950027, lng: -118.005228 }
class Directions extends Component {
    state = {
        userLoc: "",
        directionList: ""
    }
    getDirs = () => {
        if (navigator && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((pos) => {
                this.setState({
                    userLoc: {
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude
                    }
                })
            }, (err) => {
                window.open('https://www.google.com/maps/dir/?api=1&destination=autumnmedical&destination_place_id=ChIJjyO-9ZDUwoARZKZ2ti7Jb2w')
            })
        }
    }
    render() {
        const mapProps = {
            googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDo8Q4pYGM8Mpba0MsvAs43l_pBM23iRE4",
            loadingElement: <div style={{ height: `100%` }} />,
            containerElement: <div style={{ height: `400px` }} />,
            mapElement: <div style={{ height: `100%` }} />,
        }
        const userLocation = this.state.userLoc;
        const MyMapComponent =
            (userLocation) ?
                compose(
                    withProps(mapProps),
                    withScriptjs,
                    withGoogleMap,
                    lifecycle({
                        componentDidMount() {
                            const DirectionsService = new google.maps.DirectionsService();

                            DirectionsService.route({
                                origin: new google.maps.LatLng(userLocation.lat, userLocation.lng),
                                destination: new google.maps.LatLng(mapCenter),
                                travelMode: google.maps.TravelMode.DRIVING,
                            }, (result, status) => {
                                if (status === google.maps.DirectionsStatus.OK) {
                                    this.setState({
                                        directions: result,
                                    });
                                } else {
                                    console.error(`error fetching directions ${result}`);
                                }
                            });
                        }
                    })
                )(props => {
                    return (<GoogleMap
                        defaultZoom={7}
                        defaultCenter={new google.maps.LatLng(userLocation.lat, userLocation.lng)}
                    >
                        {props.directions && <DirectionsRenderer directions={props.directions} panel={ document.getElementById('dirBox') }/>}
                        
                    </GoogleMap>)
                }
                ) :
                compose(
                    withProps(mapProps),
                    withScriptjs,
                    withGoogleMap
                )((props) =>
                    <GoogleMap
                        defaultZoom={20}
                        defaultCenter={mapCenter}
                    >
                        <Marker position={mapCenter} />
                    </GoogleMap>
                );

        return (
            <div className="col-xs-12 text-center pgBody">
                <MyMapComponent /> 
                <div id="dirContainer" className="text-center">
                    <div id="dirBox">
                        
                    </div>
                    <button id="dirBtn" className="btn btn-info" onClick={this.getDirs}>Get Directions!</button>
                </div>
            </div>
        );
    }
}

export default Directions;