import React, { useState,useEffect } from "react";
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
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Bbus = ({ navigation }) => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [passengerId, setPassengerId] = useState(0)
	const [counter, setCounter] = useState(0);

	const handleTracker = () => {
		navigation.navigate("Trackerb");
	};
	useEffect(() => {
		const interval = setInterval(() => {
		  // Update passenger ID with the new value every minute
		  setPassengerId((prevPassengerId) => prevPassengerId + 1);
		  setCounter((prevCounter) => prevCounter + 1);
		}, 20000); // Increase counter every minute (60000 milliseconds)
	
		return () => clearInterval(interval); // Cleanup interval on component unmount
	  }, [])

	return (
		<ScrollView>
			<View style={styles.container}>
				<Image
					source={require("../assets/bus3.jpg")}
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
						<Text>9:00 to 9:10</Text>
						<Text>Quaidabad</Text>
					</View>
					<View style={styles.inputText}>
						<Text>9:30 to 9:35</Text>
						<Text>FAST</Text>
					</View>
					</Pressable>
				</View>
				<View style={styles.routeContainer}>
				<Text style={styles.inputText}>Passengers id</Text>
          <Text style={styles.inputText}>{passengerId}</Text>
					
					<Text
						style={{
							borderBottomColor: "black",
							borderBottomWidth: StyleSheet.hairlineWidth,
						}}
					></Text>
					
				</View>
				
			</View>
		</ScrollView>
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

export default Bbus;
