import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Alert,
	Image,
	FlatList,
	Pressable,
	ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

import Header from "./Header";
import Drop from "./Drop";
// import ListItem from "./ListItem";
// import AddItem from "./AddItem";

const HomeScreen = ({ navigation }) => {
	const [items, setItems] = useState([
		{ id: 1, text: "Milk" },
		{ id: 2, text: "Eggs" },
		{ id: 3, text: "Bread" },
		{ id: 4, text: "Juice" },
	]);

	const deleteItem = (id) => {
		setItems((prevItems) => {
			return prevItems.filter((item) => item.id != id);
		});
	};

	const addItem = (text) => {
		if (!text) {
			Alert.alert("Error", "Enter an item", [{ text: "OK" }]);
		} else {
			setItems((prevItems) => {
				return [{ id: Math.random().toString(), text }, ...prevItems];
			});
		}
	};

	const handleBusDetails = () => {
		navigation.navigate("BusDetailScreen");
	};
	const handleBBusDetails = () => {
		navigation.navigate("Bbus");
	};
	const handleCBusDetails = () => {
		navigation.navigate("Cbus");
	};
	const handleABusDetails = () => {
		navigation.navigate("Abus");
	};

	const Boxes = () => {
		return (
			<View style={styles.boxContainer}>
				<View style={styles.box}>
					<Pressable onPress={handleBusDetails}>
						<View style={styles.inner}>
							<View style={styles.innerRow}>
								<Icon name="compass" size={20} color="green" />
								<Icon name="bookmark" size={20} color="#2ab6b1" />
							</View>
							<View style={styles.innerRow}>
								<Image
									source={require("../assets/bus1.jpg")}
									style={styles.image}
								/>
							</View>
							<View style={styles.innerRow}>
								<Text style={styles.textTime}>
									7:00 to 7:10 am {"\n"} PassengersCount = 10
								</Text>
								<Icon name="plus" size={20} color="green" />
							</View>
						</View>
					</Pressable>
				</View>

				<View style={styles.box}>
					<Pressable onPress={handleABusDetails}>
						<View style={styles.inner}>
							<View style={styles.innerRow}>
								<Icon name="compass" size={20} color="green" />
								<Icon name="bookmark" size={20} color="#2ab6b1" />
							</View>
							<View style={styles.innerRow}>
								<Image
									source={require("../assets/bus2.jpg")}
									style={styles.image}
								/>
							</View>
							<View style={styles.innerRow}>
								<Text style={styles.textTime}>
									8:00 to 8:10 am {"\n"}PassengersCount = 12
								</Text>
								<Icon name="plus" size={20} color="green" />
							</View>
						</View>
					</Pressable>
				</View>

				<View style={styles.box}>
					<Pressable onPress={handleBBusDetails}>
						<View style={styles.inner}>
							<View style={styles.innerRow}>
								<Icon name="compass" size={20} color="green" />
								<Icon name="bookmark" size={20} color="#2ab6b1" />
							</View>
							<View style={styles.innerRow}>
								<Image
									source={require("../assets/bus3.jpg")}
									style={styles.image}
								/>
							</View>
							<View style={styles.innerRow}>
								<Text style={styles.textTime}>
									9:00 to 9:10 am {"\n"}PassengersCount = 50
								</Text>
								<Icon name="plus" size={20} color="green" />
							</View>
						</View>
					</Pressable>
				</View>

				<View style={styles.box}>
					<Pressable onPress={handleCBusDetails}>
						<View style={styles.inner}>
							<View style={styles.innerRow}>
								<Icon name="compass" size={20} color="green" />
								<Icon name="bookmark" size={20} color="#2ab6b1" />
							</View>
							<View style={styles.innerRow}>
								<Image
									source={require("../assets/bus4.jpg")}
									style={styles.image}
								/>
							</View>
							<View style={styles.innerRow}>
								<Text style={styles.textTime}>
									10:00 to 10:10 am {"\n"}PassengersCount = 35
								</Text>
								<Icon name="plus" size={20} color="green" />
							</View>
						</View>
					</Pressable>
				</View>
			</View>
		);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<ScrollView>
					<Header title={"Peoples Bus App"} />
					{/*<Drop title0={"Filter"} title1={"Area"} title2={"Bus Stop"} />*/}
					<Text style={styles.text}>Choose your rides </Text>
				</ScrollView>
				<ScrollView>
					<Boxes />
				</ScrollView>
			</View>
		</ScrollView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// backgroundColor: "#ff8065",
	},
	boxContainer: {
		width: "100%",
		height: "75%",
		padding: 5,
		flexDirection: "row",
		flexWrap: "wrap",
		// marginBottom: 100,
	},
	box: {
		width: "50%",
		// height: "75%",
		padding: 5,
	},
	inner: {
		flex: 1,
		// alignItems: "center",
		// justifyContent: "center",
		borderRadius: 20,
		borderColor: "#999",
		borderWidth: 1.5,
	},
	innerRow: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		flexDirection: "row",
		paddingTop: 10,
		width: "100%",
	},
	text: {
		fontSize: 20,
		color: "#222",
		margin: 20,
	},
	textTime: {
		fontSize: 10,
		color: "#222",
		marginBottom: 5,
		textAlign:'center'
	},
	image: {
		width: 100,
		height: 100,
		resizeMode: "contain",
		borderRadius: 50,
	},
});

export default HomeScreen;
