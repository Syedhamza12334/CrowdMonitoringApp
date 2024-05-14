import React, { useState, useRef, useEffect } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { StyleSheet, View, Image } from 'react-native';
import * as Location from 'expo-location';


const Maps = () => {
  const [lating, setLating] = useState({})

  const [carData, setCarData] = useState([
    { id: 1, coordinate: { latitude: 24.906061, longitude: 67.081661 }, image: require('../assets/bus5.jpg') },
    { id: 2, coordinate: { latitude: 24.8920, longitude: 67.0747 }, image: require('../assets/bus5.jpg') },
    { id: 3, coordinate: { latitude: 24.8961, longitude: 67.0814 }, image: require('../assets/bus5.jpg') },
    { id: 4, coordinate: { latitude: 24.8551, longitude: 67.2115 }, image: require('../assets/bus5.jpg') },
    { id: 5, coordinate: { latitude: 24.9389, longitude: 67.1237 }, image: require('../assets/bus5.jpg') },
    { id: 6, coordinate: { latitude: 24.9324, longitude: 67.1127 }, image: require('../assets/bus5.jpg') },
    { id: 7, coordinate: { latitude: 24.8598, longitude: 67.0700 }, image: require('../assets/bus5.jpg') },
  ]);


  const checkPermission = async () => {
    const hasPermission = await Location.requestForegroundPermissionsAsync();
    if (hasPermission.status === 'granted') {
      const permission = await askPermission();
      return permission
    }
    return true
  };

  const askPermission = async () => {
    const permission = await Location.requestForegroundPermissionsAsync()
    return permission.status === 'granted';
  };

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAync();
      setLating({ latitude: latitude, longitude: longitude })

    } catch (error) {
    }
  }

  const _map = useRef(1);
  useEffect(() => {
    checkPermission();
    getLocation()
      //console.log(lating)
      , []
  })
  return (
    <View style={styles.container}>
      <MapView
        ref={_map}
        style={styles.map}
        provider={PROVIDER_GOOGLE}

        showsUserLocation={true}
        followsUserLocation={true}
        rotateEnabled={true}
        zoomEnabled={true}
        toolbarEnabled={true}
      >

        {carData.map(car => (
          <Marker key={car.id} coordinate={car.coordinate}>
            <Image source={car.image} style={{ width: 50, height: 50 }} />
          </Marker>
        ))}

      </MapView>


    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default Maps