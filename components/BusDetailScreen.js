import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	View,
	Text,
	Alert,
	Image,
	Pressable,
	TextInput,
	Button,
	ScrollView,
	FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


//ferch api http://127.0.0.1:5000/image_detect

const BusDetailScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [tracking_objects, setTrackingObjects] = useState([]);
	const [passenger_ids, setPassengerIds] = useState([]);
	const handleTracker = () => {
		navigation.navigate("Tracker");
	};
  
	useEffect(() => {
	  fetch("http://192.168.0.102:5000/image_detect")
		.then((response) => response.json())
		.then((data) => {
		  console.log(data);
		  const updatedTrackingObjects = {};
		  let count = 1;
		  for (const key in data.tracking_objects) {
			updatedTrackingObjects[count +2 ] = data.tracking_objects[key];
			//updatedTrackingObjects[key] = [count, ...data.tracking_objects[key]];
			count++;
		  }
		  setTrackingObjects(updatedTrackingObjects );
		})
		.catch((error) => {
		  console.log("Error:", error);
		});
	}, []);
  
	useEffect(() => {
	  if (Object.keys(tracking_objects).length > 0) {
		const ids = Array.from(
		  { length: Object.keys(tracking_objects).length },
		  (_, index) => index
		);
		setPassengerIds(ids);
	  }
	}, [tracking_objects]);
  
	return (
	  <View style={styles.container}>
		<Image
		  source={require("../assets/bus1.jpg")}
		  style={{
			width: 200,
			height: 200,
			resizeMode: "contain",
			borderRadius: 100,
			marginLeft: "25%",
		  }}
		/>
		<Text style={styles.heading}>
		  Bus Details <Icon name="bus" size={25} color="white" />
		</Text>
		<View style={styles.routeContainer}>
		<Pressable onPress={handleTracker}>
		  <Text style={styles.route}>Route: </Text>
		  <View style={styles.inputText}>
			<Text>7:00 to 7:10 </Text>
			<Text>Quaidabad</Text>
		  </View>
		  <View style={styles.inputText}>
			<Text>7:30: to 7:35</Text>
			<Text>FAST</Text>
		  </View>
		  </Pressable>
		</View>
  
		<View style={styles.routeContainer}>
		  {passenger_ids.length > 0 ? (
			 <Text style={styles.inputText}>Passanger Id: {JSON.stringify(tracking_objects)}</Text>
			//passenger_ids.map((object, index) => (
			  //<View style={styles.inputText} key={index}>
				//<Text>Passenger ID: {object}</Text>
			  //</View>
			//))
		  ) : (
			<View style={styles.inputText}>
			  <Text>No passengers or Same as Before</Text>
			</View>
		  )}
		</View>
	  </View>
	);
  };
const styles = StyleSheet.create({
	routeContainer: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#fff",
		padding: 5,
		borderRadius: 10,
		marginTop: 30,
	},
	inputText: {
		fontSize: 16,
		fontWeight: "bold",
		padding: 5,
		color: "#333",
		display: "flex",
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "space-between",
		marginHorizontal: 55,
	},
	route: {
		fontSize: 18,
		fontWeight: "bold",
		textAlign: "left",
		padding: 5,
		color: "#333",
		borderColor: "#eee",
		borderWidth: 1.5,
	},
	container: {
		// justifyContent: "center",
		// alignItems: "center",
		flexDirection: "column",
		padding: 10,
		backgroundColor: "#2ab6b1",
		color: "#fff",
		borderColor: "white",
		borderBottomWidth: 1.5,
		width: "100%",
		height: "100%",
	},
	heading: {
		color: "white",
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 10,
		marginTop: 10,
	},
	booking: {
		textAlign: "center",
		fontSize: 20,
		marginTop: 15,
		marginBottom: 15,
	},
	booking2: {
		alignSelf: "center",
		textAlignVertical: "center",
		fontSize: 20,
		marginTop: 15,
		marginBottom: 15,
	},
});

export default BusDetailScreen;
