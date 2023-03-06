import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken("sk.eyJ1Ijoic2FtaXJkZXYiLCJhIjoiY2xldzhhdmw5MGF4czN4czN2bXdjdjd4ciJ9.Iw2WNk0OAaBPcj4E_ai0fA");

export const MapBox = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});