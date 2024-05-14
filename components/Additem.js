import React, { useState } from "react";
import {
	StyleSheet,
	TextInput,
	Text,
	View,
	TouchableOpacity,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AddItem = ({ addItem }) => {
	const [text, setText] = useState("");

	const onchange = (text) => {
		setText(text);
	};

	return (
		<View>
			<TextInput
				placeholder="Enter text ..."
				style={styles.input}
				onChangeText={onchange}
			/>
			<TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
				<Text style={styles.btnText}>
					<Icon name="plus" size={20} /> Add Item
				</Text>
			</TouchableOpacity>
		</View>
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
	},
	btn: {
		backgroundColor: "#f8f8f8",
		padding: 10,
		margin: 10,
		borderRadius: 10,
	},
	btnText: {
		fontSize: 20,
		textAlign: "center",
	},
});

export default AddItem;
