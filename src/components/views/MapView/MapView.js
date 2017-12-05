import React from 'react';
import styles from './MapView.css';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

class MapView extends React.Component {
  static propTypes = {

  }
  render = () => (
    <div className = {this.props.className}>
      <GoogleMap
        defaultZoom={18}
        defaultCenter={{ lat:  10.7510323, lng: 106.6617805 }}
      >
        <Marker position={{ lat:  10.7510323, lng: 106.6617805 }} />
      </GoogleMap>
    </div>
  )
}

MapView.defaultProps = {
  
  }
  
  
  export default withGoogleMap(MapView);
