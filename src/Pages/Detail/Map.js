import React, { Component } from 'react';
import { Map, GoogleApiWrapper,Marker,InfoWindow } from 'google-maps-react';
import './Map.scss';




export class MapContainer extends Component {


  state = {
    showingInfoWindow: false,  //Hides or the shows the infoWindow
    activeMarker: {},          //Shows the active marker upon click
    selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
  };


  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {


    const mapStyles = {
     
      width: '700px',
      height: '254px',
      
    };

    return (
      <Map
        google={this.props.google}
        zoom={16}
        style={mapStyles}
        initialCenter={{
         lat: 37.4012103,
         lng: 127.0950465
        }}
      >
      <Marker
          onClick={this.onMarkerClick}
          name={'경기도 성남시 분당구 삼평동 625 판교세븐밴처밸리 1단지 2동'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div className="map_on">
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      
      </Map>


    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyAl55hQTMOqFmMUifOgl2iqd1BEMU45vUM '
})(MapContainer);