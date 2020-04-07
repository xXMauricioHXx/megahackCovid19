import React, { Component } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Platform } from 'react-native';

export default class Search extends Component {
  state = {
    searchedFocused: false,
  };

  render() {
    const { searchedFocused } = this.state;
    return (
      <GooglePlacesAutocomplete
        placeholder="Qual é o seu destino?"
        onPress={this.props.onLocationSelected}
        query={{
          key: 'AIzaSyAHejuKuhRUyhTZ6xbb8gwbqEqGeDNIyeg',
          language: 'pt',
        }}
        textInputProps={{
          onFocus: () => this.setState({ searchedFocused: true }),
          onBlur: () => this.setState({ searchedFocused: false }),
          autoCapitalize: 'none',
          autoCorrect: false,
        }}
        listViewDisplayed={searchedFocused}
        fetchDetails
        enablePoweredByContainer={false}
        styles={{
          container: {
            position: 'absolute',
            width: '100%',
            top: Platform.select({ ios: 40, android: 60 }),
          },
          textInputContainer: {
            flex: 1,
            backgroundColor: 'transparent',
            height: 54,
            marginHorizontal: 20,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          },
          textInput: {
            height: 54,
            margin: 0,
            color: '#5d5d5d',
            borderRadius: 100,
            paddingLeft: 30,
            paddingRight: 30,
            elevation: 5,
          },
          listView: {
            borderWidth: 1,
            borderColor: '#ddd',
            backgroundColor: '#fff',
            marginHorizontal: 20,
            marginTop: 10,
            elevation: 5,
          },
          row: {
            padding: 20,
            height: 60,
          },
        }}
      />
    );
  }
}
