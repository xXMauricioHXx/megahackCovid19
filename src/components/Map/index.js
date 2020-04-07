import React, { Component, Fragment } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { View } from 'react-native';
import Geocoder from 'react-native-geocoding';

import { getPixelSize } from '../../utils';

import Search from '../Search';
import Directions from '../Directions';

import {
  LocationBox,
  LocationText,
  LocationTimeBox,
  LocationTimeText,
  LocationTimeTextSmall,
} from './styles';

import markerImage from '../../assets/marker.png';
import restaurantMarkerImage from '../../assets/restaurant_marker.png';

Geocoder.init('AIzaSyAHejuKuhRUyhTZ6xbb8gwbqEqGeDNIyeg');

export default class Map extends Component {
  constructor() {
    super();
    this.state = {
      address: null,
      region: null,
      destination: null,
      duration: null,
    };
    this.mapView = null;
  }

  async componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        const response = await Geocoder.from({ latitude, longitude });
        const address = response.results[0].formatted_address;
        const location = address.substring(0, address.indexOf(','));

        this.setState({
          address: location,
          region: {
            latitude,
            longitude,
            latitudeDelta: 0.0143,
            longitudeDelta: 0.0134,
          },
        });
      },
      () => {},
      { timeout: 3000, enableHighAccuracy: true, maximumAge: 1000 },
    );
  }

  handleLocationSelected = (data, { geometry }) => {
    const {
      location: { lat: latitude, lng: longitude },
    } = geometry;

    this.setState({
      destination: {
        latitude,
        longitude,
        title: data.structured_formatting.main_text,
      },
    });
  };

  onDirectionReady = async ({ coordinates, duration }) => {
    await this.setState({ duration: Math.floor(duration) });
    await this.mapView.fitToCoordinates(coordinates, {
      edgePadding: {
        right: getPixelSize(50),
        left: getPixelSize(50),
        top: getPixelSize(50),
        bottom: getPixelSize(50),
      },
    });
  };

  onRestaurantMarkerPress = () => {
    this.props.navigation.navigate('Restaurant');
  };

  render() {
    const { region, destination, duration, address } = this.state;

    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          region={region || {}}
          showsUserLocation
          loadingEnabled
          ref={el => (this.mapView = el)}
        >
          <Marker
            coordinate={{ latitude: -28.894742, longitude: -49.481985 }}
            image={restaurantMarkerImage}
            onPress={this.onRestaurantMarkerPress}
          />
          {destination && (
            <Fragment>
              <Directions
                origin={region}
                destination={destination}
                onReady={this.onDirectionReady}
              />
              <Marker
                coordinate={destination}
                image={markerImage}
                anchor={{ x: 0.06, y: 0.4 }}
              >
                <LocationBox>
                  <LocationText>{destination.title}</LocationText>
                </LocationBox>
              </Marker>
              <Marker coordinate={region}>
                <LocationBox>
                  <LocationTimeBox>
                    <LocationTimeText>{duration}</LocationTimeText>
                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                  </LocationTimeBox>
                  <LocationText>{address}</LocationText>
                </LocationBox>
              </Marker>
            </Fragment>
          )}
        </MapView>
        <Search onLocationSelected={this.handleLocationSelected} />
      </View>
    );
  }
}
