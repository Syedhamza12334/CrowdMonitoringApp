import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React, { useState } from 'react';
import LoginScreen from "./components/LoginScreen";
import SignUp from "./components/SignUp";
import HomeScreen from "./components/HomeScreen";
import BusDetailScreen from "./components/BusDetailScreen";
import Maps from "./components/Maps";
import Tracker from "./components/Tracker";
import firebase from 'firebase/app';
import "firebase/auth";
//import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Bbus from "./components/Bbus";
import Abus from "./components/Abus";
import Cbus from "./components/Cbus";
import FrontPage from "./components/FrontPage";
import TrackerA from "./components/TrackerA";
import Trackerb from "./components/Trackerb";
import Trackerc from "./components/Trackerc";



export default function App() {
	const [isLoggedIn, setIsLoggedIn] = useState(false)

	const firebaseConfig = {
		apiKey: "AIzaSyDiI28V2x6xqcCw0xUMHud8eX9VVOfm1Mg",
		authDomain: "new-project-60c95.firebaseapp.com",
		projectId: "new-project-60c95",
		storageBucket: "new-project-60c95.appspot.com",
		messagingSenderId: "916213000216",
		appId: "1:916213000216:web:e0421ad40f28cb6a077b6d"
	  };

//Checking if firebase has been initialized
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }

 firebase.auth().onAuthStateChanged((user) => {
    if (user != null) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false);
    }
  });
	
	const Stack = createNativeStackNavigator();
	
	
	return (
		
		<NavigationContainer>
			{isLoggedIn ?<Stack.Navigator>
				<Stack.Screen name="Welcome Back" component={FrontPage} />
				<Stack.Screen name="HomeScreen" component={HomeScreen} />
				<Stack.Screen name="Maps" component={Maps} /> 
				<Stack.Screen name="Tracker" component={Tracker} />
				<Stack.Screen name="TrackerA" component={TrackerA} /> 
				<Stack.Screen name="Trackerb" component={Trackerb} /> 
				<Stack.Screen name="Trackerc" component={Trackerc} /> 

			

			 
				<Stack.Screen name="BusDetailScreen" component={BusDetailScreen} />
                
				<Stack.Screen name="Abus" component={Abus} />
				<Stack.Screen name="Bbus" component={Bbus} />
				<Stack.Screen name="Cbus" component={Cbus} />
				
				</Stack.Navigator> :
				<Stack.Navigator>
				 
				 
				<Stack.Screen name="LoginScreen" component={LoginScreen} />
				<Stack.Screen name="SignUp" component={SignUp} />
				
				
				
			</Stack.Navigator>}
		</NavigationContainer>
		
	);
	}



// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		backgroundColor: "#fff",
// 		alignItems: "center",
// 		justifyContent: "center",
// 	},
// });

