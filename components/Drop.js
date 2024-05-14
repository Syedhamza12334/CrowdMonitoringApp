import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Alert,
	Pressable,
	TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Drop = ({ title0, title1, title2 }) => {
	const [toggle, setToggle] = useState(false);

	const [text, setText] = useState("");

	const onchange = (text) => {
		setText(text);
	};

	return (
		<Pressable onPress={() => setToggle((prev) => !prev)}>
			<View style={styles.dropView}>
				<Text style={styles.heading}>{title0}</Text>
				{toggle ? (
					<Icon name="arrow-up" size={20} color="#2ab6b1" />
				) : (
					<Icon name="arrow-down" size={20} color="#2ab6b1" />
				)}
			</View>
			<View>
				{toggle ? (
					<View style={styles.dropdown}>
						<Text style={styles.inputText}>{title1}</Text>
						<TextInput
							placeholder="Enter your Name ..."
							style={styles.input}
							onChangeText={onchange}
						/>
						<Text style={styles.inputText}>{title2}</Text>
						<TextInput
							placeholder="Enter your Email ..."
							style={styles.input}
							onChangeText={onchange}
						/>
					</View>
				) : null}
			</View>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 60,
		padding: 10,
		margin: 10,
		borderColor: "#eee",
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 18,
		borderColor: "#999",
		borderWidth: 1.5,
	},
	inputText: {
		fontSize: 20,
		textAlign: "left",
		marginLeft: 20,
		paddingTop: 10,
		paddingBottom: 10,
	},
	dropView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		backgroundColor: "#f8f8f8",
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
	},
	heading: {
		fontSize: 20,
	},
});

export default Drop;
