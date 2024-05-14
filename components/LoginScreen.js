import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Alert,
	Image,
	Pressable,
	TextInput,
	Button,
	
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import firebase from 'firebase/app';
import "firebase/auth";


export default function Login({ navigation }) {

    const [values, setValues] = useState({
        email: "",
        pwd: ""
    })

    function handleChange(text, eventName) {
        setValues(prev => {
            return {
                ...prev,
                [eventName]: text
            }
        })
    }



function LoginScreen  () {
	const { email, pwd } = values

        firebase.auth().signInWithEmailAndPassword(email, pwd)
            .then(() => {
				navigation.navigate("FrontPage")
            })
            .catch((error) => {
                alert(error.message)
                // ..
            });
	
			
	};

	return (
		<>
		
			<View style={styles.container}>
				<Image
					source={require("../assets/bus1.jpg")}
					style={{
						width: 100,
						height: 100,
						resizeMode: "contain",
						borderRadius: 50,
						marginLeft: "35%",
					}}
				/>

				<Text style={styles.heading}>PEOPLES BUS APP</Text>
				<Text style={styles.inputText} > Username</Text>
				<TextInput  style={styles.input} onChangeText={text => handleChange(text, "email")}  placeholder="Enter Your Email" />
				<Text style={styles.inputText}> Password</Text>
				<TextInput style={styles.input} onChangeText={text => handleChange(text, "pwd")} secureTextEntry={true} 
				placeholder="Enter Your Password"  />
				<Pressable style={styles.btn} onPress={() => LoginScreen ()}>
					<Text style={styles.btnText}>Login</Text>
				</Pressable>

				<View style={styles.signUp}>
				
					 <Text style={styles.signUp}>Don't have an account yet ? </Text> 
					<Pressable style={styles.btn} onPress={() => navigation.navigate("SignUp")} >
						<Text style={styles.btnText}>Sign Up</Text>
				</Pressable>
				</View>
			</View>
		</>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		padding: 10,
		margin: 10,
		borderColor: "black",
		borderWidth: 1,
		borderRadius: 10,
		fontSize: 15,
		color: "black",
	},
	inputText: {
		fontSize: 22,
		textAlign: "left",
		padding: 15,
		color: "black",
	},
	container: {
		// justifyContent: "center",
		// alignItems: "center",
		flexDirection: "column",
		padding: 10,
		backgroundColor: "pink",
		color: "#fff",
		borderColor: "white",
		borderBottomWidth: 1.5,
		width: "100%",
		height: "100%",
	},
	signUp:{

		color: "red",
	},
	heading: {
		color: "black",
		fontSize: 30,
		textAlign: "center",
		fontWeight: "bold",
		marginBottom: 10,
		marginTop: 10,
	},
	btn: {
		backgroundColor: "black",
		padding: 10,
		margin: 10,
		borderRadius: 10,
		
	},
	btnText: {
		fontSize: 20,
		textAlign: "center",
		color: "white",
	},
	checkbox: {
		margin: 8,
	},
});

//export default LoginScreen;






