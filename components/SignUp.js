import React, { useState } from "react";
import {
	StyleSheet,
	View,
	ScrollView,
	Text,
	Alert,
	Pressable,
	TextInput,
	Button,
	
} from "react-native";
//import {message} from 'antd';
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from 'firebase/app';
import "firebase/auth";


export default function SignUpScreen({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: "",
        pwd2: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }


function SignUp  ()  {

	const { email, pwd, pwd2 } = values

        if (pwd == pwd2) {
            firebase.auth().createUserWithEmailAndPassword(email, pwd)
                .then(() => {
					//navigation.navigate("LoginScreen")
                })
                .catch((error) => {
                    alert(error.message)
                    // ..
                });
        } else {
            alert("Passwords are different!")
        }
		
	};

	
	return (
		<>
			<ScrollView>
				<View style={styles.dropView}>
					<Text style={styles.heading}>Sign-Up Screen</Text>
					<Icon name="paper-plane" size={40} color="white" />
				</View>
				<View style={styles.dropdown}>
					<Text style={styles.inputText}>Username</Text>
					<TextInput style={styles.input} onChangeText={text => handleChange(text, "email")} placeholder="Enter your Email"  />
					<Text style={styles.inputText}> Password</Text>
					
					
					<TextInput
						keyboardType="Number"
						style={styles.input}
						onChangeText={text => handleChange(text, "pwd")}
						placeholder="Enter your Password" 
						secureTextEntry={true}
					/>
					<TextInput
					keyboardType="Number"
					style={styles.input} 
					onChangeText={text => handleChange(text, "pwd2")}
					placeholder="Confirm Password" secureTextEntry={true}/>
				</View>
				<View style={styles.btnBackground}>
					<Text style={styles.inputText}>Agreed to Terms and Services</Text>
					<Pressable style={styles.btn} onPress={() => SignUp ()}>
						<Text style={styles.btnText}>Sign Up</Text>
					</Pressable>
					
					
				</View>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 60,
		padding: 10,
		margin: 10,
		borderColor: "white",
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 18,
		minWidth: 300,
	},
	inputText: {
		fontSize: 20,
		textAlign: "center",
		padding: 25,
		color: "black",
		backgroundColor: "pink",
	},
	btnBackground: {
		backgroundColor: "#2ab6b1",
		color: "#333",
		backgroundColor: "pink",
	},
	dropView: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 15,
		backgroundColor: "pink",
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
	},
	dropdown: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "baseline",
		padding: 15,
		backgroundColor: "pink",
		borderBottomColor: "#eee",
		borderBottomWidth: 1,
	},
	heading: {
		fontSize: 20,
		color: "black",
	},
	btn: {
		backgroundColor: "black",
		padding: 10,
		margin: 10,
		borderRadius: 10,
	},
	btnText: {
		fontSize: 20,
		color: "white",
		textAlign: "center",
	},
	
});

//export default SignUpScreen;
