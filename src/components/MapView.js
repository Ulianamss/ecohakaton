import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

let MapView;

if (Constants.appOwnership === 'expo') {
  MapView = props => (
    <View
      style={[
        {
          backgroundColor: 'lightblue',
          alignItems: 'center',
          justifyContent: 'center',
        },
        props.style,
      ]}>
      <Text>🗺 (Mapbox not available)</Text>
    </View>
  );
} else {
  const Mapbox = require('@react-native-mapbox-gl/maps').default;
  Mapbox.setAccessToken('pk.eyJ1Ijoic295YTY2NiIsImEiOiJja3BqaDVqa3EwMDc2MnFzM215Y25yMWtsIn0.BeCZ990g-u569Ra9xePvoQ');
  MapView = Mapbox.MapView;
}

export default MapView;