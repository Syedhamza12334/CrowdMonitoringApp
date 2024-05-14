import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
	return (
		<View style={styles.header}>
			<Text style={styles.text}>{title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		height: 60,
		padding: 15,
		backgroundColor: "#2ab6b1",
	},
	text: {
		color: "#fff",
		fontSize: 20,
		textAlign: "center",
	},
});

export default Header;
