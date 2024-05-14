import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import MapView, { Marker, Polyline, PROVIDER_GOOGLE } from 'react-native-maps';
//import firebase from 'firebase';
import firebase from 'firebase/app';
import * as Location from 'expo-location';
import { getDatabase } from "firebase/database";
import 'firebase/database';

{/*const firebaseConfig = {
    // add Firebase config here

    apiKey: "AIzaSyAtbVTxaQwZSsPrZ4mESMArEB2YEnn3DgI",
    authDomain: "gps-tracker-34e0e.firebaseapp.com",
    databaseURL: "https://gps-tracker-34e0e-default-rtdb.firebaseio.com",
    projectId: "gps-tracker-34e0e",
    storageBucket: "gps-tracker-34e0e.appspot.com",
    messagingSenderId: "143634262339",
    appId: "1:143634262339:web:d11120063d63bc6a26a7f6"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  else {
    firebase.app();
  }

const database = firebase.database();*/}
const Trackerc = () => {

    const [location, setLocation] = useState({
        //latitude: 24.927222333333333,
        //longitude: 67.03586216666666,
        latitude: 24.8569,
        longitude: 67.2643,
       
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [coords, setCoords] = useState([]);
  const [destination, setDestination] = useState({
    latitude: 24.8933,
    longitude: 67.0882,
  });

    //useEffect(() => {


    //firebase.initializeApp(firebaseConfig);

    //var dbRef = firebase.database();


    {/*const dbRef = firebase.database().ref();
        dbRef.on('value', (snapshot) => {
            const gps = snapshot.val();
            setLocation({
                latitude: gps.LAT,
                longitude: gps.LNG,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            });
            setCoords([...coords, { latitude: gps.LAT, longitude: gps.LNG }]);
        });
    }, []);*/}
    useEffect(() => {
        ///const dbRef = firebase.database().ref('gps-tracker');
       // const dbRef = firebase.database().ref('gps');

    
        const handleSnapshot = (snapshot) => {
          const gps = snapshot.val();
          if (gps) {
            const { latitude, longitude } = gps;
    setLocation((prevLocation) => ({
      ...prevLocation,
      latitude,
      longitude,
    }));
    const newCoords = [
        { latitude, longitude },
        { latitude: location.latitude, longitude: location.longitude },
      ];
      setCoords(newCoords);
          }
        };
    
        
    
        // Clean up the listener when component unmounts
       // return () => dbRef.off('value', handleSnapshot);
      }, []);
    
    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={location}
                provider={PROVIDER_GOOGLE}

                showsUserLocation={true}
                followsUserLocation={true}
                rotateEnabled={true}
                zoomEnabled={true}
                toolbarEnabled={true}

            >
                <Marker coordinate={location} />
        <Polyline coordinates={coords} strokeWidth={3} strokeColor="red" />
        <Polyline
          coordinates={[
            { latitude: location.latitude, longitude: location.longitude },
            destination,
          ]}
          strokeWidth={3}
          strokeColor="green"
        />
        <Marker coordinate={destination} />
            </MapView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default Trackerc;



